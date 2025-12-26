import * as React from 'react';
import Svg, { ClipPath, Defs, G, Path, SvgProps } from 'react-native-svg';

const DownwardSvg = (props: SvgProps) => (
  <Svg width={14} height={14} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#3867F8"
        fillRule="evenodd"
        d="M2.32 4.573a.452.452 0 0 1 .639 0L6.854 8.47l3.896-3.896a.452.452 0 0 1 .639.639L7.174 9.427a.452.452 0 0 1-.639 0L2.32 5.212a.452.452 0 0 1 0-.639Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h14v14H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default DownwardSvg;
