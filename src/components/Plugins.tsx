import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, Box, ExternalLink } from 'lucide-react';

const drivers = [
  { id: 'pg', name: 'PostgreSQL', icon: <Box size={20} /> },
  { id: 'mysql', name: 'MySQL', icon: <Box size={20} /> },
  { id: 'mongo', name: 'MongoDB', icon: <Box size={20} /> },
];

const versions = [
  '2.2.2', '2.2.1', '2.1.2', '2.1.1', '1.2.2', '1.2.1', '1.1.2', '1.1.1'
];

export const Plugins = () => {
  const [activeDriver, setActiveDriver] = useState('pg');

  return (
    <section id="plugins" style={{ padding: 'clamp(60px, 10vh, 120px) 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vh, 60px)', padding: '0 1rem' }}>
          <h2 style={{ fontSize: 'clamp(28px, 6vw, 42px)', marginBottom: '16px' }}>Drivers & Plugins</h2>
          <p style={{ color: 'var(--muted)', fontSize: 'clamp(14px, 4vw, 18px)' }}>Extend dbgecko with official drivers for your database of choice.</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {/* Driver Tabs */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            gap: '8px',
            borderBottom: '1px solid var(--border)',
            paddingBottom: '2px',
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}>
            {drivers.map(driver => (
              <button
                key={driver.id}
                onClick={() => setActiveDriver(driver.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 16px',
                  fontSize: 'clamp(13px, 3.5vw, 15px)',
                  fontWeight: 600,
                  color: activeDriver === driver.id ? 'var(--acc)' : 'var(--muted)',
                  borderBottom: `2px solid ${activeDriver === driver.id ? 'var(--acc)' : 'transparent'}`,
                  transition: 'all 0.2s',
                  position: 'relative',
                  bottom: '-1px',
                  whiteSpace: 'nowrap'
                }}
              >
                {driver.name}
              </button>
            ))}
          </div>

          {/* Version List */}
          <div className="glass" style={{ 
            borderRadius: '16px', 
            overflowX: 'auto',
            WebkitOverflowScrolling: 'touch'
          }}>
            <AnimatePresence mode="wait">
              <motion.table 
                key={activeDriver}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                style={{ 
                  width: '100%', 
                  borderCollapse: 'collapse',
                  textAlign: 'left',
                  minWidth: '500px'
                }}
              >
                <thead>
                  <tr style={{ background: 'rgba(255,255,255,0.03)', borderBottom: '1px solid var(--border)' }}>
                    <th style={{ padding: '16px 20px', fontSize: '12px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Version</th>
                    <th style={{ padding: '16px 20px', fontSize: '12px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>FileName</th>
                    <th style={{ padding: '16px 20px', fontSize: '12px', fontWeight: 600, color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.05em', textAlign: 'right' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {versions.map((version, i) => (
                    <tr 
                      key={version} 
                      style={{ 
                        borderBottom: i === versions.length - 1 ? 'none' : '1px solid var(--border)',
                        transition: 'background 0.2s'
                      }}
                      className="plugin-row"
                    >
                      <td style={{ padding: '16px 20px' }}>
                        <span style={{ 
                          padding: '4px 10px', 
                          borderRadius: '100px', 
                          background: i === 0 ? 'var(--acc-dim)' : 'rgba(255,255,255,0.05)',
                          color: i === 0 ? 'var(--acc)' : 'var(--muted)',
                          fontSize: '11px',
                          fontWeight: 700
                        }}>
                          v{version} {i === 0 && '(latest)'}
                        </span>
                      </td>
                      <td style={{ padding: '16px 20px', fontFamily: 'var(--font-mono)', fontSize: '13px' }}>
                        libdriver_{activeDriver}.{version}.so
                      </td>
                      <td style={{ padding: '16px 20px', textAlign: 'right' }}>
                        <a 
                          href={`https://github.com/HazelDaniel/dbgecko/releases/download/v${version}/libdriver_${activeDriver}.${version}.so`}
                          className="plugin-dl-btn"
                          style={{ 
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '6px',
                            color: 'var(--muted)',
                            fontSize: '12px',
                            fontWeight: 600,
                            padding: '6px 12px',
                            borderRadius: '6px',
                            border: '1px solid var(--border)',
                            transition: 'all 0.2s'
                          }}
                        >
                          <Download size={14} /> Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </motion.table>
            </AnimatePresence>
          </div>
        </div>

        <div style={{ marginTop: '40px', textAlign: 'center', padding: '0 1rem' }}>
          <p style={{ color: 'var(--muted)', fontSize: '14px', lineHeight: 1.6 }}>
            Looking for something else? <a href="https://github.com/HazelDaniel/dbgecko/wiki/Plugins" style={{ color: '#fff', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>Check the Plugin Guide <ExternalLink size={14} /></a>
          </p>
        </div>
      </div>

      <style>{`
        .plugin-row:hover { background: rgba(255,255,255,0.02); }
        .plugin-dl-btn:hover { border-color: var(--acc); color: #fff !important; }
        @media (max-width: 640px) {
          .plugin-dl-btn span { display: none; }
        }
      `}</style>
    </section>
  );
};
