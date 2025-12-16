import * as React from 'react';
import { ColorValue } from 'react-native';
import Svg, { Path, SvgProps } from 'react-native-svg';
type ActiveSvgProps = SvgProps & {
  activeColor?: ColorValue;
};
function ManageStudentSvg({ activeColor, ...props }: ActiveSvgProps) {
  return (
    <Svg fill="none" {...props}>
      <Path
        fill={activeColor || '#B2BDBE'}
        d="M4.56 4.36h-.002a.713.713 0 0 0-.712.716v10.732c0 .393.321.714.716.715 1.666.004 4.457.351 6.382 2.366V7.66a.686.686 0 0 0-.098-.363C9.266 4.75 6.23 4.364 4.56 4.36ZM19.154 15.808V5.076a.713.713 0 0 0-.712-.716h-.001c-1.67.004-4.707.39-6.287 2.936a.686.686 0 0 0-.098.362V18.89c1.925-2.015 4.716-2.362 6.382-2.366a.718.718 0 0 0 .716-.715Z"
      />
      <Path
        fill={activeColor || '#B2BDBE'}
        d="M20.784 6.835h-.518v8.973a1.831 1.831 0 0 1-1.825 1.826c-1.413.003-3.743.28-5.393 1.841 2.853-.698 5.862-.244 7.576.147a.714.714 0 0 0 .876-.698V7.551a.716.716 0 0 0-.716-.716ZM2.734 15.808V6.835h-.518a.716.716 0 0 0-.716.716v11.373a.714.714 0 0 0 .876.697c1.714-.39 4.723-.844 7.576-.146-1.65-1.561-3.98-1.838-5.393-1.84a1.83 1.83 0 0 1-1.825-1.827Z"
      />
    </Svg>
  );
}

export default ManageStudentSvg;
