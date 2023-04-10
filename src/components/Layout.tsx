import Link from "next/link";
import React from "react";

const Layout = ({ children }: any) => {
  const navigation = [
    { name: "Inicio", href: "/" },
    { name: "SSR", href: "/ssr" },
    { name: "SSG", href: "/ssg" },
    { name: "CSR", href: "/csr" },
    { name: "ISR", href: "/isr" },
  ];

  return (
    <main className="container mx-auto mt-5 flex flex-col min-h-screen ">
      <nav className="flex items-center justify-between py-5">
        <div className="flex gap-x-10 mx-auto">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      <div
      //   className="flex items-center justify-between "
      >
        {children}
      </div>
    </main>
  );
};

export default Layout;
