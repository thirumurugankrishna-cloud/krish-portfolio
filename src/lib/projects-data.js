// Selected project content sourced from the portfolio PDF.
// Each project drives both the home "Selected Projects" cards and its detail page
// at /projects/[slug]. Sections render through the reusable ProjectDetail template.
//
// Section shape:
// {
//   kicker?: string,            // small overline label e.g. "Problem", "Module - 1"
//   title?: string,             // section heading
//   body?: string[],            // paragraphs
//   bullets?: { title?, text }[],
//   images?: { src, caption?, alt? }[],
//   layout?: "full" | "split" | "grid-2" | "grid-3"  // how images lay out (default "full")
// }

export const projects = [
  {
    slug: "clootrack",
    title: "Clootrack",
    subtitle:
      "A scalable, self-service platform that puts customer insights directly into users' hands through AI-powered tools.",
    card: {
      image: "/projects/clootrack/cover.jpg",
      blurb:
        "Led end-to-end design of a productized customer-insights platform built around three AI-powered modules — Data Manager, Workflow, and Genie.",
    },
    cover: "/projects/clootrack/cover.jpg",
    meta: {
      role: "Product Designer",
      duration: "Jun '24 – Jun '25",
      tools: ["Figma"],
      website: { label: "clootrack.com", href: "https://www.clootrack.com/" },
    },
    tags: ["#product design", "#ai", "#design systems", "#interaction design"],
    sections: [
      {
        kicker: "Context",
        body: [
          "This project focuses on designing a scalable, user-friendly platform for Clootrack, enabling businesses to independently access, analyze, and act on customer insights. With modules like Data Manager, Workflow, and Genie, it streamlines data handling, automates tasks, and delivers actionable insights through AI-powered tools.",
        ],
      },
      {
        kicker: "Problem",
        title: "Insights locked behind manual analysis",
        body: [
          "Despite delivering valuable insights, the process of extracting and presenting this information was traditionally managed by our team using dashboards and manual analysis. This setup required businesses to rely on external support to interpret the data, often leading to inefficiencies and delays.",
          "The absence of a scalable, self-service solution limited the ability of companies to act quickly on critical customer feedback.",
        ],
      },
      {
        kicker: "Solution",
        title: "A productized, self-service platform",
        body: [
          "To address these challenges, we developed a productized platform that puts the power of customer insights directly into the hands of users. This centralized and intuitive solution enables businesses to independently access, analyze, and act on data without the need for external help.",
          "As part of the solution, we introduced three core modules — Data Manager, Workflow, and Genie — designed to simplify data handling, automate repetitive tasks, and enable users to gain actionable insights effortlessly.",
        ],
      },
      {
        kicker: "My Role",
        body: [
          "As the sole product designer, my role was to deeply understand user needs and translate them into seamless experiences. I collaborated with stakeholders to define user flows for these modules, brainstorm ideas, and create high-fidelity designs that brought these ideas to life — ensuring every aspect of the product was intuitive and empowered users to achieve their objectives with ease.",
          "I also led the redesign of the website. It was originally designed and developed in 2022, so once the product was ready for users we redesigned the site, since that's how people perceive both our product and our company.",
        ],
      },
      {
        kicker: "Module - 1",
        title: "Data Manager",
        body: [
          "The primary objective of this module was to provide a seamless interface for users to upload, review, clean, and transform data from over 50 connectors. I designed the interface to simplify the complex process of importing and validating data structures so they were fully optimized for analysis — letting users independently explore and transform their datasets, applying actions like removing duplicates and reducing noise.",
          "I designed a centralized dashboard where users could monitor the real-time status of their datasets, and collaborated with developers to build an interactive grid that allowed users to review, clean, and transform raw data into optimized sets. I steered the design roadmap by identifying and prioritizing high-impact connectors that met critical client demands.",
        ],
        images: [
          { src: "/projects/clootrack/data-manager-1.jpg", alt: "Data Manager dashboard", caption: "Centralized dashboard for monitoring dataset status across 50+ connectors." },
          { src: "/projects/clootrack/data-manager-2.jpg", alt: "Data transformation grid", caption: "Interactive grid to review, clean, and transform raw data." },
        ],
        layout: "grid-2",
      },
      {
        kicker: "Module - 2",
        title: "Workflow",
        body: [
          "The objective of this module was to automate repetitive data cleaning and preparation tasks. I designed a visual, node-based editor that allowed users to create and modify workflows by adding actions like “transform,” “detect themes,” and “merge.” By leveraging automation and a reusable template system, I aimed to streamline complex processes while reducing manual effort and the potential for error.",
          "I worked closely with the development team to define the functional logic of each node, ensuring the visual representation of data flows matched the backend processing capabilities, and prioritized the most frequent actions such as deduplication and sentiment detection to deliver immediate value.",
        ],
        images: [
          { src: "/projects/clootrack/workflow-1.jpg", alt: "Node-based workflow canvas", caption: "Visual canvas that simplifies the creation of complex cleanup logic." },
          { src: "/projects/clootrack/workflow-2.jpg", alt: "Cleanup suggestions panel", caption: "Real-time cleanup suggestions, balancing data density with a clean layout." },
        ],
        layout: "grid-2",
      },
      {
        kicker: "Module - 3",
        title: "Genie",
        body: [
          "The objective for Genie was to enable users to interact with their data effortlessly and derive insights through qualitative and quantitative queries. I designed an AI-powered assistant that provided transparent, step-by-step responses to user questions, ensuring the logic behind the data was credible and clear.",
          "I collaborated closely with engineering to design how Genie would communicate its “thought process,” translating complex backend analysis into a readable format. I prioritized the presentation-generation tool, which let users save AI-generated insights into professional presentations enriched with visuals, graphs, and custom branding — the highest-impact feature for communicating findings to stakeholders quickly.",
        ],
        images: [
          { src: "/projects/clootrack/genie-1.jpg", alt: "Genie conversational interface", caption: "Conversational interface that breaks complex queries into transparent steps." },
          { src: "/projects/clootrack/genie-2.jpg", alt: "Presentation export workflow", caption: "Export workflow with deep customization of AI-generated visuals." },
        ],
        layout: "grid-2",
      },
      {
        kicker: "Conclusion",
        title: "Website Redesign",
        body: [
          "The website, originally developed in 2022, needed a complete overhaul to align with the launch of the new productized platform. I redesigned the site to serve as a high-impact entry point for enterprise clients, focusing on clearly communicating our “AI Super Agent” positioning.",
          "The new layout prioritized real-time customer-experience analytics and guided visitors through our core value propositions, ensuring the brand's digital presence matched the sophistication of the platform we had built. I collaborated closely with the development team to ensure the revamped site was optimized for performance-driven lead generation.",
        ],
        images: [
          { src: "/projects/clootrack/website-before.jpg", alt: "Previous website design", caption: "Previous design (2022)." },
          { src: "/projects/clootrack/website-after.jpg", alt: "Revamped website design", caption: "Revamped design — clootrack.com." },
        ],
        layout: "grid-2",
      },
      {
        kicker: "Reflection",
        title: "Reflection on my time at Clootrack",
        body: [
          "Serving as the sole product designer evolved into a cross-functional leadership journey that spanned the entire product lifecycle. Leading the end-to-end design of this scalable platform centered on transforming complex customer insights into accessible, self-service tools that empowered businesses to act independently.",
          "Moving beyond traditional design boundaries meant collaborating daily with the engineering team to define technical logic, ensuring that developer handoffs were as seamless as the user experiences being built.",
        ],
      },
    ],
  },

  {
    slug: "zee5-design-system",
    title: "ZEE5 Design System",
    subtitle:
      "A token-based design system unifying ZEE5's OTT experience across mobile, web, and CTV.",
    card: {
      image: "/projects/zee5/cover.jpg",
      blurb:
        "Built a modular, token-based design system and component library that unified ZEE5's brand language across platforms — cutting production time by ~40%.",
    },
    cover: "/projects/zee5/cover.jpg",
    meta: {
      role: "Associate Product Designer",
      duration: "Jun '23 – Mar '24",
      tools: ["Figma", "Adobe Illustrator"],
      website: { label: "zee5.com", href: "https://www.zee5.com/" },
    },
    tags: ["#design system", "#visual design", "#motion design", "#interaction design"],
    sections: [
      {
        kicker: "Context",
        body: [
          "This project focuses on developing a token-based design system for the ZEE5 OTT platform, streamlining components across mobile, web, and CTV to ensure consistency, scalability, and seamless cross-platform adaptability. It involved creating a modular component library and reusable design tokens to enhance collaboration and maintain brand identity.",
        ],
      },
      {
        kicker: "The Problem",
        title: "Chaos in design",
        body: [
          "ZEE's digital interfaces lacked cohesion. Buttons, typography, and layouts varied across products. This inconsistency led to confusion, slowed down development, and diluted the brand's identity. Every project felt like starting from scratch, with little room for stability.",
        ],
      },
      {
        kicker: "The Vision",
        title: "A unified design language",
        body: [
          "We envisioned a design system that wasn't just a set of components but a toolkit powered by principles of clarity, consistency, and scalability.",
        ],
        bullets: [
          { title: "Connected yet unique", text: "Ensure every product feels connected yet unique." },
          { title: "Faster delivery", text: "Optimise design and development time with reusable components." },
          { title: "User-first", text: "Create a user-first experience aligned with ZEE's brand values." },
        ],
      },
      {
        kicker: "My Contribution",
        body: [
          "I was an advocate for the design system within the design team and cross-functionally, and streamlined the process of migrating from the old system to the new one.",
        ],
        bullets: [
          { text: "Created advanced components, tokens, and other essential elements for mobile, web, and CTV platforms." },
          { text: "Streamlined the design-to-developer handover process." },
          { text: "Conducted workshops to streamline the design process across the team." },
        ],
      },
      {
        kicker: "Principles in action",
        title: "Building the system that connects everything",
        bullets: [
          { title: "Consistency", text: "Buttons, modals, and cards now look, feel, and behave the same across platforms." },
          { title: "Optimal usability", text: "Every component was built with purpose — spacing, typography, and interaction cues crafted for better readability and accessibility." },
          { title: "Scalability", text: "A token-based approach enabled seamless integration of new features and device compatibility without major redesigns." },
          { title: "Efficiency boost", text: "Reusable components and tokens reduced production time by about 40%, enabling faster feature rollouts." },
          { title: "Cross-platform consistency", text: "Unified the design language across Android, iOS, web, and CTV for a seamless, intuitive experience." },
          { title: "Collaborative framework", text: "Comprehensive documentation and clear guidelines fostered better collaboration between designers and developers." },
        ],
      },
      {
        kicker: "Responsiveness & Scalability",
        title: "Fluid transitions across every screen",
        body: [
          "ZEE's components were designed with responsiveness in mind. From widescreen desktops to compact mobile devices, the system ensures usability without compromising aesthetics — card layouts adapt fluidly, maintaining clarity and hierarchy across screen sizes.",
          "For native Android & iOS, we tailored platform-specific gestures, typography, and transitions, ensuring brand consistency with the distinct ZEE look and feel.",
        ],
        images: [
          { src: "/projects/zee5/responsive.jpg", alt: "Responsive components", caption: "Components adapting across breakpoints." },
          { src: "/projects/zee5/responsive-2.jpg", alt: "Cross-device layouts", caption: "Card layouts maintaining hierarchy across devices." },
        ],
        layout: "grid-2",
      },
      {
        kicker: "Visual Impact",
        title: "Beyond functionality",
        body: [
          "Illustration system: a consistent style for illustrations used in onboarding flows, error messages, custom profiles, and information screens.",
          "Motion design system: a cohesive approach for animations across interactions and transitions.",
        ],
        images: [
          { src: "/projects/zee5/illustration.jpg", alt: "Illustration system" },
          { src: "/projects/zee5/motion.jpg", alt: "Motion design system" },
        ],
        layout: "grid-2",
      },
      {
        kicker: "Tokens & Variables",
        title: "Flexibility at the core of design",
        body: [
          "We made ZEE's design system responsive and adaptable to different screens and modes. Responsive variables, linked to semantic variables, ensure consistent behaviour across the system.",
          "Dynamic components like buttons adjust their size, padding, and typography automatically. Responsive tokens cover breakpoints, spacing, size, and typography — so everything from layouts to text stays consistent and visually appealing, no matter the screen size.",
        ],
        images: [
          { src: "/projects/zee5/tokens-1.jpg", alt: "Semantic level tokens", caption: "Semantic-level tokens as Figma variables." },
          { src: "/projects/zee5/tokens-2.jpg", alt: "Component level tokens", caption: "Component-level tokens as Figma variables." },
        ],
        layout: "grid-2",
      },
      {
        kicker: "Impact",
        title: "Speed without compromise",
        body: [
          "With the design system in place, all components are now unified within both the designers' library and the development team's toolkit, streamlining collaboration and making handoffs hassle-free.",
          "For instance, ILT20 Season 1 took four months to complete, with nearly two months lost in reviews and feedback loops. With the new design system, ILT20 Season 2 shipped new features and capabilities in just one month — from initial concept to end-user deployment.",
        ],
        bullets: [
          { title: "Streamlined communication", text: "Design tokens and guidelines are clear and accessible — no more lengthy explanations to developers." },
          { title: "Efficient UI reviews", text: "Pre-defined spacing, colours, and typography eliminate time spent checking minor issues." },
          { title: "Faster onboarding", text: "New designers can quickly adapt with intuitive, standardised components." },
          { title: "Creative freedom", text: "Designers focus on solving user problems instead of repetitive, mundane tasks." },
        ],
      },
      {
        kicker: "Accessibility",
        title: "Designing for everyone, everywhere",
        body: [
          "We designed ZEE with accessibility at its core. Colour contrast adheres to WCAG standards — buttons use a blue with a 4.5:1 contrast ratio to stand out clearly on light or dark backgrounds. We tested the system for red-green and blue-yellow colour blindness, and ensured components like dropdowns and modals are fully operable with keyboards and assistive technologies.",
          "We also introduced an XL mode, where the size of buttons, typography, and other UI elements increases significantly — designed for older adults and vision-impaired users to focus easily on key actions, especially on TV interfaces.",
        ],
        images: [
          { src: "/projects/zee5/accessibility-1.jpg", alt: "Accessibility — standard mode" },
          { src: "/projects/zee5/accessibility-2.jpg", alt: "Accessibility — XL mode" },
        ],
        layout: "grid-2",
      },
      {
        kicker: "Reflection",
        title: "Reflections on my time at ZEE",
        body: [
          "My first full-time role at ZEE was a transformative chapter. Collaborating with a talented and passionate design team gave me invaluable insights into teamwork, creativity, and problem-solving at scale.",
          "I learned the value of consistency and scalability in large-scale design systems, gained hands-on experience bridging design and development through clear communication, and developed a deeper appreciation for how shared goals fuel innovation. This experience laid a strong foundation for my career in product design.",
        ],
      },
    ],
  },

  {
    slug: "milo",
    title: "Milo — Breaking the Silence",
    subtitle:
      "Designing ambient companionship and doorway interactions for international students.",
    card: {
      image: "/projects/milo/cover.jpg",
      blurb:
        "An ambient key-holder companion that intervenes at the doorway transition — turning the friction-free habit of hanging keys into a warm, context-aware welcome home.",
    },
    cover: "/projects/milo/room.jpg",
    meta: {
      role: "Dare to Design — Classroom Project",
      duration: "Sept '25 – Dec '25",
      tools: ["Figma", "Blender", "Raspberry Pi", "Django", "Bambu 3D Print Studio"],
      team: "Under the guidance of Dr. G. (Gijs) Huisman",
    },
    tags: ["#interaction design", "#research through design", "#physical computing", "#ai"],
    sections: [
      {
        kicker: "Context",
        body: [
          "For international students, returning to an empty room often triggers feelings of isolation rather than relief. This project introduces Milo, an ambient key-holder companion designed to intervene at this critical doorway transition. By using AI and syncing with Google Calendar, Milo transforms the frictionless habit of hanging keys into a warm, context-aware greeting — mimicking a caring roommate to make the space feel like home.",
        ],
      },
      {
        kicker: "Empathy Phase",
        title: "Uncovering the real vulnerability",
        body: [
          "I began by investigating the social dynamics of shared student housing, using generative methods like photo diaries and a custom card game to uncover hidden roommate tensions without causing conflict. While these tools revealed that shared chores were actually silent signals of care or neglect, an “Emotional Mapping Study” pushed me to pivot entirely.",
          "The data showed that students spent 5 to 7 hours a day in their private bedrooms. More importantly, the most intense moments of vulnerability, loneliness, and exhaustion didn't happen in the shared kitchen — they happened behind closed doors. The core problem wasn't fairness in shared spaces, but the isolation felt within the private sanctuary.",
        ],
      },
      {
        kicker: "Challenges",
        title: "The weight of silence",
        bullets: [
          { title: "The doorway transition", text: "The most critical moment of a student's day is the second they step from the over-stimulated outside world into an empty room. The sudden drop in noise emphasizes their solitude." },
          { title: "The dependency trap", text: "Concepts that relied on long-distance connections proved flawed. If family members were asleep due to time zones, the lack of a response made the student feel even more lonely. The solution had to be independent." },
          { title: "The energy deficit", text: "Upon arriving home, students are often too exhausted to even send an “I'm home” text, and frequently default to their beds to “doom-scroll.”" },
          { title: "Friction-free companionship", text: "The companion had to break the room's silence instantly — without acting like a disciplinary tool or demanding any cognitive load, screen time, or new habits." },
        ],
      },
      {
        kicker: "Ideation",
        title: "“Wizard of Oz” prototyping",
        body: [
          "To test how to break the silence without being intrusive, I developed a series of rapid low-fi prototypes, using “Wizard of Oz” techniques — faking the technology manually — to test the emotional experience rather than the engineering.",
        ],
        bullets: [
          { title: "The Digital Campfire", text: "A phone dock that triggered a warm “campfire” glow for Rest Mode. Users liked the warmth but it felt restrictive — discipline rather than companionship." },
          { title: "The Room Toggle", text: "A cardboard lever that switched the room from Study to Relax Mode. It organized the space but felt too functional — like operating a machine." },
          { title: "The Shadow Link", text: "Paired lamps to connect students with family. Rejected due to dependency — if family was asleep, the lamp stayed dark and made students feel more lonely." },
          { title: "The Wellbeing Pets", text: "A series of “pet” iterations. The Dog Key Holder — which reacted instantly with audio on entry — won by piggybacking on the friction-free habit of hanging keys." },
        ],
        images: [
          { src: "/projects/milo/concept-1.jpg", alt: "Concept prototype 1" },
          { src: "/projects/milo/concept-2.jpg", alt: "Concept prototype 2" },
          { src: "/projects/milo/concept-3.jpg", alt: "Concept prototype 3" },
          { src: "/projects/milo/concept-4.jpg", alt: "Concept prototype 4" },
        ],
        layout: "grid-2",
      },
      {
        kicker: "The Breakthrough",
        body: [
          "Comparing these concepts revealed a clear need: students didn't just need a functional tool or a dependent connection to others — they needed a presence in the room itself. Concept 4's success with immediate feedback and a friction-free ritual laid the exact foundation for Milo.",
        ],
      },
      {
        kicker: "The Solution",
        title: "Meet Milo",
        body: [
          "Milo is an ambient companion designed to intervene at the specific “doorway transition” — the exact second a student steps from the public hallway into their private room. The interaction is entirely invisible: no buttons to press, no screens to check, and no wake words to say. The moment the metal keys touch the hook, they complete a circuit, and Milo greets the user with a context-aware sentence.",
        ],
        bullets: [
          { title: "Layer 1 — Breaking the silence", text: "Milo fills the heavy drop in noise instantly with a warm greeting the moment the keys click, transforming dead silence into the active presence of a “waiting place.”" },
          { title: "Layer 2 — The “peace of mind” text", text: "Milo silently triggers a pre-set message to a selected “Inner Circle” the moment the keys are hung, removing the mental burden of texting home." },
          { title: "Layer 3 — Contextual care", text: "Milo syncs with Google Calendar to acknowledge the day. After a late exam it might say, “You've had a long day, I bet you're glad that's over” — shifting from a dumb gadget to a caring presence." },
        ],
        images: [
          { src: "/projects/milo/device.jpg", alt: "Milo device", caption: "Milo — a 3D-printed key-holder companion." },
        ],
        layout: "full",
      },
      {
        kicker: "Materialization",
        title: "How it works",
        body: [
          "The friction-free trigger: instead of mechanical buttons or pressure sensors, I used simple copper tape on the hook. Because keyrings are metal, hanging them naturally completes an electrical circuit — making the interaction weight-independent and friction-free.",
          "The brain & system loop: completing the circuit triggers a Raspberry Pi 4 hidden inside the device. The Pi communicates with a local Django server and requests data from the OpenAI API. By syncing with Google Calendar, the LLM generates a unique, context-aware greeting, then plays the audio through a Bluetooth speaker while silently messaging the user's Inner Circle.",
          "The body & metaphor: to avoid the “black box” aesthetic of typical smart gadgets, I designed a custom 3D-printed PLA housing using a “Cat in a Box” metaphor — compact enough to fit the bulky Raspberry Pi, with discreet ventilation grilles for passive cooling.",
        ],
        images: [
          { src: "/projects/milo/system.jpg", alt: "Milo system diagram", caption: "Milo's system loop: keys → Pi → Django → OpenAI → audio + inner-circle message." },
        ],
        layout: "full",
      },
      {
        kicker: "Evaluation",
        title: "Living with Milo (48-hour in-situ test)",
        body: [
          "I deployed Milo in four student rooms to test real-world impact.",
        ],
        bullets: [
          { title: "The phone buffer", text: "Milo acted as an unexpected soft barrier to digital addiction — an immediate greeting gave users a moment of pause, preventing them from collapsing onto their beds to doom-scroll." },
          { title: "Instant bonding & privacy", text: "Because Milo has no microphone, participants felt their privacy was completely respected. The personalized greeting lifted moods, and users bonded so fast that writing a farewell letter felt genuinely meaningful." },
          { title: "The “garbage run” bug", text: "Milo treated every return as the end of a long day — delivering an overly dramatic welcome even after a 10-minute trip to take out the trash, making the interaction feel temporarily artificial." },
        ],
      },
      {
        kicker: "Future Iterations",
        bullets: [
          { title: "Swappable personalities", text: "A modular, clip-on design so users could physically swap the companion's head (e.g., from a Peeping Cat to a Golden Retriever) to customize its personality." },
          { title: "Visual “heartbeat”", text: "A soft, breathing LED ring behind the housing that gently pulses upon arrival, making Milo feel alive even when it isn't speaking." },
          { title: "Contextual fixes", text: "A 15-minute software timer so greetings only trigger after a meaningful absence, plus a physical mute switch for silent days." },
        ],
      },
      {
        kicker: "Takeaways",
        title: "Key designer takeaways",
        bullets: [
          { title: "Fake it first", text: "“Wizard of Oz” prototyping saves weeks of coding when validating emotional experiences." },
          { title: "Design for zero energy", text: "Technology should be entirely friction-free for users returning home exhausted." },
          { title: "Calm tech wins", text: "A simple, subtle wall hook proved capable of entirely changing a room's emotional atmosphere." },
        ],
      },
    ],
  },

  {
    slug: "immersive-education",
    title: "Immersive Education Through Gaming",
    subtitle:
      "Integrating game-based learning into virtual education to make foundational learning immersive and playful for children aged 4–11.",
    card: {
      image: "/projects/immersive/cover.jpg",
      blurb:
        "A bachelor thesis exploring AR/VR and game mechanics to transform virtual learning for children — fostering curiosity and problem-solving through play.",
    },
    cover: "/projects/immersive/cover.jpg",
    meta: {
      role: "Bachelor Thesis Project",
      duration: "Aug '22 – May '23",
      tools: ["Figma", "Blender", "Bezi3D", "Unity"],
      team: "Under the guidance of Prof. Shareka Iqbal",
    },
    tags: ["#immersive design", "#extended reality", "#interaction design", "#game design"],
    sections: [
      {
        kicker: "Context",
        body: [
          "This project explores integrating game-based learning into virtual education to create interactive and engaging experiences for children aged 4–11, making foundational learning immersive and playful. It focuses on fostering curiosity and enhancing problem-solving skills through innovative tools and technologies.",
        ],
      },
      {
        kicker: "Problem Brief",
        title: "Learning that fails to captivate",
        body: [
          "Traditional education methods often fail to captivate young learners. Learning systems aren't designed to align with children's natural curiosity and need for play, and virtual learning environments further lack interactivity and personalization — making education feel monotonous and disengaging.",
        ],
        bullets: [
          { title: "Lack of engagement", text: "Current virtual platforms are monotonous, failing to capture children's attention and interest." },
          { title: "Social isolation", text: "Virtual learning limits collaboration, impacting teamwork and social-skill development." },
          { title: "Attention span", text: "Children aged 5–11 struggle with prolonged focus, requiring highly interactive and stimulating content." },
          { title: "Lack of emotional connection", text: "Virtual learning fails to create an emotional bond between students and educators, reducing motivation." },
        ],
      },
      {
        kicker: "Vision",
        body: [
          "The goal was to transform learning into an experience that sparks curiosity and excitement, rather than just memorizing facts. To bring this vision to life, I used AR and VR as tools to create immersive, dynamic learning environments where kids could actively participate — making learning enjoyable while still being educational.",
        ],
      },
      {
        kicker: "Research",
        title: "Understanding all stakeholders",
        body: [
          "The research aimed to delve into innovative methods for transforming virtual education into an engaging, interactive experience for children aged 5–11. It included a comprehensive analysis of existing education systems and identified the difficulties faced by parents, teachers, and children across both traditional and virtual contexts.",
        ],
        bullets: [
          { title: "Contextual study", text: "Reviewed existing educational models and identified gaps." },
          { title: "Primary research", text: "Conducted interviews and observations with children, parents, and teachers to capture real-world difficulties." },
          { title: "Secondary research", text: "Examined literature on interaction design, gaming patterns, and child psychology to support findings." },
        ],
        images: [
          { src: "/projects/immersive/problem-1.jpg", alt: "Research insight" },
          { src: "/projects/immersive/problem-2.jpg", alt: "Research insight" },
        ],
        layout: "grid-2",
      },
      {
        kicker: "Interaction & Perception",
        title: "Learnings from gaming",
        body: [
          "Interaction and perception shape how users connect with and navigate educational tools, influencing focus, motivation, and enjoyment. Studying interactive games taught me key principles that resonate with how kids learn:",
        ],
        bullets: [
          { title: "Balancing challenge and skill", text: "Games keep kids in a state of flow by adjusting difficulty — guiding my approach to maintain focus and interest." },
          { title: "Instant feedback", text: "Kids respond well to immediate rewards, inspiring my use of real-time progress indicators." },
          { title: "Collaborative features", text: "Multiplayer modes and group tasks shaped activities that promote teamwork and social learning." },
          { title: "Playful exploration", text: "Kids thrive when learning feels like play — shaping the gamified elements in my solution." },
        ],
      },
      {
        kicker: "Prototyping",
        title: "Bringing the concepts to life",
        body: [
          "Figma was used to design wireframes and refine the user flow. Blender and Bezi3D created and prototyped 3D models and animations for AR content. Unity with C# powered the AR functionalities — object interactions, animations, and projections — while Python handled computer vision for real-time motion tracking and gesture recognition.",
        ],
      },
      {
        kicker: "Prototype - 1",
        title: "Balloon Shooter",
        body: [
          "The Balloon Shooter game transforms learning math into an exciting physical activity. A math problem is projected onto a screen, accompanied by balloons floating around with potential answers. The user throws a real ball at the projected screen, aiming for the balloon with the correct answer to score points.",
          "The system uses edge detection to recognize the borders of each projected balloon while tracking the movement of the real ball using image tracing. When the ball contacts the edge of the correct balloon, it pops and the player earns points — combining physical engagement with problem-solving.",
        ],
        images: [
          { src: "/projects/immersive/balloon-action.jpg", alt: "Balloon Shooter prototype in action", caption: "Prototype in action — edge detection + ball tracking." },
          { src: "/projects/immersive/balloon-play.jpg", alt: "Child playing Balloon Shooter" },
        ],
        layout: "grid-2",
      },
      {
        kicker: "Prototype - 2",
        title: "Word Builder",
        body: [
          "The Word Builder game offers a hands-on way for kids to learn alphabets and build words. Each letter is a physical card, and when kids arrange the cards to form a word, a 3D model of that word appears — spelling “DOG” triggers an interactive 3D dog.",
          "Built in Unity with a C# script connecting each alphabet card to its corresponding 3D model, the system detects when a valid word is formed from a predefined library and brings it to life — combining tactile learning with visual engagement.",
        ],
        images: [
          { src: "/projects/immersive/word-builder.jpg", alt: "Word Builder prototype" },
        ],
        layout: "full",
      },
      {
        kicker: "Prototype - 3",
        title: "Castle Builder",
        body: [
          "Castle Builder is an open-ended game where kids build castles, towers, and other structures using 3D blocks. It encourages creativity, spatial reasoning, and problem-solving while developing fine motor skills and hand-eye coordination — freeform play that lets children explore their imagination and learn through experimentation.",
        ],
        images: [
          { src: "/projects/immersive/castle.jpg", alt: "Castle Builder prototype" },
          { src: "/projects/immersive/prototype.jpg", alt: "3D models for building" },
        ],
        layout: "grid-2",
      },
      {
        kicker: "Reflection",
        title: "Reflections & future scope",
        body: [
          "Currently the project focuses on gamified learning — adding fun and interactive elements to traditional education. In the future, I want to move towards fully game-based learning experiences, where the game itself becomes the primary way of teaching and understanding concepts.",
          "This was a year-long project under the guidance of my professor. I realized that games aren't just about fun — they're powerful tools that can simplify complex ideas, keep people engaged, and make learning feel natural. It also taught me the importance of user feedback: building for kids means constantly testing, refining, and making sure it actually works for them.",
        ],
      },
    ],
  },
];

export function getProject(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs() {
  return projects.map((p) => p.slug);
}
