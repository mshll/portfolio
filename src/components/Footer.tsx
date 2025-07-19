'use client';
import { motion } from 'framer-motion';
import RotatingGlobe from './RotatingGlobe';
import SocialLinks from './SocialLinks';
import { ThemeSwitch } from './ThemeSwitch';
import Logo from '@/constants/logo';

const Footer = () => {
  return (
    <>
      <motion.div
        className="hidden lg:block absolute right-0 bottom-0 transform -translate-y-1/2 z-10"
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: 'easeOut' }}
      >
        {/* <pre className="text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-1000 font-mono text-[5px] leading-tight select-none whitespace-pre">
          {MAN_ASCII}
        </pre> */}
      </motion.div>
      <footer className="flex flex-col gap-4 bg-background text-muted-foreground/30 py-10 relative z-10 transition-colors md:px-6 px-4">
        {/* <div className="text-center text-sm hover:text-muted-foreground transition-colors">
          © {new Date().getFullYear()} Meshal Almutairi. All rights reserved.
        </div> */}
        {/* Call to Action */}
        <motion.div
          className="text-center pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
        >
          <SocialLinks includeEmail includeResume linkClassName="text-muted-foreground/50 hover:text-foreground" />
        </motion.div>

        <motion.div
          className="grid grid-cols-3 justify-center items-center w-full overflow-hidden mt-8 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          viewport={{ once: true }}
        >
          {/* <pre className="text-foreground select-none whitespace-pre font-mono leading-none origin-center text-[1.5px] lg:text-[2px] rotate-12 hover:text-muted-foreground transition-colors">
            {ASTRONAUT_ASCII}
          </pre> */}
          <div className="flex justify-start items-center text-foreground">
            <Logo />
          </div>
          <RotatingGlobe className="py-8 col-start-2" />
          <div className="flex justify-end items-center">
            <ThemeSwitch />
          </div>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
