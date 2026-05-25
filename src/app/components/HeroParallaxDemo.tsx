"use client";

import React from "react";
import { HeroParallax } from "./ui/hero-parallax";
import image1 from "../../imports/image-1.png";
import image2 from "../../imports/image-2.png";
import image3 from "../../imports/image-3.png";
import image4 from "../../imports/image-4.png";
import image5 from "../../imports/image-5.png";
import image6 from "../../imports/image.png";

export function HeroParallaxDemo() {
  return (
    <section id="featured-lashes" className="w-full bg-white">
      <HeroParallax products={products} />
    </section>
  );
}

export const products = [
  {
    title: "Soft volume set",
    link: "#gallery",
    thumbnail: image1,
  },
  {
    title: "Precision close-up",
    link: "#gallery",
    thumbnail: image2,
  },
  {
    title: "Classic lash detail",
    link: "#gallery",
    thumbnail: image3,
  },
  {
    title: "Full lash line finish",
    link: "#gallery",
    thumbnail: image4,
  },
  {
    title: "Defined brow frame",
    link: "#gallery",
    thumbnail: image5,
  },
  {
    title: "Natural glam look",
    link: "#gallery",
    thumbnail: image6,
  },
  {
    title: "Soft volume set 2",
    link: "#gallery",
    thumbnail: image1,
  },
  {
    title: "Precision close-up 2",
    link: "#gallery",
    thumbnail: image2,
  },
  {
    title: "Classic lash detail 2",
    link: "#gallery",
    thumbnail: image3,
  },
  {
    title: "Full lash line finish 2",
    link: "#gallery",
    thumbnail: image4,
  },
  {
    title: "Defined brow frame 2",
    link: "#gallery",
    thumbnail: image5,
  },
  {
    title: "Natural glam look 2",
    link: "#gallery",
    thumbnail: image6,
  },
  {
    title: "Soft volume set 3",
    link: "#gallery",
    thumbnail: image1,
  },
  {
    title: "Precision close-up 3",
    link: "#gallery",
    thumbnail: image2,
  },
  {
    title: "Classic lash detail 3",
    link: "#gallery",
    thumbnail: image3,
  },
];