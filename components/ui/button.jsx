"use client";
import { Button } from "@/components/ui/button";

export default function CloseButton({ onClick }) {
  return (
    <Button
      className="mt-4 bg-red-500 hover:bg-red-600 text-white"
      onClick={onClick}
    >
      Close
    </Button>
  );
}
