import "./globals.css";

export const metadata = {
  title: "Menopause Expedition eBook",
  description: "A witty tour guide's handbook through menopause, relationships, and self-care without diet dogma."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
