function scaleSvg(originalScale: number, originalSize: number, newSize: number){

  const ratio=newSize/originalSize;
  const scale=ratio*originalScale;

  const width=newSize;
  const height=newSize;
  const translateX=0;
  const translateY=newSize;
  const scaleX=scale;
  const scaleY=scale;

  return {
    width,
    height,
    translateX,
    translateY,
    scaleX,
    scaleY
  };
}

export { scaleSvg };
