import { useState, useEffect, useCallback, useRef } from 'react';

interface ScrambleOptions {
  intensity?: number;
  scrambleChars?: string;
  restoreSpeed?: number;
}

export function useScrambleText(originalText: string, options: ScrambleOptions = {}) {
  const { intensity = 0.1, scrambleChars = '.,;:!?/\\|()[]{}', restoreSpeed = 50 } = options;

  const [scrambledText, setScrambledText] = useState(originalText);
  const [isActive, setIsActive] = useState(false);
  const animationRef = useRef<number | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const scrambleChar = useCallback(
    (char: string, scrambleIntensity: number) => {
      // Don't scramble spaces, newlines, or certain ASCII art characters
      if (char === ' ' || char === '\n' || char === '\t') return char;

      if (Math.random() < scrambleIntensity) {
        return scrambleChars[Math.floor(Math.random() * scrambleChars.length)];
      }
      return char;
    },
    [scrambleChars]
  );

  const createScrambledVersion = useCallback(
    (text: string, scrambleIntensity: number) => {
      return text
        .split('')
        .map((char) => scrambleChar(char, scrambleIntensity))
        .join('');
    },
    [scrambleChar]
  );

  const triggerScramble = useCallback(
    (targetIntensity: number = intensity) => {
      if (isActive) return;

      setIsActive(true);

      // Clear any existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Gradual scramble effect
      let currentIntensity = 0;
      const maxIntensity = Math.min(targetIntensity, 0.3);
      const steps = 8;
      const intensityStep = maxIntensity / steps;
      let currentStep = 0;

      const animate = () => {
        if (currentStep < steps) {
          currentIntensity = intensityStep * currentStep;
          setScrambledText(createScrambledVersion(originalText, currentIntensity));
          currentStep++;
          animationRef.current = requestAnimationFrame(() => {
            setTimeout(animate, 40);
          });
        } else {
          // Start restoration
          currentStep = 0;
          const restoreSteps = 12;
          const restoreIntensityStep = maxIntensity / restoreSteps;

          const restore = () => {
            if (currentStep < restoreSteps) {
              currentIntensity = Math.max(0, maxIntensity - restoreIntensityStep * currentStep);
              setScrambledText(createScrambledVersion(originalText, currentIntensity));
              currentStep++;
              animationRef.current = requestAnimationFrame(() => {
                setTimeout(restore, restoreSpeed);
              });
            } else {
              setScrambledText(originalText);
              setIsActive(false);
            }
          };

          restore();
        }
      };

      animate();
    },
    [originalText, intensity, createScrambledVersion, isActive, restoreSpeed]
  );

  const reset = useCallback(() => {
    setScrambledText(originalText);
    setIsActive(false);
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, [originalText]);

  // Cleanup
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return {
    scrambledText,
    isActive,
    triggerScramble,
    reset,
  };
}
