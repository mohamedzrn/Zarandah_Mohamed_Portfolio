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
      'A business website for Event Simplified with a consistent color scheme designed to capture attention and communicate value.',
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
      'High-quality automotive photography. Deep-dive articles on iconic models. Personal road trip anecdotes. Community hub for car enthusiasts.',
    review:
      '"Discovering this self-built website dedicated to car enthusiasm was an absolute delight. The passion behind every page is evident from the first click."',
    imageUrl: imgUrl('/images/csl-banner.png'),
    screenshots: [imgUrl('/images/csl-ss1.JPG'), imgUrl('/images/csl-ss2.JPG')],
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
    imageUrl: imgUrl('/images/starwars-banner.png'),
    screenshots: [imgUrl('/images/starwars-ss1.jpg'), imgUrl('/images/starwars-ss2.jpg')],
    tags: ['JavaScript', 'REST API', 'Fetch API'],
    category: 'api',
  },
  {
    id: 13,
    title: 'AI Outreach Engine',
    slug: 'lemlist',
    description:
      'A fully automated B2B cold outreach pipeline — discovers jobs, enriches contacts, generates personalised emails with a local AI model, and sends via Gmail. Zero API cost.',
    about:
      'A self-hosted B2B partner outreach engine built as proof-of-work for Affilial.com. It runs 24/7 on Render, searching Greenhouse, Lever, Ashby, Wellfound, and LinkedIn every 6 hours for Account Manager, Partner Manager, and Affiliate Manager roles. Leads are scored (0–100), enriched via Hunter.io, then personalised emails are generated with Claude Haiku and sent through Gmail SMTP — with full follow-up sequencing and A/B testing baked in.',
    highlights:
      'Job discovery across 5 boards every 6 hours — Greenhouse, Lever, Ashby, Wellfound, LinkedIn. Rules-based lead scoring (0–100) with 3 priority tiers (skip below 80). Claude Haiku AI generates personalised cold emails and follow-ups per lead. Email enrichment via Hunter.io with web research on top prospects. A/B prompt testing with SQLite tracking — auto-promotes winning variant after 10 sends. Day 3 and Day 7 follow-up sequences with IMAP reply detection to cancel on response. Google Sheets integration — approve a row and the engine picks it up automatically. Express.js dashboard with 30-second auto-refresh deployed 24/7 on Render.',
    review:
      '"Full pipeline in one command. The A/B prompt testing and lead scoring alone saved hours of manual triage every week."',
    imageUrl: imgUrl('/images/lemlist-banner.svg'),
    tags: ['Node.js', 'Claude API', 'Gmail SMTP', 'Hunter.io', 'Google Sheets', 'SQLite', 'Express.js', 'Render'],
    liveUrl: 'https://lemlist-partner-engine.onrender.com',
    githubUrl: 'https://github.com/mohamedzrn/lemlist-partner-engine',
    category: 'api',
  },
  {
    id: 14,
    title: 'Notion → Discord Bot',
    slug: 'notion-discord',
    description:
      'A real-time automation bot that bridges Notion and Discord — DMing team members on task creation, reassignment, updates, and overdue alerts so nothing falls through the cracks.',
    about:
      'A full-stack bot deployed on Railway that keeps async teams accountable without micromanaging. It runs a dual notification system — 10-second polling loop plus real-time Notion webhooks (HMAC-SHA256 verified) — and automatically DMs team members for every meaningful task event. Auto-discovers Notion databases so no manual config is needed.',
    highlights:
      'Dual notification system: 10-second polling plus real-time Notion webhooks with HMAC-SHA256 verification. 5 automated DM types: new task, reassignment, due date change, status change, overdue alerts. Daily digest every morning with all open assigned tasks. Hourly overdue scanner with daily deduplication to prevent spam. Auto-discovery of Notion databases with graceful catch-up for newly connected ones. 7 slash commands: /mytasks, /teamtasks, /recentupdates, /status, /linknotion, /remind, /forceremind. Notion to Discord user mapping with persistent JSON storage.',
    review:
      '"Eliminated the need for manual check-ins entirely. The /teamtasks command alone changed how we run standups."',
    imageUrl: imgUrl('/images/notion-discord-banner.svg'),
    tags: ['Node.js', 'Discord.js v14', 'Notion API', 'Express.js', 'Winston', 'Railway'],
    githubUrl: 'https://github.com/mohamedzrn/notion-discord-bot',
    category: 'api',
  },
  {
    id: 15,
    title: 'Noctura Pulse',
    slug: 'noctura',
    description:
      'An AI-powered Instagram trend bot that turns creator behaviour into content intelligence — silently. Creators forward reels and posts; the bot profiles, analyses, and surfaces trend signals.',
    about:
      'Noctura Pulse is a stealth Instagram DM bot built for a creator management agency. Creators forward reels, carousels, stories, and clips — the bot analyses each piece with Claude Vision AI and syncs intelligence to per-creator Notion databases automatically. It builds a rolling behavioral content profile per creator, tracking niche drift, audio trends, hook strength, and shareability over time.',
    highlights:
      'Adaptive DM polling (45s to 1hr backoff) waking within 30s on activity. Supports 5 content types: Reels, Carousels, Static posts, Stories, and xma_clip format. Claude Vision AI generates visual summaries from thumbnails. 9 signals extracted per submission: niche, trend signals, content style, audio score, hook strength, shareability, engagement pattern, keywords, and actionable content recommendation. Per-creator Notion database routing with auto-set thumbnail gallery covers. Story media captured before 24-hour expiry. Audio bank and keyword bank ranked by cross-creator frequency and reach. Human-paced reply delays (12–50s randomised) with residential proxy for account safety. Live web dashboard with 5 views and 4 API endpoints.',
    review:
      '"Replaced our entire manual content research process. The audio bank alone surfaces trends before they peak."',
    imageUrl: imgUrl('/images/noctura-banner.svg'),
    tags: ['Python', 'Claude API', 'instagrapi', 'SQLite', 'Notion API', 'Flask', 'Residential Proxy'],
    githubUrl: 'https://github.com/mohamedzrn/noctura-trend-search',
    category: 'api',
  },
];
