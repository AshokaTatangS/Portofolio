"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Carousel, Card } from "./apple-cards-carousel";
import SparklesText from "./SparkleText";

export default function AppleCardsCarouselDemo() {
  // State untuk gambar yang dipilih
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Membuat card dari data
  const cards = data.map((card, index) => (
    <Card
      key={index}
      card={card}
      index={index}
      onClick={() => setSelectedImage(card.src)} // Set gambar yang dipilih
    />
  ));

  return (
    <div className="w-full h-full py-20">
      {/* Gantikan teks "Experience" dengan SparklesText */}
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        <SparklesText text="Experience" className="inline-block" />
      </h2>

      {/* Carousel */}
      <Carousel items={cards} />

      {/* Menampilkan gambar jika ada yang dipilih */}
      {selectedImage && (
        <div className="mt-8 text-center">
          <h3 className="text-2xl font-semibold">Selected Image</h3>
          <Image
            src={selectedImage}
            alt="Selected Image"
            width={500}
            height={500}
            className="mx-auto object-contain mt-4"
          />
        </div>
      )}
    </div>
  );
}

const data = [
  {
    title: "Informatic Festival",
    src: "/INFEST.png",
  },
  {
    title: "Practical Assistant 2024",
    src: "/Serti.jpeg",
  },
  {
    title: "Informatic Festival",
    src: "/INFEST.png",
  },
  {
    title: "Practical Assistant 2024",
    src: "/Serti.jpeg",
  },
  {
    title: "Informatic Festival",
    src: "/INFEST.png",
  },
  {
    title: "Practical Assistant 2024",
    src: "/Serti.jpeg",
  },
];
