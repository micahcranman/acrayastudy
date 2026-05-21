// Nav.jsx — sticky top nav. Always solid black, even on light sections.

function Nav({ onReserve }) {
  const links = ['Locations', 'Facilitators', 'Team', 'Technology'];
  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: '#000',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        padding: '20px 56px',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <a href="#top" style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#fff', textDecoration: 'none' }}>
        <div
          style={{
            width: 22, height: 22, borderRadius: '50%',
            background: 'radial-gradient(circle at 38% 38%, #fff 0%, #d9d9d9 50%, #7a7a7a 100%)',
            boxShadow: '0 0 10px rgba(255,255,255,0.35)',
          }}
        />
        <span style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 300,
          fontSize: 16,
          letterSpacing: '0.32em',
          textTransform: 'uppercase',
        }}>ACRAYA</span>
      </a>
      <div style={{ flex: 1 }} />
      <div style={{ display: 'flex', gap: 44 }}>
        {links.map(l => (
          <a key={l} href={`#${l.toLowerCase()}`} className="acraya-navlink"
             style={{
               fontFamily: 'Jost, sans-serif',
               fontWeight: 400,
               fontSize: 12,
               letterSpacing: '0.22em',
               textTransform: 'uppercase',
               color: '#fff',
               textDecoration: 'none',
               opacity: 0.92,
               transition: 'opacity 150ms cubic-bezier(0.22,0.61,0.36,1)',
             }}
             onMouseEnter={e => e.currentTarget.style.opacity = 0.55}
             onMouseLeave={e => e.currentTarget.style.opacity = 0.92}
          >{l}</a>
        ))}
      </div>
      <button
        onClick={onReserve}
        style={{
          marginLeft: 36,
          background: '#fff', color: '#000',
          border: 'none',
          borderRadius: 999,
          padding: '11px 28px',
          fontFamily: 'Jost, sans-serif',
          fontWeight: 400,
          fontSize: 12,
          letterSpacing: '0.22em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          transition: 'background 320ms cubic-bezier(0.22,0.61,0.36,1)',
        }}
        onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.85)'}
        onMouseLeave={e => e.currentTarget.style.background = '#fff'}
      >Reserve</button>
    </nav>
  );
}

window.Nav = Nav;
