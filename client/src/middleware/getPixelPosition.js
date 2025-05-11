export default function getPixelPosition(imageRef, xPercent, yPercent) {
  if (!imageRef.current) return { x: 0, y: 0 };
  const rect = imageRef.current.getBoundingClientRect();
  const x = (xPercent / 100) * rect.width;
  const y = (yPercent / 100) * rect.width; // ✅ Matching your save logic
  return { x, y };
}
