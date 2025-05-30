import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { IconProps } from "@/types";

export default function PersonIcon({ fill = "#d4d6dd", width = 20, height = 20 }: IconProps) {
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
          <Path d="M12,2c-2.206,0 -4,1.794 -4,4v1c0,2.206 1.794,4 4,4c2.206,0 4,-1.794 4,-4v-1c0,-2.206 -1.794,-4 -4,-4zM20.832,17.445c-0.09,-0.136 -2.264,-3.334 -6.589,-4.416c-0.409,-0.101 -0.84,0.063 -1.075,0.416l-1.168,1.752l-1.168,-1.752c-0.235,-0.353 -0.667,-0.518 -1.075,-0.416c-4.325,1.082 -6.499,4.28 -6.589,4.416c-0.109,0.164 -0.168,0.358 -0.168,0.555v2c0,0.552 0.448,1 1,1h16c0.552,0 1,-0.448 1,-1v-2c0,-0.197 -0.059,-0.391 -0.168,-0.555z" />
        </G>
      </G>
    </Svg>
  );
}
