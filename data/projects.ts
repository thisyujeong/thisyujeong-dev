import { Project } from 'lib/types';

/**
 * Recommended image size: 600 x 400
 */

const projects: Project[] = [
  {
    title: 'Flippix',
    description: 'Svelte5를 학습하며 제작한 디지털 플립시계 프로젝트 ',
    url: 'https://flippix-clock.vercel.app',
    image: '/projects/flippix.png',
  },
  {
    title: 'Particle Morphing',
    description: 'Three.js + GSAP 를 활용한 인터랙티브 웹(1)',
    url: 'https://particle-morphing-threejs.vercel.app',
    image: '/projects/particle-morphing.png',
  },
  {
    title: 'Wave Plane',
    description: 'React Three Fiber(three.js) + GSAP 를 활용한 인터랙티브 웹(2)',
    image: '/projects/wave-plane.png',
    url: 'https://wave-plane-threejs.vercel.app',
  },
  {
    title: 'thisyujeong.dev',
    description: 'My Personal Development Blog with Next.js, and Vercel. ✨',
    url: 'https://thisyujeong.dev',
    image: '/projects/thisyujeong-dev.png',
  },
];

export default projects;
