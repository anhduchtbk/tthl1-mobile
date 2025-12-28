import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, Rect, SvgProps } from 'react-native-svg';

function RemoveSvg(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <G clipPath="url(#clip0_1308_1750)">
        <Rect width={20} height={20} rx={10} fill="red" />
        <Path
          d="M5.625 14.271L10 9.896l4.375 4.375"
          stroke="#fff"
          strokeWidth={1.25}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M14.375 5.73L10 10.103 5.625 5.73"
          stroke="#fff"
          strokeWidth={1.25}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1308_1750">
          <Rect width={20} height={20} rx={10} fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default RemoveSvg;
