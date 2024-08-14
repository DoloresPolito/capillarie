import { Inter, Montserrat, Plus_Jakarta_Sans } from "next/font/google";
import Head from "next/head";
import "./[locale]/globals.css";

const inter = Inter({ subsets: ["latin"] });

const montserrat = Montserrat({
  subsets: ["latin"],
  weights: ["100", "200", "300", "400", "500", "700"],
});
const plus = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weights: ["100", "200", "300", "400", "500", "700"],
});

export const metadata = {
  title: "Capillarie Clinic Dublin",
  description: "Recover your hair",
  icons:{
    icon:['/favicon.ico?v=4'],
    apple:['/apple-touch-icon.png?v=4'],
    shortcut:['/apple-touch-icon.png']
  },
  manifest:'/site.webmanifest'
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

     
        <meta
          name="keywords"
          content="Capillarie, Clinic, Dublin, Hair implant, Implant, Hair, Recove, Hair surgery, Clinica, Medicine, Medicina capilar, Capilar"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#2d89ef" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <body
        className={`${inter.className} ${montserrat.className} ${plus.className}`}
      >
        {children}

        {/* <button className="buttoncontact">Contact Us</button> */}
      </body>
    </html>
  );
}





