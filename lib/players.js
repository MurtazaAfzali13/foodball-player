import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("players.db");

export function getPlayers() {
  return db.prepare("SELECT * FROM players").all();
}

export function getPlayer(slug) {
  return db.prepare("SELECT * FROM players WHERE slug = ?").get(slug);
}

export async function savePlayer(player) {
  // Generate slug
  player.slug = slugify(player.title, { lower: true });

  // Sanitize instructions
  player.instructions = xss(player.instructions);

  // ✅ Validate image
  if (!player.image || typeof player.image.arrayBuffer !== "function") {
    throw new Error("No valid image file uploaded!");
  }

  // Get file extension safely
  const originalName = player.image.name || "upload.jpg";
  const extension = originalName.split(".").pop();
  const fileName = `${player.slug}.${extension}`;

  // Convert the uploaded file to a buffer and save it
  const bufferedImage = Buffer.from(await player.image.arrayBuffer());
  const imagePath = `public/images/${fileName}`;
  await fs.promises.writeFile(imagePath, bufferedImage);

  // Save relative path in DB
  player.image = `/images/${fileName}`;

  // Insert into DB
  db.prepare(
    `
    INSERT INTO players (
      title,
      summary,
      instructions,
      creator,
      creator_email,
      image,
      slug
    ) VALUES (
      @title,
      @summary,
      @instructions,
      @creator,
      @creator_email,
      @image,
      @slug
    )
  `
  ).run(player);
}
