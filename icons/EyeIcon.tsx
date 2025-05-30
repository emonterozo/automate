import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { IconProps } from "@/types";

export default function EyeIcon({ fill = "#d4d6dd", width = 20, height = 20 }: IconProps) {
  return (
    <Svg viewBox="0,0,256,256" width={width} height={height} fillRule="nonzero">
      <G
        fill={fill}
        fillRule="nonzero"
        stroke="none"
        strokeWidth={1}
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit={10}
        strokeDasharray=""
        strokeDashoffset={0}
        style={{
          mixBlendMode: "normal",
        }}
      >
        <G transform="scale(10.66667,10.66667)">
          <Path d="M22.52,10.645c-1.948,-2.281 -5.52,-6.645 -10.52,-6.645c-5,0 -8.572,4.364 -10.52,6.645c-0.64,0.75 -0.64,1.959 0,2.709c1.948,2.282 5.52,6.646 10.52,6.646c5,0 8.572,-4.364 10.52,-6.645c0.64,-0.75 0.64,-1.96 0,-2.71zM12,17c-2.761,0 -5,-2.239 -5,-5c0,-2.761 2.239,-5 5,-5c2.761,0 5,2.239 5,5c0,2.761 -2.239,5 -5,5zM15,12c0,1.657 -1.343,3 -3,3c-1.657,0 -3,-1.343 -3,-3c0,-1.657 1.343,-3 3,-3c1.657,0 3,1.343 3,3z" />
        </G>
      </G>
    </Svg>
  );
}
