import zorvaImage from '../assets/images/zorva.jpg';
import zewarlyAutomationImage from '../assets/images/zewarly-automation.jpg';

export const projects = [
  {
    id: 'zorva',
    number: '01',
    title: 'Zorva',
    category: 'Web Development · Featured',
    description: 'A live web project built and shipped by Syed Abdul Aleem Ahmad Shah.',
    url: 'https://zorva-xi.vercel.app/',
    year: '2026',
    tags: ['Web Development', 'Vercel', 'Vibe Coding'],
    image: zorvaImage,
    featured: true,
    external: true,
  },

  {
    id: 'zewarly-social-media-automation',
    number: '02',
    title: 'Zewarly Social Media Automation',
    category: 'AI Automation · n8n',
    description:
      'A real-world n8n automation that retrieves Zewarly WooCommerce products, processes product data, generates social-media content with Gemini AI and publishes it to Facebook and Instagram.',
    year: '2026',
    tags: ['n8n', 'Gemini AI', 'WooCommerce', 'JavaScript', 'Meta API'],
    image: zewarlyAutomationImage,
    caseStudyPath: '/work/zewarly-social-media-automation',
    featured: false,
    external: false,
  },
];