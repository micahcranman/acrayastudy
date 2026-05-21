// Intro.jsx — "DISCOVER THE ACRAYA" light section with three offset B&W portraits.

function Intro() {
  return (
    <section
      className="acraya-light"
      data-screen-label="03 Discover"
      style={{
        background: '#fff',
        color: '#000',
        padding: '140px 64px 160px',
      }}
    >
      <div style={{ maxWidth: 1600, margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: 'clamp(56px, 7vw, 108px)',
          lineHeight: 1.04,
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
          margin: 0,
          marginLeft: '6%',
          textWrap: 'balance',
        }}>
          Discover<br/>
          <span style={{ display: 'inline-block', paddingLeft: '8%' }}>The Acraya</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 96,
          marginTop: 96,
          alignItems: 'center',
        }}>
          {/* offset portraits cluster */}
          <div style={{ position: 'relative', height: 560 }}>
            <div style={{ position: 'absolute', left: '36%', top: 20 }}>
              <ImageFrame id="portrait-1" w={150} h={150} shape="circle" placeholder="Monk · seated · vertical" />
            </div>
            <div style={{ position: 'absolute', left: '8%', top: 200 }}>
              <ImageFrame id="portrait-2" w={220} h={220} shape="circle" placeholder="Cloaked figure · portrait" />
            </div>
            <div style={{ position: 'absolute', left: '52%', top: 340 }}>
              <ImageFrame id="portrait-3" w={260} h={260} shape="circle" placeholder="Elder · seated outdoors" />
            </div>
          </div>

          {/* right column body copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24, paddingTop: 60, maxWidth: 460 }}>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.55, margin: 0 }}>
              A global network of dark meditation sanctuaries designed for seekers, wanderers, and truth gatherers.
            </p>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.55, margin: 0 }}>
              Our sanctuaries offer transformative spaces where individuals can explore the depths of consciousness.
            </p>
            <div style={{ height: 1, background: 'rgba(0,0,0,0.18)', marginTop: 24 }} />
          </div>
        </div>
      </div>
    </section>
  );
}

window.Intro = Intro;
