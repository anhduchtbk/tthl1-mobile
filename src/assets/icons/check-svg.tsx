import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"

function CheckSvg(props: SvgProps) {
  return (
    <Svg
      width={12}
      height={9}
      viewBox="0 0 12 9"
      fill="none"
      {...props}
    >
      <Path
        d="M.75 4.75l3.5 3.5 7-7.5"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  )
}

export default CheckSvg
