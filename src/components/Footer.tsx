import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--border)',
      padding: '40px 0',
      marginTop: '100px'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Logo/>
          </div>
          <p style={{ color: 'var(--muted)', fontSize: '13px' }}>
            Built by Hazel Daniel. Licensed under Apache-2.0.
          </p>
        </div>
        
        <div style={{ display: 'flex', gap: '32px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontWeight: 600, fontSize: '14px' }}>Product</span>
            <a href="#features" style={{ color: 'var(--muted)', fontSize: '13px' }}>Features</a>
            <a href="#download" style={{ color: 'var(--muted)', fontSize: '13px' }}>Download</a>
            <a href="#plugins" style={{ color: 'var(--muted)', fontSize: '13px' }}>Plugins</a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ fontWeight: 600, fontSize: '14px' }}>Social</span>
            <a href="https://github.com/HazelDaniel/dbgecko" target="_blank" style={{ color: 'var(--muted)', fontSize: '13px' }}>GitHub</a>
            <a href="https://twitter.com/hazeldaniel" target="_blank" style={{ color: 'var(--muted)', fontSize: '13px' }}>Twitter</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
