import * as React from "react"
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  RadialGradient,
  ClipPath,
  SvgProps
} from "react-native-svg"

function UserSvg(props: SvgProps) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <G clipPath="url(#clip0_313_4951)">
        <Path
          d="M31.969 16c-.097 5.342-1.035 9.638-3.724 12.245-2.607 2.69-6.903 3.627-12.245 3.724-5.342-.097-9.638-1.035-12.245-3.724C1.065 25.638.128 21.342.031 16c.097-5.342 1.035-9.638 3.724-12.245C6.362 1.065 10.658.128 16 .031c5.342.097 9.638 1.035 12.245 3.724 2.69 2.607 3.627 6.903 3.724 12.245z"
          fill="url(#paint0_linear_313_4951)"
        />
        <Path
          d="M31.969 16c-.097 5.342-1.035 9.638-3.724 12.245-2.607 2.69-6.903 3.627-12.245 3.724-5.342-.097-9.638-1.035-12.245-3.724C1.065 25.638.128 21.342.031 16c.097-5.342 1.035-9.638 3.724-12.245C6.362 1.065 10.658.128 16 .031c5.342.097 9.638 1.035 12.245 3.724 2.69 2.607 3.627 6.903 3.724 12.245z"
          fill="url(#paint1_radial_313_4951)"
        />
        <Path
          d="M17.64 18.518a6.78 6.78 0 100-13.56 6.78 6.78 0 000 13.56z"
          fill="url(#paint2_radial_313_4951)"
        />
        <Path
          d="M15.92 15.078a5.06 5.06 0 100-10.12 5.06 5.06 0 000 10.12z"
          fill="#fff"
        />
        <Path
          d="M15.92 15.078a5.06 5.06 0 100-10.12 5.06 5.06 0 000 10.12z"
          fill="url(#paint3_radial_313_4951)"
        />
        <Path
          d="M15.92 12.998a2.98 2.98 0 100-5.96 2.98 2.98 0 000 5.96z"
          fill="#fff"
        />
        <Path
          d="M18.216 31.434c5.97 0 10.81-3.055 10.81-6.823 0-3.769-4.84-6.824-10.81-6.824-5.97 0-10.81 3.055-10.81 6.824 0 3.768 4.84 6.823 10.81 6.823z"
          fill="url(#paint4_radial_313_4951)"
        />
        <Path
          d="M24.594 23.324a2.663 2.663 0 01-2.663 2.663H10.069a2.663 2.663 0 01-2.663-2.663l.004-1.487c.107-2.087 1.78-3.898 4.234-4.893.297-.12.631-.1.92.039a7.7 7.7 0 003.356.764 7.7 7.7 0 003.418-.794c.287-.142.62-.164.918-.047 2.509.987 4.226 2.82 4.333 4.935l.005 1.483z"
          fill="#fff"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_313_4951"
          x1={3.65163}
          y1={3.65163}
          x2={28.2344}
          y2={28.2344}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#8DBAF8" />
          <Stop offset={0.3342} stopColor="#6FAEFB" />
          <Stop offset={0.7653} stopColor="#4DA0FE" />
          <Stop offset={1} stopColor="#409BFF" />
        </LinearGradient>
        <RadialGradient
          id="paint1_radial_313_4951"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(2.341 2.844) scale(19.9717)"
        >
          <Stop stopColor="#C2DEFF" />
          <Stop offset={1} stopColor="#C2DEFF" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint2_radial_313_4951"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(17.494 12.078) scale(5.96363)"
        >
          <Stop stopColor="#003CA1" />
          <Stop offset={0.1716} stopColor="#0543A8" stopOpacity={0.828} />
          <Stop offset={0.4187} stopColor="#1156BB" stopOpacity={0.581} />
          <Stop offset={0.7098} stopColor="#2675D9" stopOpacity={0.29} />
          <Stop offset={1} stopColor="#409BFF" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint3_radial_313_4951"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(16.672 10.716) scale(3.6545)"
        >
          <Stop stopColor="#4D95FF" />
          <Stop offset={0.1352} stopColor="#5E9FFF" stopOpacity={0.865} />
          <Stop offset={0.4031} stopColor="#8AB9FF" stopOpacity={0.597} />
          <Stop offset={0.7746} stopColor="#D1E4FF" stopOpacity={0.225} />
          <Stop offset={1} stopColor="#fff" stopOpacity={0} />
        </RadialGradient>
        <RadialGradient
          id="paint4_radial_313_4951"
          cx={0}
          cy={0}
          r={1}
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(10.3897 0 0 6.55812 18.166 24.48)"
        >
          <Stop stopColor="#003CA1" />
          <Stop offset={0.1715} stopColor="#0543A8" stopOpacity={0.829} />
          <Stop offset={0.4284} stopColor="#1358BD" stopOpacity={0.572} />
          <Stop offset={0.7371} stopColor="#2979DD" stopOpacity={0.263} />
          <Stop offset={1} stopColor="#409BFF" stopOpacity={0} />
        </RadialGradient>
        <ClipPath id="clip0_313_4951">
          <Path fill="#fff" d="M0 0H32V32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default UserSvg
