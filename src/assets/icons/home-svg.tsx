import * as React from "react";
import type { ColorValue } from 'react-native';
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";

type ActiveSvgProps = SvgProps & {
  activeColor?: ColorValue;
};
function HomeSvg({activeColor, ...props}: ActiveSvgProps) {
  return (
    <Svg fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill={activeColor || "#B2BDBE"}
        d="M20.96 10.699v-.001L12.8 2.54A1.829 1.829 0 0 0 11.499 2a1.83 1.83 0 0 0-1.302.54l-8.154 8.153-.008.009a1.843 1.843 0 0 0 .003 2.6 1.83 1.83 0 0 0 1.279.54h.325v6.003c0 1.188.967 2.155 2.155 2.155h3.192a.586.586 0 0 0 .586-.586v-4.707c0-.542.44-.983.983-.983h1.882c.543 0 .984.44.984.983v4.707c0 .324.262.586.585.586h3.192a2.157 2.157 0 0 0 2.155-2.155v-6.004h.302a1.83 1.83 0 0 0 1.302-.539 1.844 1.844 0 0 0 0-2.603Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M1.5 2h20v20h-20z" />
      </ClipPath>
    </Defs>
  </Svg>
  )
}

export default HomeSvg;
