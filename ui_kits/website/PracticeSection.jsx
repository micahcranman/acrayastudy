// PracticeSection.jsx — "A DARK RETREAT IS A PROFOUND MEDITATION PRACTICE…"
// Dark section with the large headline and right-aligned body copy.

function PracticeSection() {
  return (
    <section
      data-screen-label="02 The Practice"
      style={{
        background: '#000',
        color: '#fff',
        padding: '120px 64px 160px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ height: 1, background: 'rgba(255,255,255,0.18)', marginBottom: 96, maxWidth: 1600, margin: '0 auto 96px' }} />

      {/* Large faint circle motif */}
      <div style={{
        position: 'absolute',
        left: '-30%',
        top: '8%',
        width: '70%',
        aspectRatio: '1 / 1',
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.10)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1600, margin: '0 auto', display: 'grid', gridTemplateColumns: '3fr 2fr', gap: 120, alignItems: 'start' }}>
        <h2 style={{
          fontFamily: 'Jost, sans-serif',
          fontWeight: 200,
          fontSize: 'clamp(36px, 4vw, 60px)',
          lineHeight: 1.1,
          letterSpacing: '0.02em',
          textTransform: 'uppercase',
          margin: 0,
          textWrap: 'balance',
        }}>
          A dark retreat is a profound meditation practice involving an extended stay in complete darkness.
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, alignSelf: 'end', paddingTop: 120 }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.55, margin: 0, color: '#fff' }}>
            It is rooted in traditions like Tibetan Buddhism, Native American shamanism, and Christian mysticism.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.55, margin: 0, color: '#fff' }}>
            Conducted in sealed, light-free spaces—ranging from simple rooms to dedicated cabins—retreats last from days to weeks, tailored to your experience and goals.
          </p>
          <div style={{ height: 1, background: 'rgba(255,255,255,0.20)', marginTop: 24 }} />
        </div>
      </div>
    </section>
  );
}

window.PracticeSection = PracticeSection;
