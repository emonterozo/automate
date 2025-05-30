import { theme } from "@/theme";
import { EyeIcon, EyeBlindIcon } from "@/icons";
import React, { useState } from "react";
import { Pressable, TextInput, TextInputProps, View, StyleSheet } from "react-native";
import Typography from "../Typography/Typography";

interface TextFieldProps extends TextInputProps {
  label: string;
}

export function TextField({ label, secureTextEntry, ...props }: Readonly<TextFieldProps>) {
  const [secure, setSecure] = useState(secureTextEntry ?? false);
  const [focused, setFocused] = useState(false);

  const toggleSecure = () => setSecure((prev) => !prev);

  return (
    <View style={styles.container}>
      <Typography variant="heading" size="h5">
        {label}
      </Typography>
      <View
        style={[
          styles.inputContainer,
          { borderColor: focused ? theme.color.highlight.darkest : theme.color.neutral.light.darkest },
        ]}
      >
        <TextInput
          style={styles.input}
          secureTextEntry={secure}
          cursorColor={theme.color.highlight.darkest}
          placeholderTextColor={theme.color.neutral.dark.lightest}
          {...props}
          onFocus={(e) => {
            setFocused(true);
            props?.onFocus && props.onFocus(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            props?.onBlur && props.onBlur(e);
          }}
        />
        {secureTextEntry && (
          <Pressable onPress={toggleSecure} style={secureTextEntry ? styles.show : styles.hide}>
            {secure ? (
              <EyeBlindIcon fill={theme.color.neutral.dark.lightest} />
            ) : (
              <EyeIcon fill={theme.color.neutral.dark.lightest} />
            )}
          </Pressable>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  input: {
    flex: 1,
    color: theme.color.neutral.dark.darkest,
    paddingRight: 12,
  },
  hide: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
});
