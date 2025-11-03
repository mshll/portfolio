'use client';
import { motion } from 'framer-motion';
import Container from './Container';
import Section from './Section';
import Link from 'next/link';
import { links } from '@/constants/links';
import { TRIUMPH_OF_GALATEA } from '@/constants/asciiArt';
import SocialLinks from './SocialLinks';

export default function About() {
  const tools_technologies = [
    'JS/TS',
    'React',
    'React Native',
    'Next.js',
    'Expo',
    'Node.js',
    'Java',
    'Spring Boot',
    'C/C++',
    'Rust',
    'Swift',
    'Python',
    'ARM',
    'Verilog',
    'LTSpice',
    'KiCAD',
    'Arduino',
    'Git',
    'Docker',
    'Linux',
  ];
  return (
    <Section id="about" className="relative">
      <Container>
        <div
          className="mb-6"
          // initial={{ opacity: 0, scale: 0.8 }}
          // whileInView={{ opacity: 1, scale: 1 }}
          // transition={{ duration: 0.6, delay: 0.6 }}
          // viewport={{ once: true }}
        >
          <div className="flex justify-center items-center max-w-full overflow-hidden">
            <pre className="text-foreground select-none whitespace-pre font-mono leading-none origin-center text-[2.5px] md:text-[4px] hover:text-muted-foreground transition-colors">
              {TRIUMPH_OF_GALATEA}
            </pre>
          </div>
        </div>
        <div
          className="max-w-3xl mx-auto"
          // initial={{ opacity: 0, y: 50 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8, delay: 0.2 }}
          // viewport={{ once: true }}
        >
          <div className="space-y-12">
            {/* About Header */}
            <div
              className="text-center"
              // initial={{ opacity: 0, y: 30 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.6, delay: 0.4 }}
              // viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-pp-editorial-new tracking-tight mb-6">
                About <span className="italic">Me</span>
              </h2>
              <pre className="text-muted-foreground/50 text-sm font-mono text-center mb-6">⎯ ✦ ⎯</pre>
            </div>

            {/* Main Content */}
            <div
              className="prose prose-lg max-w-none"
              // initial={{ opacity: 0, y: 30 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.6, delay: 0.6 }}
              // viewport={{ once: true }}
            >
              <div className="space-y-8 text-muted-foreground leading-relaxed">
                <p className="text-lg text-justify">
                  A software engineer building elegant, user-centered digital experiences that bridge the gap between complex functionality and
                  intuitive design. My favorite work happens at the intersection of thoughtful engineering and beautiful interfaces, crafting
                  solutions that not only solve real problems but feel effortless to use.
                </p>

                <p className="text-lg text-justify">
                  Currently at{' '}
                  <Link
                    href={links.work}
                    target="_blank"
                    className="text-foreground font-pp-editorial-new hover:text-foreground transition-colors underline decoration-muted-foreground/30 hover:decoration-foreground inline-flex items-center gap-1"
                  >
                    Boubyan Bank
                    {/* <ArrowUpRight className="w-3 h-3" strokeWidth={3} /> */}
                  </Link>
                  , crafting robust financial technology solutions. I help build and maintain systems that support critical operations while
                  delivering seamless digital experiences.
                </p>
              </div>
            </div>

            {/* Technology Stack */}
            <div
              className="space-y-6"
              // initial={{ opacity: 0, y: 30 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.6, delay: 0.8 }}
              // viewport={{ once: true }}
            >
              <h3 className="text-center text-xl font-pp-editorial-new text-foreground">
                Technologies & <span className="italic">Tools</span>
              </h3>

              <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
                {tools_technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    className="px-4 py-2 text-sm font-medium text-muted-foreground/80 bg-muted/20 hover:bg-muted/30 rounded-full border border-border/30 hover:border-border/50 transition-all cursor-default select-none"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    // initial={{ opacity: 0, scale: 0.9 }}
                    // whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.5 + index * 0.05,
                    }}
                    viewport={{ once: true }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Social Links & Resume */}
            <div
              className="space-y-8"
              // initial={{ opacity: 0, y: 30 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.6, delay: 1.0 }}
              // viewport={{ once: true }}
            >
              <div className="text-center">
                <h3 className="text-xl font-pp-editorial-new text-foreground mb-6">
                  Connect & <span className="italic">Collaborate</span>
                </h3>
                <SocialLinks includeResume includeEmail />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
