"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"; // ✅ This import is required

export default function PlayerProfileModal({ player, isOpen, onClose }) {
  if (!player) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle>{player.name} Profile</DialogTitle>
          <DialogDescription>{player.description}</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col items-center space-y-4">
          <Avatar className="w-32 h-32">
            <AvatarImage src={player.avatar} alt={player.name} />
            <AvatarFallback>{player.name[0]}</AvatarFallback>
          </Avatar>

          <div className="grid grid-cols-2 gap-4 text-left mt-4">
            <div><strong>Team:</strong> {player.profile.team}</div>
            <div><strong>National Team:</strong> {player.profile.nationalTeam}</div>
            <div><strong>Club Goals:</strong> {player.profile.goalsClub}</div>
            <div><strong>Club Games:</strong> {player.profile.gamesClub}</div>
            <div><strong>National Goals:</strong> {player.profile.goalsNational}</div>
            <div><strong>National Games:</strong> {player.profile.gamesNational}</div>
            <div><strong>Penalties:</strong> {player.profile.penalties}</div>
          </div>

          <Button className="mt-4" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
