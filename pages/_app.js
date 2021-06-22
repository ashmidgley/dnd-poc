import '../styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react";

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from "react-dnd-touch-backend";
import { isMobile } from 'react-device-detect';

import "@fontsource/raleway";
import "@fontsource/open-sans";

import theme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <DndProvider backend={isMobile ? TouchBackend : HTML5Backend}>
        <Component {...pageProps} />
      </DndProvider>
    </ChakraProvider>
  );
}

export default MyApp
