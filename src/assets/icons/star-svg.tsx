import * as React from "react";
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";

function StarSvg(props: SvgProps) {
  return (
    <Svg width={11} height={11} viewBox="0 0 11 11" fill="none" {...props}>
      <G clipPath="url(#clip0_1_2241)">
        <Path
          d="M10.971 4.22a.584.584 0 00-.503-.403L7.293 3.53 6.038.591a.585.585 0 00-1.076 0L3.707 3.53l-3.175.288A.585.585 0 00.2 4.841l2.4 2.104-.708 3.117a.584.584 0 00.87.632L5.5 9.057l2.738 1.637a.583.583 0 00.87-.632L8.4 6.946l2.4-2.104a.585.585 0 00.171-.622z"
          fill="#FFC107"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_2241">
          <Path fill="#fff" d="M0 0H11V11H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default StarSvg;
