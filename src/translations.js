export const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      tech: "Tech Stack",
      education: "Education",
    },
    hero: {
      headlinePart1: "I Engineer ",
      headlineHighlight: "AI Systems",
      headlinePart2: " That Survive Reality.",
      subtitle: "Software Engineer specializing in Applied AI and full-stack web development. Focused on writing clean, maintainable code and solving real-world business problems efficiently from concept to deployment.",
      btnPortfolio: "View My Portfolio",
      btnResume: "Resume",
    },
    about: {
      sectionTitle: "Executive Summary",
      headline: "Production-Focused AI Engineer. Zero Fluff.",
      description: "Experienced in building production-ready applications using Python, FastAPI, and React. Strong background in designing Retrieval-Augmented Generation (RAG) pipelines, integrating deep learning models, and managing reliable cloud infrastructure using AWS, Docker, and Kubernetes.",
      contact: "Contact Me",
      experience: "Professional Experience",
    },
    experience: {
      jobs: [
        {
          title: "Independent AI Engineer | Upwork & Direct Clients",
          date: "Jan 2024 - Present",
          desc: "Built and deployed full-stack web applications and multi-agent RAG systems for B2B clients using FastAPI and React. Designed multi-provider LLM routing mechanisms to handle rate limits and ensure high availability. Managed cloud deployments on AWS and GCP using Docker and CI/CD."
        },
        {
          title: "AI Model Reviewer & Data Specialist | Atlas Capture & Outlier",
          date: "Jan 2024 - Present",
          desc: "Evaluated LLM-generated code for accuracy and safety, providing high-quality alignment data for RLHF fine-tuning. Audited visual datasets and performed precise temporal segmentation to improve computer vision model training."
        },
        {
          title: "AI Backend Engineer Intern | Springer Capital",
          date: "May 2025 - Sep 2025",
          desc: "Developed Python-based backend services for data automation systems, focusing on low-latency execution. Collaborated with the engineering team to optimize data pipelines for secure, real-time market analysis."
        }
      ]
    },
    education: {
      sectionTitle: "Education & Certifications",
      headlinePart1: "Academic ",
      headlineHighlight: "Background",
      degree: "B.Sc. in Computer Science",
      university: "Mansoura University, Egypt",
      date: "2019 - 2023",
      certTitle: "Courses & Certifications",
      certs: "AI Engineering Masterclass (Udemy) • Deep Learning: Getting Started (LinkedIn)"
    },
    projects: {
      sectionTitle: "Key AI Engineering Projects",
      headlinePart1: "Real ",
      headlineHighlight: "Systems",
      viewBtn: "View Project",
      codeBtn: "Source Code",
      items: [
        {
          title: "Shiphny: AI Support System",
          desc: "Built a bilingual microservices-based AI agent for logistics, utilizing a Redis and Celery task queue to process heavy LLM tasks and maintain sub-500ms response times. Implemented a 5-layer AI defense system, passing 24/24 penetration tests.",
        },
        {
          title: "AutoHire: Autonomous AI Interviewer",
          desc: "Developed an autonomous interviewing platform using LangGraph to evaluate software engineers. Integrated WebSockets for low-latency, bidirectional audio/text streaming during live assessments. Added strict evaluation constraints to prevent hallucination.",
        },
        {
          title: "Coremont: E-Commerce AI Storefront",
          desc: "Built a full-stack e-commerce platform using Next.js and PostgreSQL. Integrated a RAG shopping assistant using Xenova local embeddings and Groq to accurately answer pricing and policy queries using deterministic fallbacks.",
        },
        {
          title: "Explainable Multilingual RAG",
          desc: "Created an Arabic/English document retrieval system using custom text normalization and semantic chunking to improve vector search accuracy. Added real-time token streaming and exact page-level citations.",
        },
        {
          title: "Meridian: Multimodal AI Auditor",
          desc: "Built an automated data extraction pipeline using Meta Llama-4 Scout and Whisper-Large-V3 models to process and structure raw document and audio files.",
        }
      ]
    },
    tech: {
      sectionTitle: "Technical Skills",
      headlinePart1: "Production-Ready ",
      headlineHighlight: "Tech Stack",
      cat1: "AI/ML & Deep Learning",
      cat2: "Web Development",
      cat3: "Cloud & DevOps",
      cat4: "Databases",
    },
    contact: {
      sectionTitle: "Let's Connect",
      headlinePart1: "Need Architecture ",
      headlineHighlight: "That Scales?",
      desc: "I'm currently open for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      btn: "Gmail",
      btnDownload: "Download CV",
      btnWhatsApp: "WhatsApp",
      footer: "© {year} Ahmed Gaiter. Designed & Built for Reality."
    }
  },
  ar: {
    nav: {
      about: "نبذة عني",
      projects: "المشاريع",
      tech: "التقنيات",
      education: "التعليم",
    },
    hero: {
      headlinePart1: "أبني ",
      headlineHighlight: "أنظمة ذكاء اصطناعي",
      headlinePart2: " تصمد في أرض الواقع.",
      subtitle: "مهندس برمجيات متخصص في الذكاء الاصطناعي التطبيقي وتطوير الويب المتكامل. أركز على كتابة كود نظيف وقابل للصيانة وحل مشاكل الأعمال الواقعية بكفاءة من الفكرة إلى الإنتاج.",
      btnPortfolio: "تصفح أعمالي",
      btnResume: "السيرة الذاتية",
    },
    about: {
      sectionTitle: "ملخص تنفيذي",
      headline: "مهندس ذكاء اصطناعي يركز على الإنتاج. بلا تعقيد.",
      description: "لدي خبرة في بناء تطبيقات جاهزة للإنتاج باستخدام Python و FastAPI و React. خلفية قوية في تصميم مسارات التوليد المعزز بالاسترجاع (RAG)، دمج نماذج التعلم العميق، وإدارة بنية تحتية سحابية موثوقة باستخدام AWS و Docker و Kubernetes.",
      contact: "تواصل معي",
      experience: "الخبرات المهنية",
    },
    experience: {
      jobs: [
        {
          title: "مهندس ذكاء اصطناعي مستقل | عملاء مباشرين و Upwork",
          date: "يناير 2024 - الحاضر",
          desc: "قمت ببناء ونشر تطبيقات ويب متكاملة وأنظمة RAG متعددة الوكلاء باستخدام FastAPI و React. صممت آليات توجيه النماذج اللغوية المتعددة للتعامل مع قيود السرعة. أدرت عمليات النشر السحابي على AWS و GCP لضمان خدمات خلفية مستقرة."
        },
        {
          title: "مُراجع بيانات ذكاء اصطناعي وأخصائي جودة | Atlas Capture & Outlier",
          date: "يناير 2024 - الحاضر",
          desc: "قيّمت الأكواد البرمجية المُولّدة من النماذج اللغوية الكبيرة من حيث الدقة والأمان، لتوفير بيانات محاذاة عالية الجودة لـ RLHF. قمت بتدقيق مجموعات بيانات مرئية وإجراء تجزئة زمنية دقيقة لتحسين تدريب نماذج الرؤية الحاسوبية."
        },
        {
          title: "متدرب هندسة الواجهات الخلفية للذكاء الاصطناعي | Springer Capital",
          date: "مايو 2025 - سبتمبر 2025",
          desc: "طورت خدمات خلفية باستخدام Python لأنظمة أتمتة البيانات، مع التركيز على التنفيذ بزمن استجابة منخفض. تعاونت مع فريق الهندسة لتحسين مسارات البيانات لتحليل السوق الفوري والآمن."
        }
      ]
    },
    education: {
      sectionTitle: "التعليم والشهادات",
      headlinePart1: "الخلفية ",
      headlineHighlight: "الأكاديمية",
      degree: "بكالوريوس في علوم الحاسب",
      university: "جامعة المنصورة، مصر",
      date: "2019 - 2023",
      certTitle: "الدورات والشهادات",
      certs: "AI Engineering Masterclass (Udemy) • Deep Learning: Getting Started (LinkedIn)"
    },
    projects: {
      sectionTitle: "أبرز مشاريع الذكاء الاصطناعي",
      headlinePart1: "أنظمة ",
      headlineHighlight: "حقيقية",
      viewBtn: "عرض المشروع",
      codeBtn: "الكود المصدري",
      items: [
        {
          title: "Shiphny: نظام دعم لوجستي ذكي",
          desc: "بناء وكيل ذكاء اصطناعي ثنائي اللغة لقطاع الخدمات اللوجستية، باستخدام طابور مهام Redis و Celery لمعالجة مهام النماذج الكبيرة مع الحفاظ على استجابة أقل من 500 مللي ثانية. تنفيذ نظام دفاعي بـ 5 طبقات لحماية البيانات الشخصية.",
        },
        {
          title: "AutoHire: مُجري المقابلات المستقل",
          desc: "تطوير منصة مقابلات مستقلة باستخدام LangGraph لتقييم مهندسي البرمجيات. دمج WebSockets لتدفق الصوت والنصوص ثنائي الاتجاه بزمن استجابة منخفض أثناء التقييمات المباشرة. إضافة قيود تقييم صارمة لمنع التقييمات الوهمية.",
        },
        {
          title: "Coremont: واجهة تجارة إلكترونية ذكية",
          desc: "بناء منصة تجارة إلكترونية متكاملة باستخدام Next.js و PostgreSQL. دمج مساعد تسوق RAG باستخدام تضمينات محلية و Groq للإجابة بدقة على الاستفسارات المتعلقة بالتسعير والسياسات.",
        },
        {
          title: "منصة RAG متعددة اللغات وقابلة للتفسير",
          desc: "إنشاء نظام استرجاع مستندات ثنائي اللغة (عربي/إنجليزي) مع استخدام تسوية نصية عربية مخصصة وتقطيع دلالي لتحسين دقة البحث، مع بث فوري للكلمات واقتباسات دقيقة للصفحات.",
        },
        {
          title: "Meridian: مُدقق متعدد الوسائط",
          desc: "بناء مسار آلي لاستخراج البيانات باستخدام نماذج Meta Llama-4 Scout و Whisper-Large-V3 لمعالجة وهيكلة المستندات والملفات الصوتية الخام.",
        }
      ]
    },
    tech: {
      sectionTitle: "المهارات التقنية",
      headlinePart1: "هندسة ",
      headlineHighlight: "جاهزة للإنتاج",
      cat1: "الذكاء الاصطناعي والتعلم العميق",
      cat2: "تطوير الويب",
      cat3: "السحابة وعمليات التشغيل",
      cat4: "قواعد البيانات",
    },
    contact: {
      sectionTitle: "لنتواصل",
      headlinePart1: "هل تحتاج إلى بنية تحتية ",
      headlineHighlight: "قابلة للتوسع؟",
      desc: "أنا منفتح حالياً لفرص جديدة. سواء كان لديك سؤال أو أردت فقط إلقاء التحية، سأبذل قصارى جهدي للرد عليك!",
      btn: "جيميل",
      btnDownload: "تحميل السيرة الذاتية",
      btnWhatsApp: "واتساب",
      footer: "© {year} أحمد جيتر. تم التصميم والبناء لأرض الواقع."
    }
  }
};
