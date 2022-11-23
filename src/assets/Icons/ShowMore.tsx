import { SvgXml } from 'react-native-svg';
import { APP_MAIN_COLOR } from '../../configs/configs';
import { scaleSvg } from '../../utils/scaleSvg';

export function ShowMore() {

  const originalScale=0.1;
  const originalSize=52;
  const newSize=32;

  const color=APP_MAIN_COLOR;
  const { height, scaleX, scaleY, translateX, translateY, width } = scaleSvg(originalScale, originalSize, newSize);

  const markup = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(${translateX}, ${translateY}) scale(${scaleX},-${scaleY})" fill="${color}" stroke="none">
      <path d="M180 487 c-49 -16 -133 -102 -148 -153 -28 -94 -8 -169 63 -239 102 -103 243 -101 338 5 90 100 90 220 0 320 -65 72 -158 97 -253 67z m190 -61 c59 -39 85 -89 85 -166 0 -78 -26 -127 -88 -168 -56 -37 -153 -39 -210 -3 -76 47 -111 140 -88 229 14 51 75 117 123 131 53 16 135 6 178 -23z"/>
      <path d="M197 302 c-46 -47 -57 -64 -57 -91 l0 -33 60 63 60 63 60 -63 60 -63 0 34 c0 28 -10 44 -58 91 -32 31 -60 57 -63 57 -2 0 -30 -26 -62 -58z"/>
    </g>
  </svg>`;

  return <SvgXml xml={markup}/>;
}
