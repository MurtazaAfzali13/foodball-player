"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import Link from "next/link";

import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ImageSlideshow from "@/components/player_item/Image_slideShow";
import { getAllPlayers } from "@/data/playerskill";
import classes from "./page.module.css";
import Image from "@/components/Image";

export default function Dashboard() {
  const players = getAllPlayers();

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [showImage,setShowImage]=useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (player) => {
    setSelectedPlayer(player);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPlayer(null);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-16 relative">
      {/* Image Gallery / Slideshow */}
      <section className="flex flex-col md:flex-row items-center justify-between mt-6">
        <div className="w-full md:w-1/2 md:pr-4">
          <ImageSlideshow />
        </div>

        <div className="w-full md:w-1/2 md:pl-4 mt-4 md:mt-0">
          <div className={classes.hero}>
            <h1 className="text-xl md:text-3xl font-bold">
              NextLevel Football for NextLevel Fans
            </h1>
            <p className="mt-2 text-gray-600">
              Celebrate the game. Relive the glory. Know your legends.
            </p>
          </div>
          <div className={`${classes.cta} mt-4 flex flex-col sm:flex-row gap-2`}>
            <Link href="/community" className="btn-primary">
              Join the Fan Community
            </Link>
            <Link href="/foodballs" className="btn-secondary">
              Explore Players
            </Link>
          </div>
        </div>
      </section>

      {/* Player Abilities */}
      <section>
        <h2 className="text-4xl font-bold text-center text-yellow-400 mb-10">
          Player Abilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {players.map((player, idx) => (
            <Card key={idx} className="bg-gradient-to-br from-green-500 to-yellow-400 text-white shadow-2xl">
              <CardHeader className="flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4">
                <div onClick={() => setSelectedImage(player.avatar)}>
  <AvatarImage src={player.avatar} alt={player.name} />
</div>
                  <AvatarFallback>{player.name[0]}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl">{player.name}</CardTitle>
                <CardDescription className="text-center px-4">
                  {player.description}
                </CardDescription>
              </CardHeader>
              {selectedImage && (
  <Image image={selectedImage} showImage={true} setShowImage={() => setSelectedImage(null)} />
)}
              {/* <Image image={image} showImage={showImage} setShowImage={setShowImage}/> */}
              <CardContent className="space-y-4">
                <Tabs defaultValue="skills" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <button
                      className="tabs-trigger text-center"
                      onClick={() => openModal(player)}
                    >
                      Profile
                    </button>
                  </TabsList>

                  <TabsContent value="skills" className="space-y-4">
                    {Object.entries(player.skills).map(([skill, value]) => (
                      <div key={skill}>
                        <div className="flex justify-between mb-1">
                          <span className="capitalize">{skill}</span>
                          <span>{value}%</span>
                        </div>
                        <Progress value={value} className="h-3 rounded-full" />
                      </div>
                    ))}
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pop-up Modal */}
      {modalOpen && selectedPlayer && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-lg w-full relative shadow-2xl">
            <button
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={closeModal}
            >
              ×
            </button>

            <div className="flex flex-col items-center space-y-4">
              <Avatar className="w-32 h-32">
                <AvatarImage src={selectedPlayer.avatar} alt={selectedPlayer.name} />
                <AvatarFallback>{selectedPlayer.name[0]}</AvatarFallback>
              </Avatar>

              <h3 className="text-2xl font-bold">{selectedPlayer.name}</h3>
              <p className="text-center">{selectedPlayer.description}</p>

              <div className="grid grid-cols-2 gap-4 text-left mt-4">
                <div><strong>Team:</strong> {selectedPlayer.profile.team}</div>
                <div><strong>National Team:</strong> {selectedPlayer.profile.nationalTeam}</div>
                <div><strong>Club Goals:</strong> {selectedPlayer.profile.goalsClub}</div>
                <div><strong>Club Games:</strong> {selectedPlayer.profile.gamesClub}</div>
                <div><strong>National Goals:</strong> {selectedPlayer.profile.goalsNational}</div>
                <div><strong>National Games:</strong> {selectedPlayer.profile.gamesNational}</div>
                <div><strong>Penalties:</strong> {selectedPlayer.profile.penalties}</div>
                <div><strong>Ballon d&apos;Or:</strong> {selectedPlayer.profile.ballonDor}</div>

                <div><strong>Golden Boot:</strong> {selectedPlayer.profile.goldenBoot}</div>
                <div><strong>Club Titles:</strong> {selectedPlayer.profile.clubTitles}</div>
                <div><strong>National Titles:</strong> {selectedPlayer.profile.nationalTitles}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
