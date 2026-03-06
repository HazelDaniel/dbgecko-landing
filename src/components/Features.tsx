import { motion } from 'framer-motion';
import { Database, Cloud, Terminal, Zap, Shield, Layers } from 'lucide-react';

const features = [
  {
    title: 'Plugin-Driven Architecture',
    desc: 'Support for PostgreSQL, MySQL, and MongoDB via modular driver system.',
    icon: <Database className="acc" size={24} />
  },
  {
    title: 'Multi-Backend Storage',
    desc: 'Stream backups directly to local storage, AWS S3, or SFTP servers.',
    icon: <Cloud className="acc" size={24} />
  },
  {
    title: 'Interactive TUI & CLI',
    desc: 'Intuitive ncurses-based dashboard or powerful command-line interface.',
    icon: <Terminal className="acc" size={24} />
  },
  {
    title: 'High Performance',
    desc: 'C-based core with streaming I/O for minimal memory overhead.',
    icon: <Zap className="acc" size={24} />
  },
  {
    title: 'Secure & Encrypted',
    desc: 'End-to-end encryption using OpenSSL and secure SSH/SFTP protocols.',
    icon: <Shield className="acc" size={24} />
  },
  {
    title: 'Smart Configuration',
    desc: 'Simple YAML-based configuration with environment variable support.',
    icon: <Layers className="acc" size={24} />
  }
];

export const Features = () => {
  return (
    <section id="features" style={{ padding: '120px 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 style={{ fontSize: '42px', marginBottom: '16px' }}>Powering Your Data Infrastructure</h2>
          <p style={{ color: 'var(--muted)', fontSize: '18px' }}>Designed for developers who demand speed, security, and flexibility.</p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass"
              style={{
                padding: '32px',
                borderRadius: '16px',
                transition: 'border-color 0.2s',
                display: 'flex',
                flexDirection: 'column',
                gap: '16px'
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--acc)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'var(--acc-dim)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--acc)'
              }}>
                {f.icon}
              </div>
              <h3 style={{ fontSize: '20px' }}>{f.title}</h3>
              <p style={{ color: 'var(--muted)', lineHeight: 1.6 }}>{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
