// Hero.jsx — landing section. "SANCTUARIES FOR SPIRITUAL WANDERERS" with the moon.

function Hero() {
  return (
    <section
      data-screen-label="01 Hero"
      style={{
        background: '#000',
        color: '#fff',
        padding: '120px 64px 160px',
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Large faint circular contour echoing the source */}
      <div style={{
        position: 'absolute',
        left: '-12%',
        top: '5%',
        width: '85%',
        aspectRatio: '1 / 1',
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.10)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 80, alignItems: 'center', maxWidth: 1600, margin: '0 auto', width: '100%' }}>
        <div>
          <h1 style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: 'clamp(48px, 6vw, 92px)',
            lineHeight: 1.04,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            margin: 0,
            textWrap: 'balance',
          }}>
            Sanctuaries<br/>For<br/>
            <span style={{ display: 'inline-block', paddingLeft: '24%' }}>Spiritual</span><br/>
            <span style={{ display: 'inline-block', paddingLeft: '24%' }}>Wanderers</span>
          </h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Sphere size={260} />
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
