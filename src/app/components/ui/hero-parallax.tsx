"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="relative flex min-h-[260vh] flex-col overflow-hidden py-24 antialiased [perspective:1000px] [transform-style:preserve-3d] sm:min-h-[300vh] sm:py-32"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
      >
        <motion.div className="mb-20 flex flex-row-reverse space-x-reverse space-x-8 md:space-x-14 lg:space-x-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="mb-20 flex flex-row space-x-8 md:space-x-14 lg:space-x-20">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-8 md:space-x-14 lg:space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="relative mx-auto w-full max-w-7xl px-4 py-16 sm:py-20 md:py-28 lg:py-36">
      <h2 className="text-3xl font-bold text-[#1f1f1f] sm:text-5xl md:text-7xl">
        Signature <br /> lash transformations
      </h2>
      <p className="mt-8 max-w-2xl text-base text-neutral-600 sm:text-lg md:text-xl">
        A cinematic showcase of the salon&apos;s most polished lash sets, soft
        arches, and close-up detail work.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  const isExternalLink = /^https?:\/\//.test(product.link);

  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      className="group/product relative h-72 w-[18rem] flex-shrink-0 overflow-hidden rounded-[2rem] shadow-2xl sm:h-80 sm:w-[24rem] lg:h-96 lg:w-[30rem]"
    >
      <a
        href={product.link}
        target={isExternalLink ? "_blank" : undefined}
        rel={isExternalLink ? "noreferrer" : undefined}
        className="block h-full w-full group-hover/product:shadow-2xl"
      >
        <img
          src={product.thumbnail}
          height={600}
          width={600}
          className="absolute inset-0 h-full w-full object-cover object-center"
          alt={product.title}
          loading="lazy"
        />
      </a>
      <div className="pointer-events-none absolute inset-0 h-full w-full bg-black/0 opacity-0 transition-opacity duration-300 group-hover/product:bg-black/70 group-hover/product:opacity-100" />
      <h3 className="absolute bottom-4 left-4 z-10 text-lg font-semibold text-white opacity-0 transition-opacity duration-300 group-hover/product:opacity-100">
        {product.title}
      </h3>
    </motion.div>
  );
};