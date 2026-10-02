import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Terminal, Zap, CheckCircle2, Server, Globe } from 'lucide-react';
import { cn } from '../../lib/utils';

const codeSnippet = `POST /api/v1/agent/invoke HTTP/1.1
Host: api.ahmedgaiter.site
Content-Type: application/json
Authorization: Bearer sk-live-production-jwt

{
  "agent": "langgraph-supervisor",
  "task": "resolve_logistics_dispute",
  "session_id": "sess_8941_prod",
  "tools": ["verify_auth", "query_postgres", "rag_search"],
  "checkpointer": "AsyncRedisSaver"
}`;

const mockResponse = `> [LangGraph Engine] Initializing state graph: session_id='sess_8941_prod'
> [Redis Checkpointer] Loaded conversation state checkpoint [200 OK]
> [Node: Router] Multi-provider active -> Dispatched to Groq (LLaMA-3.3-70B)
> [Tool Invocation] verify_identity(tracking_id='SHP-4091') -> Verified [OK]
> [Tool Invocation] query_postgres(order_id='SHP-4091') -> Status: In-Transit (Alexandria -> Cairo)
> [Guardrail] Pydantic schema validation & zero PII leakage check -> [PASSED]
> [State Transition] human_in_the_loop_check -> Auto-approved by policy

[RESOLVED RESPONSE]
"Shipment #SHP-4091 cleared the Tanta distribution facility at 14:15 UTC. Delivery is scheduled today before 18:00 UTC."

[METRICS] Latency: 240ms | Checkpointer: Redis | Failover: Nominal | Tokens: 84`;

const LiveSandbox = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState('');
  const [hasRun, setHasRun] = useState(false);
  const [latency, setLatency] = useState(0);

  const handleRunRequest = () => {
    if (isRunning) return;
    setIsRunning(true);
    setHasRun(true);
    setOutput('');
    setLatency(0);

    let i = 0;
    const interval = setInterval(() => {
      setOutput((prev) => prev + mockResponse.charAt(i));
      i++;
      if (i >= mockResponse.length) {
        clearInterval(interval);
        setIsRunning(false);
        setLatency(240); // 240ms sub-second latency
      }
    }, 12);
  };

  return (
    <section id="sandbox" className="cv-section relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 gradient-mesh opacity-50 pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-tertiary)] border border-[var(--border)] mb-4"
          >
            <Server size={14} className="text-[var(--accent)]" />
            <span className="text-xs font-mono text-[var(--text-secondary)]">Production Environment</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-4"
          >
            Live Sandbox: <span className="text-[var(--text-muted)]">Test My Architecture</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[var(--text-secondary)] max-w-2xl"
          >
            Experience the latency and precision of a well-engineered AI backend. 
            Send a simulated payload and watch the response stream in real-time.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="grid lg:grid-cols-2 gap-px bg-[var(--border)] border border-[var(--border)] rounded-xl overflow-hidden shadow-card"
        >
          {/* Left Pane - Request */}
          <div className="bg-[var(--bg-secondary)] flex flex-col">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--bg-primary)]">
              <div className="flex items-center gap-2">
                <Globe size={16} className="text-[var(--text-muted)]" />
                <span className="text-sm font-mono text-[var(--text-secondary)]">API Request</span>
              </div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[var(--border)]" />
                <div className="w-3 h-3 rounded-full bg-[var(--border)]" />
                <div className="w-3 h-3 rounded-full bg-[var(--border)]" />
              </div>
            </div>
            
            <div className="p-6 flex-1 font-mono text-sm leading-relaxed overflow-x-auto text-[var(--text-secondary)]">
              <pre className="whitespace-pre-wrap">
                <span className="text-[var(--accent-light)]">POST</span> /api/v1/agent/invoke HTTP/1.1{'\n'}
                <span className="text-blue-400">Host:</span> api.ahmedgaiter.site{'\n'}
                <span className="text-blue-400">Content-Type:</span> application/json{'\n'}
                <span className="text-blue-400">Authorization:</span> Bearer <span className="text-green-400">sk-live-production-jwt</span>{'\n'}
                {'\n'}
                {'{'}{'\n'}
                {'  '}<span className="text-[var(--accent-light)]">"agent"</span>: <span className="text-green-400">"langgraph-supervisor"</span>,{'\n'}
                {'  '}<span className="text-[var(--accent-light)]">"task"</span>: <span className="text-green-400">"resolve_logistics_dispute"</span>,{'\n'}
                {'  '}<span className="text-[var(--accent-light)]">"session_id"</span>: <span className="text-green-400">"sess_8941_prod"</span>,{'\n'}
                {'  '}<span className="text-[var(--accent-light)]">"tools"</span>: [<span className="text-orange-400">"verify_auth"</span>, <span className="text-orange-400">"query_postgres"</span>],{'\n'}
                {'  '}<span className="text-[var(--accent-light)]">"checkpointer"</span>: <span className="text-green-400">"AsyncRedisSaver"</span>{'\n'}
                {'}'}
              </pre>
            </div>

            <div className="p-4 border-t border-[var(--border)] bg-[var(--bg-primary)]">
              <button
                onClick={handleRunRequest}
                disabled={isRunning}
                className={cn(
                  "w-full py-3 px-4 rounded-lg font-medium flex items-center justify-center gap-2 transition-all duration-300",
                  isRunning 
                    ? "bg-[var(--bg-tertiary)] text-[var(--text-muted)] cursor-not-allowed" 
                    : "bg-[var(--text-primary)] text-[var(--bg-primary)] hover:bg-[var(--text-secondary)] shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]"
                )}
              >
                {isRunning ? (
                  <>
                    <div className="w-4 h-4 border-2 border-[var(--text-muted)] border-t-transparent rounded-full animate-spin" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Play size={18} fill="currentColor" />
                    Run Request
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Pane - Response */}
          <div className="bg-[#050505] flex flex-col relative overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--border)] bg-[var(--bg-primary)] z-10">
              <div className="flex items-center gap-2">
                <Terminal size={16} className="text-[var(--text-muted)]" />
                <span className="text-sm font-mono text-[var(--text-secondary)]">Stream Output</span>
              </div>
              
              <AnimatePresence>
                {hasRun && !isRunning && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded border border-[var(--accent)]/30 bg-[var(--accent)]/10 text-[var(--accent-light)] text-xs font-mono"
                  >
                    <Zap size={12} fill="currentColor" />
                    Latency: {latency}ms
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="p-6 flex-1 font-mono text-sm leading-relaxed overflow-y-auto text-[var(--text-primary)] relative">
              {!hasRun && !isRunning ? (
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--text-muted)]">
                  <Terminal size={48} strokeWidth={1} className="mb-4 opacity-20" />
                  <p>Awaiting request...</p>
                </div>
              ) : (
                <div className="whitespace-pre-wrap">
                  {output}
                  {isRunning && <span className="inline-block w-2 h-4 bg-[var(--text-primary)] animate-blink ml-1 align-middle" />}
                </div>
              )}
            </div>
            
            {/* Subtle glow behind the terminal text if finished */}
            {hasRun && !isRunning && (
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-[var(--accent)] rounded-full mix-blend-screen filter blur-[100px] opacity-10 pointer-events-none" />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LiveSandbox;
