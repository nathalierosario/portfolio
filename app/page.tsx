"use client";
import Image from "next/image";
import Hero from "@/app/ui/hero";
import MacWindow from "./ui/mac-window";

export default function Home() {
  return (
    <div className="flex">
      <section id="/">
        <Hero />
      </section>

      <section id="about">
        <h1>about</h1>
      </section>

      <section id="projects">
        <h1>projects</h1>
      </section>
    </div>
  );
}
