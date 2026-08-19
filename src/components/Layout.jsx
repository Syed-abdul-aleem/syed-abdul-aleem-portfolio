import { Link, NavLink } from 'react-router-dom';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import SocialButtons from './SocialButtons';

const nav = [
  ['Home', '/'], ['About', '/about'], ['Work', '/work'], ['Services', '/services'],
  ['Skills', '/skills'], ['Experience', '/experience'], ['Contact', '/contact']
];

export default function Layout({ children, theme, setTheme }) {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />
      <div className="ambient" aria-hidden="true"><i /><i /><i /></div>
      <header className="header">
        <div className="nav">
          <Link to="/" className="brand" onClick={() => setOpen(false)}>
            <span className="brand-mark">SA</span>
            <span>Syed Abdul Aleem</span>
          </Link>
          <div className={`nav-links ${open ? 'open' : ''}`}>
            {nav.map(([label, path]) => (
              <NavLink key={path} to={path} end={path === '/'} onClick={() => setOpen(false)}>{label}</NavLink>
            ))}
          </div>
          <div className="nav-tools">
            <Link className="nav-cta" to="/contact">Hire Me</Link>
            <button className="icon-btn" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Toggle theme">
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer>
        <div className="container footer-grid">
          <div>
            <strong>SYED ABDUL ALEEM AHMAD SHAH</strong>
            <br />
            <span>AI DEVELOPER · AUTOMATION SPECIALIST · VIBE CODER</span>
          </div>
          <SocialButtons className="footer-socials" />
          <div>© {new Date().getFullYear()} · BUILT WITH CURIOSITY & CODE.</div>
        </div>
      </footer>
    </>
  );
}
