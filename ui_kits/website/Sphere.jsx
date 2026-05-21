// Sphere.jsx — the moon. The only visual that earns its own glow.

function Sphere({ size = 220, intensity = 1, breathing = true, style = {} }) {
  const styleStr = `
    @keyframes acraya-breathe {
      0%, 100% { filter: brightness(1); transform: scale(1); }
      50%      { filter: brightness(1.06); transform: scale(1.012); }
    }
  `;
  return (
    <div
      className="acraya-sphere"
      style={{
        position: 'relative',
        width: size,
        height: size,
        display: 'inline-block',
        ...style,
      }}
    >
      <style>{styleStr}</style>
      {/* outer bloom */}
      <div
        style={{
          position: 'absolute',
          inset: -size * 0.6,
          background: `radial-gradient(circle at 50% 50%,
            rgba(255,255,255,${0.12 * intensity}) 0%,
            rgba(255,255,255,${0.04 * intensity}) 32%,
            rgba(255,255,255,0) 65%)`,
          pointerEvents: 'none',
        }}
      />
      {/* the sphere itself */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: '50%',
          background: 'radial-gradient(circle at 38% 38%, #ffffff 0%, #ededed 45%, #9a9a9a 80%, #6a6a6a 100%)',
          boxShadow: `
            0 0 ${20 * intensity}px rgba(255,255,255,${0.45 * intensity}),
            0 0 ${60 * intensity}px rgba(255,255,255,${0.22 * intensity}),
            0 0 ${140 * intensity}px rgba(255,255,255,${0.10 * intensity})
          `,
          animation: breathing ? 'acraya-breathe 6s ease-in-out infinite' : 'none',
        }}
      />
    </div>
  );
}

window.Sphere = Sphere;
