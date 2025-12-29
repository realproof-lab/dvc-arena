const startups = [
  // Real startups (less famous, harder to guess)
  {
    name: "Monterey AI",
    description: "AI-native user insights platform that turns customer feedback into product decisions.",
    domain: "monterey.ai",
    real: true,
  },
  {
    name: "Dev Tools AI",
    description: "AI-powered web and mobile test automation for UI testing.",
    domain: "devtools.ai",
    real: true,
  },
  {
    name: "Lantern",
    description: "Postgres vector database extension for building AI applications.",
    domain: "lantern.dev",
    real: true,
  },
  {
    name: "Bloop",
    description: "AI-powered code search and legacy code modernization tool.",
    domain: "bloop.ai",
    real: true,
  },
  {
    name: "Clueso",
    description: "AI tool that turns product workflows into videos and documentation.",
    domain: "clueso.com",
    real: true,
  },
  {
    name: "Mantis Biotechnology",
    description: "Infrastructure to build digital twin models of human anatomy and performance.",
    domain: "mantis.bio",
    real: true,
  },
  {
    name: "Pilot AI",
    description: "AI assistant that summarizes customer calls directly inside your CRM.",
    domain: "pilot.com",
    real: true,
  },
  {
    name: "Typewise",
    description: "AI writing tool that helps sales teams personalize outreach at scale.",
    domain: "typewise.ai",
    real: true,
  },
  {
    name: "Hello",
    description: "AI teammate that answers internal questions about product, docs, and incidents.",
    domain: "hello.com",
    real: true,
  },
  {
    name: "NuMind",
    description: "Platform for building custom NLP models with a simple UI and APIs.",
    domain: "numind.ai",
    real: true,
  },
  {
    name: "Tavily",
    description: "Search API designed for AI agents to find real-time information from the web.",
    domain: "tavily.com",
    real: true,
  },
  {
    name: "Context",
    description: "AI-powered research assistant that helps teams discover and share knowledge.",
    domain: "context.ai",
    real: true,
  },
  {
    name: "Elicit",
    description: "AI research assistant that helps researchers find and analyze scientific papers.",
    domain: "elicit.com",
    real: true,
  },
  {
    name: "Cursor",
    description: "AI-powered code editor that helps developers write code faster.",
    domain: "cursor.sh",
    real: true,
  },
  {
    name: "Windsor",
    description: "AI platform that helps e-commerce brands personalize customer experiences.",
    domain: "windsor.io",
    real: true,
  },
  {
    name: "Lindy",
    description: "AI assistant that automates repetitive tasks for knowledge workers.",
    domain: "lindy.ai",
    real: true,
  },
  {
    name: "Mem",
    description: "AI-powered note-taking app that helps you remember and connect ideas.",
    domain: "mem.ai",
    real: true,
  },
  {
    name: "Tavus",
    description: "Platform for creating personalized video messages at scale using AI.",
    domain: "tavus.io",
    real: true,
  },
  {
    name: "Dust",
    description: "AI assistant platform for teams to build custom AI workflows.",
    domain: "dust.tt",
    real: true,
  },
  {
    name: "Hex",
    description: "Collaborative data workspace for analytics and visualization.",
    domain: "hex.tech",
    real: true,
  },
  {
    name: "Modal",
    description: "Serverless compute platform for running Python code in the cloud.",
    domain: "modal.com",
    real: true,
  },
  {
    name: "Pinecone",
    description: "Vector database for building AI applications with semantic search.",
    domain: "pinecone.io",
    real: true,
  },
  {
    name: "Weights & Biases",
    description: "MLOps platform for experiment tracking and model management.",
    domain: "wandb.ai",
    real: true,
  },
  {
    name: "Anthropic",
    description: "AI safety company building reliable and interpretable AI systems.",
    domain: "anthropic.com",
    real: true,
  },
  {
    name: "Cohere",
    description: "Enterprise AI platform providing large language models and NLP APIs.",
    domain: "cohere.com",
    real: true,
  },
  {
    name: "Jasper",
    description: "AI content platform that helps teams create marketing copy and content.",
    domain: "jasper.ai",
    real: true,
  },
  {
    name: "Copy.ai",
    description: "AI-powered copywriting tool for generating marketing and sales content.",
    domain: "copy.ai",
    real: true,
  },
  {
    name: "Runway",
    description: "AI-powered creative tools for video editing and content generation.",
    domain: "runwayml.com",
    real: true,
  },
  {
    name: "Midjourney",
    description: "AI image generation platform that creates art from text prompts.",
    domain: "midjourney.com",
    real: true,
  },
  {
    name: "LovOn",
    description: "AI-powered relationship therapy and coaching platform helping couples and individuals access affordable relationship support.",
    domain: "lovon.ai",
    real: true,
  },
  {
    name: "Machinet",
    description: "AI-assisted coding platform with automated unit test generation for software development teams.",
    domain: "machinet.net",
    real: true,
  },
  {
    name: "3D Predict",
    description: "Dental aligner software and products helping orthodontists improve patient outcomes while increasing practice margins.",
    domain: "3dpredict.com",
    real: true,
  },
  {
    name: "GPU Audio",
    description: "Digital audio processing software built for musicians, music producers, and audio engineers.",
    domain: "gpuaudio.com",
    real: true,
  },
  {
    name: "Maroo",
    description: "Wedding financing platform offering 0% APR loans and vendor marketplace services for engaged couples.",
    domain: "maroo.com",
    real: true,
  },
  {
    name: "Asylia DX",
    description: "Molecular diagnostics solutions designed for cancer patients receiving immunotherapy treatments.",
    domain: "asylia.com",
    real: true,
  },
  {
    name: "Evidently.ai",
    description: "Machine learning model monitoring tools that help data scientists and ML engineers track model performance.",
    domain: "evidently.ai",
    real: true,
  },
  {
    name: "Fridge No More",
    description: "Ultra-fast grocery delivery service delivering orders within 15 minutes to customers within a 1-mile radius.",
    domain: "fridgenomore.com",
    real: true,
  },
  {
    name: "Product Science",
    description: "Mobile app performance insights and optimization tools built specifically for mobile application developers.",
    domain: "productscience.ai",
    real: true,
  },
  {
    name: "Solai Labs",
    description: "Reinforcement learning solutions tackling complex routing optimization problems for businesses and researchers.",
    domain: "solailabs.com",
    real: true,
  },
  {
    name: "Peer Town",
    description: "AI-powered employee referral platform helping companies build engaged talent communities.",
    domain: "peertown.com",
    real: true,
  },
  {
    name: "RemBrain",
    description: "Cloud-based robot teaching platform designed for automation vendors and manufacturing companies.",
    domain: "rembrain.com",
    real: true,
  },
  {
    name: "Castingform",
    description: "Virtual management platform connecting early-stage actors with runway productions in the entertainment industry.",
    domain: "castingform.com",
    real: true,
  },
  {
    name: "Meander",
    description: "Free mentorship matching platform connecting mentors with mentees across various industries.",
    domain: "meander.ai",
    real: true,
  },
  {
    name: "FURA",
    description: "Supply chain optimization services helping businesses reduce shipping costs and improve delivery performance.",
    domain: "fura.ai",
    real: true,
  },
  {
    name: "Remofirst",
    description: "Employer of record and compliance services enabling companies to hire remote employees globally.",
    domain: "remofirst.com",
    real: true,
  },
  {
    name: "Denti.ai",
    description: "AI-powered practice management and diagnostic software transforming how dental practices operate.",
    domain: "denti.ai",
    real: true,
  },
  {
    name: "Intento",
    description: "Machine translation API services delivering optimized multilingual content solutions for global companies.",
    domain: "inten.to",
    real: true,
  },
  {
    name: "Beacons.ai",
    description: "All-in-one business platform empowering creators to monetize and manage their online presence.",
    domain: "beacons.ai",
    real: true,
  },
  {
    name: "Fogbender",
    description: "B2B-focused customer support tools built specifically for business-to-business support organizations.",
    domain: "fogbender.com",
    real: true,
  },
  {
    name: "AiSupervision",
    description: "Automated factory supervision technology helping manufacturing companies optimize production processes.",
    domain: "aisupervision.com",
    real: true,
  },
  {
    name: "StrongCompute",
    description: "Accelerated machine learning model training infrastructure for AI developers and researchers.",
    domain: "strongcompute.com",
    real: true,
  },
  {
    name: "Agentnoon",
    description: "Workforce planning and organizational design software helping businesses track headcount and employee metrics.",
    domain: "agentnoon.com",
    real: true,
  },
  {
    name: "Humand",
    description: "All-in-one internal communication and HR software designed for companies with blue-collar workers.",
    domain: "humand.com",
    real: true,
  },
  {
    name: "BiOptic",
    description: "AI-powered molecular discovery technology accelerating drug development for pharmaceutical and biotech companies.",
    domain: "bioptic.ai",
    real: true,
  },
  {
    name: "Narrative BI",
    description: "Automated marketing analytics and insights platform built for growth teams and marketers.",
    domain: "narrative.bi",
    real: true,
  },
  {
    name: "PermitFlow",
    description: "Permit application preparation and submission services for general contractors, architects, and DIY builders.",
    domain: "permitflow.com",
    real: true,
  },
  {
    name: "Abagy",
    description: "Autonomous welding robotics software addressing welder shortages in industrial manufacturing.",
    domain: "abagy.com",
    real: true,
  },
  {
    name: "Area of Games",
    description: "Fintech banking services and web3 solutions tailored for game developers and players.",
    domain: "areaofgames.com",
    real: true,
  },
  {
    name: "VASCO",
    description: "Revenue operations platform helping B2B businesses achieve predictable growth through data-driven insights.",
    domain: "vasco.ai",
    real: true,
  },
  {
    name: "Collectly",
    description: "Patient billing and payment solutions streamlining financial operations for healthcare providers and medical practices.",
    domain: "collectly.co",
    real: true,
  },
  {
    name: "NutriSense",
    description: "Metabolic health monitoring platform with personalized dietitian coaching for individuals optimizing daily health performance.",
    domain: "nutrisense.io",
    real: true,
  },
  {
    name: "HealthRhythms",
    description: "AI-powered mental health monitoring and intervention technology for healthcare providers and patients.",
    domain: "healthrhythms.com",
    real: true,
  },
  {
    name: "Birthday App",
    description: "Automated birthday reminders and gift card delivery service for people wanting to send last-minute gifts.",
    domain: "birthday.app",
    real: true,
  },
  {
    name: "Mighty Health",
    description: "Daily health app services helping adults 50+ prevent chronic diseases through personalized wellness programs.",
    domain: "mightyhealth.com",
    real: true,
  },
  {
    name: "Performetry",
    description: "AI analytical assistant helping companies make strategic management decisions through data insights.",
    domain: "performetry.ai",
    real: true,
  },
  {
    name: "Locals",
    description: "Community building and event organizing tools helping people create and manage local social groups.",
    domain: "locals.com",
    real: true,
  },
  {
    name: "Curex",
    description: "At-home allergy immunotherapy treatments for individuals suffering from indoor and outdoor allergies.",
    domain: "curex.com",
    real: true,
  },
  {
    name: "Respell",
    description: "No-code AI application building tools enabling users to create AI applications quickly without coding.",
    domain: "respell.ai",
    real: true,
  },
  {
    name: "SpellWise",
    description: "GPT-powered mobile keyboard enhancing typing experience for smartphone users.",
    domain: "spellwise.ai",
    real: true,
  },
  {
    name: "JustPaid.ai",
    description: "AI-powered accounts receivable automation and financial analytics for startups and businesses.",
    domain: "justpaid.ai",
    real: true,
  },
  {
    name: "Sentientwave",
    description: "Distributed computing infrastructure powering autonomous edge devices and IoT applications.",
    domain: "sentientwave.com",
    real: true,
  },
  {
    name: "Defog.ai",
    description: "Fine-tuned AI assistants for data analysis helping enterprises accelerate SQL, Python and R analytics.",
    domain: "defog.ai",
    real: true,
  },
  {
    name: "The team",
    description: "AI agent integration platforms helping enterprise support teams automate customer interactions.",
    domain: "theteam.ai",
    real: true,
  },
  {
    name: "Honeydew",
    description: "Semantic layer technology designed specifically for Snowflake data warehouse users.",
    domain: "honeydew.io",
    real: true,
  },
  {
    name: "NoCap",
    description: "AI-powered angel investment services connecting startups and entrepreneurs with funding opportunities.",
    domain: "nocap.vc",
    real: true,
  },
  {
    name: "CreAitor",
    description: "Advertising integration tools and productivity software built for content creators.",
    domain: "creaitor.com",
    real: true,
  },
  {
    name: "GetGenAI",
    description: "Automated content review services ensuring compliance for highly regulated industries.",
    domain: "getgenai.com",
    real: true,
  },
  {
    name: "Endless Adventures",
    description: "No-code game creation tools enabling game enthusiasts to build video games without programming.",
    domain: "endlessadventures.io",
    real: true,
  },
  {
    name: "Aviary AI",
    description: "Outbound AI sales team services helping credit unions, banks, and insurance providers automate sales.",
    domain: "aviary.ai",
    real: true,
  },
  {
    name: "GoCharlie.AI",
    description: "Goal-driven multi-modal agents designed for marketing teams to automate campaign execution.",
    domain: "gocharlie.ai",
    real: true,
  },
  {
    name: "Essence",
    description: "AI-powered well-being benefits platform supporting women and people with cycles in the workplace.",
    domain: "essence.health",
    real: true,
  },
  {
    name: "HelloCreator",
    description: "Operational simplification tools helping artists, musicians, YouTubers, and content creators manage their businesses.",
    domain: "hellocreator.com",
    real: true,
  },
  {
    name: "Perplexity AI",
    description: "Conversational answer engine technology delivering direct answers to user questions.",
    domain: "perplexity.ai",
    real: true,
  },
  {
    name: "Solve Intelligence",
    description: "AI-powered patent writing and management tools helping patent attorneys and inventors streamline IP processes.",
    domain: "solveintelligence.com",
    real: true,
  },
  {
    name: "Promethean AI",
    description: "Digital asset management and virtual world creation tools for entertainment, science, and education industries.",
    domain: "promethean.ai",
    real: true,
  },
  {
    name: "Hercules AI",
    description: "Operating system for building and running AI applications designed for enterprise deployments.",
    domain: "hercules.ai",
    real: true,
  },
  {
    name: "Beagle",
    description: "AI-powered document discovery and analysis tools helping lawyers process legal documents faster.",
    domain: "beagle.ai",
    real: true,
  },
  {
    name: "Aglide",
    description: "Single sign-on integration for non-standard and legacy applications helping enterprise security and IT teams.",
    domain: "aglide.io",
    real: true,
  },
  {
    name: "FleetWorks",
    description: "Automated phone and email communication solutions for freight and logistics companies.",
    domain: "fleetworks.com",
    real: true,
  },
  {
    name: "Docsum",
    description: "Contract negotiation and management software streamlining workflows for legal teams.",
    domain: "docsum.ai",
    real: true,
  },
  {
    name: "GAlpha",
    description: "Financial investment AI technology helping investment professionals and financial institutions make data-driven decisions.",
    domain: "galpha.ai",
    real: true,
  },
  {
    name: "HiggsField",
    description: "GPU orchestration tools and video generation models for AI developers and researchers.",
    domain: "higgsfield.ai",
    real: true,
  },
  {
    name: "Proofs",
    description: "AI-powered proof of concept setup tools helping Sales Engineers at API-first companies demonstrate value.",
    domain: "proofs.ai",
    real: true,
  },
  {
    name: "Pangeam",
    description: "AI-powered workplace intelligence software helping companies optimize human capital and real estate costs.",
    domain: "pangeam.com",
    real: true,
  },
  {
    name: "LightBeam",
    description: "Automated privacy, security, and AI governance software for financial and retail companies.",
    domain: "lightbeam.ai",
    real: true,
  },
  {
    name: "Monolith",
    description: "AI-powered sales automation tools helping businesses scale their sales operations efficiently.",
    domain: "monolith.ai",
    real: true,
  },
  {
    name: "Subconscious",
    description: "Affordable market research services helping businesses understand consumer behavior and trends.",
    domain: "subconscious.ai",
    real: true,
  },
  {
    name: "Datachain",
    description: "ETL and analytics tools for AI companies working with unstructured multimodal data.",
    domain: "datachain.ai",
    real: true,
  },
  {
    name: "Tely.AI",
    description: "Automated content marketing and SEO services designed for B2B businesses.",
    domain: "tely.ai",
    real: true,
  },
  {
    name: "Aurora",
    description: "AI assistant services helping families organize and manage household information and schedules.",
    domain: "aurora.ai",
    real: true,
  },
  {
    name: "Jome",
    description: "Marketplace for new construction homes connecting homebuyers with builders.",
    domain: "jome.com",
    real: true,
  },
  {
    name: "Pinscreen",
    description: "AI-driven visual dubbing and face replacement technology for entertainment and media companies.",
    domain: "pinscreen.com",
    real: true,
  },
  {
    name: "Redskyhealth",
    description: "AI-based solutions reducing insurance claims denials for healthcare providers.",
    domain: "redskyhealth.com",
    real: true,
  },
  {
    name: "Etched",
    description: "Transformer-specific AI chips helping companies deploy AI models more efficiently.",
    domain: "etched.ai",
    real: true,
  },
  {
    name: "Hona.ai",
    description: "AI-powered healthcare history summarization tools helping healthcare professionals access patient information faster.",
    domain: "hona.ai",
    real: true,
  },
  {
    name: "Realytics",
    description: "AI-powered consumer intelligence and benchmarking solutions helping brands understand market positioning.",
    domain: "realytics.ai",
    real: true,
  },
  {
    name: "Qualified Health",
    description: "AI safety platform infrastructure helping health systems adopt generative AI technology safely.",
    domain: "qualifiedhealth.com",
    real: true,
  },
  {
    name: "Co-factory",
    description: "AI-powered micro SAAS development services helping businesses achieve autonomous operations.",
    domain: "cofactory.ai",
    real: true,
  },
  {
    name: "Sutro",
    description: "Automated app development tools helping product teams and businesses build applications faster.",
    domain: "sutro.ai",
    real: true,
  },
  {
    name: "Mem0",
    description: "Open-source framework for building custom AI chatbots designed for developers.",
    domain: "mem0.ai",
    real: true,
  },
  {
    name: "Mythica",
    description: "AI-powered tree and vegetation generation tools for game developers and digital creators.",
    domain: "mythica.ai",
    real: true,
  },
  {
    name: "Animation",
    description: "Real-time generative animation technology transforming how digital content creators produce visual content.",
    domain: "animation.ai",
    real: true,
  },
  {
    name: "Howie",
    description: "Calendar management and meeting scheduling services integrated directly into email workflows.",
    domain: "howie.ai",
    real: true,
  },
  {
    name: "Paradigm",
    description: "AI-powered spreadsheet automation tools helping businesses and data analysts work more efficiently.",
    domain: "paradigm.ai",
    real: true,
  },
  {
    name: "Kerna Labs",
    description: "Machine learning platforms for designing mRNA therapeutics helping genetic medicine companies accelerate drug development.",
    domain: "kernalabs.com",
    real: true,
  },
  {
    name: "Bina School",
    description: "Precision primary education platform serving 4-12 year olds from across the globe.",
    domain: "binaschool.com",
    real: true,
  },
  {
    name: "Avoca",
    description: "AI-powered customer communications solutions designed for small and medium-sized businesses.",
    domain: "avoca.ai",
    real: true,
  },
  {
    name: "FitWise",
    description: "3D movement tracking and analysis technology for fitness and sports applications.",
    domain: "fitwise.ai",
    real: true,
  },
  {
    name: "API Nexus",
    description: "AI automation tools helping businesses integrate and control data access across web applications.",
    domain: "apinexus.ai",
    real: true,
  },
  {
    name: "TheStage",
    description: "Model optimization and cost simulation tools for machine learning developers and businesses.",
    domain: "thestage.ai",
    real: true,
  },
  {
    name: "Zencoder",
    description: "AI-driven code improvement tools helping software developers and development teams write better code.",
    domain: "zencoder.ai",
    real: true,
  },
  {
    name: "The Forecasting Company",
    description: "Plug-and-play forecasting systems helping operations teams streamline planning processes.",
    domain: "forecasting.co",
    real: true,
  },
  {
    name: "HyperC",
    description: "AI-driven inventory optimization software designed for Amazon wholesale sellers.",
    domain: "hyperc.ai",
    real: true,
  },
  {
    name: "Wabi",
    description: "Generative interfaces for businesses adopting AI technologies in the new AI age.",
    domain: "wabi.ai",
    real: true,
  },
  {
    name: "SKIM AI",
    description: "AI-powered collaborative reading tools helping researchers and academics process information more effectively.",
    domain: "skim.ai",
    real: true,
  },
  {
    name: "HackerPulse",
    description: "Team productivity and skills analytics dashboards designed for CTOs and technical leaders.",
    domain: "hackerpulse.com",
    real: true,
  },
  {
    name: "Keye",
    description: "Automated due diligence analysis tools helping private equity investors evaluate investment opportunities.",
    domain: "keye.ai",
    real: true,
  },
  {
    name: "INImakini",
    description: "Data synchronization and workflow automation platform for industrial system providers and operators.",
    domain: "inimakini.com",
    real: true,
  },
  {
    name: "Firmly",
    description: "Distributed commerce solutions helping merchants sell on social platforms and content sites.",
    domain: "firmly.com",
    real: true,
  },
  {
    name: "CopilotKit",
    description: "Open-source AI assistant building tools designed for developers.",
    domain: "copilotkit.ai",
    real: true,
  },
  {
    name: "Doctronic",
    description: "AI-driven medical consultations and video visits with licensed doctors for patients seeking healthcare.",
    domain: "doctronic.com",
    real: true,
  },
  {
    name: "DocDraft",
    description: "AI-driven legal document drafting and risk identification services for small and medium businesses.",
    domain: "docdraft.ai",
    real: true,
  },
  {
    name: "Thinking Machines",
    description: "AI systems development and accessibility solutions designed for the scientific community.",
    domain: "thinkingmachines.ai",
    real: true,
  },
  {
    name: "Wrkdn",
    description: "AI audit platform services for medical records quality assurance helping US hospitals maintain compliance.",
    domain: "wrkdn.com",
    real: true,
  },
  {
    name: "SUPERGLUE",
    description: "Self-healing data connector software helping enterprises manage API integrations more reliably.",
    domain: "superglue.ai",
    real: true,
  },
  {
    name: "Lovi",
    description: "AI-driven skincare recommendations and personalized routines helping individuals access skincare solutions.",
    domain: "lovi.ai",
    real: true,
  },
  {
    name: "Project Asimov",
    description: "Foundational AI models for robotics companies and developers building autonomous systems.",
    domain: "asimov.ai",
    real: true,
  },
  {
    name: "doublefifth",
    description: "User account authentication and behavioral insights through APIs for Fortune 500 companies and developers.",
    domain: "doublefifth.com",
    real: true,
  },
  {
    name: "Eloquent AI",
    description: "Autonomous customer support AI agents helping enterprises automate customer service operations.",
    domain: "eloquent.ai",
    real: true,
  },
  {
    name: "CACTUS",
    description: "AI-driven performance marketing automation and ad optimization tools for businesses and marketers.",
    domain: "cactus.ai",
    real: true,
  },
  {
    name: "Archetype AI",
    description: "AI-as-a-Service translating sensor data into human-readable text and visuals for businesses.",
    domain: "archetype.ai",
    real: true,
  },
  {
    name: "Dwelly",
    description: "AI-powered automation software helping residential lettings agencies streamline operations.",
    domain: "dwelly.com",
    real: true,
  },
  {
    name: "zinit",
    description: "AI-powered procurement software helping businesses efficiently source suppliers and manage tendering processes.",
    domain: "zinit.ai",
    real: true,
  },
  {
    name: "deepflow",
    description: "Workflow orchestration tools helping businesses manage human-AI team collaboration.",
    domain: "deepflow.ai",
    real: true,
  },
  {
    name: "Octrace",
    description: "Predictive sales analytics software designed for B2B sales teams.",
    domain: "octrace.com",
    real: true,
  },
  {
    name: "Sibvi",
    description: "Automated signal discovery and forecasting software for supply chain businesses.",
    domain: "sibvi.com",
    real: true,
  },
  {
    name: "Motives",
    description: "AI-powered qualitative research automation for marketing and product teams at consumer brands.",
    domain: "motives.ai",
    real: true,
  },
  {
    name: "Alter Labs Inc",
    description: "Zero-trust identity and access control platform designed for AI agents.",
    domain: "alterlabs.ai",
    real: true,
  },
  {
    name: "TaxRay",
    description: "AI-driven withholding tax risk assessment and mitigation tools for multinational enterprises.",
    domain: "taxray.com",
    real: true,
  },
  {
    name: "Elly Analytics",
    description: "AI-powered performance marketing automation and analytics for B2C software and services companies.",
    domain: "elly.ai",
    real: true,
  },
  {
    name: "Mozart",
    description: "AI-powered music creation tools helping musicians and music creators of all skill levels produce original compositions.",
    domain: "mozart.ai",
    real: true,
  },
  {
    name: "Slice & Dice",
    description: "Conversation analytics and user insights helping AI-native app product teams understand user behavior.",
    domain: "slicedice.ai",
    real: true,
  },
  {
    name: "GenAiPeatch",
    description: "AI-powered image and video generation tools for businesses and creators.",
    domain: "genaipeatch.com",
    real: true,
  },
  {
    name: "Grego",
    description: "Automated code vulnerability scanning services helping software development teams maintain security.",
    domain: "grego.ai",
    real: true,
  },
  {
    name: "novogaia",
    description: "AI-powered natural product discovery tools helping pharmaceutical and biotechnology companies identify new compounds.",
    domain: "novogaia.com",
    real: true,
  },

  // Fake startups (more realistic, harder to distinguish)
  {
    name: "Nexus AI",
    description: "Enterprise AI platform that helps teams build custom machine learning models without code.",
    real: false,
  },
  {
    name: "CloudSync",
    description: "Unified cloud storage platform that syncs files across all your devices and services.",
    real: false,
  },
  {
    name: "DataForge",
    description: "Analytics platform that transforms raw data into actionable business insights using AI.",
    real: false,
  },
  {
    name: "SignalFlow",
    description: "Real-time observability platform for monitoring and debugging distributed systems.",
    real: false,
  },
  {
    name: "VectorBase",
    description: "Vector database optimized for semantic search and AI-powered applications.",
    real: false,
  },
  {
    name: "CodePilot",
    description: "AI pair programmer that suggests code completions and refactoring improvements.",
    real: false,
  },
  {
    name: "FlowState",
    description: "Productivity app that uses AI to optimize your workflow and reduce context switching.",
    real: false,
  },
  {
    name: "Nexus CRM",
    description: "Customer relationship management platform with built-in AI for sales automation.",
    real: false,
  },
  {
    name: "DataVault",
    description: "Secure data warehouse platform for storing and analyzing sensitive business data.",
    real: false,
  },
  {
    name: "CloudBridge",
    description: "Multi-cloud infrastructure platform that helps teams deploy across AWS, GCP, and Azure.",
    real: false,
  },
  {
    name: "AI Studio",
    description: "No-code platform for building and deploying machine learning models.",
    real: false,
  },
  {
    name: "SyncFlow",
    description: "Collaboration platform that syncs documents and tasks across your entire team.",
    real: false,
  },
  {
    name: "DataLens",
    description: "Business intelligence tool that creates interactive dashboards from your data sources.",
    real: false,
  },
  {
    name: "CodeSync",
    description: "Version control platform designed for teams working with AI-generated code.",
    real: false,
  },
  {
    name: "FlowAI",
    description: "Workflow automation platform that uses AI to optimize business processes.",
    real: false,
  },
  {
    name: "Nexus Analytics",
    description: "Data analytics platform that provides real-time insights for product teams.",
    real: false,
  },
  {
    name: "CloudForge",
    description: "Infrastructure as code platform for managing cloud resources with Git workflows.",
    real: false,
  },
  {
    name: "AI Workspace",
    description: "Collaborative platform for teams to build and deploy AI applications together.",
    real: false,
  },
  {
    name: "DataStream",
    description: "Real-time data processing platform for streaming analytics and event processing.",
    real: false,
  },
  {
    name: "CodeBase",
    description: "Developer productivity platform that helps teams write better code faster.",
    real: false,
  },
  {
    name: "FlowSync",
    description: "Project management tool that automatically syncs tasks across all your tools.",
    real: false,
  },
  {
    name: "Nexus Platform",
    description: "All-in-one platform for building, deploying, and scaling web applications.",
    real: false,
  },
  {
    name: "CloudVault",
    description: "Secure cloud storage platform with end-to-end encryption for enterprise teams.",
    real: false,
  },
  {
    name: "AI Engine",
    description: "Machine learning platform that helps data scientists build and deploy models faster.",
    real: false,
  },
  {
    name: "DataFlow",
    description: "ETL platform that helps teams transform and move data between systems.",
    real: false,
  },
  {
    name: "CodeForge",
    description: "AI-powered code review platform that helps teams write better software.",
    real: false,
  },
  {
    name: "FlowBase",
    description: "Database platform optimized for real-time applications and collaborative editing.",
    real: false,
  },
  {
    name: "Nexus Cloud",
    description: "Serverless platform for running applications without managing infrastructure.",
    real: false,
  },
  {
    name: "CloudAI",
    description: "AI infrastructure platform that provides GPU compute for machine learning workloads.",
    real: false,
  },
  {
    name: "DataNexus",
    description: "Data integration platform that connects all your tools and databases.",
    real: false,
  },
  {
    name: "FlowLabs",
    description: "Workflow automation platform that helps teams streamline repetitive tasks across multiple tools.",
    real: false,
  },
  {
    name: "NexusFlow",
    description: "AI-powered customer engagement platform that personalizes interactions across all channels.",
    real: false,
  },
  {
    name: "CloudForge AI",
    description: "Infrastructure automation platform that helps DevOps teams deploy and manage cloud resources.",
    real: false,
  },
  {
    name: "DataSync Pro",
    description: "Real-time data synchronization service that keeps your databases in sync across multiple environments.",
    real: false,
  },
  {
    name: "CodeVault",
    description: "Secure code repository platform with advanced access controls and compliance features.",
    real: false,
  },
  {
    name: "FlowMetrics",
    description: "Analytics platform that tracks team productivity and identifies bottlenecks in workflows.",
    real: false,
  },
  {
    name: "NexusConnect",
    description: "Integration platform that connects your SaaS tools and automates data flow between them.",
    real: false,
  },
  {
    name: "CloudSync Pro",
    description: "Enterprise file synchronization service with advanced security and collaboration features.",
    real: false,
  },
  {
    name: "DataPulse",
    description: "Real-time data analytics platform that provides instant insights from your business metrics.",
    real: false,
  },
  {
    name: "FlowBase",
    description: "Database platform optimized for real-time collaborative applications and live data updates.",
    real: false,
  },
  {
    name: "NexusAI",
    description: "Enterprise AI platform that helps teams build and deploy custom machine learning solutions.",
    real: false,
  },
  {
    name: "CloudBridge AI",
    description: "Multi-cloud management platform that helps teams deploy applications across AWS, GCP, and Azure.",
    real: false,
  },
  {
    name: "DataForge AI",
    description: "AI-powered data transformation platform that converts raw data into actionable business insights.",
    real: false,
  },
  {
    name: "FlowSync AI",
    description: "Intelligent project management tool that automatically syncs tasks and deadlines across your team.",
    real: false,
  },
  {
    name: "NexusStream",
    description: "Real-time data streaming platform for processing and analyzing high-volume event data.",
    real: false,
  },
  {
    name: "CloudVault Pro",
    description: "Enterprise cloud storage solution with end-to-end encryption and advanced compliance features.",
    real: false,
  },
  {
    name: "DataLens Pro",
    description: "Business intelligence platform that creates interactive dashboards from multiple data sources.",
    real: false,
  },
  {
    name: "FlowEngine",
    description: "Workflow orchestration platform that helps teams automate complex business processes.",
    real: false,
  },
  {
    name: "NexusHub",
    description: "Collaboration platform that centralizes team communication, files, and project management.",
    real: false,
  },
  {
    name: "CloudScale",
    description: "Auto-scaling infrastructure platform that automatically adjusts resources based on demand.",
    real: false,
  },
  {
    name: "DataFlow AI",
    description: "ETL platform with AI-powered data transformation and pipeline optimization capabilities.",
    real: false,
  },
  {
    name: "FlowTrack",
    description: "Project tracking platform that provides real-time visibility into team progress and deadlines.",
    real: false,
  },
  {
    name: "NexusCore",
    description: "Core infrastructure platform for building scalable web applications and APIs.",
    real: false,
  },
  {
    name: "CloudMesh",
    description: "Distributed cloud computing platform that connects edge devices and cloud resources.",
    real: false,
  },
  {
    name: "DataGrid",
    description: "Data visualization platform that helps teams explore and analyze complex datasets interactively.",
    real: false,
  },
  {
    name: "FlowPath",
    description: "Customer journey mapping platform that helps teams visualize and optimize user experiences.",
    real: false,
  },
  {
    name: "NexusLink",
    description: "API integration platform that connects your applications with third-party services seamlessly.",
    real: false,
  },
  {
    name: "CloudNet",
    description: "Network infrastructure platform that provides secure connectivity between cloud and on-premise systems.",
    real: false,
  },
  {
    name: "DataPipe",
    description: "Data pipeline platform that helps teams build, deploy, and monitor ETL processes.",
    real: false,
  },
  {
    name: "FlowWave",
    description: "Real-time collaboration platform that enables teams to work together on documents and projects.",
    real: false,
  },
  {
    name: "NexusSphere",
    description: "Enterprise platform that integrates all your business tools into a unified workspace.",
    real: false,
  },
  {
    name: "DataStream AI",
    description: "Real-time data processing platform that helps teams analyze streaming data at scale.",
    real: false,
  },
  {
    name: "CloudSync Pro",
    description: "Enterprise file synchronization service with advanced security and collaboration features.",
    real: false,
  },
  {
    name: "FlowEngine AI",
    description: "Intelligent workflow automation platform that learns from your team's processes.",
    real: false,
  },
  {
    name: "NexusCore",
    description: "Core infrastructure platform for building scalable web applications and APIs.",
    real: false,
  },
  {
    name: "DataMesh",
    description: "Distributed data platform that helps teams manage data across multiple domains.",
    real: false,
  },
  {
    name: "FlowTrack Pro",
    description: "Advanced project tracking platform with AI-powered insights and predictions.",
    real: false,
  },
  {
    name: "CloudForge AI",
    description: "AI-powered infrastructure automation platform for DevOps teams.",
    real: false,
  },
  {
    name: "DataVault Pro",
    description: "Enterprise data warehouse platform with advanced security and compliance features.",
    real: false,
  },
  {
    name: "NexusFlow AI",
    description: "AI-powered customer engagement platform that personalizes interactions across channels.",
    real: false,
  },
  {
    name: "FlowSync Pro",
    description: "Advanced collaboration platform that syncs documents and tasks across your entire team.",
    real: false,
  },
  {
    name: "CloudBridge AI",
    description: "Intelligent multi-cloud management platform for deploying applications across providers.",
    real: false,
  },
  {
    name: "DataForge Pro",
    description: "Enterprise analytics platform that transforms raw data into actionable business insights.",
    real: false,
  },
  {
    name: "NexusLink Pro",
    description: "Advanced API integration platform connecting applications with third-party services.",
    real: false,
  },
  {
    name: "FlowBase AI",
    description: "AI-powered database platform optimized for real-time collaborative applications.",
    real: false,
  },
  {
    name: "CloudMesh Pro",
    description: "Enterprise distributed computing platform connecting edge devices and cloud resources.",
    real: false,
  },
  {
    name: "DataGrid Pro",
    description: "Advanced data visualization platform for exploring and analyzing complex datasets.",
    real: false,
  },
  {
    name: "FlowPath AI",
    description: "AI-powered customer journey mapping platform for optimizing user experiences.",
    real: false,
  },
  {
    name: "NexusCloud Pro",
    description: "Enterprise serverless platform for running applications without managing infrastructure.",
    real: false,
  },
  {
    name: "DataPipe Pro",
    description: "Advanced data pipeline platform for building, deploying, and monitoring ETL processes.",
    real: false,
  },
  {
    name: "FlowWave AI",
    description: "AI-powered real-time collaboration platform for teams working on documents and projects.",
    real: false,
  },
  {
    name: "CloudNet Pro",
    description: "Enterprise network infrastructure platform providing secure cloud connectivity.",
    real: false,
  },
  {
    name: "DataFlow AI",
    description: "Intelligent ETL platform with AI-powered data transformation and optimization.",
    real: false,
  },
  {
    name: "FlowTrack AI",
    description: "AI-powered project tracking platform with predictive analytics and insights.",
    real: false,
  },
  {
    name: "NexusHub Pro",
    description: "Enterprise collaboration platform centralizing team communication and project management.",
    real: false,
  },
  {
    name: "CloudScale AI",
    description: "Intelligent auto-scaling infrastructure platform that adjusts resources automatically.",
    real: false,
  },
  {
    name: "DataLens Pro",
    description: "Advanced business intelligence platform creating interactive dashboards from data sources.",
    real: false,
  },
  {
    name: "FlowEngine Pro",
    description: "Enterprise workflow orchestration platform for automating complex business processes.",
    real: false,
  },
  {
    name: "NexusAI Pro",
    description: "Enterprise AI platform helping teams build and deploy custom machine learning solutions.",
    real: false,
  },
  {
    name: "CloudVault AI",
    description: "AI-powered secure cloud storage platform with end-to-end encryption for enterprises.",
    real: false,
  },
  {
    name: "DataSync AI",
    description: "Intelligent real-time data synchronization service keeping databases in sync.",
    real: false,
  },
  {
    name: "FlowMetrics Pro",
    description: "Advanced analytics platform tracking team productivity and identifying workflow bottlenecks.",
    real: false,
  },
  {
    name: "NexusConnect Pro",
    description: "Enterprise integration platform connecting SaaS tools and automating data flow.",
    real: false,
  },
  {
    name: "StreamCore AI",
    description: "Real-time event streaming platform for building event-driven applications at scale.",
    real: false,
  },
  {
    name: "DataForge Pro",
    description: "Advanced ETL platform that transforms and migrates data between systems seamlessly.",
    real: false,
  },
  {
    name: "CloudBridge Pro",
    description: "Multi-cloud networking platform that connects workloads across different cloud providers.",
    real: false,
  },
  {
    name: "FlowSync AI",
    description: "Intelligent document collaboration platform with real-time synchronization and version control.",
    real: false,
  },
  {
    name: "NexusGrid Pro",
    description: "Enterprise grid computing platform for distributed data processing and analytics.",
    real: false,
  },
  {
    name: "DataPulse AI",
    description: "Real-time data monitoring platform that alerts teams to anomalies and performance issues.",
    real: false,
  },
  {
    name: "CloudVault Pro",
    description: "Enterprise cloud storage platform with advanced encryption and compliance features.",
    real: false,
  },
  {
    name: "FlowPath Pro",
    description: "Customer journey analytics platform that maps user interactions across touchpoints.",
    real: false,
  },
  {
    name: "NexusFlow AI",
    description: "AI-powered workflow optimization platform that suggests improvements to business processes.",
    real: false,
  },
  {
    name: "DataStream Pro",
    description: "High-performance streaming analytics platform for processing millions of events per second.",
    real: false,
  },
  {
    name: "CloudScale Pro",
    description: "Auto-scaling infrastructure platform that adjusts resources based on demand automatically.",
    real: false,
  },
  {
    name: "FlowBase Pro",
    description: "Collaborative database platform designed for teams working with real-time data.",
    real: false,
  },
  {
    name: "NexusLink AI",
    description: "AI-powered API gateway that intelligently routes and manages API requests.",
    real: false,
  },
  {
    name: "DataMesh Pro",
    description: "Distributed data architecture platform for building scalable data products.",
    real: false,
  },
  {
    name: "CloudNet Pro",
    description: "Enterprise network virtualization platform for managing cloud infrastructure.",
    real: false,
  },
  {
    name: "FlowTrack AI",
    description: "AI-powered project management platform with predictive analytics and risk assessment.",
    real: false,
  },
  {
    name: "NexusHub Pro",
    description: "Centralized collaboration hub that integrates all team communication and project tools.",
    real: false,
  },
  {
    name: "DataLens Pro",
    description: "Advanced business intelligence platform that creates interactive dashboards from multiple sources.",
    real: false,
  },
  {
    name: "CloudForge Pro",
    description: "Infrastructure as code platform for automating cloud resource deployment and management.",
    real: false,
  },
  {
    name: "FlowEngine Pro",
    description: "Enterprise workflow automation platform for orchestrating complex business processes.",
    real: false,
  },
  {
    name: "NexusAI Pro",
    description: "Enterprise AI platform that helps teams build and deploy custom machine learning models.",
    real: false,
  },
  {
    name: "DataVault AI",
    description: "AI-powered data governance platform that ensures data quality and compliance.",
    real: false,
  },
  {
    name: "CloudSync AI",
    description: "Intelligent file synchronization service that learns user patterns and optimizes sync performance.",
    real: false,
  },
  {
    name: "FlowMetrics AI",
    description: "AI-powered analytics platform that provides insights into team productivity and efficiency.",
    real: false,
  },
  {
    name: "NexusCore Pro",
    description: "Core platform for building and deploying microservices-based applications at scale.",
    real: false,
  },
  {
    name: "DataGrid AI",
    description: "AI-powered data visualization platform that automatically generates insights from datasets.",
    real: false,
  },
  {
    name: "CloudMesh AI",
    description: "AI-powered edge computing platform that optimizes workload distribution across devices.",
    real: false,
  },
  {
    name: "FlowWave Pro",
    description: "Advanced real-time collaboration platform with built-in video conferencing and screen sharing.",
    real: false,
  },
  {
    name: "NexusSphere Pro",
    description: "Enterprise platform that unifies all business applications into a single integrated workspace.",
    real: false,
  },
  {
    name: "DataPipe AI",
    description: "AI-powered data pipeline platform that automatically optimizes ETL processes for performance.",
    real: false,
  },
  {
    name: "CloudBridge AI",
    description: "Intelligent multi-cloud management platform that optimizes costs and performance across providers.",
    real: false,
  },
];

// Game state
let currentIndex = -1;
let hasAnswered = false;
let totalGuesses = 0;
let correctGuesses = 0;
let round = 0;
let streak = 0;
let bestStreak = 0;
let gameMode = "endless";
let timer = 60;
let timerInterval = null;
let autoAdvanceTimeout = null;
let usedIndices = new Set();
let gameActive = true;

// DOM elements
const startupNameEl = document.getElementById("startup-name");
const startupDescriptionEl = document.getElementById("startup-description");
const startupLogoEl = document.getElementById("startup-logo");
const startupLogoImg = document.getElementById("startup-logo-img");
const startupLogoText = document.getElementById("startup-logo-text");
const resultEl = document.getElementById("result");
const roundValueEl = document.getElementById("round-value");
const scoreValueEl = document.getElementById("score-value");
const streakValueEl = document.getElementById("streak-value");
const streakPillEl = document.getElementById("streak-pill");
const timerValueEl = document.getElementById("timer-value");
const timerPillEl = document.getElementById("timer-pill");
const progressBarEl = document.getElementById("progress-bar");
const realBtn = document.getElementById("real-btn");
const fakeBtn = document.getElementById("fake-btn");
const gameCardEl = document.getElementById("game-card");
const gameOverEl = document.getElementById("game-over");
const restartBtn = document.getElementById("restart-btn");
const finalScoreEl = document.getElementById("final-score");
const finalStreakEl = document.getElementById("final-streak");
const finalAccuracyEl = document.getElementById("final-accuracy");
const leaderboardListEl = document.getElementById("leaderboard-list");
const modeButtons = document.querySelectorAll(".mode-btn");

// Confetti canvas
const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Confetti particles
let confettiParticles = [];

class ConfettiParticle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = (Math.random() - 0.5) * 4;
    this.vy = Math.random() * -3 - 2;
    this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
    this.size = Math.random() * 6 + 4;
    this.rotation = Math.random() * Math.PI * 2;
    this.rotationSpeed = (Math.random() - 0.5) * 0.2;
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    this.vy += 0.1; // gravity
    this.rotation += this.rotationSpeed;
  }

  draw() {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.rotation);
    ctx.fillStyle = this.color;
    ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size);
    ctx.restore();
  }
}

function createConfetti(x, y) {
  for (let i = 0; i < 50; i++) {
    confettiParticles.push(new ConfettiParticle(x, y));
  }
}

function animateConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettiParticles = confettiParticles.filter((particle) => {
    particle.update();
    particle.draw();
    return particle.y < canvas.height && particle.x > -50 && particle.x < canvas.width + 50;
  });
  if (confettiParticles.length > 0) {
    requestAnimationFrame(animateConfetti);
  }
}

// Leaderboard
function loadLeaderboard() {
  const scores = JSON.parse(localStorage.getItem("dvcArenaScores") || "[]");
  scores.sort((a, b) => b.score - a.score);
  leaderboardListEl.innerHTML = "";
  scores.slice(0, 5).forEach((entry, index) => {
    const item = document.createElement("div");
    item.className = "leaderboard-item";
    item.innerHTML = `
      <span class="leaderboard-rank">${index + 1}</span>
      <span class="leaderboard-score">${entry.score}</span>
      <span class="leaderboard-streak">🔥 ${entry.streak}</span>
    `;
    leaderboardListEl.appendChild(item);
  });
}

function saveScore(score, streak, accuracy) {
  const scores = JSON.parse(localStorage.getItem("dvcArenaScores") || "[]");
  scores.push({ score, streak, accuracy, date: Date.now() });
  scores.sort((a, b) => b.score - a.score);
  localStorage.setItem("dvcArenaScores", JSON.stringify(scores.slice(0, 10)));
  loadLeaderboard();
}

// Game modes
function setGameMode(mode) {
  gameMode = mode;
  modeButtons.forEach((btn) => btn.classList.remove("active"));
  document.querySelector(`[data-mode="${mode}"]`).classList.add("active");

  if (mode === "timed") {
    timerPillEl.style.display = "flex";
    timer = 60;
  } else {
    timerPillEl.style.display = "none";
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
  }

  // Reset used indices when changing game mode
  usedIndices.clear();
  if (mode === "challenge" || mode === "perfect10") {
    round = 0;
  }
}

modeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (!gameActive) return;
    setGameMode(btn.dataset.mode);
    resetGame();
  });
});

// Timer
function startTimer() {
  if (gameMode !== "timed" || timerInterval) return;
  timerInterval = setInterval(() => {
    timer--;
    timerValueEl.textContent = timer;
    if (timer <= 0) {
      endGame();
    }
  }, 1000);
}

function stopTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
}

// Generate a deterministic seed from startup name
function getSeedFromName(name) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash);
}

// Load startup logo
function loadStartupLogo(startup) {
  // Always show initials first
  showInitialsLogo(startup);
  startupLogoEl.className = "startup-logo";
  
  // All startups (real and fake) use geometric shapes logos
  // Use deterministic seed based on name so same startup always gets same logo
  const seed = getSeedFromName(startup.name);
  
  // Use shapes style with geometric parameters for variety
  const shapeCount = (seed % 3) + 1; // 1-3 shapes
  const rotation = seed % 360; // Random rotation
  
  // Generate logo with shapes style and geometric parameters
  const logoUrl = `https://api.dicebear.com/7.x/shapes/svg?seed=${seed}&shapeCount=${shapeCount}&rotation=${rotation}`;
  
  const img = new Image();
  
  img.onload = () => {
    startupLogoImg.src = logoUrl;
    startupLogoImg.style.display = "block";
    startupLogoText.style.display = "none";
    startupLogoText.style.visibility = "hidden";
  };
  
  img.onerror = () => {
    // If generated logo fails, keep initials
    showInitialsLogo(startup);
  };
  
  // Start loading
  img.src = logoUrl;
}

function showInitialsLogo(startup) {
  const initials = startup.name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
  startupLogoText.textContent = initials;
  startupLogoImg.style.display = "none";
  startupLogoText.style.display = "flex";
  startupLogoText.style.visibility = "visible";
  startupLogoText.style.opacity = "1";
}

// Progress bar
function updateProgressBar() {
  if (gameMode === "challenge") {
    const progress = (round / 10) * 100;
    progressBarEl.style.width = `${progress}%`;
  } else if (gameMode === "perfect10") {
    const progress = (streak / 10) * 100;
    progressBarEl.style.width = `${progress}%`;
  } else {
    progressBarEl.style.width = "0%";
  }
}

// Score updates
function updateScore() {
  roundValueEl.textContent = round;
  scoreValueEl.textContent = correctGuesses;
  streakValueEl.textContent = streak;
  
  if (streak > 0) {
    streakPillEl.style.display = "flex";
    if (streak >= 5) {
      streakPillEl.classList.add("streak-hot");
    } else {
      streakPillEl.classList.remove("streak-hot");
    }
  } else {
    streakPillEl.style.display = "flex";
    streakPillEl.classList.remove("streak-hot");
  }

  updateProgressBar();
}

// Pick random startup
function pickRandomStartup() {
  if (autoAdvanceTimeout !== null) {
    clearTimeout(autoAdvanceTimeout);
    autoAdvanceTimeout = null;
  }

  if (!gameActive) return;

  // Ensure we don't repeat startups across all modes
  // When all startups are used, reset the list
  if (usedIndices.size >= startups.length) {
    usedIndices.clear();
  }
  
  // Pick a random startup that hasn't been used yet
  let next;
  let attempts = 0;
  do {
    next = Math.floor(Math.random() * startups.length);
    attempts++;
    // Safety check to avoid infinite loop
    if (attempts > 1000) {
      usedIndices.clear();
      break;
    }
  } while (usedIndices.has(next));

  // Mark this startup as used
  usedIndices.add(next);

  currentIndex = next;
  hasAnswered = false;
  round += 1;
  const s = startups[currentIndex];

  // Animate card entrance
  gameCardEl.style.transform = "scale(0.95)";
  gameCardEl.style.opacity = "0.8";
  setTimeout(() => {
    gameCardEl.style.transform = "scale(1)";
    gameCardEl.style.opacity = "1";
  }, 50);

  // Hide name initially, show only description
  startupNameEl.textContent = s.name;
  startupNameEl.classList.add("hidden");
  startupDescriptionEl.textContent = s.description || "";

  // Load logo
  loadStartupLogo(s);

  // Reset result state
  resultEl.textContent = "";
  resultEl.className = "result";

  // Re-enable buttons
  realBtn.disabled = false;
  fakeBtn.disabled = false;
  realBtn.style.opacity = "1";
  fakeBtn.style.opacity = "1";

  // Check game end conditions
  if (gameMode === "challenge" && round > 10) {
    endGame();
    return;
  }
  
  // For perfect10 mode, show progress based on streak
  if (gameMode === "perfect10") {
    // Progress is shown via streak in updateProgressBar
  }

  updateScore();
}

// Handle guess
function handleGuess(isRealGuess) {
  if (hasAnswered || currentIndex === -1 || !gameActive) return;
  hasAnswered = true;

  const s = startups[currentIndex];
  const correct = s.real === isRealGuess;

  // Update score
  totalGuesses += 1;
  if (correct) {
    correctGuesses += 1;
    streak += 1;
    if (streak > bestStreak) {
      bestStreak = streak;
    }
    
    // Check if perfect10 mode is completed
    if (gameMode === "perfect10" && streak >= 10) {
      updateScore();
      setTimeout(() => {
        endGame();
      }, 1500);
      return;
    }
  } else {
    streak = 0;
    // In perfect10 mode, game ends on first mistake
    if (gameMode === "perfect10") {
      updateScore();
      setTimeout(() => {
        endGame();
      }, 1500);
      return;
    }
  }

  // Disable buttons
  realBtn.disabled = true;
  fakeBtn.disabled = true;
  realBtn.style.opacity = "0.6";
  fakeBtn.style.opacity = "0.6";

  // Reveal name after answer
  startupNameEl.classList.remove("hidden");
  
  // Show result with animation
  if (correct) {
    resultEl.textContent = s.real
      ? "🎉 Correct! This is a real startup."
      : "🎉 Correct! This one is completely made up.";
    resultEl.className = "result correct";
    
    // Confetti on correct answer
    const rect = gameCardEl.getBoundingClientRect();
    createConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);
    animateConfetti();

    // Special message for streaks
    if (streak >= 5) {
      resultEl.textContent += ` 🔥 ${streak} in a row!`;
    }
  } else {
    resultEl.textContent = s.real
      ? "❌ Not quite. This is actually a real startup."
      : "❌ Not quite. This one is fake — we invented it.";
    resultEl.className = "result incorrect";
  }

  // Reveal logo color
  startupLogoEl.classList.add(s.real ? "real" : "fake");

  updateScore();

  // Auto-advance to the next startup after a delay
  autoAdvanceTimeout = setTimeout(() => {
    if (gameActive) {
      pickRandomStartup();
    }
  }, 2000);
}

// End game
function endGame() {
  gameActive = false;
  stopTimer();
  hasAnswered = true;
  realBtn.disabled = true;
  fakeBtn.disabled = true;

  const accuracy = totalGuesses > 0 ? Math.round((correctGuesses / totalGuesses) * 100) : 0;
  
  finalScoreEl.textContent = correctGuesses;
  finalStreakEl.textContent = bestStreak;
  finalAccuracyEl.textContent = `${accuracy}%`;

  saveScore(correctGuesses, bestStreak, accuracy);

  gameOverEl.style.display = "flex";
  gameCardEl.style.display = "none";
}

// Reset game
function resetGame() {
  gameActive = true;
  currentIndex = -1;
  hasAnswered = false;
  totalGuesses = 0;
  correctGuesses = 0;
  round = 0;
  streak = 0;
  bestStreak = 0;
  usedIndices.clear();
  timer = 60;
  timerValueEl.textContent = timer;
  stopTimer();

  gameOverEl.style.display = "none";
  gameCardEl.style.display = "flex";

  if (gameMode === "timed") {
    startTimer();
  }

  pickRandomStartup();
  updateScore();
}

// Event listeners
realBtn.addEventListener("click", () => handleGuess(true));
fakeBtn.addEventListener("click", () => handleGuess(false));
restartBtn.addEventListener("click", resetGame);

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  if (!gameActive || hasAnswered) return;
  if (e.key === "r" || e.key === "R") {
    e.preventDefault();
    handleGuess(true);
  } else if (e.key === "f" || e.key === "F") {
    e.preventDefault();
    handleGuess(false);
  }
});

// Floating emoji and stars
const floatingEmojiContainer = document.getElementById("floating-emoji-container");
const newYearEmojis = ["🎄", "❄️", "🎁", "🎅", "⛄", "🦌", "🔔", "✨", "🎊", "🎉", "🧸", "🕯️", "🍾", "🥂"];

function createFloatingEmoji() {
  const emoji = document.createElement("div");
  emoji.className = "floating-emoji";
  emoji.textContent = newYearEmojis[Math.floor(Math.random() * newYearEmojis.length)];
  
  // Random starting position
  emoji.style.left = `${Math.random() * 100}%`;
  emoji.style.animationDuration = `${18 + Math.random() * 12}s`;
  emoji.style.animationDelay = `${Math.random() * 3}s`;
  emoji.style.fontSize = `${1.2 + Math.random() * 1}rem`;
  
  floatingEmojiContainer.appendChild(emoji);
  
  // Remove emoji after animation
  setTimeout(() => {
    if (emoji.parentNode) {
      emoji.parentNode.removeChild(emoji);
    }
  }, 30000);
}

function createFloatingStar() {
  const star = document.createElement("div");
  star.className = "floating-star";
  star.textContent = "⭐";
  
  // Random starting position
  star.style.left = `${Math.random() * 100}%`;
  star.style.animationDuration = `${20 + Math.random() * 15}s`;
  star.style.animationDelay = `${Math.random() * 5}s`;
  star.style.fontSize = `${0.8 + Math.random() * 0.6}rem`;
  
  floatingEmojiContainer.appendChild(star);
  
  // Remove star after animation
  setTimeout(() => {
    if (star.parentNode) {
      star.parentNode.removeChild(star);
    }
  }, 35000);
}

// Create floating emojis and stars periodically
function startFloatingEmojis() {
  // Create initial emojis
  for (let i = 0; i < 12; i++) {
    setTimeout(() => createFloatingEmoji(), i * 800);
  }
  
  // Create initial stars
  for (let i = 0; i < 20; i++) {
    setTimeout(() => createFloatingStar(), i * 500);
  }
  
  // Continue creating emojis every 3 seconds
  setInterval(() => {
    if (floatingEmojiContainer.children.length < 25) {
      createFloatingEmoji();
    }
  }, 3000);
  
  // Continue creating stars every 2 seconds
  setInterval(() => {
    if (floatingEmojiContainer.children.length < 30) {
      createFloatingStar();
    }
  }, 2000);
}

// Window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

// Initial load
loadLeaderboard();
resetGame();
startFloatingEmojis();