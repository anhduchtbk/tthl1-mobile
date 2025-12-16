import * as React from "react";
import { ColorValue } from "react-native";
import Svg, { ClipPath, Defs, G, Path, SvgProps } from "react-native-svg";

type ActiveSvgProps = SvgProps & {
  activeColor?: ColorValue;
};
function PersonnelSvg({activeColor, ...props}: ActiveSvgProps) {
  return (
    <Svg fill="none" {...props}>
    <G fill={activeColor || "#B2BDBE"} clipPath="url(#a)">
      <Path d="M9.742 8.055c-4.523 0-8.242 3.11-8.242 6.933 0 1.529.593 3.082 1.68 4.286l-1.535 1.754a.585.585 0 0 0 .441.972h8.242c3.34 0 7.656-2.876 7.656-7.012 0-3.823-3.719-6.933-8.242-6.933Zm-3.555 8.007a1.173 1.173 0 0 1-1.171-1.172c0-.646.525-1.171 1.171-1.171s1.172.526 1.172 1.171c0 .646-.526 1.172-1.172 1.172Zm3.555 0A1.173 1.173 0 0 1 8.57 14.89c0-.646.526-1.171 1.172-1.171.646 0 1.172.526 1.172 1.171 0 .646-.526 1.172-1.172 1.172Zm3.555 0a1.173 1.173 0 0 1-1.172-1.172c0-.646.526-1.171 1.172-1.171.646 0 1.171.526 1.171 1.171 0 .646-.525 1.172-1.171 1.172Z" />
      <Path d="m21.358 13.923-1.38-1.61c.985-1.11 1.522-2.466 1.522-3.868C21.5 4.892 18.082 2 13.883 2c-3.798 0-7.025 2.367-7.595 5.448 1.06-.36 2.248-.565 3.454-.565 5.131 0 9.347 3.583 9.408 8.008h1.764c.5 0 .769-.59.444-.968Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M1.5 2h20v20h-20z" />
      </ClipPath>
    </Defs>
  </Svg>
  )
}

export default PersonnelSvg;
