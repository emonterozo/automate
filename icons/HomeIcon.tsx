import React from "react";
import Svg, { G, Path } from "react-native-svg";
import { IconProps } from "@/types";

export default function HomeIcon({ fill = "#d4d6dd", width = 20, height = 20 }: IconProps) {
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
          <Path d="M36,10c-1.139,0 -2.27708,0.38661 -3.20508,1.16211l-21.27734,17.7793c-1.465,1.224 -1.96564,3.32881 -1.05664,5.00781c0.75877,1.40048 2.14295,2.11605 3.53906,2.11719v13.93359c0,4.418 3.582,8 8,8h12c2.209,0 4,-1.791 4,-4v-9c0,-0.552 0.448,-1 1,-1h5c0.552,0 1,0.448 1,1v9c0,2.209 1.791,4 4,4h1c4.418,0 8,-3.582 8,-8v-13.92187c1.17234,-0.00057 2.33439,-0.51145 3.12695,-1.50391c1.377,-1.724 0.98597,-4.27055 -0.70703,-5.68555l-21.21484,-17.72656c-0.928,-0.7755 -2.06608,-1.16211 -3.20508,-1.16211zM25.5,34h4c0.828,0 1.5,0.672 1.5,1.5v6c0,0.828 -0.672,1.5 -1.5,1.5h-4c-0.828,0 -1.5,-0.672 -1.5,-1.5v-6c0,-0.828 0.672,-1.5 1.5,-1.5z" />
        </G>
      </G>
    </Svg>
  );
}
