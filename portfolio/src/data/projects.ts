import type { Project } from '../types';
import { imgUrl } from '../utils/assets';

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
    imageUrl: imgUrl('/images/kavorka-banner.png'),
    screenshots: [imgUrl('/images/kavorka-ss.jpg')],
    tags: ['Branding', 'UI Design', 'Figma'],
    category: 'design',
  },
  {
    id: 2,
    title: 'MHZ Earbuds',
    slug: 'mhz',
    description:
      'An innovative earbuds website for MHZ — a personal vision brought to life with immersive UI design.',
    about:
      "Crafting an innovative earbuds website for MHZ has been a gratifying endeavor, allowing me to bring my unique vision to life. The website stands as a testament to the fusion of passion for technology and design.",
    highlights:
      'Interactive 3D model viewer built in Cinema4D — rotate and zoom the earbuds from every angle. X-ray function reveals internal technology hidden inside the design. GSAP scrolling animations that progressively unveil each feature as you scroll. Showcases noise cancellation, touch-sensitive controls, and ergonomic design through immersive UI.',
    review:
      '"Simply put, these MHZ earbuds have elevated my music experience. Clear sound, comfortable fit — a game-changer for daily use!"',
    imageUrl: imgUrl('/images/mhz-banner.png'),
    tags: ['Web Design', 'HTML', 'CSS', 'GSAP', 'Cinema4D', '3D Modelling'],
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
    imageUrl: imgUrl('/images/quatro-banner.png'),
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
    imageUrl: imgUrl('/images/bootcamp-banner.png'),
    screenshots: [imgUrl('/images/bootcamp-ss1.jpg'), imgUrl('/images/bootcamp-ss2.JPG')],
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
    imageUrl: imgUrl('/images/event-simplified-banner.png'),
    screenshots: [imgUrl('/images/event-simplified-ss1.jpg'), imgUrl('/images/event-simplified-ss2.jpg')],
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
    imageUrl: imgUrl('/images/foundation-sixty6-banner.png'),
    screenshots: [imgUrl('/images/foundation-sixty6-ss1.jpg'), imgUrl('/images/foundation-sixty6-ss2.jpg')],
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
    imageUrl: imgUrl('/images/fundraising-campaign-banner.png'),
    screenshots: [imgUrl('/images/fundraising-campaign-ss1.jpg'), imgUrl('/images/fundraising-campaign-ss2.jpg')],
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
    imageUrl: imgUrl('/images/fragments-banner.png'),
    screenshots: [imgUrl('/images/fragments-ss1.jpg'), imgUrl('/images/fragments-ss2.jpg')],
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
    imageUrl: imgUrl('/images/manga-api-banner.png'),
    screenshots: [imgUrl('/images/manga-api-ss1.jpg')],
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
    imageUrl: imgUrl('/images/mothersun-banner.png'),
    screenshots: [imgUrl('/images/mothersun-ss1.jpg'), imgUrl('/images/mothersun-ss2.jpg')],
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
      'High-quality automotive photography. Deep-dive articles on iconic models. Personal road trip anecdotes. Communit