import { SvgXml } from 'react-native-svg';
import { APP_MAIN_COLOR } from '../../configs/configs';
import { scaleSvg } from '../../utils/scaleSvg';

export function ShowLess() {

  const originalScale=0.1;
  const originalSize=52;
  const newSize=32;

  const color=APP_MAIN_COLOR;
  const { height, scaleX, scaleY, translateX, translateY, width } = scaleSvg(originalScale, originalSize, newSize);

  const markup = `<svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" preserveAspectRatio="xMidYMid meet">
    <g transform="translate(${translateX}, ${translateY}) scale(${scaleX},-${scaleY})" fill="${color}" stroke="none">
    <path d="M180 487 c-49 -16 -133 -102 -148 -153 -28 -94 -8 -169 63 -239 102 -103 243 -101 338 5 90 100 90 220 0 320 -65 72 -158 97 -253 67z m190 -61 c59 -39 85 -89 85 -166 0 -78 -26 -127 -88 -168 -56 -37 -153 -39 -210 -3 -76 47 -111 140 -88 229 14 51 75 117 123 131 53 16 135 6 178 -23z"/>
    <path d="M140 314 c0 -24 14 -45 60 -94 l60 -63 60 63 c46 49 60 70 60 94 l0 30 -60 -59 -60 -59 -60 59 -60 59 0 -30z"/>
  </g>
  </svg>`;

  return <SvgXml xml={markup}/>;

}
