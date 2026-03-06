import { motion } from 'framer-motion';
import { ArrowRight, Database, Server, Cloud } from 'lucide-react';

export const Hero = () => {
  return (
    <section style={{
      paddingTop: 'clamp(100px, 15vh, 160px)',
      paddingBottom: 'clamp(60px, 10vh, 100px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decoration */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: 'min(100vw, 1000px)',
        height: '600px',
        background: 'radial-gradient(circle, rgba(0, 229, 153, 0.08) 0%, rgba(0,0,0,0) 70%)',
        zIndex: -1, pointerEvents: 'none'
      }} />

      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          fontSize: 'clamp(32px, 8vw, 84px)',
          lineHeight: 1.1,
          maxWidth: '900px',
          background: 'linear-gradient(180deg, #fff 0%, #888 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '24px',
          padding: '0 1rem'
        }}
      >
        Database Backups.<br />
        Automated. Bulletproof.
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          fontSize: 'clamp(16px, 4vw, 20px)',
          color: 'var(--muted)',
          maxWidth: '600px',
          marginBottom: '40px',
          lineHeight: 1.6,
          padding: '0 1.5rem'
        }}
      >
        High-performance, plugin-driven backup and restore for PostgreSQL, MySQL, and MongoDB. Secure, fast, and dead simple.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hero-buttons"
        style={{ display: 'flex', gap: '16px', marginBottom: '80px' }}
      >
        <a href="#download" className="hero-btn-primary" style={{
          padding: '12px 24px',
          borderRadius: '8px',
          background: '#fff',
          color: '#000',
          fontWeight: 600,
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          transition: 'transform 0.2s'
        }}>
          Get Started <ArrowRight size={18} />
        </a>
        <a href="https://github.com/HazelDaniel/dbgecko" target="_blank" className="hero-btn-secondary" style={{
          padding: '12px 24px',
          borderRadius: '8px',
          border: '1px solid var(--border)',
          fontWeight: 600,
          transition: 'background 0.2s',
          background: 'rgba(255,255,255,0.05)'
        }}>
          View Source
        </a>
      </motion.div>

      {/* Showcase Visual */}
      <div 
        data-aos="zoom-in-up"
        style={{
          width: '100%',
          maxWidth: '800px',
          marginBottom: '48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 2rem',
          position: 'relative'
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', zIndex: 1 }}>
          <div className="glass" style={{ width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--acc)' }}>
            <Database size={32} />
          </div>
          <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 600 }}>Source DB</span>
        </div>

        <div style={{ flex: 1, height: '2px', background: 'linear-gradient(90deg, var(--acc) 0%, var(--acc-dim) 100%)', margin: '0 12px', position: 'relative' }}>
          <div className="flow-particle" />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', zIndex: 1 }}>
          <div style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'var(--acc)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', border: '4px solid #000' }}>
            <Server size={40} />
          </div>
          <span style={{ fontSize: '12px', color: '#fff', fontWeight: 700 }}>dbgecko</span>
        </div>

        <div style={{ flex: 1, height: '2px', background: 'linear-gradient(90deg, var(--acc-dim) 0%, var(--acc) 100%)', margin: '0 12px', position: 'relative' }}>
          <div className="flow-particle" style={{ animationDelay: '1.5s' }} />
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', zIndex: 1 }}>
          <div className="glass" style={{ width: '64px', height: '64px', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--acc)' }}>
            <Cloud size={32} />
          </div>
          <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 600 }}>Destination</span>
        </div>
      </div>

      {/* Terminal Preview */}
      <div
        data-aos="zoom-in-up"
        data-aos-delay="200"
        style={{
          width: 'calc(100% - 2rem)',
          maxWidth: '800px',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid var(--border)',
          background: '#0a0a0a',
          boxShadow: '0 24px 48px rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: "2"

        }}
      >
        <div style={{
          height: '36px',
          background: '#1a1a1a',
          borderBottom: '1px solid var(--border)',
          display: 'flex',
          alignItems: 'center',
          padding: '0 16px',
          gap: '8px'
        }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
          <div style={{ marginLeft: '12px', color: 'var(--muted)', fontSize: '10px', fontFamily: 'var(--font-mono)', whiteSpace: 'nowrap', overflow: 'hidden' }}>dbgecko — zsh</div>
        </div>
        <div className="terminal-content" style={{
          padding: 'clamp(12px, 4vw, 24px)',
          textAlign: 'left',
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(10px, 2.5vw, 14px)',
          lineHeight: 1.5,
          color: '#fff',
          overflowX: 'auto'
        }}>
          <div style={{ marginBottom: '8px' }}><span style={{ color: 'var(--acc)' }}>$</span> dbgecko backup --db postgres --remote s3</div>
          <div style={{ color: 'var(--muted)' }}>[INFO] Initializing plugin: pg-v2.2.2</div>
          <div style={{ color: 'var(--muted)' }}>[INFO] Connecting to storage backend: AWS S3</div>
          <div style={{ color: 'var(--muted)' }}>[INFO] Streaming backup started...</div>
          <div style={{ color: '#aaa', whiteSpace: 'nowrap' }}>Progress: ██████████████████ 100% (4.2 GB)</div>
          <div style={{ color: 'var(--acc)', marginTop: '8px' }}>[SUCCESS] Backup completed in 12.4s</div>
        </div>
      </div>

      <div className='hero-showcase' style={{
          width: 'calc(100% - 2rem)',
          // maxWidth: '950px',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid var(--border)',
          background: '#0a0a0a',
          boxShadow: '0 24px 48px rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column',
          marginTop: '-20%',
          paddingTop: "2rem",
          borderTopLeftRadius: '0rem',
          borderTopRightRadius: '0rem',
          opacity: '0.2',
          zIndex: "0",
      }}>
        <img src="tui_2.gif" alt="" />
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-buttons { flex-direction: column; width: calc(100% - 3rem); }
          .hero-btn-primary, .hero-btn-secondary { width: 100%; justify-content: center; }
        }
        .hero-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 4px 20px rgba(255,255,255,0.2); }
        .hero-btn-secondary:hover { background: rgba(255,255,255,0.1); }
        
        .flow-particle {
          position: absolute;
          width: 6px;
          height: 6px;
          background: var(--acc);
          border-radius: 50%;
          top: -2px;
          left: 0;
          box-shadow: 0 0 10px var(--acc);
          animation: flow 3s linear infinite;
        }
        
        @keyframes flow {
          0% { left: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: 100%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};
