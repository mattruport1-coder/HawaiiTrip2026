export const metadata = {
  title: "Hawaii Trip HQ",
  description: "Matt's Hawaii trip itinerary and logistics site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
