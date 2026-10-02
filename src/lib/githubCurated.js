/**
 * Curated public repos for ahmedgeeter — order = portfolio priority.
 * Slugs match GitHub `repo.name` (matching is case-insensitive).
 */
export const CURATED_REPO_SLUGS = [
  'shiphny-ai-support',
  'ai-interview-automation',
  'ai-auditor-ocr-voice',
  'llm-safety-guardrail-api',
  'autonomous-sre-incident-remediation-swarm',
  'fullstack-gym-rag-chatbot',
];

export const DESCRIPTION_OVERRIDES = {
  'shiphny-ai-support':
    'Enterprise multi-agent logistics reference architecture with LangGraph cyclic graphs, Redis checkpointing, and EKS Helm charts.',
  'ai-interview-automation':
    'Real-time autonomous technical interview platform with sub-300ms WebSockets, FastAPI, LangGraph state machine, and Celery workers.',
  'ai-auditor-ocr-voice':
    'FastAPI service for multimodal document review and speech compliance checking using Llama-3.2 Vision and Whisper-Large-V3.',
  'llm-safety-guardrail-api':
    'FastAPI service for LLM safety: prompt injection protection, PII anonymization, and deterministic Pydantic output schemas.',
  'autonomous-sre-incident-remediation-swarm':
    'Autonomous multi-agent SRE swarm for automated cloud incident detection, root cause analysis, and remediation.',
  'fullstack-gym-rag-chatbot':
    'RAG chatbot connected to catalog data via Groq, PGVector, and Prisma with semantic caching.',
};

export function filterAndSortRepos(repos) {
  if (!Array.isArray(repos)) return [];
  const orderMap = new Map(CURATED_REPO_SLUGS.map((slug, i) => [slug, i]));
  const filtered = repos.filter((r) => orderMap.has(String(r.name || '').toLowerCase()));
  filtered.sort(
    (a, b) =>
      orderMap.get(String(a.name).toLowerCase()) - orderMap.get(String(b.name).toLowerCase()),
  );
  return filtered.map((r) => {
    const key = String(r.name).toLowerCase();
    const override = DESCRIPTION_OVERRIDES[key];
    return {
      ...r,
      description: override || r.description || '',
    };
  });
}
