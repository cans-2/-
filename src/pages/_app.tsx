import Layout from "@/components/templates/layout/Layout";
import "@/styles/globals.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import type { AppProps } from "next/app";

const theme = createTheme();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
