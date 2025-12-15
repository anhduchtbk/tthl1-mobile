import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function LeftArrowSvg(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <Path
        d="M20.25 12H3.75M10.5 5.25L3.75 12l6.75 6.75"
        stroke="#000"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default LeftArrowSvg
