import {
  Open_Sans,
  JetBrains_Mono,
  IBM_Plex_Mono,
  Roboto,
} from "next/font/google";

export const open_sans = Open_Sans({ subsets: ["latin"] });

export const jetbrains_mono = JetBrains_Mono({ subsets: ["latin"] });

export const ibm_plex_mono = IBM_Plex_Mono({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
