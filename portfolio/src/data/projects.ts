import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Kavorka',
    slug: 'kavorka',
    description:
      'A makeup brand introducing Kavorka with a twist of its Latin roots, showcasing natural and traditional beauty.',
    about:
      'Kavorka is a makeup brand that proudly showcases its Latin roots, celebrating natural and traditional beauty. Products are crafted with care, blending modern elegance with the timeless charm of Latin beauty traditions.',
    highlights:
      'Signature Lipstick Collection inspired by vibrant Latin colors. Sultry Eyeshadow Palette with rich earthy tones. Radiance Foundation with lightweight, natural-finish formula.',
    review:
      '"Kavorka\'s products are a true reflection of elegance and quality. I love how they embrace Latin beauty traditions while offering modern choices." — Maria, Makeup Enthusiast',
    imageUrl: '/images/kavorka-banner.png',
    tags: ['Branding', 'UI Design', 'Figma'],
    category: 'design',
  },
  {
    id: 2,
    title: 'MHZ Earbuds',
    slug: 'mhz',
    description:
      'An innovative earbuds website for MHZ — a personal vision brought to life with immersive UI design and GSAP scroll animations.',
    about:
      "Crafting an innovative earbuds website for MHZ has been a gratifying endeavor, allowing me to bring my unique vision to life. The website stands as a testament to the fusion of passion for technology and design.",
    highlights:
      'Immersive Sound Experience. Sleek and Comfortable ergonomic design. Intuitive Touch Controls. Seamless user experience across all devices.',
    review:
      '"Simply put, these MHZ earbuds have elevated my music experience. Clear sound, comfortable fit — a game-changer for daily use!"',
    imageUrl: '/images/mhz-banner.png',
    tags: ['Web Design', 'HTML', 'CSS', 'GSAP'],
    githubUrl: 'https://github.com/mohamedzrn/Mohamed_Zarandah_EarbudWebsite',
    category: 'web',
  },
  {
    id: 3,
    title: 'Quatro',
    slug: 'quatro',
    description:
      'Rebranding a classic juice company into a modern adult beverage company with a bold new identity.',
    about:
      "Quatro, a company with roots in children's beverages, has undergone a remarkable metamorphosis into a trailblazer in the adult beverage landscape. The brand pivoted toward crafting beverage seltzers for grown-up consumers.",
    highlights:
      'Strategic diversification into adult beverages. Focus on craft seltzers. Complete contemporary rebranding that speaks to the adult market.',
    review:
      '"Quatro\'s beverage is a taste revolution! A burst of unique flavors that left me craving more." — Emily M., Flavor Explorer',
    imageUrl: '/images/quatro-banner.png',
    tags: ['Branding', 'Web Design', 'UI/UX'],
    category: 'design',
  },
  {
    id: 4,
    title: 'Bootcamp WebView',
    slug: 'bootcamp',
    description:
      "A WebView platform for Fanshawe College's Industry Night bridging academic showcases and professional networking.",
    about:
      "The innovative digital platform for Fanshawe College's Industry Night revolutionizes how academic achievements are showcased and how professional networking is facilitated, allowing students to present prototype designs to industry professionals.",
    highlights:
      '3D model and video demonstration support. Virtual business card exchanges. Scheduled one-on-one video meetings. Real-time feedback from industry professionals.',
    review:
      '"I recently had the pleasure of using the innovative digital platform developed for Fanshawe College\'s Industry Night, and it exceeded all my expectations!"',
    imageUrl: '/images/bootcamp-banner.png',
    tags: ['React', 'UI/UX', 'WebView', 'Fanshawe'],
    category: 'web',
  },
  {
    id: 5,
    title: 'Event Simplified',
    slug: 'event-simplified',
    description:
      'A business website for Event Simplified — redesigned with a modern dark navy UI, AI-powered features section, and fully responsive layout.',
    about:
      'Event Simplified is a forward-thinking digital platform designed to transform the event planning and management landscape. Built on the principles of innovation, ease of use, and connectivity.',
    highlights:
      'Collaborated directly with the founder. Comprehensive audience research. Consistent color scheme and cohesive design. Fully responsive across all devices.',
    review:
      '"After participating in the Event Simplified website design project, I am thoroughly impressed with the comprehensive learning experience it provided." ',
    imageUrl: '/images/event-simplified-banner.png',
    tags: ['Web Design', 'HTML', 'CSS/SCSS', 'Responsive'],
    githubUrl: 'https://github.com/mohamedzrn/Event-Simplified',
    category: 'web',
  },
  {
    id: 6,
    title: 'Foundation Sixty6',
    slug: 'foundation-sixty6',
    description:
      'A client-based website for Foundation Sixty6 showcasing the effects of three mental health challenges.',
    about:
      'Foundation Sixty 6 is a dedicated online platform focused on addressing the complexities of mental health challenges through a comprehensive and accessible approach. Founded on empathy, education, and empowerment.',
    highlights:
      'Intuitive resource navigation. Community support systems. Educational workshops and content. Destigmatizing mental health through design.',
    review:
      '"I stumbled upon Foundation Sixty 6\'s website during a difficult time, and it was a beacon of hope."',
    imageUrl: '/images/foundation-sixty6-banner.png',
    tags: ['Web Design', 'HTML', 'CSS', 'Accessibility'],
    category: 'web',
  },
  {
    id: 7,
    title: 'Art for Rights',
    slug: 'fundraiser',
    description:
      'A series of posters expressing the effect of our lives and our rights as humans — a fundraising campaign.',
    about:
      '"Art for Rights" is an initiative harnessing the power of visual art to advocate for human rights and foster a deeper understanding of their impact on our lives. A curated collection of posters, each telling a unique story.',
    highlights:
      'Compelling visual narratives on human rights. Bridge connecting diverse communities. Artistic activism through design.',
    review:
      '"I recently came across this series of posters designed to reflect on the profound effects of human rights, and I was deeply moved."',
    imageUrl: '/images/fundraising-campaign-banner.png',
    tags: ['Poster Design', 'Adobe Illustrator', 'Adobe Photoshop'],
    category: 'design',
  },
  {
    id: 8,
    title: 'Fragments of Reality',
    slug: 'fragments',
    description:
      'A behind-the-scenes showcase of how the short film "Fragments of Reality" was conceived and produced.',
    about:
      'Fragments of Reality showcases an intricate blend of innovative cinematography and cutting-edge visual effects. This behind-the-scenes look reveals the meticulous care and creativity infused into every aspect of production.',
    highlights:
      'Innovative cinematography techniques. Blend of real-world and digital artistry. Collaborative filmmaking process documented.',
    review:
      '"Fragments of Reality is a mesmerizing journey through the complexities of human emotion and perception."',
    imageUrl: '/images/fragments-banner.png',
    tags: ['Video Production', 'Adobe Premiere', 'After Effects'],
    category: 'video',
  },
  {
    id: 9,
    title: 'Manga API Webstore',
    slug: 'manga-api',
    description:
      'A manga webstore showcasing Lumen JS and a Backend API framework — clean, fast, and user-focused.',
    about:
      'The Manga API Webstore is a testament to seamless blend of simplicity and innovation, built with Lumen JS on the frontend and a robust Backend API for data management. Focused on accessibility and performance.',
    highlights:
      'Lumen JS frontend. RESTful Backend API integration. Optimized queries for minimal response times. Clean, clutter-free UX for manga discovery.',
    review:
      '"Discovering the manga API webstore was an absolute game-changer for how I consume manga. Smooth and intuitive!"',
    imageUrl: '/images/manga-api-banner.png',
    tags: ['PHP', 'Lumen JS', 'REST API', 'MySQL'],
    category: 'api',
  },
  {
    id: 10,
    title: 'Mothersun & The Captain',
    slug: 'mothersun',
    description:
      'A video production showcasing the story of a small family business — a mother and her family building a dream.',
    about:
      "This video is a captivating portrayal of a small family business, rooted in hard work, resilience, and the strength of family ties. It highlights a dedicated mother's leadership and vision.",
    highlights:
      'Intimate storytelling and dynamic cinematography. Natural lighting and close-up techniques. Tribute to small family businesses and community.',
    review:
      '"The video is nothing short of inspiring. From the moment it begins, you\'re drawn into the heartfelt story of resilience and family bonds."',
    imageUrl: '/images/mothersun-banner.png',
    tags: ['Video Production', 'Cinematography', 'Storytelling'],
    category: 'video',
  },
  {
    id: 11,
    title: 'CSL — Car Enthusiast',
    slug: 'csl',
    description:
      'My first self-built website, a passion project for car enthusiasts — one webpage, all heart.',
    about:
      "Welcome to my digital garage. This website is the culmination of countless hours of dedication, driven by my deep-rooted love for everything automotive. From sleek classics to cutting-edge supercars.",
    highlights:
      'High-quality automotive photography. Deep-dive articles on iconic models. Personal road trip anecdotes. Community hub for car enthusiasts.',
    review:
      '"Discovering this self-built website dedicated to car enthusiasm was an absolute delight. The passion behind every page is evident from the first click."',
    imageUrl: '/images/csl-banner.png',
    tags: ['HTML', 'CSS', 'JavaScript', 'Responsive'],
    category: 'web',
  },
  {
    id: 12,
    title: 'Star Wars API',
    slug: 'starwars',
    description:
      'A singular API integration file that fetches data from the Star Wars API — clean, efficient, and developer-friendly.',
    about:
      'This API file is a meticulously crafted tool designed to seamlessly fetch data from the extensive Star Wars API. Engineered with precision, it provides streamlined access to characters, planets, starships, and more.',
    highlights:
      'Optimized API queries for minimal latency. Structured data retrieval for characters, planets, vehicles. Developer-friendly and well-documented.',
    review:
      '"Exploring this Star Wars API file was enthralling. Its clarity, efficiency, and thoughtful design stood out for developers of all skill levels."',
    imageUrl: '/images/starwars-banner.png',
    tags: ['JavaScript', 'REST API', 'Fetch API'],
    category: 'api',
  },
  {
    id: 13,
    title: 'Lemlist Partner Engine',
    slug: 'lemlist-partner-engine',
    description:
      'A fully automated job outreach engine — discovers listings, enriches contacts, generates personalised cold emails with Claude AI, and follows up automatically.',
    about:
      'Built as proof-of-work for a role at Affilial.com, the Partner Outreach Engine is a 24/7 automation pipeline deployed on Render. It searches Greenhouse, Lever, Ashby, and LinkedIn for relevant roles, enriches leads via Hunter.io, generates personalised cold emails using Claude AI, and manages follow-ups with reply detection via Gmail IMAP.',
    highlights:
      'Claude AI-powered personalised cold email generation. A/B prompt variant testing with auto-promotion. Multi-source job feed scanning every 6 hours. Live Express.js dashboard with lead pipeline status.',
    review:
      '"A sophisticated end-to-end outreach automation system demonstrating deep knowledge of APIs, AI integration, and full-stack Node.js development."',
    imageUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80',
    tags: ['Node.js', 'Claude AI', 'Express.js', 'Automation'],
    githubUrl: 'https://github.com/mohamedzrn/lemlist-partner-engine',
    category: 'api',
  },
  {
    id: 14,
    title: 'Noctura Trend Search',
    slug: 'noctura-trend-search',
    description:
      'A Python FastAPI web app for tracking social media trends — per-creator profiles, data bank, and an analyses feed with a redesigned dark UI.',
    about:
      'Noctura Trend Search is a full-stack Python application built with FastAPI and Jinja2 templates. It tracks trending content across social platforms, maintains per-creator profiles, and surfaces an analyses feed. The front-end was redesigned with a purple/cyan dark design system using CSS custom properties and the Inter typeface.',
    highlights:
      'FastAPI backend with Jinja2 server-side rendering. Per-creator profile tracking and data bank. Custom dark design system with CSS variables. Deployed locally via uvicorn with live reload.',
    review:
      '"A clean full-stack Python project showcasing FastAPI, templating, and a polished dark-mode UI redesign."',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    tags: ['Python', 'FastAPI', 'CSS', 'Jinja2'],
    githubUrl: 'https://github.com/mohamedzrn/noctura-trend-search',
    category: 'web',
  },
];
