export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  liveUrl?: string;
  sourceUrl?: string;
  technologies?: string[];
  year?: string;
}

export const projects: Project[] = [
  {
    id: 'cvrd',
    title: 'CVRD',
    description: 'An app that lets you create virtual debit cards to protect your real banking info, control spending, and prevent unwanted charges.',
    image: '/images/cvrd.webp',
    sourceUrl: 'https://github.com/mshll/cvrd-mobile',
    technologies: ['React Native', 'Expo', 'Java', 'Spring Boot'],
    year: '2025',
  },
  {
    id: 'smartvent',
    title: 'Smart Vent',
    description: 'An automated system that monitors CO₂ and controls fans to maintain indoor air quality, with both physical and web-based controls.',
    image: '/images/smartvent.webp',
    sourceUrl: 'https://github.com/mshll/smartvent',
    technologies: ['C++', 'Arduino', 'KiCAD', 'Vue.js'],
    year: '2024',
  },
  {
    id: 'rustyhitman',
    title: 'Rusty Hitman',
    description: 'A 2D target identification game where players must eliminate the correct character within a limited time using visual clues.',
    image: '/images/rustyhitman.webp',
    liveUrl: 'https://rusty-hitman.mshl.me/',
    sourceUrl: 'https://github.com/mshll/rusty-hitman',
    technologies: ['Rust', 'Macroquad', 'WASM'],
    year: '2024',
  },
  {
    id: 'flipnfind',
    title: "Flip n' Find",
    description: 'A simple memory game, flip cards to find the matching pairs.',
    image: '/images/flipnfind.webp',
    liveUrl: 'https://flip-n-find.mshl.me',
    sourceUrl: 'https://github.com/mshll/flip-n-find',
    technologies: ['React', 'Next.js', 'Tailwind CSS'],
    year: '2024',
  },
  {
    id: 'ddr5-scheduler',
    title: 'DDR5 Scheduler',
    description:
      'A C-based simulator that models DRAM command scheduling for a 12-core CPU using DDR5 timing, supporting multiple scheduling policies and trace-based input/output.',
    sourceUrl: 'https://github.com/mshll/DDR5-Memory-Controller-Scheduler',
    technologies: ['C', 'Make', 'FSM'],
    year: '2023',
  },
  {
    id: 'mips-lite-simulator',
    title: 'MIPS Lite Simulator',
    description: 'A simulator for 5-stage MIPS Lite instruction execution, supporting non-pipelined and pipelined modes with/without forwarding.',
    sourceUrl: 'https://github.com/mshll/MIPS-Lite-Simulator',
    technologies: ['C', 'Make', 'FSM'],
    year: '2024',
  },
];
