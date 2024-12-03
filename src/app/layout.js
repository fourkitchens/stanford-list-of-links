import localFont from "next/font/local";
import "./globals.css";
import HelpfulStanfordResources from "./components/HelpfulStanfordResources";
import { Source_Sans_3 } from "next/font/google";

const sourceSansPro = Source_Sans_3({
  weight: ["300", "400", "500", "600", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" media="all" href="https://humsci.stanford.edu/sites/default/files/css/css_AU1QDcVvHFF7kYjiODaCeDU0-8SOx2WJyyCtzgTsXp4.css?delta=0&amp;language=en&amp;theme=stanford_hs&amp;include=eJxVyksKgDAMBcALFT2SvNpoC-mHvHTh7XUj4nYYXnSpawQl0NGObmnLXE_tEfojVphXaZN_7nuBMsMkDBhOw3g42RzQ5ZNltjGjFmZJgcVlg4r5Gz-5AdIfOj0"/>
        <link rel="stylesheet" media="all" href="https://humsci.stanford.edu/sites/default/files/css/css_99K6l_sQlKNH3QcmK2YThzYp7-EcaqhnvEdrLD9hc1A.css?delta=1&amp;language=en&amp;theme=stanford_hs&amp;include=eJxVyksKgDAMBcALFT2SvNpoC-mHvHTh7XUj4nYYXnSpawQl0NGObmnLXE_tEfojVphXaZN_7nuBMsMkDBhOw3g42RzQ5ZNltjGjFmZJgcVlg4r5Gz-5AdIfOj0"/>
        <link rel="stylesheet" media="all" href="https://fonts.googleapis.com/css?family=Crimson+Text:400,400i,600,600i|Source+Sans+Pro:300,300i,400,400i,700,700i,900,900i&display=optional"/>
        <link rel="stylesheet" media="all" href="https://humsci.stanford.edu/sites/default/files/css/css_cXcwUSDS2QzSupf2s2auuugrrMVNZ8w8o8IDwQr3Ki8.css?delta=3&amp;language=en&amp;theme=stanford_hs&amp;include=eJxVyksKgDAMBcALFT2SvNpoC-mHvHTh7XUj4nYYXnSpawQl0NGObmnLXE_tEfojVphXaZN_7nuBMsMkDBhOw3g42RzQ5ZNltjGjFmZJgcVlg4r5Gz-5AdIfOj0"/>
      </head>
      <body
        className={`${sourceSansPro.variable} font-sans antialiased`}
      >
        <HelpfulStanfordResources>
          {children}
        </HelpfulStanfordResources>
      </body>
    </html>
  );
}