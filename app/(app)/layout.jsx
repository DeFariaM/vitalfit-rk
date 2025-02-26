import Header from "@/components/Header";
import React from "react";

export default function AppLayout({ children }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="container mx-auto flex-grow">{children}</div>
      <footer>footer</footer>
    </div>
  );
}
