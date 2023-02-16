import "../styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { NotificationsProvider } from "@mantine/notifications";
import { motion } from "framer-motion";

export default function App({ Component, pageProps }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: "dark",
        fontFamily: "Helvetica, sans-serif",
        headings: { fontFamily: "Helvetica, sans-serif" },
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
      <NotificationsProvider>
        <motion.div
          initial="pageInitial"
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </NotificationsProvider>
    </MantineProvider>
  );
}
