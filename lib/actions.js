"use server";

import { redirect } from "next/navigation";
import { savePlayer } from "./players";

export async function sharePlayer(formData) {
  const player = {
    title: formData.get("title"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
    image: formData.get("image"), // File object
    creator: formData.get("name"),
    creator_email: formData.get("email"),
  };

  await savePlayer(player);
  redirect("/foodballs");
}
