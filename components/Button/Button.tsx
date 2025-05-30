import { Pressable, PressableProps, StyleSheet, ViewStyle } from "react-native";
import Typography from "../Typography/Typography";
import { theme } from "@/theme";

interface ButtonProps extends PressableProps {
  variant?: "filled" | "outline" | "text";
  label: string;
}

export default function Button({ variant = "filled", label, ...props }: ButtonProps) {
  const getContainerStyle = (pressed: boolean): ViewStyle => {
    if (variant === "filled") {
      return pressed
        ? {
            borderWidth: 1.5,
            borderColor: theme.color.highlight.darkest,
            backgroundColor: "transparent",
          }
        : {
            backgroundColor: theme.color.highlight.darkest,
          };
    }

    if (variant === "outline") {
      return pressed
        ? {
            backgroundColor: theme.color.highlight.darkest,
          }
        : {
            borderWidth: 1.5,
            borderColor: theme.color.highlight.darkest,
            backgroundColor: "transparent",
          };
    }

    // variant === "text"
    return pressed
      ? {
          borderWidth: 1.5,
          borderColor: theme.color.highlight.darkest,
          backgroundColor: "transparent",
        }
      : {
          backgroundColor: "transparent",
        };
  };

  const getTextColor = (pressed: boolean): string => {
    const isPressedAsOutline = (variant === "filled" && pressed) || (variant === "text" && pressed);
    const isPressedAsFilled = variant === "outline" && pressed;

    if (isPressedAsOutline) {
      return theme.color.highlight.darkest;
    }

    if (isPressedAsFilled || variant === "filled") {
      return theme.color.neutral.light.lightest;
    }

    return theme.color.highlight.darkest;
  };

  return (
    <Pressable {...props} style={({ pressed }) => [styles.baseContainer, getContainerStyle(pressed)] as ViewStyle[]}>
      {({ pressed }) => (
        <Typography variant="action" size="md" style={{ color: getTextColor(pressed) }}>
          {label}
        </Typography>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  baseContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
});
