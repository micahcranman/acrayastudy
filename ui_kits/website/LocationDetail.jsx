// LocationDetail.jsx — "HOLOS — COSTA RICA" location page with color carousel.
// Light theme, full-color photography (not B&W) — only place color enters the brand.

function LocationDetail() {
  const slides = [
    { id: 'holos-1', placeholder: 'Aerial · valley vista' },
    { id: 'holos-2', placeholder: 'Bamboo dome · interior' },
    { id: 'holos-3', placeholder: 'Communal dining table' },
    { id: 'holos-4', placeholder: 'Pavilion · dusk lighting' },
    { id: 'holos-5', placeholder: 'Forest trail · sunrise' },
  ];
  const [active, setActive] = React.useState(2);
  const prev = () => setActive(a => (a - 1 + slides.length) % slides.length);
  const next = () => setActive(a => (a + 1) % slides.length);

  return (
    <section
      className="acraya-light"
      data-screen-label="05 Location · Holos"
      id="locations"
      style={{
        background: '#fff',
        color: '#000',
        padding: '120px 64px 160px',
      }}
    >
      <div style={{ maxWidth: 1600, margin: '0 auto' }}>
        <div style={{ marginLeft: '6%' }}>
          <h2 style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 300,
            fontSize: 'clamp(40px, 5vw, 80px)',
            lineHeight: 1.04,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            margin: 0,
          }}>Holos — Costa Rica</h2>
          <div style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 300,
            fontSize: 22,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(0,0,0,0.5)',
            marginTop: 16,
          }}>Costa Rica</div>
        </div>

        {/* carousel */}
        <div style={{
          marginTop: 80,
          display: 'flex',
          alignItems: 'center',
          gap: 24,
          paddingLeft: '6%',
          paddingRight: '6%',
          overflow: 'hidden',
          position: 'relative',
        }}>
          <button onClick={prev} aria-label="Previous"
                  style={{
                    flexShrink: 0,
                    width: 56, height: 56, borderRadius: '50%',
                    background: '#000', color: '#fff', border: 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'opacity 320ms',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = 0.75}
                  onMouseLeave={e => e.currentTarget.style.opacity = 1}>
            <svg width="20" height="20" stroke="currentColor" strokeWidth="1.25" fill="none" viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg>
          </button>

          <div style={{ flex: 1, display: 'flex', gap: 32, alignItems: 'center', justifyContent: 'flex-start', overflow: 'hidden' }}>
            {slides.map((s, i) => {
              const offset = i - active;
              const isCenter = offset === 0;
              const scale = isCenter ? 1 : 0.78;
              const opacity = Math.abs(offset) > 2 ? 0 : (isCenter ? 1 : 0.85);
              return (
                <div key={s.id}
                     style={{
                       flexShrink: 0,
                       transform: `scale(${scale})`,
                       opacity,
                       transition: 'transform 600ms cubic-bezier(0.22,0.61,0.36,1), opacity 600ms cubic-bezier(0.22,0.61,0.36,1)',
                     }}>
                  <ImageFrame id={s.id} w={420} h={420} shape="rect" bw={false} placeholder={s.placeholder} />
                </div>
              );
            })}
          </div>

          <button onClick={next} aria-label="Next"
                  style={{
                    flexShrink: 0,
                    width: 56, height: 56, borderRadius: '50%',
                    background: '#000', color: '#fff', border: 'none',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'opacity 320ms',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = 0.75}
                  onMouseLeave={e => e.currentTarget.style.opacity = 1}>
            <svg width="20" height="20" stroke="currentColor" strokeWidth="1.25" fill="none" viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>
          </button>
        </div>

        {/* pagination dots */}
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 40 }}>
          {slides.map((s, i) => (
            <button key={s.id} onClick={() => setActive(i)} aria-label={`Go to slide ${i+1}`}
                    style={{
                      width: i === active ? 22 : 7,
                      height: 7,
                      borderRadius: 999,
                      background: i === active ? '#000' : 'rgba(0,0,0,0.25)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'width 320ms cubic-bezier(0.22,0.61,0.36,1), background 320ms',
                    }} />
          ))}
        </div>

        {/* body copy */}
        <div style={{ marginTop: 96, marginLeft: '6%', maxWidth: 720, display: 'flex', flexDirection: 'column', gap: 22 }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 19, lineHeight: 1.55, margin: 0 }}>
            Holos is a destination healing, meditation and wellness retreat center in the Diamante Valley, Costa Rica.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 19, lineHeight: 1.55, margin: 0 }}>
            A sanctuary where people return to their wholeness, through presence, practice, and lived experience. We offer immersive eco-luxury stays in dedicated cabins, alongside experienced facilitators rooted in both contemplative and shamanic traditions.
          </p>
        </div>
      </div>
    </section>
  );
}

window.LocationDetail = LocationDetail;
