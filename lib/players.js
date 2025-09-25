import fs from "fs";
import path from "path";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

function resolveDbPath(fileName) {
  const isVercel = !!process.env.VERCEL;
  if (!isVercel) return fileName;

  const tmpDir = "/tmp";
  const tmpPath = path.join(tmpDir, fileName);

  try {
    if (!fs.existsSync(tmpPath)) {
      const sourcePath = path.join(process.cwd(), fileName);
      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, tmpPath);
      } else if (!fs.existsSync(tmpDir)) {
        fs.mkdirSync(tmpDir, { recursive: true });
      }
    }
  } catch (_) {
    // ignore copy errors; DB may be created if missing
  }

  return tmpPath;
}

const db = sql(resolveDbPath("players.db"));

export function getPlayers() {
  return db.prepare("SELECT * FROM players").all();
}

export function getPlayer(slug) {
  return db.prepare("SELECT * FROM players WHERE slug = ?").get(slug);
}

export async function savePlayer(player) {
  player.slug = slugify(player.title, { lower: true });
  player.instructions = xss(player.instructions);

  if (!player.image || typeof player.image.arrayBuffer !== "function") {
    throw new Error("No valid image file uploaded!");
  }

  const originalName = player.image.name || "upload.jpg";
  const extension = originalName.split(".").pop();
  const fileName = `${player.slug}.${extension}`;

  const bufferedImage = Buffer.from(await player.image.arrayBuffer());
  const isVercel = !!process.env.VERCEL;
  if (isVercel) {
    const tmpImagePath = path.join("/tmp", fileName);
    await fs.promises.writeFile(tmpImagePath, bufferedImage);
    player.image = `/api/images/${fileName}`;
  } else {
    const imagePath = `public/images/${fileName}`;
    await fs.promises.writeFile(imagePath, bufferedImage);
    player.image = `/images/${fileName}`;
  }

  db.prepare(`
    INSERT INTO players (
      title, summary, instructions, creator, creator_email, image, slug
    ) VALUES (
      @title, @summary, @instructions, @creator, @creator_email, @image, @slug
    )
  `).run(player);
}

