import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      Navbar
      {children}
    </main>
  );
};

export default RootLayout;