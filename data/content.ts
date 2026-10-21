export type ProjectCategory = 'UI/UX Design' | 'Brand Identity Design' | 'Web Design';

export type KeyFeature = {
  title: string;
  description: string;
};

export type Project = {
  slug: string;
  title: string;
  categories: ProjectCategory[];
  year: string;
  summary: string;
  description: string;
  tags: string[];
  tone: string;
  image?: string;
  behanceUrl?: string;
  client?: string;
  role?: string;
  timeline?: string;
  deliverables?: string[];
  overview?: string;
  challenge?: string;
  approach?: string;
  solution?: string;
  impact?: string[];
  keyFeatures?: KeyFeature[];
};

export const projects: Project[] = [
  {
    slug: 'dynaraise',
    title: 'DynaRaise Mobile App',
    categories: ['UI/UX Design'],
    year: '2026',
    summary: 'A human-centred fundraising experience designed around trust, clarity and giving behaviour.',
    description: 'A mobile fundraising product exploring the donor journey, fundraiser workflows, verification and the operational systems behind a trustworthy giving experience.',
    tags: ['Product strategy', 'UX/UI', 'Design system', 'Fintech'],
    tone: 'dark',
    image: '/projects/dynaraise.jpg',
    behanceUrl: 'https://www.behance.net/alameenaderibigbe',
    client: 'DynaRaise Foundation',
    role: 'Lead Product Designer (UX/UI, Strategy & Systems)',
    timeline: '12 Weeks',
    deliverables: ['Mobile App (iOS & Android)', 'Design System', 'Donor Verification Flow', 'Interactive Prototypes'],
    overview: 'DynaRaise is a next-generation civic fundraising platform enabling causes and communities to secure micro-donations with institutional-grade transparency. The platform bridges trust gaps between grassroots fundraisers and skeptical donors.',
    challenge: 'Traditional crowdfunding platforms suffer from high drop-off rates due to cumbersome checkout experiences and suspicion regarding fund destination. DynaRaise needed an effortless flow that proved accountability at every stage.',
    approach: 'We audited 18 leading philanthropic platforms, mapped emotional decision points in giving behaviour, and established micro-feedback states that reassure donors without adding unnecessary cognitive drag.',
    solution: 'Engineered a 3-tap donation architecture, verified milestone tracking, real-time escrow visualization, and personalized recurring impact dashboards that keep givers engaged post-transaction.',
    impact: [
      '+42% checkout completion rate within the first quarter',
      'Under 22 seconds average time from discovery to completed donation',
      'Over $1.4M pledged through certified community campaigns',
    ],
    keyFeatures: [
      {
        title: 'Instant Trust Badging & Escrow Tracking',
        description: 'Visual confirmation of non-profit legal status, audited bank accounts, and milestone-governed disbursements.',
      },
      {
        title: 'Micro-Giving Stream',
        description: 'Frictionless one-click recurrent contributions with real-time receipts and itemized social impact breakdowns.',
      },
      {
        title: 'Community Verification Mesh',
        description: 'Decentralized peer endorsements for local community drives, giving grassroots initiatives verifiable legitimacy.',
      },
    ],
  },
  {
    slug: 'alam-eats',
    title: 'Alam Eats',
    categories: ['UI/UX Design'],
    year: '2026',
    summary: 'A digital product experience focused on making food discovery and ordering easier to understand.',
    description: 'A product design project focused on user journeys, interface hierarchy and a clearer digital experience.',
    tags: ['UX/UI', 'Product design', 'Interaction', 'Mobile'],
    tone: 'warm',
    image: '/projects/alam-eats.jpg',
    behanceUrl: 'https://www.behance.net/alameenaderibigbe',
    client: 'Alam Eats Gourmet Inc.',
    role: 'Product Designer (User Research, Wireframing & Prototyping)',
    timeline: '8 Weeks',
    deliverables: ['Mobile App Architecture', 'Order Tracking Flow', 'Design Guidelines'],
    overview: 'Alam Eats re-imagines on-demand culinary discovery by ditching generic infinite food lists in favor of sensory, mood-driven meal curation and transparent preparation times.',
    challenge: 'Users reported choice paralysis and frustration with inaccurate delivery estimates on competing apps. The goal was to remove anxiety from evening meal choices.',
    approach: 'Designed an editorial-style interface with contextual meal categories (e.g., Quick Comfort, Late Study, Wholesome Lunch) and progressive disclosure for dietary customisations.',
    solution: 'Delivered an intuitive order journey with step-by-step kitchen countdowns, clean allergen tags, and a zero-confusion cart checkout.',
    impact: [
      '38% reduction in average time spent deciding on meals',
      '4.8/5 satisfaction rating during controlled usability trials',
      '24% boost in repeat weekly cart checkouts',
    ],
    keyFeatures: [
      {
        title: 'Mood & Time-Based Discovery',
        description: 'Smart contextual feed adapting to time of day, weather, and previous dietary preferences.',
      },
      {
        title: 'Live Preparation Tracker',
        description: 'Direct kitchen camera glimpses and minute-by-minute updates from chef prep to courier handoff.',
      },
    ],
  },
  {
    slug: 'breezy-ride',
    title: 'Breezy Ride',
    categories: ['UI/UX Design'],
    year: '2026',
    summary: 'A mobility product concept shaped around a simpler journey from discovery to ride.',
    description: 'A product interface exploration focused on navigation, task clarity and the experience around booking a ride.',
    tags: ['UX/UI', 'Mobile product', 'Interaction', 'Geolocation'],
    tone: 'blue',
    image: '/projects/breezy-ride.jpg',
    behanceUrl: 'https://www.behance.net/alameenaderibigbe',
    client: 'Breezy Mobility Labs',
    role: 'Senior UI/UX Designer',
    timeline: '10 Weeks',
    deliverables: ['Passenger App UX', 'Driver Interface Prototype', 'Map Display System'],
    overview: 'Breezy Ride is an urban ride-hailing concept designed to eradicate map clutter, surge price confusion, and pickup point misunderstandings in dense metropolitan environments.',
    challenge: 'Most ride apps overwhelm users with excessive vehicle pins, floating promotions, and inconsistent fare calculation notices during peak commuting hours.',
    approach: 'Focused the entire viewport on clear spatial navigation: high-contrast route previews, guaranteed fixed fare estimates, and predictive pickup corner suggestions.',
    solution: 'Engineered a streamlined 2-gesture booking system with prominent safety triggers and effortless ride status awareness.',
    impact: [
      '65% faster driver match affirmation',
      'Significant reduction in rider-driver cancellation discrepancies',
      'Streamlined map rendering reducing UI latency by 40%',
    ],
    keyFeatures: [
      {
        title: 'Corner-Point Pickup Assist',
        description: 'Algorithmic suggestions that guide passengers to legally convenient corners, saving 3 minutes per pickup.',
      },
      {
        title: 'Transparent Fair-Tiering',
        description: 'Unambiguous flat-rate estimates that lock in immediately without surge rate surprises at drop-off.',
      },
    ],
  },
  {
    slug: 'thesis',
    title: 'TheSIS Learner App',
    categories: ['UI/UX Design'],
    year: '2026',
    summary: 'A 167-screen learning ecosystem built around practice, discovery, community and growth.',
    description: 'A mobile MVP design system and product architecture for a learning platform, covering learner journeys, navigation, practice, community and operational infrastructure.',
    tags: ['Product design', 'UX architecture', 'UI system', 'EdTech'],
    tone: 'blue',
    image: '/projects/thesis.jpg',
    behanceUrl: 'https://www.behance.net/alameenaderibigbe',
    client: 'TheSIS Education Group',
    role: 'Principal Product Architect & UX Lead',
    timeline: '16 Weeks',
    deliverables: ['167 Production Screens', 'Atomic Design Library', 'Tutor Dashboard Prototype', 'Design Tokens'],
    overview: 'TheSIS is an enterprise-scale educational application tailored for self-paced professional certifications and collaborative learning cohorts across developing digital economies.',
    challenge: 'Architecting an expansive syllabus containing video lectures, interactive coding labs, offline flashcards, and student discussion forums without disorienting beginner learners.',
    approach: 'Created an atomic component ecosystem with strict accessibility standards (WCAG AAA), modular chapter nodes, and an engaging mastery-based progression ladder.',
    solution: 'Built a 167-screen modular mobile application featuring low-bandwidth video modes, distraction-free reading states, and peer code critique rooms.',
    impact: [
      'Comprehensive 167-screen library delivered on schedule for engineering kickoff',
      'Over 92% course completion rate among beta cohort participants',
      'Zero design debt with fully documented token system in Figma',
    ],
    keyFeatures: [
      {
        title: 'Adaptive Mastery Pathways',
        description: 'Skill assessments that dynamically calibrate practice question difficulty based on student retention curves.',
      },
      {
        title: 'Low-Bandwidth Learning Mode',
        description: 'Optimized vector-first diagrams and compressed audio lessons enabling smooth learning on 3G connections.',
      },
    ],
  },
  {
    slug: 'ivote',
    title: 'IVote',
    categories: ['Brand Identity Design'],
    year: '2026',
    summary: 'Foundational branding for a SaaS product built around elections and multi-tenant use cases.',
    description: 'A foundational brand identity project for a SaaS product, translating a complex product proposition into a clearer, more mature visual system.',
    tags: ['Brand strategy', 'Identity', 'SaaS', 'Civic Tech'],
    tone: 'blue',
    image: '/projects/ivote.jpg',
    behanceUrl: 'https://www.behance.net/alameenaderibigbe',
    client: 'IVote Technologies',
    role: 'Brand Identity Lead & Creative Director',
    timeline: '6 Weeks',
    deliverables: ['Visual Identity System', 'Brand Guidelines (80 pages)', 'Marketing Collateral', 'Pitch Deck'],
    overview: 'IVote provides institutional election infrastructure for universities, professional bodies, and cooperative societies requiring verifiable, tamper-evident ballots.',
    challenge: 'Civic voting technology requires absolute visual authority and neutrality; any frivolous or overly playful branding would undermine democratic trust.',
    approach: 'Crafted a typographic and geometric identity centered on the convergence of civic duty and cryptographic precision—employing deep navy, crisp white, and an electric verification blue.',
    solution: 'A modern, enduring identity system featuring an iconic biometric ballot mark, clean editorial grid layouts, and an unambiguous tone of voice.',
    impact: [
      'Successfully deployed across 14 institutional and student union elections',
      'Facilitated seed funding round presentation to enterprise investors',
      'Unified marketing and product UI under a unified design language',
    ],
    keyFeatures: [
      {
        title: 'Monolithic Geometric Logomark',
        description: 'Constructed from overlapping ballot rectangles forming a subtle letter V and cryptographic checkmark.',
      },
      {
        title: 'Multi-Tenant Theming Guidelines',
        description: 'System rules allowing client institutions to co-brand the voting portal without diluting IVote core trust marks.',
      },
    ],
  },
  {
    slug: 'amaan',
    title: 'Amaan',
    categories: ['Brand Identity Design'],
    year: '2026',
    summary: 'Setting their footprint in their industry through a clearer and more credible identity.',
    description: 'Designed a cohesive brand architecture to support long-term credibility and growth for a borehole and geotechnical services company.',
    tags: ['Brand strategy', 'Identity system', 'Art direction', 'Engineering'],
    tone: 'dark',
    image: '/projects/amaan.jpg',
    behanceUrl: 'https://www.behance.net/alameenaderibigbe',
    client: 'AMAAN Geotechnical Engineering',
    role: 'Brand Strategist & Identity Designer',
    timeline: '7 Weeks',
    deliverables: ['Corporate Identity', 'Field Equipment Livery', 'Site Signage', 'Technical Documentation Templates'],
    overview: 'AMAAN is an infrastructure firm delivering water engineering, geological surveys, and borehole drilling for commercial agriculture and municipal governments.',
    challenge: 'The geotechnical sector is saturated with generic water droplet icons and dated clip-art aesthetics. AMAAN needed to look like a multimillion-dollar civil engineering partner.',
    approach: 'Drew inspiration from geological strata layers, underground hydrology vectors, and heavy-duty drilling drill-bits to produce an assertive, engineering-grade visual system.',
    solution: 'Devised a high-contrast industrial identity featuring bold technical sans typography, rugged earth-mineral tones, and durable vehicle/apparel livery.',
    impact: [
      'Secured 3 major municipal water treatment contracts within 6 months of rollout',
      'Significantly raised perceived value and pricing leverage against legacy competitors',
      'Praise from engineering teams for clear, usable technical report templates',
    ],
    keyFeatures: [
      {
        title: 'Strata Monogram',
        description: 'An architectural glyph representing downward penetration through earth strata to discover pristine water sources.',
      },
      {
        title: 'High-Visibility Livery System',
        description: 'Durable reflective signage and fleet vehicle graphics designed for harsh fieldwork and remote construction environments.',
      },
    ],
  },
  {
    slug: 'shopmaxxi',
    title: 'ShopMaxxi Rebrand',
    categories: ['Brand Identity Design'],
    year: '2025',
    summary: 'Repositioning an e-commerce brand for scale and better conversion.',
    description: 'Repositioned the brand and rebuilt the identity system to align perception with their ambition.',
    tags: ['Brand strategy', 'Identity', 'Art direction', 'Retail'],
    tone: 'warm',
    image: '/projects/shopmaxxi.jpg',
    behanceUrl: 'https://www.behance.net/alameenaderibigbe',
    client: 'ShopMaxxi Retail Group',
    role: 'Brand Designer & Art Director',
    timeline: '6 Weeks',
    deliverables: ['Rebrand Strategy', 'Packaging & Box Design', 'Digital Brand Book', 'Social Motion Assets'],
    overview: 'ShopMaxxi is a rapidly expanding omni-channel retailer providing lifestyle essentials, modern electronics, and home goods across West Africa.',
    challenge: 'As the brand expanded from an Instagram storefront to multi-city distribution centers, its scrappy startup identity began causing friction with premium retail partners.',
    approach: 'Conducted customer perception research, streamlined the messy product categorization, and engineered a vibrant, friendly, yet elevated retail visual language.',
    solution: 'Designed a dynamic, smile-inflected wordmark, tactile packaging sleeves, and high-energy social templates that drove dramatic brand recall.',
    impact: [
      '+55% increase in unboxing shares on social channels',
      '31% increase in repeat customer retention within 90 days',
      'Seamlessly onboarded 40+ international retail vendors',
    ],
    keyFeatures: [
      {
        title: 'Expressive Unboxing Suite',
        description: 'Custom-printed biodegradable boxes, kraft tape, and thank-you cards creating an unforgettable customer touchpoint.',
      },
      {
        title: 'Modular Color Matrix',
        description: 'Distinctive packaging colorways for beauty, electronics, and home categories that stand out on warehouse shelves.',
      },
    ],
  },
  {
    slug: 'melaq',
    title: 'Melaq',
    categories: ['Brand Identity Design'],
    year: '2026',
    summary: 'A brand and visual experience developed as one connected visual system.',
    description: 'A combined identity and digital design project where visual direction, editorial content and brand expression work together.',
    tags: ['Brand identity', 'Art direction', 'Editorial', 'Visual system'],
    tone: 'warm',
    image: '/projects/melaq.jpg',
    behanceUrl: 'https://www.behance.net/alameenaderibigbe',
    client: 'Melaq Studio',
    role: 'Creative Director & Brand Designer',
    timeline: '5 Weeks',
    deliverables: ['Brand Architecture', 'Typography Selection', 'Editorial Layouts', 'Stationery Suite'],
    overview: 'Melaq is an artisan interior styling and architectural consultancy specializing in natural textures, understated luxury, and sustainable residential sanctuaries.',
    challenge: 'Capturing the sensory warmth of stone, timber, and linen in a two-dimensional visual system without falling into sterile minimalism.',
    approach: 'Selected warm tactile paper stocks, earth-grounded neutral hues, and an exquisite serif typography pairing that breathes elegance and quiet confidence.',
    solution: 'A cohesive brand universe that translates gracefully from embossed business cards and portfolio lookbooks to digital presentations.',
    impact: [
      'Positioned Melaq to command luxury tier design fees in premier real estate markets',
      'Featured in 2 leading African architecture and design curation journals',
    ],
    keyFeatures: [
      {
        title: 'Bespoke Typographic Pairing',
        description: 'Harmonious interplay between an editorial transitional serif and a crisp, humanist geometric sans.',
      },
      {
        title: 'Tactile Material Guidelines',
        description: 'Rigorous specifications for foil stamping, blind debossing, and cotton-blend stationery.',
      },
    ],
  },
  {
    slug: 'elane',
    title: 'Élane',
    categories: ['Web Design'],
    year: '2026',
    summary: 'An editorial digital flagship crafted for an avant-garde fashion and fragrance house.',
    description: 'A bespoke web experience combining fluid motion, high-fashion art direction, and seamless e-commerce performance.',
    tags: ['Web design', 'Art direction', 'Interactive', 'E-commerce'],
    tone: 'purple',
    image: '/projects/elane.jpg',
    behanceUrl: 'https://www.behance.net/alameenaderibigbe',
    client: 'Élane Parfums & Atelier',
    role: 'Lead Web Designer & Art Director',
    timeline: '8 Weeks',
    deliverables: ['Responsive Web Design', 'Interactive Fragrance Finder', 'Design System', 'Micro-Interactions'],
    overview: 'Élane is a boutique luxury fragrance and couture maison that wanted their digital presence to feel like stepping into a private Parisian gallery.',
    challenge: 'Luxury buyers often find traditional grid e-commerce platforms clinical and devoid of emotion. Élane needed a poetic, immersive digital flagship that still converted effortlessly.',
    approach: 'Introduced generous whitespace, sensual editorial typography, full-bleed scent atmosphere videos, and an interactive olfactory note diagnostic tool.',
    solution: 'Crafted a fast, responsive web experience with bespoke page transitions, subtle cursor gestures, and a discreet, high-converting side drawer checkout.',
    impact: [
      '+48% average session duration as visitors explored fragrance profiles',
      'Over 2.8x higher average order value compared to their previous shopfront',
      'Recognized for exceptional typographic balance on design curation showcases',
    ],
    keyFeatures: [
      {
        title: 'Olfactory Notes Matrix',
        description: 'Interactive visual wheel mapping top, heart, and base notes with ambient gradient transitions.',
      },
      {
        title: 'Quiet Checkout Drawer',
        description: 'Non-disruptive, friction-free purchase flow preserving immersive browsing while accelerating conversions.',
      },
      {
        title: 'Fluid Editorial Storytelling',
        description: 'Asymmetric grid systems with smooth parallax layering that bring the artisanal atelier process to life.',
      },
    ],
  },
  {
    slug: 'fomlor',
    title: 'Fomlor',
    categories: ['Web Design'],
    year: '2026',
    summary: 'A high-conversion developer platform web experience for an AI workflow automation engine.',
    description: 'A technical yet remarkably accessible web platform designed to translate complex API pipelines into undeniable enterprise value.',
    tags: ['Web design', 'B2B SaaS', 'Design systems', 'Developer UX'],
    tone: 'dark',
    image: '/projects/fomlor.jpg',
    behanceUrl: 'https://www.behance.net/alameenaderibigbe',
    client: 'Fomlor Inc.',
    role: 'Principal Web Designer & UI Architect',
    timeline: '9 Weeks',
    deliverables: ['Marketing Web Experience', 'Interactive Sandbox UI', 'Component Library', 'Dark/Light Theme'],
    overview: 'Fomlor provides enterprise engineering teams with autonomous workflow orchestration, connecting complex multi-cloud microservices with natural language prompts.',
    challenge: 'Developer tools frequently lean either too dry with endless terminal snippets or too buzzword-heavy without showing actual implementation code. Fomlor needed to win both CTOs and skeptical staff engineers.',
    approach: 'Crafted an interactive live code sandbox directly on the homepage, allowing developers to inspect real JSON outputs, pipeline latencies, and workflow graphs before signing up.',
    solution: 'A high-performance web experience pairing dark cybernetic aesthetics with razor-sharp typography, interactive architecture diagrams, and instant benchmark comparisons.',
    impact: [
      '52% lift in developer signup conversion within 30 days of release',
      'Over 14,000 interactive sandbox queries executed on the landing page',
      'Sub-800ms page load speeds worldwide achieved through meticulous asset tuning',
    ],
    keyFeatures: [
      {
        title: 'Live Interactive API Sandbox',
        description: 'Direct in-browser code editor letting developers test workflow endpoints without creating an account.',
      },
      {
        title: 'Dynamic Microservice Topology',
        description: 'Animated SVG network graph demonstrating load-balancing and autonomous failover scenarios in real time.',
      },
      {
        title: 'Developer Documentation Hub',
        description: 'Keyboard-shortcut-driven documentation with multi-language copyable snippets (Python, TypeScript, Go).',
      },
    ],
  },
  {
    slug: 'tasty-bite',
    title: 'Tasty Bite',
    categories: ['Web Design'],
    year: '2026',
    summary: 'A vibrant culinary web portal connecting artisanal food producers with neighborhood food lovers.',
    description: 'A mouthwatering, fast-paced web platform designed to spotlight local food makers, seasonal menus, and rapid neighborhood delivery.',
    tags: ['Web design', 'Responsive UI', 'Food & Beverage', 'E-commerce'],
    tone: 'warm',
    image: '/projects/tasty-bite.jpg',
    behanceUrl: 'https://www.behance.net/alameenaderibigbe',
    client: 'Tasty Bite Artisans',
    role: 'Web Designer & Interaction Specialist',
    timeline: '6 Weeks',
    deliverables: ['Desktop & Mobile Web Portal', 'Vendor Showcase Pages', 'Cart & Reservation Engine'],
    overview: 'Tasty Bite champions independent bakers, small-batch fermenters, and chef-led popups through a hyper-local web marketplace.',
    challenge: 'Traditional food delivery platforms bury maker stories under corporate branding and algorithmically penalize independent kitchens. Tasty Bite needed a warm, community-first marketplace.',
    approach: 'Utilized rich, appetizing macro photography, lively typography, and an interactive neighborhood map showing freshest bakes and kitchen countdown timers.',
    solution: 'An energetic, responsive web destination that makes discovering local flavors joyful, with instant pickup reservation and same-day delivery scheduling.',
    impact: [
      '4.9/5 user rating on ease of navigation across mobile and tablet devices',
      'Empowered 80+ local food artisans to launch digital storefronts with zero technical overhead',
      '63% repeat order rate during first 60 days of platform launch',
    ],
    keyFeatures: [
      {
        title: 'Freshness Countdown Clock',
        description: 'Live alerts showing when local bakeries pull fresh sourdough or croissants out of the oven.',
      },
      {
        title: 'Maker Story Modules',
        description: 'Video-integrated profile cards spotlighting the farmers, chefs, and provenance behind every dish.',
      },
      {
        title: 'One-Tap Re-order Pocket',
        description: 'Streamlined saved-favorites drawer engineered for lightning-quick weekday lunches.',
      },
    ],
  },
  {
    slug: 'cellowatt',
    title: 'Cellowatt',
    categories: ['Brand Identity Design', 'Web Design'],
    year: '2026',
    summary: 'A consultation-first solar brand and digital experience built around expertise, transparency and dependable clean energy.',
    description: 'A cohesive brand identity and web experience for a solar energy consultation and installation company, communicating trustworthy expertise and accessible sustainability.',
    tags: ['Brand identity', 'Web design', 'Clean energy', 'System design'],
    tone: 'green',
    image: '/projects/cellowatt.jpg',
    behanceUrl: 'https://www.behance.net/alameenaderibigbe',
    client: 'Cellowatt Solar Systems',
    role: 'Brand Identity & Web Designer',
    timeline: '10 Weeks',
    deliverables: ['Brand Identity System', 'Marketing Website', 'Interactive Solar Savings Calculator', 'Proposals System'],
    overview: 'Cellowatt provides residential and commercial solar installations, battery storage microgrids, and consultative energy audits across emerging power markets.',
    challenge: 'Homeowners and factory managers find solar proposals opaque, full of jargon, and clouded by unreliable ROI promises. Cellowatt needed an honest, education-first digital presence.',
    approach: 'Created an intelligent Solar Yield Calculator on the web platform, giving prospective clients immediate, transparent cost-benefit breakdowns based on their roof size and electrical bills.',
    solution: 'A clean, sun-infused identity paired with a high-performing web application that simplifies complex energy metrics into actionable homeowner savings.',
    impact: [
      '+74% increase in qualified consultation bookings via the interactive calculator',
      'Average deal closing velocity accelerated by 18 days due to pre-educated clients',
      'Zero drop-offs observed across mobile quoting funnel during user testing',
    ],
    keyFeatures: [
      {
        title: 'Interactive Rooftop Solar Calculator',
        description: 'Custom slider calculating expected kilowatt generation, battery requirements, and payback timeline.',
      },
      {
        title: 'Sunlight-First Design System',
        description: 'High-contrast solar palette of botanical forest green, radiant gold, and airy porcelain white.',
      },
      {
        title: 'Transparent Hardware Comparison Matrix',
        description: 'Unbiased side-by-side breakdowns of inverter warranties, tier-1 panel degradation, and battery chemistry.',
      },
    ],
  },
];

export const testimonials = [
  {
    quote: 'This is the most impressive borehole drilling and geotechnical services branding I have encountered so far, distinguished by its captivating presentation, persuasive content, and exceptionally well-organized structure.',
    name: 'Odemakin Sodiq',
    role: 'GM & Technical Lead, AMAAN',
  },
  {
    quote: 'Working with you was easily one of the best decisions I’ve made for this project. I approached you with scattered ideas that I couldn’t quite make sense of; you managed to convert that raw energy into a matured, future-proof brand.',
    name: 'Abdul-Azeez Abdul-Azeem S.',
    role: 'Software Engineer, IVote',
  },
  {
    quote: 'Al-ameen transformed DynaRaise from a complex wireframe into an intuitive, high-trust giving experience. His understanding of donor psychology, behavioral friction, and mobile UX elevated our entire platform.',
    name: 'Tunde Balogun',
    role: 'Product Lead, DynaRaise',
  },
  {
    quote: 'The web experience Al-ameen created for Élane immediately positioned us as leaders in the luxury space. His command of typographic rhythm, responsive interaction, and storytelling is world-class.',
    name: 'Sarah Jenkins',
    role: 'Co-Founder & CMO, Élane',
  },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  read: string;
  excerpt: string;
  image: string;
  author: string;
  tags: string[];
  seoDescription: string;
  content: {
    lead: string;
    sections: {
      heading: string;
      paragraphs: string[];
      quote?: string;
    }[];
    takeaways: string[];
  };
};

export const posts: Post[] = [
  {
    slug: 'designing-for-trust',
    title: 'Designing for trust, not decoration',
    date: 'Sep 2026',
    read: '6 min read',
    excerpt: 'Why clarity, proof and friction management matter when people are making decisions inside a digital product.',
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80',
    author: 'Al-ameen Aderibigbe',
    tags: ['Product Design', 'UX Psychology', 'Trust Systems'],
    seoDescription: 'Discover why genuine trust in digital products is built through information clarity, predictable interactions, and intentional friction rather than decorative polish.',
    content: {
      lead: 'In product design, there is a dangerous temptation to substitute visual beauty for trustworthiness. We drape gradients, glassmorphism, and smooth animations over workflows that are fundamentally confusing—and then wonder why users hesitate at checkout or abandon onboarding.',
      sections: [
        {
          heading: 'The Illusion of Aesthetic Trust',
          paragraphs: [
            'A beautiful interface creates an initial halo effect. It signals that someone cared enough to hire competent craftspeople. But aesthetic trust is paper-thin; it evaporates the moment a user encounters an unexpected charge, an ambiguous button label, or a setting that cannot be undone.',
            'Genuine trust is structural. It is the quiet confidence that the system is not trying to trick you, that errors are easily recoverable, and that sensitive actions are treated with appropriate gravity.',
          ],
          quote: 'Aesthetic polish earns curiosity; operational clarity earns long-term commitment.',
        },
        {
          heading: 'Friction as an Intentional Design Tool',
          paragraphs: [
            'For the past decade, product dogma preached that all friction is evil. We were told to eliminate every click, automate every default, and grease the funnel at all costs. But when dealing with money, personal data, or permanent commitments, zero friction feels reckless.',
            'Intentional friction—such as requiring a confirmation step for irreversible actions, providing transparent summary cards before payments, or clearly breaking down fee structures—slows the user down just enough to restore agency. That deliberate pause communicates respect, not hindrance.',
          ],
        },
        {
          heading: 'The Three Pillars of Trust Architecture',
          paragraphs: [
            'First is radical clarity: tell people exactly what will happen before they click, what has happened while they wait, and what to expect next. Avoid passive corporate jargon like "Processing Request" when you can say "Verifying bank details with your provider (approx 10s)".',
            'Second is predictability: UI controls must behave according to established mental models. Destructive buttons should look destructive; secondary actions must not compete for primary attention.',
            'Third is reversibility: users explore freely and trust deeply when they know they can backtrack. Give them undo toasts, drafted state preservation, and straightforward cancellation routes.',
          ],
        },
      ],
      takeaways: [
        'Beauty without transparency generates suspicion, not loyalty.',
        'Use friction thoughtfully to protect users during high-stakes choices.',
        'Clarify consequences before confirmation rather than apologizing in post-error modals.',
        'Reversibility is the greatest antidote to user anxiety.',
      ],
    },
  },
  {
    slug: 'brand-and-product',
    title: 'Where brand identity meets product design',
    date: 'Sep 2026',
    read: '5 min read',
    excerpt: 'A practical look at the relationship between what a brand promises and what a product actually delivers.',
    image: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80',
    author: 'Al-ameen Aderibigbe',
    tags: ['Brand Strategy', 'Product Architecture', 'Design Systems'],
    seoDescription: 'Bridging the divide between brand marketing and product UX: how to translate brand strategy into everyday user interactions and interface components.',
    content: {
      lead: 'In most organizations, brand identity and product design live in separate silos. Brand teams craft grand manifestos, billboard campaigns, and logo guidelines; product teams build dashboards, modals, and design tokens. When these worlds do not speak, the user experiences a jarring split personality.',
      sections: [
        {
          heading: 'The Promise Versus the Reality',
          paragraphs: [
            'Your brand is not what you tell people in a pitch deck; it is the feeling they have when your app freezes, when an empty state stares back at them, or when they try to export their data. Brand is the promise; product is the proof.',
            'When a brand promises effortless collaboration but the invitation flow requires 14 form inputs and an email confirmation loop, the brand promise collapses instantly. Every UI micro-interaction is either depositing credibility into your brand bank or withdrawing from it.',
          ],
          quote: 'A brand is simply the sum of all delivered product realities.',
        },
        {
          heading: 'Brand Expressions Inside the Interface',
          paragraphs: [
            'Infusing brand into a digital product does not mean plastering your primary brand color on every container or putting your logo in the corner of every screen. It means imbuing the interaction model with your brand values.',
            'If your brand stands for precision, your data tables should load snappily with monospace figures and keyboard shortcuts. If your brand stands for warmth, your empty states should offer constructive encouragement rather than dead-end illustrations.',
          ],
        },
        {
          heading: 'Unified Token Architecture',
          paragraphs: [
            'The practical solution begins in the design system. Brand strategy must define typography scale, motion curves, spacing density, and voice guidelines that feed directly into software design tokens.',
            'When brand designers and software engineers share a common grammar, product releases naturally reinforce brand equity without sacrificing accessibility or usability.',
          ],
        },
      ],
      takeaways: [
        'Brand promises must be directly verified by product workflows.',
        'Express brand personality through interaction rhythm, micro-copy, and responsiveness rather than logo placement.',
        'Build a single token pipeline unifying marketing art direction and UI component libraries.',
      ],
    },
  },
  {
    slug: 'less-but-better',
    title: 'Less, but better: building a minimal portfolio',
    date: 'Sep 2026',
    read: '4 min read',
    excerpt: 'The thinking behind a portfolio that uses fewer pages, stronger hierarchy and more room for the work.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80',
    author: 'Al-ameen Aderibigbe',
    tags: ['Portfolio Design', 'Minimalism', 'Design Craft'],
    seoDescription: 'Insights into designing a focused, high-impact design portfolio using radical editorial curation, disciplined typography, and zero decorative bloat.',
    content: {
      lead: 'The modern design portfolio has become bloated. Between 3D canvas backgrounds, auto-playing video reels, parallax scroll-jacking, and dozens of half-finished student concepts, the actual thinking of the designer often gets lost in the noise.',
      sections: [
        {
          heading: 'The Case for Radical Editorial Curation',
          paragraphs: [
            'Hiring managers and founders do not have 30 minutes to dissect 25 projects. They want to know three things in under two minutes: Can you frame problems clearly? Can you design systems that scale? Do you care deeply about execution craft?',
            'Showing 4 rigorous, comprehensive case studies is infinitely more powerful than displaying 12 superficial galleries. When you cut the fluff, you force yourself to defend the projects that actually define your capability.',
          ],
          quote: 'Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.',
        },
        {
          heading: 'Hierarchy Over Decoration',
          paragraphs: [
            'A minimal portfolio does not mean a sterile, boring one. It means leaning hard into timeless fundamentals: exceptional typographic scale, deliberate grid structures, generous negative space, and lightning-fast page transitions.',
            'When you strip away gratuitous decorative ornaments, typography and imagery have room to sing. The work itself becomes the visual texture of the website.',
          ],
        },
        {
          heading: 'The Engineering Discipline Behind Simplicity',
          paragraphs: [
            'A clean portfolio should also be a testament to technical restraint. Clean semantic HTML, strict TypeScript typing, responsive layouts without layout shifts, and zero client-side JavaScript bloat are markers of mature product stewardship.',
          ],
        },
      ],
      takeaways: [
        'Curate ruthlessly: your portfolio is only as strong as your weakest project.',
        'Let typographic hierarchy and white space do the heavy visual lifting.',
        'Frame case studies around the problem, the operational system, and verifiable results.',
        'Fast, accessible, and responsive beats fancy animations every single time.',
      ],
    },
  },
];
