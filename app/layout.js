import "./globals.css";
export const metadata = {
  title: "ACM MPSTME",
  description: "Welcome to ACM MPSTME!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark overflow-x-hidden">{children}</body>
    </html>
  );
}
