// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import "@mantine/core/styles.css";

import { ColorSchemeScript, createTheme, MantineProvider } from "@mantine/core";

const theme = createTheme({
  fontFamily: 'Poppins, sans-serif',
  fontFamilyMonospace: 'Poppins, ',
  headings: { fontFamily: 'Poppins ' },
});

export const metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
