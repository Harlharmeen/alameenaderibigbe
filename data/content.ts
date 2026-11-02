export type ProjectCategory = 'UI/UX Design' | 'Brand Identity Design' | 'Web Design' | 'Incoming-Casestudy';

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
    summary: 'A human-centred fundraising experience designed to make discovering, evaluating and supporting campaigns clearer and more trustworthy.',
    description: 'A mobile fundraising experience focused on campaign discovery, donor decision-making, fundraiser credibility and a clearer end-to-end donation journey.',
    tags: ['UX/UI', 'Product Design', 'Design System', 'Mobile App'],
    tone: 'dark',
    image: '/projects/dynaraise.jpg',
    behanceUrl: 'https://www.behance.net/gallery/255761419/DynaRaise-Fundraising-Mobile-App',
    client: 'DynaRaise',
    role: 'Product Designer (UX/UI & Product Strategy)',
    timeline: '2026',
    deliverables: ['Mobile App UI/UX', 'Design System', 'User Flows', 'Interactive Prototypes'],
    overview: 'DynaRaise is an ethical fundraising platform that helps individuals and communities raise support for legitimate causes, including medical needs, education, scholarships, mosque projects and community development. The mobile app was designed to make the process of discovering campaigns, understanding their legitimacy and making donations feel simple and trustworthy.',
    challenge: 'The experience needed to balance the needs of donors and fundraisers while reducing uncertainty around campaigns. Donors needed enough information to confidently evaluate a campaign, while fundraisers needed a clear path to present their causes and build credibility.',
    approach: 'I mapped the core donor journey and structured the product around clear information hierarchy, campaign discovery and trust-building moments. The experience was developed across onboarding, home and explore experiences, search and category discovery, campaign details, organizer profiles, saved campaigns and the complete donation flow.',
    solution: 'The resulting mobile experience provides a structured path from campaign discovery to donation. Campaign pages surface key information such as progress, impact and organizer details, while verification and profile elements help users evaluate campaigns before giving. The wider donation journey covers donation amount, frequency, payment, review and success states.',
    impact: [
      'Created a clearer end-to-end mobile donation journey',
      'Structured campaign discovery around search, categories and personalized exploration',
      'Established a consistent mobile design system',
    ],
    keyFeatures: [
      {
        title: 'Campaign Discovery & Exploration',
        description: 'Home, Explore, Search and Category experiences help donors discover relevant fundraising campaigns and navigate causes more easily.',
      },
      {
        title: 'Campaign & Organizer Transparency',
        description: 'Campaign details and organizer profiles bring important campaign information, progress, impact and credibility signals closer to the point of decision.',
      },
      {
        title: 'Structured Donation Journey',
        description: 'A guided flow takes donors from selecting an amount and donation frequency through payment, review and successful completion.',
      },
    ],
  },
  {
    slug: 'alam-eats',
    title: 'Alam Eats',
    categories: ['UI/UX Design'],
    year: '2026',
    summary: 'A food-ordering mobile experience designed to make discovering meals, placing orders and tracking deliveries simple and intuitive.',
    description: 'A self-initiated product design project exploring the complete food-ordering journey, from restaurant discovery and menu exploration to checkout, delivery tracking and post-order interactions.',
    tags: ['UX/UI', 'Product Design', 'Mobile App', 'Interaction Design'],
    tone: 'warm',
    image: '/projects/alam-eats.jpg',
    behanceUrl: 'https://www.behance.net/gallery/257585031/Alam-Eats',
    client: 'Self-Initiated',
    role: 'Product Designer (UX/UI)',
    timeline: '2026',
    deliverables: ['Mobile App UI/UX', 'User Flows', 'High-Fidelity Interfaces', 'Interactive Prototype'],
    overview: 'Alam Eats is a food-ordering mobile app concept designed around a straightforward journey from discovering what to eat to receiving an order. The experience brings restaurant discovery, menus, food customisation, checkout and order management into a cohesive mobile interface.',
    challenge: 'The experience needed to make a multi-step food-ordering process feel clear without overwhelming the user. The design had to account for different stages of the journey, including evaluating menu items, customising food, managing an order and tracking its progress.',
    approach: 'I structured the product around the core journey of Discover → Decide → Order → Reassure. The experience was mapped across discovery, search and categories, restaurant menus, food details and customisation, cart, address and payment, order confirmation, tracking, delivery, order history and account management.',
    solution: 'The final concept provides an end-to-end mobile ordering experience with clear navigation and consistent interaction patterns across the major stages of the journey. Supporting screens extend the experience into order history, ratings, cancellations and profile management, creating a more complete product ecosystem.',
    impact: [
      'Designed an end-to-end food-ordering experience from discovery to delivery',
      'Created a structured information architecture covering ordering, account and post-order experiences',
      'Established consistent mobile UI patterns across discovery, menus, checkout and order management',
    ],
    keyFeatures: [
      {
        title: 'Menu Discovery',
        description: 'Home, Explore, Search and Category experiences help users discover restaurants and navigate available meals through a structured mobile interface.',
      },
      {
        title: 'Food Customisation & Checkout',
        description: 'Food detail and customisation screens lead into a structured cart and checkout experience covering address, payment and order confirmation.',
      },
      {
        title: 'Order Tracking & Management',
        description: 'Users can follow an active order through its delivery journey while also accessing order history, ratings, cancellation options and account settings.',
      },
    ],
  },
  {
slug: 'breezy-ride',
title: 'Breezy Ride',
categories: ['UI/UX Design','Incoming-Casestudy'],
year: '2026',
summary: 'A ride-hailing mobile experience designed to make booking, navigation and ride tracking feel clear and effortless.',
description: 'A mobility product design concept focused on simplifying the passenger journey across location selection, ride booking, driver matching and active trip tracking.',
tags: ['UX/UI', 'Product Design', 'Mobile App', 'Interaction Design'],
tone: 'blue',
image: '/projects/breezy-ride.jpg',
behanceUrl: '/',
client: 'Self-Initiated',
role: 'Product Designer (UX/UI)',
timeline: '2026',
deliverables: ['Passenger App UI/UX', 'Ride Booking Flow', 'Interactive Prototype'],
overview: 'Breezy Ride is a ride-hailing mobile app concept exploring a cleaner and more straightforward experience for passengers. The product focuses on helping users choose their destination, review ride options, confirm a booking and stay informed throughout the trip.',
challenge: 'Ride-hailing involves several decisions within a relatively short interaction: selecting a destination, confirming a pickup location, choosing a ride option, reviewing the fare and following the trip. The design needed to keep these steps understandable without making the interface feel crowded.',
approach: 'I structured the experience around the core passenger journey, prioritising location, route and ride information at each stage. The interface was designed to progressively reveal relevant information as users move from destination selection to ride confirmation and active trip tracking.',
solution: 'The resulting concept combines map-based navigation with a focused booking flow, clear ride information and visible trip status. The experience extends from choosing a pickup and destination through ride selection, driver matching, active trip tracking and completion.',
impact: [
'Created a clearer end-to-end passenger journey from destination selection to trip completion',
'Simplified the presentation of ride, route and booking information within a map-based interface',
'Established a consistent mobile interaction system across booking and active ride states',
],
keyFeatures: [
{
title: 'Map-Based Ride Booking',
description: 'A focused map experience allows passengers to select locations, review routes and move through the booking process without unnecessary interface clutter.',
},
{
title: 'Ride Selection & Confirmation',
description: 'Users can review available ride options and key trip information before confirming their booking.',
},
{
title: 'Active Ride Tracking',
description: 'A dedicated trip experience keeps important information visible while the passenger follows the ride from driver matching through arrival.',
},
],
  },
  {
    slug: 'thesis',
    title: 'TheSIS Learner App',
    categories: ['UI/UX Design', 'Incoming-Casestudy'],
    year: '2026',
    summary: 'A 167-screen learner mobile experience designed around structured learning, discovery, practice and progress.',
    description: 'A comprehensive mobile MVP design for a learning platform, covering learner journeys, navigation, course discovery, learning activities and supporting product experiences.',
    tags: ['Product Design', 'UX Architecture', 'UI System', 'EdTech'],
    tone: 'blue',
    image: '/projects/thesis.jpg',
    behanceUrl: '/',
    client: 'TheSIS',
    role: 'Product Designer (UX/UI & Design System)',
    timeline: '2026',
    deliverables: ['167 Mobile Screens', 'Mobile Design System', 'User Flows', 'Interactive Prototypes'],
    overview: 'TheSIS is a learner-focused mobile education platform designed to bring course discovery, structured learning and learner progress into a cohesive digital experience. The MVP was designed as a broad mobile product system covering the major interactions a learner would encounter across the platform.',
    challenge: 'Designing a large learning product required maintaining consistency across a substantial number of screens while keeping navigation and learning interactions understandable. The experience needed a scalable visual system that could support different areas of the product without making the interface feel repetitive or disconnected.',
    approach: 'I structured the product architecture around the learner journey and established a consistent mobile framework for navigation, content, learning activities and supporting interactions. The design system was developed around a 402 × 874px mobile frame, 16px margins, a 4-column grid and an 8px spacing system, with Manrope for headlines and Inter for body content.',
    solution: 'The result is a 167-screen mobile MVP covering the core learner experience across discovery, course exploration, learning content, progress and supporting product states. A consistent component and visual system ties the screens together while allowing different learning experiences to remain clear and purposeful.',
    impact: [
      'Designed a comprehensive 167-screen mobile MVP for the learner experience',
      'Established a reusable mobile design system to maintain consistency across the product',
      'Created a structured product architecture spanning discovery, learning, progress and supporting experiences',
    ],
    keyFeatures: [
      {
        title: 'Structured Learning Experience',
        description: 'Course and learning interfaces are organised to help learners move through educational content with clear hierarchy, progress cues and focused interaction states.',
      },
      {
        title: 'Scalable Mobile Design System',
        description: 'A defined grid, spacing system, typography and reusable UI components provide consistency across the 167-screen product experience.',
      },
      {
        title: 'Learner-Centred Navigation',
        description: 'The product architecture connects discovery, learning and progress into a coherent mobile journey, giving learners clear routes between key areas of the platform.',
      },
    ],
  },
  {
    slug: 'melaq',
    title: 'Melaq',
    categories: ['Brand Identity Design'],
    year: '2026',
    summary: 'A premium skincare identity built around precision, calm and a modular visual system.',
    description: 'A brand identity and digital design project for a modern skincare brand, combining an intelligent visual identity with a warm, refined and contemporary brand expression.',
    tags: ['Brand Identity', 'Art Direction', 'Packaging', 'Digital Design'],
    tone: 'warm',
    image: '/projects/melaq.jpg',
    behanceUrl: 'https://www.behance.net/gallery/250448123/MELAQ-Skincare-Brand-Identity',
    client: 'Melaq',
    role: 'Brand Designer',
    timeline: '2026',
    deliverables: ['Visual Identity', 'Logo Design', 'Typography & Colour System', 'Packaging Direction', 'Digital Experience'],
    overview: 'MELAQ is a modern precision-skincare brand developed around the idea of intelligent, restorative care. The identity balances clinical credibility with warmth and softness, creating a visual language that feels calm, intentional and contemporary.',
    challenge: 'The challenge was to create a skincare identity that could communicate precision and intelligence without becoming overly clinical or generic. The brand needed to feel premium and distinctive while retaining a sense of warmth, simplicity and approachability.',
    approach: 'I developed the identity around a modular visual concept inspired by Centella Asiatica, abstracting the organic form into a more refined geometric structure. The connected modules represent the relationship between individual products within a skincare routine, while the overall system communicates balance, continuity and synergy.',
    solution: 'The resulting identity combines a distinctive modular logomark with a considered typography and colour system that can extend across packaging, product communication and digital touchpoints. The visual language gives MELAQ a consistent foundation for expressing its precision-skincare positioning across different applications.',
    impact: [
      'Created a distinctive visual identity for a modern precision-skincare brand',
      'Developed a modular logo system that can scale across different brand applications',
      'Established a cohesive visual language spanning identity, product presentation and digital experiences',
    ],
    keyFeatures: [
      {
        title: 'Modular Brand Mark',
        description: 'A Centella-inspired form was abstracted into connected geometric modules, creating a distinctive mark that represents continuity, balance and a coordinated skincare system.',
      },
      {
        title: 'Premium Visual Language',
        description: 'The identity combines refined typography, considered colour and restrained visual elements to balance scientific credibility with warmth and contemporary luxury.',
      },
      {
        title: 'Scalable Brand System',
        description: 'The identity was developed as a flexible system that can extend across packaging, product communication, digital interfaces and other brand touchpoints.',
      },
    ],
  },
  {
    slug: 'ivote',
    title: 'IVote',
    categories: ['Brand Identity Design'],
    year: '2026',
    summary: 'A foundational brand identity for a secure e-voting SaaS product built for organisations and institutional elections.',
    description: 'A brand identity project translating a complex voting technology proposition into a professional, trustworthy and scalable visual system.',
    tags: ['Brand Identity', 'Brand Strategy', 'SaaS', 'Civic Tech'],
    tone: 'blue',
    image: '/projects/ivote.jpg',
    behanceUrl: 'https://www.behance.net/gallery/247215985/IVote-Brand-Identity',
    client: 'IVote',
    role: 'Brand Designer',
    timeline: '2026',
    deliverables: ['Visual Identity System', 'Brand Guidelines', 'Logo Design', 'Brand Applications'],
    overview: 'IVote is a secure organisational e-voting platform designed for companies, NGOs, student unions, associations, cooperatives, clubs, committees and boards. The product is built around a key principle: keeping voter identity separate from ballot data to support privacy and confidence in the voting process.',
    challenge: 'The identity needed to communicate security and institutional credibility without making the brand feel overly technical, intimidating or politically biased. It had to establish trust while remaining flexible enough to work across different organisations and election contexts.',
    approach: 'I developed the identity around the ideas of trust, neutrality, security and privacy. The visual system combines structured geometry with a restrained corporate aesthetic, while the logo concept draws from ballot and card layers, security and the idea of an intentional separation between voter identity and ballot information.',
    solution: 'The resulting identity gives IVote a clear and professional foundation for communicating its role as election infrastructure. The system extends beyond the logo into typography, colour, visual elements and brand applications, creating consistency across the different contexts in which the product can be presented.',
    impact: [
      'Established a professional visual identity for a security-focused e-voting SaaS product',
      'Translated complex product principles around privacy and secure voting into a clearer brand language',
      'Created a scalable identity system designed to remain consistent across different organisational and election contexts',
    ],
    keyFeatures: [
      {
        title: 'Security-Led Identity',
        description: 'The visual language uses structured geometry and a restrained aesthetic to communicate reliability, security and institutional confidence.',
      },
      {
        title: 'Privacy-Inspired Logo Concept',
        description: 'The logo concept references ballot and card layers, security and the deliberate separation between voter identity and ballot information.',
      },
      {
        title: 'Scalable Brand System',
        description: 'Typography, colour, supporting visual elements and application rules work together to provide a consistent identity across IVote’s digital and communication touchpoints.',
      },
    ],
  },
  {
    slug: 'amaan',
    title: 'Amaan',
    categories: ['Brand Identity Design'],
    year: '2026',
    summary: 'A professional identity designed to communicate technical expertise, reliability and credibility in geotechnical services.',
    description: 'A brand identity and digital experience for a borehole drilling and geotechnical services company, focused on creating a clearer and more professional market presence.',
    tags: ['Brand Identity', 'Brand Strategy', 'Engineering', 'Digital Design'],
    tone: 'dark',
    image: '/projects/amaan.jpg',
    behanceUrl: 'https://www.behance.net/gallery/245557567/AMAAN-Brand-Identity-Guideline',
    client: 'Amaan',
    role: 'Brand Designer & UI/UX Designer',
    timeline: '2026',
    deliverables: ['Brand Identity', 'Visual System', 'Brand Guidelines', 'Website UI/UX'],
    overview: 'Amaan is a borehole drilling and geotechnical services company providing technical solutions around groundwater, drilling and related engineering services. The project focused on building a more credible and structured brand presence that reflects the technical nature of the business.',
    challenge: 'The challenge was to move the brand beyond the generic visual language often associated with drilling and water-service companies. Amaan needed an identity that felt technical and dependable while remaining clear, modern and approachable to potential clients.',
    approach: 'I developed the identity around technical precision, reliability and the relationship between engineering and the earth. The visual direction was then extended into a structured digital experience, using strong typography, controlled spacing and an editorial approach to present Amaan’s services and expertise more clearly.',
    solution: 'The resulting brand system provides Amaan with a more cohesive visual foundation across its identity and digital presence. The accompanying website direction organises the company’s services, expertise and approach into a credibility-focused experience designed to make the business easier to understand and trust.',
    impact: [
      'Created a more professional and cohesive identity for a technical engineering business',
      'Established a visual system that communicates reliability and technical expertise without relying on generic industry aesthetics',
      'Translated the identity into a structured digital experience focused on credibility and clear service communication',
    ],
    keyFeatures: [
      {
        title: 'Technical Visual Identity',
        description: 'A structured identity system balances engineering precision with a contemporary visual language appropriate for a specialist technical services company.',
      },
      {
        title: 'Credibility-Focused Website',
        description: 'The website experience organises Amaan’s expertise, services and approach into a clear hierarchy designed to communicate capability and build confidence.',
      },
      {
        title: 'Consistent Brand System',
        description: 'Typography, colour, layout and supporting visual elements create a consistent foundation that can be applied across Amaan’s communication and digital touchpoints.',
      },
    ],
  },
  {
    slug: 'shopmaxxi',
    title: 'ShopMaxxi Rebrand',
    categories: ['Brand Identity Design'],
    year: '2025',
    summary: 'A refreshed visual identity designed to give ShopMaxxi a clearer, more confident and contemporary brand presence.',
    description: 'A rebranding project focused on refining ShopMaxxi’s visual identity and creating a more cohesive system for its digital and commercial touchpoints.',
    tags: ['Brand Identity', 'Rebranding', 'Art Direction', 'E-commerce'],
    tone: 'warm',
    image: '/projects/shopmaxxi.jpg',
    behanceUrl: 'https://www.behance.net/gallery/242903167/ShopMaxxi-Rebranding-Casestudy',
    client: 'ShopMaxxi',
    role: 'Brand Designer',
    timeline: '2025',
    deliverables: ['Brand Repositioning', 'Visual Identity', 'Art Direction', 'Brand Applications'],
    overview: 'ShopMaxxi is an e-commerce brand offering a range of products across different consumer categories. The rebranding project focused on creating a more distinctive and cohesive identity that could better represent the brand across its digital presence.',
    challenge: 'The existing identity needed greater consistency and a stronger visual character. The challenge was to create a system that could work across different product categories while keeping ShopMaxxi recognisable as one brand.',
    approach: 'I explored a more contemporary visual direction for the brand, refining its core identity and developing a flexible system that could accommodate different products and communication formats. The focus was on creating stronger visual consistency without losing the approachable character expected from an e-commerce brand.',
    solution: 'The rebrand introduced a more cohesive visual language across ShopMaxxi’s identity and brand applications. The system was designed to give the brand a clearer presence across digital communication, promotional materials and product-facing touchpoints.',
    impact: [
      'Created a more distinctive and contemporary visual identity for ShopMaxxi',
      'Improved consistency across the brand’s visual communication and applications',
      'Developed a flexible identity system capable of supporting different product categories',
    ],
    keyFeatures: [
      {
        title: 'Refined Brand Identity',
        description: 'The identity was reworked to give ShopMaxxi a clearer visual character while maintaining an approachable and commercial feel.',
      },
      {
        title: 'Flexible Visual System',
        description: 'The visual language was structured to work across different product categories without making the overall brand feel fragmented.',
      },
      {
        title: 'Digital-First Brand Expression',
        description: 'The refreshed identity provides a stronger foundation for ShopMaxxi’s online presence, promotional communication and other customer-facing applications.',
      },
    ],
  },
  {
    slug: 'cellowatt',
    title: 'Cellowatt',
    categories: ['Brand Identity Design', 'Incoming-Casestudy'],
    year: '2026',
    summary: 'A clearer and more confident brand identity for a solar energy company focused on consultation, installation and reliable power.',
    description: 'A brand identity and web design project built to position Cellowatt as a more trustworthy and accessible solar energy partner.',
    tags: ['Brand Identity', 'Web Design', 'Clean Energy', 'Visual System'],
    tone: 'green',
    image: '/projects/cellowatt-brand.jpg',
    behanceUrl: '/',
    client: 'Cellowatt Solar Solutions',
    role: 'Brand Identity & Web Designer',
    timeline: '2026',
    deliverables: ['Brand Identity System', 'Brand Strategy', 'Website Design', 'Visual Guidelines'],
    overview: 'Cellowatt is a solar energy consultation and installation company providing solar panels, batteries, inverters, electrical components and solar appliances, alongside professional installation and after-sales support. The brand was developed around the idea of making clean, reliable power more accessible and easier to understand.',
    challenge: 'The challenge was to create a brand that felt more trustworthy and professional while communicating the practical value of solar energy. Cellowatt needed to stand apart from businesses that simply sell solar equipment by presenting itself as a consultation-led partner capable of understanding each customer’s needs and designing an appropriate solution.',
    approach: 'I developed the brand around consultation, transparency and dependable energy. The identity was built through a combination of a distinctive solar-inspired logo concept, a defined colour system and a clear typographic hierarchy using Sora and Inter. The same thinking was extended into the website to create a more structured digital presence.',
    solution: 'The resulting identity combines a vibrant green with a deep green foundation and clean supporting typography to create a visual language that feels energetic without becoming overly technical. The website design extends this system into a clearer presentation of Cellowatt’s services, consultation approach and solar solutions.',
    impact: [
      'Created a clearer and more professional identity for a growing solar energy business',
      'Positioned consultation and tailored system design as central parts of the brand experience',
      'Extended the identity into a cohesive web experience for communicating Cellowatt’s services and expertise',
    ],
    keyFeatures: [
      {
        title: 'Consultation-First Positioning',
        description: 'The brand communicates Cellowatt as a partner that assesses individual energy needs and develops tailored solar solutions rather than simply selling equipment.',
      },
      {
        title: 'Distinctive Solar Identity',
        description: 'The logo concept combines solar and energy-related forms into a unified mark, supported by a vibrant #99F328, deep #1B3738 and white colour system.',
      },
      {
        title: 'Brand-to-Web System',
        description: 'The visual identity was carried into the website design, creating a consistent digital experience for presenting Cellowatt’s services, solutions and approach.',
      },
    ],
  },
  {
  slug: 'elane',
  title: 'Élane',
  categories: ['Web Design', 'Incoming-Casestudy'],
  year: '2026',
  summary: 'An editorial fashion website designed around quiet luxury and contemporary Lagos womenswear.',
  description: 'A refined web experience for a Lagos-based womenswear brand, combining editorial typography, fashion imagery and a considered shopping experience.',
  tags: ['Web design', 'Fashion', 'Editorial', 'E-commerce'],
  tone: 'purple',
  image: '/projects/elane.jpg',
  behanceUrl: '/',
  client: 'Élane',
  role: 'Web Designer',
  timeline: '2026',
  deliverables: ['Website UI/UX', 'Art Direction', 'Responsive Layouts', 'E-commerce Experience'],
  overview: 'Élane is a contemporary womenswear concept centred around refined pieces, considered materials and modern silhouettes crafted in Lagos. The website was designed to translate that quiet-luxury positioning into a polished digital storefront.',
  challenge: 'The website needed to communicate the quality and character of the clothing without overwhelming the products. The experience had to balance strong fashion imagery with clear navigation and an intuitive path into the collection.',
  approach: 'I approached the website as an editorial fashion experience, using large-scale typography, generous whitespace, restrained colour and carefully composed imagery. Product discovery and shopping elements were integrated into the visual system rather than treated as separate functional layers.',
  solution: 'The resulting experience gives Élane a refined digital storefront that puts the collection and its visual identity at the centre. The interface combines editorial storytelling with familiar e-commerce patterns such as collection browsing, search, account access and shopping.',
  impact: [
    'Created a refined digital presence aligned with Élane’s quiet-luxury positioning',
    'Combined editorial art direction with a structured e-commerce experience',
    'Established a cohesive visual language across navigation, typography, imagery and product presentation',
  ],
  keyFeatures: [
    {
      title: 'Editorial Fashion Direction',
      description: 'Large-scale typography, restrained colours and carefully composed fashion imagery create a premium editorial character throughout the experience.',
    },
    {
      title: 'Collection-Led Shopping',
      description: 'The interface keeps the clothing collection at the centre while providing clear routes for discovering and exploring products.',
    },
    {
      title: 'Refined Navigation',
      description: 'A minimal navigation system brings together collection discovery, search, shopping and account access without competing with the visual content.',
    },
  ],
  },
  {
  slug: 'Form-01',
  title: 'Form/01',
  categories: ['Web Design', 'Incoming-Casestudy'],
  year: '2026',
  summary: 'An architectural studio website built around place, light and enduring design.',
  description: 'A bold editorial web experience for an architecture studio, using large-scale imagery, strong typography and structured project storytelling.',
  tags: ['Web design', 'Architecture', 'Art direction', 'Editorial'],
  tone: 'dark',
  image: '/projects/Form.jpg',
  behanceUrl: '/',
  client: 'Form/01',
  role: 'Web Designer',
  timeline: '2026',
  deliverables: ['Website UI/UX', 'Art Direction', 'Responsive Layouts', 'Project Presentation'],
  overview: 'Form/01 is an architecture studio concept focused on contemporary spaces rooted in regional materiality, natural light and sculptural permanence. The studio works across residential, cultural and hospitality projects.',
  challenge: 'Architecture websites often need to let the work speak for itself while still communicating the studio’s philosophy and breadth of practice. The challenge was to create an experience where large architectural imagery and concise editorial content could work together without competing for attention.',
  approach: 'I designed the experience around the studio’s projects, using full-bleed architectural imagery, oversized typography and restrained navigation. The visual hierarchy gives the architecture immediate prominence while supporting it with concise statements about the studio and its approach.',
  solution: 'The resulting website creates an immersive digital presence for Form/01, combining architectural imagery with a clear editorial structure. Project discovery, studio information and contact access are kept simple so the visual work remains the primary focus.',
  impact: [
    'Created a strong editorial digital presence for an architecture-focused studio',
    'Built a visual hierarchy that gives architectural work immediate prominence',
    'Established a cohesive system for presenting studio information and selected projects',
  ],
  keyFeatures: [
    {
      title: 'Immersive Project Presentation',
      description: 'Large-scale architectural imagery gives selected work visual priority while keeping supporting information concise and readable.',
    },
    {
      title: 'Editorial Typography',
      description: 'Distinctive display typography reinforces the studio’s contemporary character and creates a strong visual rhythm across the experience.',
    },
    {
      title: 'Studio-Centred Navigation',
      description: 'A focused navigation system connects Work, Studio, Journal and Contact without distracting from the architectural content.',
    },
  ],
},
  {
  slug: 'tasty-bite',
  title: 'Tasty Bite',
  categories: ['Web Design', 'Incoming-Casestudy'],
  year: '2026',
  summary: 'A warm and appetising web experience designed to showcase TastyBite Cuisine and its range of sweet treats.',
  description: 'A food-focused website combining expressive typography, product photography and a warm visual direction to create an inviting digital presence for TastyBite Cuisine.',
  tags: ['Web design', 'Responsive UI', 'Food & Beverage', 'Art direction'],
  tone: 'warm',
  image: '/projects/tasty-bite.jpg',
  behanceUrl: '/',
  client: 'TastyBite Cuisine',
  role: 'Web Designer',
  timeline: '2026',
  deliverables: ['Website UI/UX', 'Art Direction', 'Responsive Layouts', 'Menu Experience'],
  overview: 'TastyBite Cuisine is a food brand offering cakes, pastries, parfaits and other sweet treats designed to make everyday occasions a little more delicious. The website was designed to present the products in a visually engaging and approachable way.',
  challenge: 'The website needed to make the food itself the hero while still giving the brand a clear identity and an easy way for visitors to explore what TastyBite offers. The experience needed to feel warm and inviting without becoming visually overwhelming.',
  approach: 'I built the experience around large-scale product imagery, expressive editorial typography and a soft, warm visual palette. The structure keeps the menu and products prominent while supporting the brand with simple navigation to its story and techniques.',
  solution: 'The resulting website creates a welcoming digital storefront for TastyBite Cuisine, using appetising product presentation and a clear content hierarchy to guide visitors toward exploring the menu. The visual system balances the personality of the food with a clean and considered interface.',
  impact: [
    'Created a stronger digital presence centred around TastyBite’s products',
    'Established a warm visual direction that combines food photography with expressive typography',
    'Structured the website around key brand touchpoints including the menu, story and techniques',
  ],
  keyFeatures: [
    {
      title: 'Product-Led Hero',
      description: 'Large-scale imagery of cakes, pastries and parfaits immediately communicates what TastyBite offers and makes the products the focal point of the experience.',
    },
    {
      title: 'Warm Editorial Direction',
      description: 'A soft background, expressive serif typography and restrained colour palette create a welcoming visual character suited to the food brand.',
    },
    {
      title: 'Simple Brand Navigation',
      description: 'The navigation connects the Menu, Our Story and Techniques sections while keeping the primary action focused on exploring the available treats.',
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
