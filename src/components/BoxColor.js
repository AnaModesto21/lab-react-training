export const BoxColor = ({ r, g, b }) => {
  const bgColor = `rgb(${r}, ${g}, ${b})`;
  return <div style={{ background: bgColor }}>{bgColor} </div>;
};
