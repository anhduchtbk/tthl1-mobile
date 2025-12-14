import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";

function HomeSvg(props: SvgProps) {
  return (
    <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
      <G clipPath="url(#clip0_1_2170)">
        <Path
          d="M19.46 8.699v-.001L11.3.54A1.829 1.829 0 009.999 0a1.83 1.83 0 00-1.302.54L.543 8.692l-.008.009a1.843 1.843 0 00.003 2.6 1.83 1.83 0 001.279.54h.325v6.003c0 1.188.967 2.155 2.155 2.155h3.192a.586.586 0 00.586-.586v-4.707c0-.542.44-.983.983-.983h1.882c.543 0 .984.44.984.983v4.707c0 .324.262.586.585.586h3.192a2.157 2.157 0 002.155-2.155v-6.004h.302a1.83 1.83 0 001.302-.539 1.844 1.844 0 000-2.603z"
          fill="#846FE2"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_2170">
          <Path fill="#fff" d="M0 0H20V20H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default HomeSvg;
