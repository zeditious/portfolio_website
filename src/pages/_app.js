import "@/styles/globals.css";
import { MantineProvider } from "@mantine/core";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: "dark",
          colors: {
            dark: [
              "#FFFFFF",
              "#A6A7AB",
              "#909296",
              "#5C5F66",
              "#373A40",
              "#2C2E33",
              "#25262B",
              "#1A1B1E",
              "#141517",
              "#101113",
            ],
          },
        }}
      >
        <Component {...pageProps} />;
      </MantineProvider>
    </div>
  );
}
