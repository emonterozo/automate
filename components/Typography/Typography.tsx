import React from "react";
import { Text, TextStyle } from "react-native";
import { theme } from "@/theme";

type TypographyVariant = keyof typeof theme.typography;
type TypographySize<V extends TypographyVariant> = keyof (typeof theme.typography)[V];

interface TypographyProps<V extends TypographyVariant = TypographyVariant> {
  variant: V;
  size: TypographySize<V>;
  children: React.ReactNode;
  style?: TextStyle;
}

export default function Typography<V extends TypographyVariant>({
  variant,
  size,
  children,
  style,
}: TypographyProps<V>) {
  const textStyle = theme.typography[variant][size] as TextStyle;

  return <Text style={[textStyle, style]}>{children}</Text>;
}
