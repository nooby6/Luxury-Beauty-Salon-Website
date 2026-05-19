import { motion } from 'motion/react';

export function FloatingParticles() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 4,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: Math.random() * 10 + 10,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-gradient-to-r from-[#E8A9A9]/30 to-[#D4A373]/30"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.left}%`,
            bottom: -20,
          }}
          animate={{
            y: [-20, -window.innerHeight - 100],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 1, 1, 0],
            scale: [0, 1, 1, 0],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
