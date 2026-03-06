import { useState } from 'react';
import { Github, Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Features', href: '#features' },
    { name: 'Download', href: '#download' },
    { name: 'Plugins', href: '#plugins' },
  ];

  return (
    <nav className="glass" style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 100,
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      borderBottom: '1px solid var(--border)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{
            width: '24px',
            height: '24px',
            background: 'var(--acc)',
            borderRadius: '4px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 'bold',
            color: '#000',
            fontSize: '14px'
          }}>G</div>
          <span style={{ fontWeight: 700, fontSize: '18px' }}>dbgecko</span>
        </div>
        
        {/* Desktop Nav */}
        <div className="desktop-only" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          {navLinks.map(link => (
            <a 
              key={link.name}
              href={link.href} 
              style={{ color: 'var(--muted)', fontSize: '14px', fontWeight: 500 }}
              className="nav-link"
            >
              {link.name}
            </a>
          ))}
          <div style={{ width: '1px', height: '20px', background: 'var(--border)' }} />
          <a href="https://github.com/HazelDaniel/dbgecko" target="_blank" rel="noopener noreferrer">
            <Github size={20} color="var(--muted)" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="mobile-only" onClick={toggleMenu} style={{ color: 'var(--fg)' }}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="glass" style={{
          position: 'absolute',
          top: '64px',
          left: 0,
          width: '100%',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          borderBottom: '1px solid var(--border)',
          zIndex: 99
        }}>
          {navLinks.map(link => (
            <a 
              key={link.name}
              href={link.href} 
              onClick={() => setIsOpen(false)}
              style={{ color: 'var(--fg)', fontSize: '18px', fontWeight: 600 }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ height: '1px', background: 'var(--border)' }} />
          <a 
            href="https://github.com/HazelDaniel/dbgecko" 
            target="_blank" 
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--fg)', fontSize: '18px', fontWeight: 600 }}
          >
            <Github size={20} /> GitHub
          </a>
        </div>
      )}

      <style>{`
        .nav-link { transition: color 0.2s; }
        .nav-link:hover { color: #fff !important; }
      `}</style>
    </nav>
  );
};
