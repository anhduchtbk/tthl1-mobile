import React from 'react';
import Svg, { G, Path, Circle, Defs, ClipPath, Rect } from 'react-native-svg';
import type { SvgProps } from 'react-native-svg';

const MagnifierSvg = (props: SvgProps) => {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <G clipPath="url(#clip0_363_4887)">
        <Circle
          cx="7.66683"
          cy="7.66634"
          r="6.33333"
          stroke={props.color || '#B5BBC5'}
          strokeWidth={1.5}
        />
        <Path
          d="M12.3335 12.333L14.6668 14.6663"
          stroke={props.color || '#B5BBC5'}
          strokeWidth={1.5}
          strokeLinecap="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_363_4887">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default MagnifierSvg;
