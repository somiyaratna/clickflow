import React from "react";
import "./globals.css";

export const metadata = {
  title: "Admin Panel",
  description: "Admin Panel for managing users and tasks",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}