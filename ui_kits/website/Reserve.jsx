// Reserve.jsx — final dark section with reservation CTA + minimal form.

function Reserve({ reserveRef }) {
  const [submitted, setSubmitted] = React.useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section
      ref={reserveRef}
      data-screen-label="06 Reserve"
      id="reserve"
      style={{
        background: '#000',
        color: '#fff',
        padding: '160px 64px 200px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* sphere drifting in the background */}
      <div style={{ position: 'absolute', right: '6%', top: '50%', transform: 'translateY(-50%)', opacity: 0.85 }}>
        <Sphere size={180} intensity={0.85} />
      </div>

      <div style={{ position: 'relative', zIndex: 2, maxWidth: 1600, margin: '0 auto' }}>
        <div style={{ marginLeft: '6%', maxWidth: 700 }}>
          <div style={{
            fontFamily: 'Jost, sans-serif',
            fontSize: 13,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            opacity: 0.55,
            marginBottom: 32,
          }}>Reserve a stay</div>
          <h2 style={{
            fontFamily: 'Jost, sans-serif',
            fontWeight: 200,
            fontSize: 'clamp(40px, 5vw, 76px)',
            lineHeight: 1.05,
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            margin: 0,
            textWrap: 'balance',
          }}>
            Begin your<br/>journey into stillness
          </h2>

          <form onSubmit={onSubmit} style={{ marginTop: 80, display: 'flex', flexDirection: 'column', gap: 48, maxWidth: 540 }}>
            <Field label="Name" defaultValue="" />
            <Field label="Email" type="email" defaultValue="" />
            <SelectField label="Preferred Sanctuary" options={['Holos — Costa Rica', 'Velantra — Iceland', 'Sūmā — Nepal']} />
            <SelectField label="Length of Stay" options={['3 nights', '7 nights', '14 nights', '21+ nights']} />

            <button type="submit"
                    style={{
                      alignSelf: 'flex-start',
                      marginTop: 24,
                      background: '#fff', color: '#000',
                      border: 'none', borderRadius: 999,
                      padding: '14px 36px',
                      fontFamily: 'Jost, sans-serif',
                      fontSize: 13,
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                      transition: 'background 320ms',
                    }}
                    onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.85)'}
                    onMouseLeave={e => e.currentTarget.style.background = '#fff'}>
              {submitted ? 'Received — we will be in touch' : 'Reserve'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, type = 'text', defaultValue = '' }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <span style={{ fontFamily: 'Jost, sans-serif', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.55 }}>{label}</span>
      <input type={type} defaultValue={defaultValue}
             style={{
               background: 'transparent',
               border: 'none',
               borderBottom: '1px solid rgba(255,255,255,0.4)',
               color: '#fff',
               fontFamily: 'Inter, sans-serif',
               fontSize: 18,
               padding: '8px 0',
               outline: 'none',
             }}
             onFocus={e => e.currentTarget.style.borderBottomColor = '#fff'}
             onBlur={e => e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.4)'} />
    </label>
  );
}

function SelectField({ label, options }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
      <span style={{ fontFamily: 'Jost, sans-serif', fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.55 }}>{label}</span>
      <div style={{ position: 'relative' }}>
        <select
          style={{
            width: '100%',
            background: 'transparent',
            border: 'none',
            borderBottom: '1px solid rgba(255,255,255,0.4)',
            color: '#fff',
            fontFamily: 'Inter, sans-serif',
            fontSize: 18,
            padding: '8px 24px 8px 0',
            outline: 'none',
            appearance: 'none',
            WebkitAppearance: 'none',
            cursor: 'pointer',
          }}>
          {options.map(o => <option key={o} value={o} style={{ background: '#000', color: '#fff' }}>{o}</option>)}
        </select>
        <svg width="14" height="14" stroke="currentColor" strokeWidth="1.25" fill="none" viewBox="0 0 24 24"
             style={{ position: 'absolute', right: 4, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', opacity: 0.7 }}>
          <path d="M6 9l6 6 6-6"/>
        </svg>
      </div>
    </label>
  );
}

window.Reserve = Reserve;
