export const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      education: "Education",
      contact: "Contact",
      resume: "Resume",
    },
    hero: {
      location: "Cairo, Egypt • Open to Remote & Relocation",
      name: "Ahmed Gaiter",
      role: "AI & Backend Software Engineer",
      bio: "Software engineer specializing in applied AI and Python backend architectures. Builds stateful agent workflows with LangGraph, asynchronous microservices with FastAPI, and resilient Redis/Celery queue pipelines.",
      btnResume: "Download Resume",
      btnWhatsApp: "WhatsApp",
      btnEmail: "Email Me",
      copied: "Copied!",
      stack: [
        "Python (AsyncIO)",
        "FastAPI",
        "LangGraph",
        "Redis",
        "Celery",
        "PostgreSQL",
        "Docker"
      ]
    },
    about: {
      sectionTitle: "About",
      headline: "Production-focused backend and AI systems engineering.",
      p1: "I build backend services and multi-agent workflows designed for reliability and measurable throughput. Rather than relying on simple wrappers, my work centers on deterministic state machines, asynchronous concurrency, and strict schema validation with Pydantic.",
      p2: "My core stack includes Python (AsyncIO), FastAPI, LangGraph, Redis, PostgreSQL, and Docker, with a disciplined focus on clean architecture, automated testing (Pytest), and sub-second response times.",
      highlights: [
        {
          title: "Distributed Concurrency",
          desc: "Full-duplex WebSockets, Celery task decoupling, and Redis caching for responsive APIs."
        },
        {
          title: "Stateful Agent Graphs",
          desc: "Cyclic workflows with LangGraph, bounded tool calling, and Redis session checkpoints."
        },
        {
          title: "Model Evals & Alignment",
          desc: "Auditing LLM-generated code, adversarial prompt testing, and strict Pydantic schemas."
        },
        {
          title: "Formal CS Foundation",
          desc: "B.Sc. in Computer Science from Mansoura University (2019–2023)."
        }
      ]
    },
    projects: {
      sectionTitle: "Projects",
      headline: "Featured systems with source code and live demos.",
      viewDemo: "Live Demo",
      viewCode: "Source Code",
      items: [
        {
          id: "autohire",
          title: "AutoHire",
          subtitle: "Autonomous Real-Time Technical Interview Platform",
          desc: "A live technical interview engine utilizing LangGraph state machines paired with bidirectional FastAPI WebSockets. Transcript evaluation is decoupled into background Celery workers backed by Redis, with runtime fallback routing from Groq to Google Gemini Flash during provider throttling.",
          tags: ["FastAPI", "LangGraph", "WebSockets", "Redis", "Celery", "Pytest", "React"],
          demo: "https://ai-automation-interview.vercel.app/",
          github: "https://github.com/ahmedgeeter/ai-interview-automation",
          image: "/project-AutoHire1.png",
          images: ["/project-AutoHire1.png", "/project-AutoHire2.png"]
        },
        {
          id: "shiphny",
          title: "Shiphny",
          subtitle: "Multi-Agent Logistics Platform",
          desc: "An enterprise logistics support assistant powered by a LangGraph cyclic agent with deterministic tool boundaries (tracking, cancellation, billing). Features PostgreSQL with Alembic migrations for transactional persistence, Redis session management, and automated fallback chains between Groq and Gemini.",
          tags: ["FastAPI", "LangGraph", "PostgreSQL", "Alembic", "Redis", "Docker"],
          demo: "https://shiphny-ai-support.vercel.app/",
          github: "https://github.com/ahmedgeeter/shiphny-ai-support",
          image: "/project-shiphny.png"
        },
        {
          id: "meridian",
          title: "Meridian",
          subtitle: "Multimodal Document Intelligence",
          desc: "An end-to-end vision-language pipeline auditing industrial blueprints and invoices using Meta Llama-3.2 Vision. Incorporates Whisper speech transcription with intelligent Voice Activity Detection (VAD) and deterministic Pydantic v2 schemas.",
          tags: ["FastAPI", "Llama 3.2 Vision", "Whisper", "Pydantic v2", "React"],
          demo: "https://ai-auditor-ocr-voice.vercel.app/",
          github: "https://github.com/ahmedgeeter/ai-auditor-ocr-voice",
          image: "/project-ai-auditor/Screenshot 2026-04-13 210744.png"
        },
        {
          id: "guardrails",
          title: "LLM Safety Guardrail API",
          subtitle: "Security Microservice for AI Workflows",
          desc: "High-performance microservice enforcing strict Pydantic output validation, prompt-injection detection, and automated PII anonymization before upstream LLM dispatch.",
          tags: ["FastAPI", "Pydantic v2", "Redis", "Docker"],
          demo: null,
          github: "https://github.com/ahmedgeeter/LLM-Safety-Guardrail-API",
          image: "/project-rag.png",
          isApi: true
        }
      ]
    },
    experience: {
      sectionTitle: "Experience",
      headline: "Professional experience and engineering contributions.",
      jobs: [
        {
          role: "AI & Backend Software Engineer",
          company: "Independent Contractor · Remote",
          period: "Jan 2024 — Present",
          bullets: [
            "Architected and deployed asynchronous FastAPI backends and RAG pipelines; moved heavy processing into Redis-backed Celery queues, cutting synchronous API response latency by 45%.",
            "Implemented multi-provider LLM fallback routing across Groq, Gemini, and OpenAI to eliminate rate limits and maintain 99.9% uptime.",
            "Engineered commerce backends integrating payment webhooks (Stripe) with atomic PostgreSQL ledger updates; containerized services via Docker and GitHub Actions CI/CD."
          ],
          skills: ["Python", "FastAPI", "LangGraph", "Redis", "Celery", "Docker", "PostgreSQL", "CI/CD"]
        },
        {
          role: "AI Integration Engineer",
          company: "Springer Capital · Contract",
          period: "May 2025 — Sep 2025",
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
      sectionTitle: "Technical Skills",
      headline: "Core technologies and engineering proficiencies.",
      groups: [
        {
          title: "AI & Agentic Systems",
          skills: [
            "LangGraph (Cyclic Graphs)",
            "Production RAG",
            "Tool Calling Guardrails",
            "LiteLLM Provider Routing",
            "Redis Checkpointing",
            "Groq & Gemini APIs",
            "Whisper & Vision LLMs"
          ]
        },
        {
          title: "Backend & Systems",
          skills: [
            "Python (AsyncIO)",
            "FastAPI Microservices",
            "WebSockets",
            "Celery Task Queues",
            "Redis (Pub/Sub & Cache)",
            "Pydantic v2 Schemas",
            "SQLAlchemy & Alembic"
          ]
        },
        {
          title: "DevOps & Cloud",
          skills: [
            "Docker & Docker Compose",
            "Kubernetes Manifests",
            "GitHub Actions CI/CD",
            "Linux / Bash",
            "Pytest Testing Suites",
            "Cloudflare Pages & DNS"
          ]
        },
        {
          title: "Databases & Full-Stack",
          skills: [
            "PostgreSQL",
            "Vector Search (FAISS/PGVector)",
            "TypeScript",
            "React 18 & Next.js",
            "Tailwind CSS"
          ]
        }
      ]
    },
    education: {
      sectionTitle: "Education & Certifications",
      headline: "Academic degree and specialized training.",
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
          desc: "Advanced multi-agent architectures, deterministic LangGraph workflows, memory management, and production LLM engineering."
        },
        {
          title: "Backend Development Certificate",
          issuer: "Mansoura University",
          year: "2022",
          desc: "Relational database schema design, RESTful APIs, authentication, and high-concurrency systems."
        },
        {
          title: "Ethics in the Age of Generative AI",
          issuer: "IBM",
          year: "2024",
          desc: "Model alignment, deterministic output guardrails, bias remediation, and responsible AI deployment."
        }
      ]
    },
    contact: {
      sectionTitle: "Contact",
      headline: "Let's connect.",
      desc: "Available for Applied AI Engineer and Python Backend roles (Full-Time or Contract, Remote or Relocation). Feel free to reach out directly.",
      btnEmail: "Email Me",
      btnWhatsApp: "WhatsApp",
      btnLinkedIn: "LinkedIn",
      btnGitHub: "GitHub",
      btnResume: "Download Resume (PDF)",
      footer: "© {year} Ahmed Gaiter. Built with clean architecture and simplicity."
    }
  },
  ar: {
    nav: {
      about: "عنّي",
      projects: "المشاريع",
      experience: "الخبرات",
      skills: "المهارات",
      education: "التعليم",
      contact: "التواصل",
      resume: "السيرة الذاتية",
    },
    hero: {
      location: "القاهرة، مصر • متاح للعمل عن بُعد والانتقال",
      name: "أحمد جيتر",
      role: "مهندس برمجيات ذكاء اصطناعي وباك إند",
      bio: "مهندس برمجيات متخصص في الذكاء الاصطناعي التطبيقي وتطوير الأنظمة الخلفية ببايثون. أبني تدفقات وكلاء أذكياء بـ LangGraph، وخدمات مصغرة غير متزامنة بـ FastAPI، وطوابير معالجة مرنة بـ Redis و Celery.",
      btnResume: "تحميل السيرة الذاتية",
      btnWhatsApp: "واتساب",
      btnEmail: "مراسلتي عبر البريد",
      copied: "تم النسخ!",
      stack: [
        "Python (AsyncIO)",
        "FastAPI",
        "LangGraph",
        "Redis",
        "Celery",
        "PostgreSQL",
        "Docker"
      ]
    },
    about: {
      sectionTitle: "نبذة عني",
      headline: "هندسة أنظمة ذكاء اصطناعي وواجهات خلفية موجهة للإنتاج.",
      p1: "أركز على بناء واجهات برمجية وأنظمة وكلاء متعددين مصممة للمتانة ومعدلات الإنتاجية العالية. بدلاً من الاعتماد على واجهات سطحية، يرتكز عملي على آلات الحالات الحتمية، والتزامن غير المتزامن، والتدقيق الصارم للمخططات عبر Pydantic.",
      p2: "تتضمن أدواتي الأساسية بايثون (AsyncIO)، و FastAPI، و LangGraph، و Redis، و PostgreSQL، و Docker، مع التزام كامل بالمعمارية النظيفة، والاختبارات المؤتمتة (Pytest)، وسرعة الاستجابة.",
      highlights: [
        {
          title: "أنظمة موزعة ومتزامنة",
          desc: "اتصال WebSockets بـ FastAPI، وفصل المهام بـ Celery، وتخزين مؤقت بـ Redis."
        },
        {
          title: "مخططات وكلاء أذكياء",
          desc: "تدفقات عمل حلقية بـ LangGraph، واستدعاء أدوات مقيد الصلاحيات، وحفظ الجلسات."
        },
        {
          title: "محاذاة وأمان النماذج",
          desc: "تدقيق الأكواد المولدة من النماذج، واختبارات الأمان ضد حقن الأوامر، وتدقيق المخططات."
        },
        {
          title: "أساس أكاديمي",
          desc: "بكالوريوس علوم الحاسب من جامعة المنصورة (2019–2023)."
        }
      ]
    },
    projects: {
      sectionTitle: "المشاريع",
      headline: "أنظمة برمجية مطبقة مع الكود المصدري والمعاينة الحية.",
      viewDemo: "معاينة حية",
      viewCode: "الكود المصدري",
      items: [
        {
          id: "autohire",
          title: "AutoHire",
          subtitle: "منصة تقييم مقابلات تقنية ذكية ولحظية",
          desc: "محرك مقابلات تقنية حية يعتمد على آلة حالات LangGraph واتصال WebSockets ثنائي الاتجاه في FastAPI. فصل تقييم الإجابات إلى مهام خلفية في Celery و Redis للحفاظ على انسيابية الحوار بدون أي تأخير، مع توجيه تلقائي بديل بين Groq و Gemini Flash.",
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
          desc: "مساعد دعم لوجستي يعتمد على وكيل حلقي بـ LangGraph مع حدود أدوات مقيدة محددة الصلاحيات (تتبع، إلغاء، فواتير). يستخدم PostgreSQL مع ترحيلات Alembic لتوثيق المعاملات، وذاكرة جلسات بـ Redis، ومسارات تبديل تلقائي بين Groq و Gemini.",
          tags: ["FastAPI", "LangGraph", "PostgreSQL", "Alembic", "Redis", "Docker"],
          demo: "https://shiphny-ai-support.vercel.app/",
          github: "https://github.com/ahmedgeeter/shiphny-ai-support",
          image: "/project-shiphny.png"
        },
        {
          id: "meridian",
          title: "Meridian",
          subtitle: "نظام تدقيق المستندات والمخططات الصناعية",
          desc: "خط معالجة متكامل للرؤية واللغة لتحليل وتدقيق المخططات الهندسية والفواتير الصناعية المعقدة عبر Meta Llama-3.2 Vision والمطابقة الصوتية عبر Whisper مع كشف النشاط الصوتي (VAD) وفحوصات صارمة بـ Pydantic v2.",
          tags: ["FastAPI", "Llama 3.2 Vision", "Whisper", "Pydantic v2", "React"],
          demo: "https://ai-auditor-ocr-voice.vercel.app/",
          github: "https://github.com/ahmedgeeter/ai-auditor-ocr-voice",
          image: "/project-ai-auditor/Screenshot 2026-04-13 210744.png"
        },
        {
          id: "guardrails",
          title: "LLM Safety Guardrail API",
          subtitle: "خدمة أمنية لحماية وتدقيق مخرجات ومدخلات النماذج",
          desc: "خدمة مصغرة عالية الأداء تفرض التحقق الصارم من صحة البيانات بـ Pydantic v2، وتمنع حقن الأوامر، وتخفي البيانات الحساسة (PII) تلقائياً قبل إرسال الطلبات للنماذج.",
          tags: ["FastAPI", "Pydantic v2", "Redis", "Docker"],
          demo: null,
          github: "https://github.com/ahmedgeeter/LLM-Safety-Guardrail-API",
          image: "/project-rag.png",
          isApi: true
        }
      ]
    },
    experience: {
      sectionTitle: "الخبرات",
      headline: "المحطات المهنية والمساهمات الهندسية.",
      jobs: [
        {
          role: "مهندس برمجيات ذكاء اصطناعي وباك إند",
          company: "مطور مستقل · تعاقد عن بُعد",
          period: "يناير 2024 — حتى الآن",
          bullets: [
            "تطوير واجهات FastAPI غير متزامنة وخطوط RAG، ونقل معالجات النماذج الثقيلة إلى طوابير Celery و Redis لتقليص زمن استجابة الـ API بنسبة 45%.",
            "بناء منظومة توجيه وتبديل بديلة بين مزودي النماذج (Groq و Gemini و OpenAI) لتفادي حدود الاستخدام وتحقيق جاهزية 99.9%.",
            "هندسة واجهات تجارية وربط خطافات الدفع مع تحديثات قيود ذرية في PostgreSQL، وحزم الخدمات عبر Docker و GitHub Actions."
          ],
          skills: ["Python", "FastAPI", "LangGraph", "Redis", "Celery", "Docker", "PostgreSQL", "CI/CD"]
        },
        {
          role: "مهندس تكامل ذكاء اصطناعي",
          company: "سبرينغر كابيتال · تعاقد عن بُعد",
          period: "مايو 2025 — سبتمبر 2025",
          bullets: [
            "تطوير نصوص أتمتة بلغة بايثون وتكاملات برمجية مدعومة بالنماذج اللغوية لتدفقات العمليات التشغيلية، وتحويل البيانات، وخطوط الاستيعاب.",
            "التعاون ضمن فريق هندسي عن بعد لتوحيد مخططات الـ APIs وتحسين موثوقية تكامل واستيعاب البيانات."
          ],
          skills: ["Python", "Automation", "LLM APIs", "Data Ingestion", "FastAPI"]
        },
        {
          role: "أخصائي محاذاة الذكاء الاصطناعي وأمان الأكواد",
          company: "أطلس كابتشر · تعاقد عن بُعد",
          period: "ديسمبر 2024 — فبراير 2025",
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
      sectionTitle: "المهارات التقنية",
      headline: "التقنيات الأساسية المعتمدة في بيئات الإنتاج.",
      groups: [
        {
          title: "الذكاء الاصطناعي والوكلاء",
          skills: [
            "LangGraph (مخططات حلقية)",
            "معمارية RAG للإنتاج",
            "بوابات استدعاء الأدوات",
            "LiteLLM وإدارة التبديل",
            "حفظ الجلسات بـ Redis",
            "واجهات Groq و Gemini",
            "Whisper ونماذج الرؤية"
          ]
        },
        {
          title: "الأنظمة الخلفية والتزامن",
          skills: [
            "Python (AsyncIO)",
            "FastAPI Microservices",
            "WebSockets",
            "طوابير مهام Celery",
            "Redis (Pub/Sub وتخزين مؤقت)",
            "Pydantic v2 للتدقيق الصارم",
            "SQLAlchemy وترحيلات Alembic"
          ]
        },
        {
          title: "السحابة والتشغيل (DevOps)",
          skills: [
            "Docker و Docker Compose",
            "ملفات نشر Kubernetes",
            "أتمتة CI/CD بـ GitHub Actions",
            "أنظمة Linux وسكربتات Bash",
            "اختبارات Pytest المؤتمتة",
            "Cloudflare Pages و DNS"
          ]
        },
        {
          title: "قواعد البيانات والواجهات",
          skills: [
            "PostgreSQL",
            "بحث المتجهات (FAISS/PGVector)",
            "TypeScript",
            "React 18 و Next.js",
            "Tailwind CSS"
          ]
        }
      ]
    },
    education: {
      sectionTitle: "التعليم والشهادات",
      headline: "الأساس الأكاديمي والتدريب المتقدم.",
      degree: {
        title: "بكالوريوس في علوم الحاسب",
        institution: "جامعة المنصورة، مصر",
        period: "2019 — 2023",
        desc: "المساقات الأساسية: هياكل البيانات والخوارزميات، الأنظمة الموزعة، نظم التشغيل، قواعد البيانات، والذكاء الاصطناعي."
      },
      certs: [
        {
          title: "ماستركلاس هندسة الذكاء الاصطناعي",
          issuer: "د. محمود عيد",
          year: "2026",
          desc: "معمارية الوكلاء المتقدمة، ومخططات LangGraph الحتمية، وإدارة الذاكرة، وهندسة النماذج اللغوية في الإنتاج."
        },
        {
          title: "شهادة تطوير الواجهات الخلفية",
          issuer: "جامعة المنصورة",
          year: "2022",
          desc: "تصميم قواعد البيانات، وتطوير واجهات برمجة التطبيقات، والمصادقة، والأنظمة المتزامنة."
        },
        {
          title: "أخلاقيات عصر الذكاء الاصطناعي التوليدي",
          issuer: "IBM",
          year: "2024",
          desc: "محاذاة النماذج اللغوية، بوابات الأمان، وتجنب الانحيازات في التطبيقات الواقعية."
        }
      ]
    },
    contact: {
      sectionTitle: "التواصل",
      headline: "يسعدني دائماً التواصل.",
      desc: "متاح لفرص العمل كمهندس ذكاء اصطناعي أو باك إند بايثون (دوام كامل أو تعاقد، عن بُعد أو إمكانية الانتقال). يمكنك التواصل معي مباشرة.",
      btnEmail: "مراسلتي عبر البريد",
      btnWhatsApp: "واتساب",
      btnLinkedIn: "لينكد إن",
      btnGitHub: "جيت هاب",
      btnResume: "تحميل السيرة الذاتية (PDF)",
      footer: "© {year} أحمد جيتر. صُمم وهُندس بكل بساطة واحترافية."
    }
  }
};
