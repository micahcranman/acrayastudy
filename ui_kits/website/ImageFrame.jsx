// ImageFrame.jsx — wrap <image-slot> with Acraya's B&W vs color treatment.
// CSS `filter` applied to the host element propagates through shadow DOM,
// so dropped images get the grayscale treatment automatically.

function ImageFrame({ id, w, h, shape = 'rect', radius, bw = true, placeholder = 'Drop image', style = {} }) {
  return (
    <image-slot
      id={id}
      shape={shape}
      radius={radius}
      placeholder={placeholder}
      style={{
        display: 'inline-block',
        width: typeof w === 'number' ? `${w}px` : w,
        height: typeof h === 'number' ? `${h}px` : h,
        filter: bw ? 'grayscale(1) contrast(1.04)' : 'none',
        ...style,
      }}
    />
  );
}

window.ImageFrame = ImageFrame;
