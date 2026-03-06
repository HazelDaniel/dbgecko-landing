import { useState } from 'react';
import { Download as DownloadIcon } from 'lucide-react';

const architectures = [
  { id: 'linux-x64', label: 'Linux x86_64', default: true },
  { id: 'linux-arm64', label: 'Linux ARM64' },
  { id: 'macos-x64', label: 'macOS x86_64' },
  { id: 'macos-arm64', label: 'macOS ARM64' },
];

export const Download = () => {
  const [selectedArch, setSelectedArch] = useState('linux-x64');

  return (
    <section id="download" style={{ padding: 'clamp(60px, 10vh, 120px) 0', background: 'rgba(255,255,255,0.02)' }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ textAlign: 'center', marginBottom: 'clamp(40px, 8vh, 60px)', padding: '0 1rem' }}>
          <h2 style={{ fontSize: 'clamp(28px, 6vw, 42px)', marginBottom: '16px' }}>Download dbgecko</h2>
          <p style={{ color: 'var(--muted)', fontSize: 'clamp(14px, 4vw, 18px)' }}>Get the binary for your system and start backing up in seconds.</p>
        </div>

        <div className="glass download-card" style={{
          padding: 'clamp(24px, 5vw, 40px)',
          borderRadius: '24px',
          width: '100%',
          maxWidth: '600px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '32px'
        }}>
          <div style={{ width: '100%' }}>
            <label style={{ display: 'block', color: 'var(--muted)', fontSize: '14px', marginBottom: '12px', fontWeight: 500 }}>
              Select Architecture
            </label>
            <div className="arch-selector" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', 
              gap: '8px',
              padding: '6px',
              background: 'rgba(255,255,255,0.05)',
              borderRadius: '12px'
            }}>
              {architectures.map(arch => (
                <button
                  key={arch.id}
                  onClick={() => setSelectedArch(arch.id)}
                  style={{
                    padding: '10px',
                    borderRadius: '8px',
                    fontSize: '13px',
                    fontWeight: 600,
                    background: selectedArch === arch.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                    color: selectedArch === arch.id ? '#fff' : 'var(--muted)',
                    transition: 'all 0.2s'
                  }}
                >
                  {arch.label}
                </button>
              ))}
            </div>
          </div>

          <a 
            href={`https://github.com/HazelDaniel/dbgecko/releases/latest/download/dbgecko-${selectedArch}`}
            className="download-btn"
            style={{
              width: '100%',
              padding: '18px',
              borderRadius: '12px',
              background: 'var(--acc)',
              color: '#000',
              fontWeight: 700,
              fontSize: 'min(18px, 4.5vw)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '12px',
              transition: 'transform 0.2s, box-shadow 0.2s',
              textAlign: 'center'
            }}
          >
            <DownloadIcon size={20} /> <span className="btn-text">Download for {architectures.find(a => a.id === selectedArch)?.label}</span>
          </a>

          <div style={{ textAlign: 'center', width: '100%', overflow: 'hidden' }}>
            <code style={{ 
              fontSize: 'clamp(10px, 3vw, 13px)', 
              color: 'var(--muted)', 
              background: 'rgba(0,0,0,0.3)', 
              padding: '6px 12px', 
              borderRadius: '6px',
              display: 'inline-block',
              maxWidth: '100%',
              overflowX: 'auto',
              whiteSpace: 'nowrap'
            }}>
              curl -sL https://dbgecko.sh/install | sh
            </code>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .arch-selector { grid-template-columns: 1fr !important; }
          .download-btn { padding: 14px !important; }
          .btn-text { font-size: 14px; }
        }
        .download-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px var(--acc-dim);
        }
      `}</style>
    </section>
  );
};
