import React, { useMemo, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GitBranch, ArrowUpRight, Search, X, Github } from 'lucide-react';
import { fadeIn, viewportOnce } from '../../lib/motion';
import { useLanguage } from '../../context/LanguageContext';
import { filterAndSortRepos, CURATED_REPO_SLUGS } from '../../lib/githubCurated';

const GITHUB_USER = 'ahmedgeeter';

const GithubRepos = () => {
  const { t } = useLanguage();
  const [allRepos, setAllRepos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`,
        );
        if (!res.ok) throw new Error();
        const data = await res.json();
        setAllRepos(Array.isArray(data) ? data : []);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const curated = useMemo(() => filterAndSortRepos(allRepos), [allRepos]);

  const displayList = useMemo(() => {
    if (!searchTerm.trim()) return curated;
    const q = searchTerm.toLowerCase();
    return curated.filter(
      (repo) =>
        (repo.name || '').toLowerCase().includes(q) ||
        (repo.description || '').toLowerCase().includes(q),
    );
  }, [curated, searchTerm]);

  const formatName = (str) => {
    if (!str) return '';
    return str.split(/[-_]/).map((word) => {
      const u = word.toUpperCase();
      if (['AI', 'RAG', 'LLM', 'API', 'N8N', 'OCR', 'IBM', 'GIT'].includes(u)) return u;
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  };

  const skeletonCount = Math.min(6, CURATED_REPO_SLUGS.length);

  return (
    <section id="github" className="cv-section relative py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          variants={fadeIn('up', 0)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="flex flex-col lg:flex-row lg:justify-between lg:items-end gap-6 mb-12"
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <GitBranch className="w-5 h-5 text-[var(--accent)]" strokeWidth={2.5} />
              <span className="text-sm font-mono text-[var(--accent)] tracking-wider uppercase">
                {t('github.kicker')}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight">
              {t('github.titleBefore')}{' '}
              <span className="accent-mark">{t('github.titleHighlight')}</span>
            </h2>
            <p className="text-lg text-[var(--text-secondary)] max-w-xl">
              {t('github.subtitle')}
            </p>
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-80">
            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              className="w-full pl-12 pr-10 py-3 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] focus:outline-none focus:border-[var(--accent)]/50 text-sm transition-all"
              dir="auto"
              placeholder={t('github.searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </motion.div>

        {/* Content */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {Array.from({ length: skeletonCount }, (_, i) => (
              <div
                key={i}
                className="h-40 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] animate-pulse"
              />
            ))}
          </div>
        ) : error ? (
          <div className="text-center py-16 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
            <p className="text-[var(--text-secondary)]">{t('github.loadError')}</p>
          </div>
        ) : displayList.length === 0 ? (
          <div className="text-center py-16 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)]">
            <p className="text-[var(--text-secondary)]">{t('github.emptyCurated')}</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <AnimatePresence mode="sync">
              {displayList.map((repo, idx) => (
                <motion.a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="group p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--border)] hover:border-[var(--accent)]/30 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Github size={20} className="text-[var(--accent)]" />
                    <ArrowUpRight 
                      size={16} 
                      className="text-[var(--text-muted)] group-hover:text-[var(--accent)] transition-colors" 
                    />
                  </div>
                  
                  <h3 className="text-lg font-display font-semibold text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent)] transition-colors">
                    {formatName(repo.name)}
                  </h3>
                  
                  <p className="text-sm text-[var(--text-secondary)] line-clamp-2 mb-4">
                    {repo.description?.trim() || 'No description available'}
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                    <span className="text-xs font-mono text-[var(--text-muted)]">
                      {repo.language || 'Unknown'}
                    </span>
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </section>
  );
};

export default GithubRepos;
