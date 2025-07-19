'use client';
import Container from './Container';
import { LEFT_HAND_ASCII, RIGHT_HAND_ASCII } from '@/constants/asciiArt';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useScrambleText } from '@/hooks/useScrambleText';
import { useCallback } from 'react';
import EtherealShadow from '@/components/ui/etheral-shadow';
import { useIsMobile } from '@/hooks/use-mobile';
import { useTheme } from 'next-themes';

export default function Hero() {
  const { theme } = useTheme();
  const isMobile = useIsMobile();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Use scramble hooks for both hands
  const leftHand = useScrambleText(LEFT_HAND_ASCII, {
    scrambleChars: '.,;:!?/\\|()[]{}',
    restoreSpeed: 60,
  });

  const rightHand = useScrambleText(RIGHT_HAND_ASCII, {
    scrambleChars: '.,;:!?/\\|()[]{}',
    restoreSpeed: 60,
  });

  // Transform mouse position to hand movement (subtle effect)
  const leftHandX = useTransform(mouseX, [0, 1], [-10, 10]);
  const leftHandY = useTransform(mouseY, [0, 1], [-5, 5]);
  const rightHandX = useTransform(mouseX, [0, 1], [10, -10]);
  const rightHandY = useTransform(mouseY, [0, 1], [-5, 5]);

  // Handle mouse movement and scrambling
  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      if (isMobile) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      mouseX.set(x);
      mouseY.set(y);

      // Calculate scramble intensity based on distance from center
      const centerX = 0.5;
      const centerY = 0.5;
      const distanceFromCenter = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
      const intensity = Math.min(distanceFromCenter * 0.4, 0.25); // More responsive

      // Trigger scrambling when moving away from center
      if (intensity > 0.05) {
        if (!leftHand.isActive) {
          leftHand.triggerScramble(intensity);
        }
        if (!rightHand.isActive) {
          rightHand.triggerScramble(intensity);
        }
      }
    },
    [mouseX, mouseY, leftHand, rightHand, isMobile]
  );

  return (
    <motion.section
      className="min-h-screen relative flex items-center justify-center bg-background overflow-hidden"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      data-hide-cursor="true"
    >
      {/* absolute background image */}
      {/* <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('/hero_bg.png')` }} /> */}
      <div className="absolute bg-gradient-to-t from-background top-11/12 left-0 w-full h-1/12 to-transparent inset-0 z-[11]" />

      <EtherealShadow
        color="oklch(from var(--muted-foreground) l c h / 0.15)"
        animation={{ scale: 100, speed: 90 }}
        noise={{ opacity: theme === 'dark' ? 0.5 : 0, scale: 1.2 }}
      />

      {/* Left Hand ASCII Art */}
      <motion.div
        className="block absolute left-0 top-4/5 sm:top-2/3 transform -translate-y-1/2 z-10"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        style={{
          x: leftHandX,
          y: leftHandY,
        }}
      >
        <pre className="text-foreground hover:text-muted-foreground transition-colors duration-1000 font-mono text-[2px] md:text-[3px] lg:text-[4px] leading-tight select-none whitespace-pre">
          {leftHand.scrambledText}
        </pre>
      </motion.div>

      {/* Right Hand ASCII Art */}
      <motion.div
        className="block absolute right-0 top-1/5 sm:top-1/3 transform -translate-y-1/2 z-10"
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
        style={{
          x: rightHandX,
          y: rightHandY,
        }}
      >
        <pre className="text-foreground hover:text-muted-foreground transition-colors duration-1000 font-mono text-[2px] md:text-[3px] lg:text-[4px] leading-tight select-none whitespace-pre">
          {rightHand.scrambledText}
        </pre>
      </motion.div>

      {/* Central Content */}
      <Container className="z-20 w-auto">
        <motion.div
          className="text-center space-y-8"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div className="space-y-6" initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <motion.div
              className="flex justify-between text-lg text-muted-foreground/50 max-w-xl mx-auto leading-relaxed font-medium font-pp-editorial-new"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.0 }}
            >
              <p>&copy; {new Date().getFullYear()}</p>
              <p>KUWAIT</p>
            </motion.div>
            <motion.h1
              className="text-6xl md:text-9xl font-pp-editorial-new tracking-tight"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Meshal <br /> <span className="italic">Almutairi</span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed font-medium"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              Software Engineer <span className="font-pp-editorial-new">@ Boubyan</span>
            </motion.p>
          </motion.div>
        </motion.div>
      </Container>
    </motion.section>
  );
}
