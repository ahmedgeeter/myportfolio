/**
 * Curated public repos for ahmedgeeter — order = portfolio priority.
 * Slugs match GitHub `repo.name` (matching is case-insensitive).
 */
export const CURATED_REPO_SLUGS = [
  'ai-auditor-ocr-voice',
  'fullstack-gym-rag-chatbot',
  'llm-safety-guardrail-api',
  'docker_compose_monitoring_stack',
];

export const DESCRIPTION_OVERRIDES = {
  opyrator:
    'Turns your machine learning code into microservices with web API, interactive GUI, and more.',
  'ai-auditor-ocr-voice':
    'FastAPI service for OCR, document review, voice handling, and question answering using vision and speech models.',
  'fullstack-gym-rag-chatbot':
    'RAG chatbot connected to real gym catalog data via Groq and Prisma. Handles product info, pricing, and booking queries.',
  'llm-safety-guardrail-api':
    'FastAPI service for LLM safety: prompt injection protection, session isolation, and controlled request handling.',
  'docker_compose_monitoring_stack':
    'Production monitoring stack using Docker Compose with logging, metrics, and alerting for AI backend services.',
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
