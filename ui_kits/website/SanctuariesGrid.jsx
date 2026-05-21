// SanctuariesGrid.jsx — "OUR SANCTUARIES PROVIDE A RESTFUL HAVEN" + 3 B&W images.

function SanctuariesGrid() {
  return (
    <section
      className="acraya-light"
      data-screen-label="04 Sanctuaries"
      style={{
        background: '#fff',
        color: '#000',
        padding: '120px 64px 160px',
      }}
    >
      <div style={{ maxWidth: 1600, margin: '0 auto' }}>
        <h2 style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: 'clamp(40px, 4.6vw, 72px)',
          lineHeight: 1.1,
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
          margin: 0,
          marginLeft: '6%',
          textWrap: 'balance',
        }}>
          Our sanctuaries<br/>
          <span style={{ display: 'inline-block', paddingLeft: '10%' }}>Provide a restful haven</span><br/>
          <span style={{ display: 'inline-block', paddingLeft: '10%' }}>For your inner journey</span>
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1.6fr 0.7fr',
          gap: 32,
          marginTop: 96,
          alignItems: 'end',
        }}>
          <ImageFrame id="sanc-1" w="100%" h={520} shape="rect" placeholder="Mountain landscape · B&W" />
          <ImageFrame id="sanc-2" w="100%" h={620} shape="rect" placeholder="Stupa in mist · B&W" />
          <ImageFrame id="sanc-3" w="100%" h={520} shape="rect" placeholder="Vertical landscape · B&W" />
        </div>
      </div>
    </section>
  );
}

window.SanctuariesGrid = SanctuariesGrid;
