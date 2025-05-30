export const font = {
  regular: "Inter-Regular",
  semiBold: "Inter-SemiBold",
  bold: "Inter-Bold",
  extraBold: "Inter-ExtraBold",
};

export const theme = {
  color: {
    highlight: {
      darkest: "#F9A130",
      dar: "#E28A16",
      medium: "#FFC578",
      lighter: "#FFC578",
      lightest: "#FFE7C8",
    },
    neutral: {
      light: {
        darkest: "#C5C6CC",
        dark: "#D4D6DD",
        medium: "#E8E9F1",
        lighter: "#F8F9FE",
        lightest: "#FFFFFF",
      },
      dark: {
        darkest: "#1E1E1E",
        dark: "#2F3036",
        medium: "#494A50",
        lighter: "#71727A",
        lightest: "#8F9098",
      },
    },
    support: {
      success: {
        dark: "#298267",
        medium: "#3AC0A0",
        light: "#E7F4E8",
      },
      warning: {
        dark: "#E86339",
        medium: "#FFB37C",
        light: "#FFF4E4",
      },
      error: {
        dark: "#ED3241",
        medium: "#FF616D",
        light: "#FFE2E5",
      },
    },
  },
  typography: {
    heading: {
      h1: {
        fontFamily: font.extraBold,
        fontSize: 24,
      },
      h2: {
        fontFamily: font.extraBold,
        fontSize: 18,
      },
      h3: {
        fontFamily: font.extraBold,
        fontSize: 16,
      },
      h4: {
        fontFamily: font.bold,
        fontSize: 14,
      },
      h5: {
        fontFamily: font.bold,
        fontSize: 12,
      },
    },
    body: {
      xs: {
        fontFamily: font.regular,
        fontSize: 10,
      },
      sm: {
        fontFamily: font.regular,
        fontSize: 12,
      },
      md: {
        fontFamily: font.regular,
        fontSize: 14,
      },
      lg: {
        fontFamily: font.regular,
        fontSize: 16,
      },
      xl: {
        fontFamily: font.regular,
        fontSize: 18,
      },
    },
    action: {
      sm: {
        fontFamily: font.bold,
        fontSize: 10,
      },
      md: {
        fontFamily: font.bold,
        fontSize: 12,
      },
      lg: {
        fontFamily: font.bold,
        fontSize: 14,
      },
    },
    caption: {
      md: {
        fontFamily: font.semiBold,
        fontSize: 10,
      },
    },
  },
};
