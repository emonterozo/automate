import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { IconProps } from "@/types";

export default function DocumentIcon({ fill = "#d4d6dd", width = 20, height = 20 }: IconProps) {
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
        <G transform="scale(3.55556,3.55556)">
          <Path d="M32,10c-3.314,0 -6,2.686 -6,6v28c0,3.314 2.686,6 6,6h20c3.314,0 6,-2.686 6,-6v-16h-12c-3.314,0 -6,-2.686 -6,-6v-12zM44,10v12c0,1.105 0.896,2 2,2h12zM22,19c-4.418,0 -8,3.582 -8,8v27c0,4.418 3.582,8 8,8h19c4.418,0 8,-3.582 8,-8h-23c-2.209,0 -4,-1.791 -4,-4zM37,33h10c1.104,0 2,0.895 2,2c0,1.105 -0.896,2 -2,2h-10c-1.104,0 -2,-0.895 -2,-2c0,-1.105 0.896,-2 2,-2zM37,40h10c1.104,0 2,0.895 2,2c0,1.105 -0.896,2 -2,2h-10c-1.104,0 -2,-0.895 -2,-2c0,-1.105 0.896,-2 2,-2z" />
        </G>
      </G>
    </Svg>
  );
}
