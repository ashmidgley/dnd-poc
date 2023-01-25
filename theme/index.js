import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const overrides = {
    colors: {
      brand: {
        50: "#729EA1",
        100: "#729EA1",
        200: "#729EA1",
        300: "#729EA1",
        400: "#729EA1",
        500: "#729EA1",
        600: "#729EA1",
        700: "#729EA1",
        800: "#729EA1",
        900: "#729EA1"
      },
    },
    fonts: {
      heading: "Open Sans",
      body: "Raleway"
    },
};

export default extendTheme(overrides, withDefaultColorScheme({ colorScheme: "brand" }));  