"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ImageSlideshow from "@/components/player_item/Image_slideShow";
import Link from "next/link";

import classes from "./page.module.css"

const players = [
  {
    name: "Cristiano Ronaldo",
    avatar: "/images/ronaldo1.jpg",
    skills: { speed: 95, shooting: 98, passing: 85 },
    description: "A football icon known for speed, skill, and record-breaking goal-scoring feats worldwide.",
  },
  {
    name: "Lionel Messi",
    avatar: "/images/messi1.jpg",
    skills: { speed: 90, shooting: 95, passing: 92 },
    description: "Argentinian football genius, renowned for dribbling, passing, and goal-scoring.",
  },
  {
    name: "Kylian Mbappé",
    avatar: "/images/mbappa1.jpg",
    skills: { speed: 97, shooting: 90, passing: 84 },
    description: "French star known for explosive pace, finishing, and youth dominance.",
  },
];

export default function Dashboard() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-10 space-y-16">
      
      {/* Image Gallery / Slideshow */}
      <section className="flex flex-col md:flex-row items-center justify-between mt-6">
  {/* Left Side - Slideshow */}
  <div className="w-full md:w-1/2 md:pr-4">
    <ImageSlideshow />
  </div>

  {/* Right Side - Text & CTA */}
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
                  <AvatarImage src={player.avatar} alt={player.name} />
                  <AvatarFallback>{player.name[0]}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl">{player.name}</CardTitle>
                <CardDescription className="text-center px-4">
                  {player.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <Tabs defaultValue="skills" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="profile">Profile</TabsTrigger>
                   
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

                  <TabsContent value="profile">
                    <p>{player.description}</p>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
