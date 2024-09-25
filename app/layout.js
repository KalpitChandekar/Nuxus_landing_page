import "./globals.css";

export const metadata = {
  title: "Nexus Landing Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="md:overflow-y-hidden">{children}</body>
    </html>
  );
}
