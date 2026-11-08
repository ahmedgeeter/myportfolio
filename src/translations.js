export const translations = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      projects: "Systems",
      skills: "Arsenal",
      education: "Education",
      contact: "Hire Me",
      status: "Available for Hire",
    },
    hero: {
      statusBadge: "Available for Full-Time & Contract (Remote / Relocation)",
      name: "Ahmed Gaiter",
      rolePrefix: "I engineer",
      roleHighlight: "Applied AI Systems & High-Throughput Python Backends",
      bio: "Bridging the gap between frontier LLMs and dependable enterprise backends. I build deterministic multi-agent state machines with LangGraph, asynchronous microservices with FastAPI, and resilient Redis/Celery queue architectures.",
      btnResume: "Download CV (PDF)",
      btnWhatsApp: "Quick Chat on WhatsApp",
      btnProjects: "Explore Systems",
      btnEmail: "Email Me",
      copied: "Email Copied!",
      stats: [
        { value: "2+ Yrs", label: "Production Systems", sub: "Python & LangGraph" },
        { value: "<300ms", label: "Voice WebSocket Latency", sub: "AutoHire System" },
        { value: "99.9%", label: "Provider Uptime", sub: "Multi-LLM Fallback" },
        { value: "B.Sc.", label: "Mansoura University", sub: "Computer Science" }
      ],
      quickBadges: [
        "LangGraph Multi-Agent Workflows",
        "Asynchronous FastAPI & WebSockets",
        "Redis & Celery Task Queues",
        "Deterministic Pydantic v2 Guardrails",
        "Docker & CI/CD Pipelines"
      ]
    },
    about: {
      sectionBadge: "EXECUTIVE SUMMARY",
      headline: "Engineered for resilience, not superficial wrappers.",
      p1: "I specialize in architecting production-ready AI systems that do not break under scale or unpredictable LLM hallucinations. Rather than basic prompt chains, my systems leverage deterministic state graphs, runtime provider fallbacks (Groq, Gemini, OpenAI), and strict schema guardrails.",
      p2: "My engineering philosophy prioritizes clean asynchronous architecture, sub-second latency, rigorous Pytest coverage, and containerized deployments ready for cloud workloads.",
      highlights: [
        { 
          title: "Deterministic State Machines", 
          desc: "Cyclic multi-agent graphs with LangGraph, bounded tool calling, and Redis session checkpoints." 
        },
        { 
          title: "High-Concurrency Backend", 
          desc: "Full-duplex WebSockets, Celery task decoupling, and asynchronous AsyncIO FastAPI endpoints." 
        },
        { 
          title: "AI Safety & Alignment", 
          desc: "Hands-on experience auditing model outputs, adversarial prompt sanitization, and Pydantic v2 schemas." 
        },
        { 
          title: "Formal CS Foundation", 
          desc: "B.Sc. in Computer Science (2019–2023) + certified by Dr. Mahmoud Eid's AI Masterclass." 
        }
      ]
    },
    projects: {
      sectionBadge: "PRODUCTION SYSTEMS",
      headline: "Engineered with measurable performance and public source code.",
      viewDemo: "Live Demo",
      viewCode: "Source Code",
      forTechLead: "Architecture Breakdown",
      items: [
        {
          id: "autohire",
          title: "AutoHire",
          subtitle: "Autonomous Real-Time Technical Interview Platform",
          metric: "Sub-300ms voice & text latency",
          desc: "A live technical interview engine utilizing event-driven LangGraph state machines paired with full-duplex WebSockets in FastAPI. Transcript evaluation is decoupled into background Celery workers backed by Redis, ensuring the candidate interaction loop remains instantaneous. Includes automated fallback routing from Groq (LPU) to Google Gemini Flash during provider throttling.",
          architecture: "FastAPI WebSockets ➔ LangGraph Cyclic State Graph ➔ Redis Pub/Sub ➔ Celery Worker Pool ➔ Groq / Gemini Fallback",
          tags: ["FastAPI", "LangGraph", "WebSockets", "Redis", "Celery", "Pytest", "React"],
          demo: "https://ai-automation-interview.vercel.app/",
          github: "https://github.com/ahmedgeeter/ai-interview-automation",
          image: "/project-AutoHire1.png",
          images: ["/project-AutoHire1.png", "/project-AutoHire2.png"]
        },
        {
          id: "shiphny",
          title: "Shiphny",
          subtitle: "Multi-Agent Logistics Intelligence Platform",
          metric: "Zero-unauthorized tool execution",
          desc: "An enterprise logistics assistant powered by a LangGraph cyclic state agent with deterministic tool boundaries (tracking, cancellation, billing). Features PostgreSQL with Alembic migrations for transactional persistence, Redis session management, and automated multi-provider fallback chains between Groq and Gemini.",
          architecture: "LangGraph State Agent ➔ Bounded Tool Router ➔ PostgreSQL + Alembic ➔ Redis Checkpoints ➔ Docker Compose",
          tags: ["FastAPI", "LangGraph", "PostgreSQL", "Alembic", "Redis", "Docker"],
          demo: "https://shiphny-ai-support.vercel.app/",
          github: "https://github.com/ahmedgeeter/shiphny-ai-support",
          image: "/project-shiphny.png"
        },
        {
          id: "meridian",
          title: "Meridian",
          subtitle: "Multimodal Document Intelligence & Vocal Auditor",
          metric: "Zero hallucinated financial fields",
          desc: "An end-to-end vision-language pipeline auditing complex multi-page industrial diagrams, blueprints, and invoices using Meta Llama-3.2 Vision. Incorporates Whisper speech transcription with intelligent Voice Activity Detection (VAD) and deterministic Pydantic v2 schemas to ensure 100% compliant data extraction.",
          architecture: "Meta Llama-3.2 Vision ➔ Whisper VAD ➔ Pydantic v2 Strict Validators ➔ FastAPI Async Pipeline",
          tags: ["FastAPI", "Llama 3.2 Vision", "Whisper", "Pydantic v2", "React"],
          demo: "https://ai-auditor-ocr-voice.vercel.app/",
          github: "https://github.com/ahmedgeeter/ai-auditor-ocr-voice",
          image: "/project-ai-auditor/Screenshot 2026-04-13 210744.png"
        },
        {
          id: "guardrails",
          title: "LLM Safety Guardrail API",
          subtitle: "Production Security Microservice for AI Workflows",
          metric: "<15ms sanitization latency",
          desc: "High-performance microservice enforcing strict Pydantic output validation, adversarial prompt-injection detection, and automated PII anonymization before upstream LLM dispatch.",
          architecture: "FastAPI Microservice ➔ Regex & Semantic Guardrails ➔ Redis Token Bucket ➔ Pydantic Sanitizer",
          tags: ["FastAPI", "Pydantic v2", "Redis", "Docker", "AI Guardrails"],
          demo: null,
          github: "https://github.com/ahmedgeeter/LLM-Safety-Guardrail-API",
          image: "/project-rag.png",
          isApi: true
        }
      ]
    },
    experience: {
      sectionBadge: "TRACK RECORD",
      headline: "Hands-on experience delivering reliable software.",
      jobs: [
        {
          role: "AI & Backend Software Engineer",
          company: "Independent Contractor · Remote",
          period: "Jan 2024 — Present",
          badge: "Current Role",
          bullets: [
            "Architected and deployed asynchronous FastAPI backends and RAG pipelines; moved heavy LLM processing to Redis-backed Celery queues, cutting synchronous API response latency by 45%.",
            "Implemented multi-provider LLM fallback routing across Groq, Gemini, and OpenAI to eliminate rate limits and maintain 99.9% uptime.",
            "Engineered commerce backends integrating payment webhooks (Stripe) with atomic PostgreSQL ledger updates; containerized services via Docker and GitHub Actions CI/CD."
          ],
          skills: ["Python", "FastAPI", "LangGraph", "Redis", "Celery", "Docker", "PostgreSQL", "CI/CD"]
        },
        {
          role: "AI Integration Engineer",
          company: "Springer Capital · Contract",
          period: "May 2025 — Sep 2025",
          badge: "Contract",
          bullets: [
            "Developed Python automation scripts and LLM-enabled API integrations for operational workflows, data transformations, and ingestion pipelines.",
            "Collaborated within an agile remote engineering squad to standardize API schemas and streamline data ingestion pipeline reliability."
          ],
          skills: ["Python", "Automation", "LLM APIs", "Data Ingestion", "FastAPI"]
        },
        {
          role: "AI Alignment & Code Security Specialist",
          company: "Atlas Capture · Contract",
          period: "Dec 2024 — Feb 2025",
          badge: "Contract",
          bullets: [
            "Audited and debugged complex Python and TypeScript code generated by frontier LLMs to produce high-benchmark RLHF alignment datasets.",
            "Evaluated adversarial prompt injection benchmarks, jailbreak attempts, and hallucination vectors to enforce model response safety.",
            "Applied strict Pydantic-based schema checks and deterministic validation to verify structured API and model outputs."
          ],
          skills: ["RLHF", "Model Evals", "Prompt Security", "Python", "Pydantic", "TypeScript"]
        }
      ]
    },
    skills: {
      sectionBadge: "TECHNICAL ARSENAL",
      headline: "Core proficiencies tested in production environments.",
      groups: [
        {
          title: "AI & Agentic Workflows",
          icon: "Bot",
          skills: [
            "LangGraph (Cyclic Graphs & State Machines)",
            "Production RAG & Vector Retrieval",
            "Deterministic Tool Calling Guardrails",
            "LiteLLM Multi-Provider Fallback",
            "Redis Session Checkpointing",
            "Groq & Gemini APIs",
            "Meta Llama 3.2 Vision & Whisper"
          ]
        },
        {
          title: "Backend & Concurrency",
          icon: "Server",
          skills: [
            "Python (AsyncIO, Concurrency)",
            "FastAPI Microservices",
            "Full-Duplex WebSockets",
            "Celery Asynchronous Task Queues",
            "Redis (Pub/Sub, Caching)",
            "Pydantic v2 (Strict Validation)",
            "SQLAlchemy & Alembic Migrations"
          ]
        },
        {
          title: "DevOps & Cloud Systems",
          icon: "Cloud",
          skills: [
            "Docker & Multi-Stage Builds",
            "Kubernetes Manifests",
            "GitHub Actions CI/CD",
            "Linux / Bash Scripting",
            "Pytest Testing Suites",
            "Cloudflare Pages & Workers"
          ]
        },
        {
          title: "Databases & Full-Stack",
          icon: "Database",
          skills: [
            "PostgreSQL (Transactions, Indexing)",
            "Vector Search (FAISS / PGVector)",
            "TypeScript & JavaScript",
            "React 18 & Next.js",
            "Tailwind CSS"
          ]
        }
      ]
    },
    education: {
      sectionBadge: "EDUCATION & CREDENTIALS",
      headline: "Academic degree and specialized AI certifications.",
      degree: {
        title: "B.Sc. in Computer Science",
        institution: "Mansoura University, Egypt",
        period: "2019 — 2023",
        desc: "Core coursework: Data Structures & Algorithms, Distributed Systems, Operating Systems, Database Management Systems, and Artificial Intelligence."
      },
      certs: [
        {
          title: "AI Engineering Masterclass",
          issuer: "Dr. Mahmoud Eid",
          year: "2026",
          badge: "Specialized Masterclass",
          desc: "Advanced multi-agent architectures, deterministic LangGraph workflows, memory management, and production LLM engineering."
        },
        {
          title: "Backend Development Certificate",
          issuer: "Mansoura University",
          year: "2022",
          badge: "Backend Engineering",
          desc: "Relational database schema design, RESTful APIs, authentication, and concurrency optimization."
        },
        {
          title: "Ethics in the Age of Generative AI",
          issuer: "IBM",
          year: "2024",
          badge: "AI Safety",
          desc: "Model alignment, deterministic output guardrails, bias remediation, and responsible AI deployment."
        }
      ]
    },
    contact: {
      sectionBadge: "READY TO HIRE?",
      headline: "Let's build reliable AI systems for your product.",
      desc: "Whether you need an Applied AI Engineer for agentic workflows, an asynchronous Python backend, or end-to-end LLM integration — I am ready to start immediately.",
      emailLabel: "Email Address",
      emailValue: "ahmedekramy303@gmail.com",
      whatsappLabel: "WhatsApp Direct",
      whatsappValue: "+20 106 933 4256",
      btnEmail: "Send Email",
      btnWhatsApp: "Chat on WhatsApp",
      btnLinkedIn: "LinkedIn Profile",
      btnGitHub: "GitHub Profile",
      btnResume: "Download Resume (PDF)",
      footer: "© {year} Ahmed Gaiter. Engineered with precision, liquid glass aesthetics, and dependable code."
    }
  },
  ar: {
    nav: {
      about: "عنّي",
      experience: "الخبرات",
      projects: "الأنظمة",
      skills: "الترسانة التقنية",
      education: "التعليم",
      contact: "تواصل للتوظيف",
      status: "متاح للعمل فوراً",
    },
    hero: {
      statusBadge: "متاح للعمل بدوام كامل أو تعاقد (عن بُعد / إمكانية الانتقال)",
      name: "أحمد جيتر",
      rolePrefix: "أنا أهندس",
      roleHighlight: "أنظمة الذكاء الاصطناعي التطبيقي وواجهات بايثون الخلفية عالية الأداء",
      bio: "أسد الفجوة بين النماذج اللغوية الرائدة وبين الواجهات الخلفية المؤسسية الموثوقة. أبني آلات حالات للوكلاء الأذكياء بـ LangGraph، وخدمات سريعة غير متزامنة بـ FastAPI، وطوابير معالجة مرنة بـ Redis و Celery.",
      btnResume: "تحميل السيرة الذاتية (PDF)",
      btnWhatsApp: "محادثة فورية عبر واتساب",
      btnProjects: "استعراض الأنظمة والمشاريع",
      btnEmail: "مراسلتي عبر البريد",
      copied: "تم نسخ البريد الإلكتروني!",
      stats: [
        { value: "2+ سنوات", label: "أنظمة إنتاج حقيقية", sub: "Python & LangGraph" },
        { value: "<300ms", label: "زمن استجابة الصوت", sub: "نظام AutoHire" },
        { value: "99.9%", label: "جاهزية المزودين", sub: "تحويل تلقائي بين النماذج" },
        { value: "بكالوريوس", label: "جامعة المنصورة", sub: "علوم الحاسب" }
      ],
      quickBadges: [
        "أنظمة الوكلاء المتعددين (LangGraph)",
        "واجهات FastAPI و WebSockets لحظية",
        "طوابير مهام Redis و Celery",
        "بوابات تدقيق صارمة عبر Pydantic v2",
        "حاويات Docker وخطوط CI/CD"
      ]
    },
    about: {
      sectionBadge: "الملخص التنفيذي",
      headline: "هندسة حقيقية للمتانة، وليست مجرد واجهات شكلية للنماذج.",
      p1: "أتخصص في معمارية أنظمة ذكاء اصطناعي جاهزة لبيئات الإنتاج، لا تنهار تحت الأحمال العالية أو بسبب هلوسة النماذج اللغوية. بدلاً من سلاسل الأوامر البسيطة، تعتمد أنظمتي على مخططات حالات حتمية، وآليات تبديل بديلة عند الأعطال (Groq, Gemini, OpenAI)، وتدقيق صارم للمخططات.",
      p2: "فلسفتي الهندسية تعطي الأولوية للمعماريات النظيفة غير المتزامنة، والاستجابة في أجزاء من الثانية، وتغطية اختبارات شاملة بـ Pytest، وحزم الخدمات في حاويات سحابية جاهزة.",
      highlights: [
        { 
          title: "آلات حالات حتمية", 
          desc: "مخططات وكلاء حلقية بـ LangGraph، واستدعاء أدوات مقيد الصلاحيات، وحفظ الجلسات بـ Redis." 
        },
        { 
          title: "واجهات خلفية عالية التزامن", 
          desc: "اتصال كامل عبر WebSockets، وتفريغ المهام لـ Celery، ونقاط وصول غير متزامنة بـ FastAPI." 
        },
        { 
          title: "أمان ومحاذاة الذكاء الاصطناعي", 
          desc: "خبرة مباشرة في تدقيق مخرجات النماذج، ومنع حقن الأوامر، وتدقيق المخططات عبر Pydantic v2." 
        },
        { 
          title: "أساس أكاديمي راسخ", 
          desc: "بكالوريوس علوم الحاسب (2019–2023) + شهادة ماستركلاس هندسة الذكاء الاصطناعي مع د. محمود عيد." 
        }
      ]
    },
    projects: {
      sectionBadge: "أنظمة الإنتاج",
      headline: "أنظمة مطبقة بأرقام أداء ملموسة وأكواد برمجية معلنة.",
      viewDemo: "المعاينة الحية",
      viewCode: "الكود المصدري",
      forTechLead: "المعمارية الهندسية",
      items: [
        {
          id: "autohire",
          title: "AutoHire",
          subtitle: "منصة تقييم مقابلات تقنية ذكية ولحظية بالصوت والنص",
          metric: "زمن استجابة أقل من 300 مللي ثانية",
          desc: "محرك مقابلات تقنية حية يعتمد على آلة حالات LangGraph واتصال WebSockets ثنائي الاتجاه في FastAPI. تم فصل تقييم إجابات المرشحين إلى مهام خلفية في Celery و Redis للحفاظ على انسيابية الحوار بدون أي تأخير، مع توجيه تلقائي بديل بين Groq و Gemini Flash.",
          architecture: "FastAPI WebSockets ➔ LangGraph Cyclic State Graph ➔ Redis Pub/Sub ➔ Celery Worker Pool ➔ Groq / Gemini Fallback",
          tags: ["FastAPI", "LangGraph", "WebSockets", "Redis", "Celery", "Pytest", "React"],
          demo: "https://ai-automation-interview.vercel.app/",
          github: "https://github.com/ahmedgeeter/ai-interview-automation",
          image: "/project-AutoHire1.png",
          images: ["/project-AutoHire1.png", "/project-AutoHire2.png"]
        },
        {
          id: "shiphny",
          title: "Shiphny",
          subtitle: "منصة ذكاء لوجستي متعددة الوكلاء للمؤسسات",
          metric: "منع كامل للاستدعاءات غير المصرح بها",
          desc: "مساعد لوجستي يعتمد على وكيل حلقي بـ LangGraph مع حدود أدوات مقيدة محددة الصلاحيات (تتبع، إلغاء، فواتير). يستخدم PostgreSQL مع ترحيلات Alembic لتوثيق المعاملات، وذاكرة جلسات بـ Redis، ومسارات تبديل تلقائي بين Groq و Gemini.",
          architecture: "LangGraph State Agent ➔ Bounded Tool Router ➔ PostgreSQL + Alembic ➔ Redis Checkpoints ➔ Docker Compose",
          tags: ["FastAPI", "LangGraph", "PostgreSQL", "Alembic", "Redis", "Docker"],
          demo: "https://shiphny-ai-support.vercel.app/",
          github: "https://github.com/ahmedgeeter/shiphny-ai-support",
          image: "/project-shiphny.png"
        },
        {
          id: "meridian",
          title: "Meridian",
          subtitle: "نظام تدقيق المستندات والمخططات الصناعية متعدد الوسائط",
          metric: "صفر حقول مالية مهلوسة",
          desc: "خط معالجة متكامل للرؤية واللغة لتحليل وتدقيق المخططات الهندسية والفواتير الصناعية المعقدة عبر Meta Llama-3.2 Vision والمطابقة الصوتية عبر Whisper مع كشف النشاط الصوتي (VAD) وفحوصات صارمة بـ Pydantic v2.",
          architecture: "Meta Llama-3.2 Vision ➔ Whisper VAD ➔ Pydantic v2 Strict Validators ➔ FastAPI Async Pipeline",
          tags: ["FastAPI", "Llama 3.2 Vision", "Whisper", "Pydantic v2", "React"],
          demo: "https://ai-auditor-ocr-voice.vercel.app/",
          github: "https://github.com/ahmedgeeter/ai-auditor-ocr-voice",
          image: "/project-ai-auditor/Screenshot 2026-04-13 210744.png"
        },
        {
          id: "guardrails",
          title: "LLM Safety Guardrail API",
          subtitle: "خدمة أمنية لحماية وتدقيق مخرجات ومدخلات النماذج",
          metric: "زمن فحص وتطهير أقل من 15 مللي ثانية",
          desc: "خدمة مصغرة عالية الأداء تفرض التحقق الصارم من صحة البيانات بـ Pydantic v2، وتمنع حقن الأوامر، وتخفي البيانات الحساسة (PII) تلقائياً قبل إرسال الطلبات للنماذج.",
          architecture: "FastAPI Microservice ➔ Regex & Semantic Guardrails ➔ Redis Token Bucket ➔ Pydantic Sanitizer",
          tags: ["FastAPI", "Pydantic v2", "Redis", "Docker", "AI Guardrails"],
          demo: null,
          github: "https://github.com/ahmedgeeter/LLM-Safety-Guardrail-API",
          image: "/project-rag.png",
          isApi: true
        }
      ]
    },
    experience: {
      sectionBadge: "السجل المهني",
      headline: "خبرات عملية في بناء وتسليم برمجيات عالية الاعتمادية.",
      jobs: [
        {
          role: "مهندس برمجيات ذكاء اصطناعي وباك إند",
          company: "مطور مستقل · تعاقد حر عن بعد",
          period: "يناير 2024 — حتى الآن",
          badge: "الدور الحالي",
          bullets: [
            "معمارية وتطوير واجهات FastAPI غير متزامنة وخطوط RAG، ونقل معالجات النماذج الثقيلة إلى طوابير Celery و Redis لتقليص زمن استجابة الـ API بنسبة 45%.",
            "بناء منظومة توجيه وتبديل بديلة بين مزودي النماذج (Groq و Gemini و OpenAI) لتفادي حدود الاستخدام وتحقيق جاهزية 99.9%.",
            "هندسة واجهات تجارية وربط خطافات الدفع مع تحديثات قيود ذرية في PostgreSQL، وحزم الخدمات عبر Docker و GitHub Actions."
          ],
          skills: ["Python", "FastAPI", "LangGraph", "Redis", "Celery", "Docker", "PostgreSQL", "CI/CD"]
        },
        {
          role: "مهندس تكامل ذكاء اصطناعي",
          company: "سبرينغر كابيتال · تعاقد عن بعد",
          period: "مايو 2025 — سبتمبر 2025",
          badge: "تعاقد",
          bullets: [
            "تطوير نصوص أتمتة بلغة بايثون وتكاملات برمجية مدعومة بالنماذج اللغوية لتدفقات العمليات التشغيلية، وتحويل البيانات، وخطوط الاستيعاب.",
            "التعاون ضمن فريق هندسي عن بعد لتوحيد مخططات الـ APIs وتحسين موثوقية تكامل واستيعاب البيانات."
          ],
          skills: ["Python", "Automation", "LLM APIs", "Data Ingestion", "FastAPI"]
        },
        {
          role: "أخصائي محاذاة الذكاء الاصطناعي وأمان الأكواد",
          company: "أطلس كابتشر · تعاقد عن بعد",
          period: "ديسمبر 2024 — فبراير 2025",
          badge: "تعاقد",
          bullets: [
            "تدقيق وتصحيح أكواد بايثون وتايب سكريبت المولدة من النماذج اللغوية الرائدة لإنشاء مجموعات بيانات محاذاة عالية الدقة لـ RLHF.",
            "تقييم اختبارات حقن الأوامر العدائية، ومحاولات كسر الحماية، ومتجهات الهلوسة لفرض أمان وصحة استجابات النماذج.",
            "تطبيق فحوصات تدقيق صارمة للمخططات عبر نماذج Pydantic للتحقق من المخرجات الهيكلية."
          ],
          skills: ["RLHF", "Model Evals", "Prompt Security", "Python", "Pydantic", "TypeScript"]
        }
      ]
    },
    skills: {
      sectionBadge: "الترسانة التقنية",
      headline: "تقنيات تم اختبارها وتطبيقها في بيئات عمل حقيقية.",
      groups: [
        {
          title: "الذكاء الاصطناعي والوكلاء",
          icon: "Bot",
          skills: [
            "LangGraph (مخططات حلقية وحفظ الحالة)",
            "معمارية RAG للإنتاج واسترجاع المتجهات",
            "بوابات استدعاء الأدوات المقيدة",
            "LiteLLM وإدارة التبديل بين المزودين",
            "حفظ الجلسات ونقاط الاستعادة بـ Redis",
            "واجهات Groq و Gemini",
            "Meta Llama 3.2 Vision و Whisper"
          ]
        },
        {
          title: "الواجهات الخلفية والتزامن",
          icon: "Server",
          skills: [
            "Python (AsyncIO, Concurrency)",
            "خدمات FastAPI المصغرة",
            "WebSockets ثنائية الاتجاه",
            "طوابير مهام Celery غير المتزامنة",
            "Redis (Pub/Sub والتخزين المؤقت)",
            "Pydantic v2 (التدقيق الصارم للمخططات)",
            "SQLAlchemy وترحيلات Alembic"
          ]
        },
        {
          title: "السحابة والتشغيل (DevOps)",
          icon: "Cloud",
          skills: [
            "Docker وبناء الحاويات متعدد المراحل",
            "ملفات نشر Kubernetes",
            "أتمتة CI/CD عبر GitHub Actions",
            "أنظمة Linux وسكربتات Bash",
            "اختبارات Pytest المؤتمتة",
            "Cloudflare Pages & Workers"
          ]
        },
        {
          title: "قواعد البيانات والواجهات",
          icon: "Database",
          skills: [
            "PostgreSQL (معاملات، فهرسة)",
            "بحث المتجهات (FAISS / PGVector)",
            "TypeScript و JavaScript",
            "React 18 و Next.js",
            "Tailwind CSS"
          ]
        }
      ]
    },
    education: {
      sectionBadge: "التعليم والشهادات",
      headline: "الأساس الأكاديمي والتدريب المتقدم في الذكاء الاصطناعي.",
      degree: {
        title: "بكالوريوس في علوم الحاسب",
        institution: "جامعة المنصورة، مصر",
        period: "2019 — 2023",
        desc: "المساقات الأساسية: هياكل البيانات والخوارزميات، الأنظمة الموزعة، نظم التشغيل، قواعد البيانات، والذكاء الاصطناعي."
      },
      certs: [
        {
          title: "ماستركلاس هندسة الذكاء الاصطناعي",
          issuer: "د. محمود عيد (Dr. Mahmoud Eid)",
          year: "2026",
          badge: "تدريب تخصصي متقدم",
          desc: "معمارية الوكلاء المتقدمة، ومخططات LangGraph الحتمية، وإدارة الذاكرة، وهندسة النماذج اللغوية في الإنتاج."
        },
        {
          title: "شهادة تطوير الواجهات الخلفية",
          issuer: "جامعة المنصورة",
          year: "2022",
          badge: "هندسة الباك إند",
          desc: "تصميم قواعد البيانات، وتطوير واجهات برمجة التطبيقات، والمصادقة، والأنظمة المتزامنة."
        },
        {
          title: "أخلاقيات عصر الذكاء الاصطناعي التوليدي",
          issuer: "IBM",
          year: "2024",
          badge: "أمان الذكاء الاصطناعي",
          desc: "محاذاة النماذج اللغوية، بوابات الأمان، وتجنب الانحيازات في التطبيقات الواقعية."
        }
      ]
    },
    contact: {
      sectionBadge: "جاهز للتوظيف؟",
      headline: "دعنا نبني أنظمة ذكاء اصطناعي موثوقة لمنتجكم.",
      desc: "سواء كنتم تبحثون عن مهندس ذكاء اصطناعي تطبيقي، أو واجهة خلفية فائقة السرعة ببايثون، أو تكامل ذكي شامل — أنا جاهز للبدء فوراً.",
      emailLabel: "البريد الإلكتروني",
      emailValue: "ahmedekramy303@gmail.com",
      whatsappLabel: "واتساب مباشر",
      whatsappValue: "+20 106 933 4256",
      btnEmail: "مراسلتي عبر البريد",
      btnWhatsApp: "محادثة عبر واتساب",
      btnLinkedIn: "الملف على لينكد إن",
      btnGitHub: "الملف على جيت هاب",
      btnResume: "تحميل السيرة الذاتية (PDF)",
      footer: "© {year} أحمد جيتر. صُمم وطُوّر بمعمارية زجاجية هلامية انسيابية وأكواد إنتاجية موثوقة."
    }
  }
};
