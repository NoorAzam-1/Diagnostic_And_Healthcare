// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { ChevronRight, CalendarDays, Menu, X } from "lucide-react";
// import Image from "next/image";

// // const navLinks = [
// //   { name: "Features", href: "#features" },
// //   { name: "Workflow", href: "#workflow" },
// //   { name: "Security", href: "#security" },
// //   { name: "Platform", href: "#platform" },
// //   { name: "Pricing", href: "#pricing" },
// // ];

// export const Header = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   return (
//     <header className="fixed inset-x-0 top-0 z-50 mx-auto w-full border-b border-border bg-white/90 backdrop-blur-xl">
//       <div className="container-custom">
//         <div className="flex h-20 items-center justify-between">
//           <Link href="/" className="flex shrink-0 items-center gap-3">
//             <Image
//               src="/brandLogo.jpeg"
//               alt="HARAI ONE"
//               width={180}
//               height={55}
//               priority
//               className="h-18 w-auto object-contain"
//             />
//             <div className="hidden sm:block leading-tight">
//               <span className="block text-[11px] font-semibold uppercase tracking-[0.32em] text-primary">
//                 HARAI
//               </span>
//               <span className="block text-lg font-bold text-heading">
//                 Innovations Pvt. Ltd.
//               </span>
//             </div>
//           </Link>

//           <nav className="hidden items-center lg:flex lg:gap-4 xl:gap-8">
//             {navLinks.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-sm font-medium text-body transition-colors hover:text-primary"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           <div className="hidden items-center gap-3 lg:flex">
//             <Link
//               href="/demo"
//               className="flex items-center gap-2 rounded-2xl border border-border bg-white px-4 py-2.5 text-sm font-medium text-heading shadow-sm transition-all hover:border-border-hover hover:bg-surface-hover"
//             >
//               <CalendarDays size={16} />
//               Book Demo
//             </Link>

//             <Link
//               href="#login-anchor"
//               className="flex items-center gap-2 rounded-2xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-red transition-all duration-300 hover:-translate-y-0.5"
//             >
//               Sign In
//               <ChevronRight size={16} />
//             </Link>
//           </div>

//           <button
//             onClick={() => setMobileOpen((value) => !value)}
//             className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white lg:hidden"
//           >
//             {mobileOpen ? <X size={20} /> : <Menu size={20} />}
//           </button>
//         </div>
//       </div>

//       {mobileOpen && (
//         <div className="border-t border-border bg-white xl:hidden">
//           <div className="container-custom py-6">
//             <div className="flex flex-col gap-5">
//               {navLinks.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   onClick={() => setMobileOpen(false)}
//                   className="text-sm font-medium text-body"
//                 >
//                   {item.name}
//                 </Link>
//               ))}

//               <div className="mt-4 flex flex-col gap-3">
//                 <Link
//                   href="/demo"
//                   className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-white px-4 py-3 font-medium text-heading"
//                 >
//                   <CalendarDays size={16} />
//                   Book Demo
//                 </Link>

//                 <Link
//                   href="#login-anchor"
//                   className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3 font-semibold text-white"
//                 >
//                   Sign In
//                   <ChevronRight size={16} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };



"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, ChevronDown, CalendarDays, Menu, X, LayoutGrid, Users, FlaskConical, Database, Building2, Phone, Calendar } from "lucide-react";
import Image from "next/image";


// const navLinks = [
//   { name: "Features", href: "#features" },
//   { name: "Workflow", href: "#workflow" },
//   { name: "Security", href: "#security" },
//   { name: "Platform", href: "#platform" },
//   { name: "Pricing", href: "#pricing" },
// ];

const navLinks = [
  {
    name: "Product",
    type: "dropdown",
    icon: LayoutGrid,
    links: [
      { name: "Product Overview", href: "#features", desc: "Complete feature suite", icon: LayoutGrid },
      { name: "Role Based Access", href: "#roles", desc: "Admin, Doctor, Lab Tech", icon: Users },
      { name: "Lab Configuration", href: "#lab-configuration", desc: "Dynamic test panels", icon: FlaskConical },
      { name: "Storage Architecture", href: "#storage", desc: "Tenant isolation & DB", icon: Database },
    ],
  },
  { name: "Platform", href: "#platform", type: "link" },
  { name: "Security", href: "#security", type: "link" },
  { name: "Pricing", href: "#pricing", type: "link" },
  {
    name: "Company",
    type: "dropdown",
    icon: Building2,
    links: [
      { name: "About Us", href: "/about", desc: "Our mission & story", icon: Building2 },
      { name: "Contact", href: "/contact", desc: "Get in touch", icon: Phone },
      { name: "Book a Demo", href: "/book-demo", desc: "See it in action", icon: Calendar },
    ],
  },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto w-full border-b border-border bg-surface/80 backdrop-blur-xl">
      <div className="container-custom">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex shrink-0 items-center gap-1">
            <Image
              src="/brandLogo.jpeg"
              alt="HARAI ONE"
              width={180}
              height={55}
              priority
              className="h-18 w-auto object-contain"
            />
            <div className="hidden sm:block leading-tight">
              <span className="block text-[11px] font-extrabold uppercase tracking-[0.32em] text-primary">
                HARAI
              </span>
              <span className="block text-lg font-semibold text-heading">
                Innovations Pvt. Ltd.
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((item) => {
              if (item.type === "dropdown") {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="group flex items-center gap-1.5 rounded-xl px-4 py-2.5 text-sm font-medium text-body transition-colors hover:bg-emerald-50 hover:text-emerald-700 cursor-pointer">
                      {item.name}
                      <ChevronDown className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180" />
                    </button>

                    <div
                      className={`absolute left-1/2 top-full pt-2 -translate-x-1/2 transition-all duration-200 ease-out ${
                        activeDropdown === item.name
                          ? "pointer-events-auto translate-y-0 opacity-100 visible"
                          : "pointer-events-none -translate-y-2 opacity-0 invisible"
                      }`}
                    >
                      <div className="w-72 rounded-2xl border border-border bg-surface p-2 shadow-lg ring-1 ring-black/5">
                        {item.links.map((link) => {
                          const LinkIcon = link.icon;
                          return (
                            <Link
                              key={link.name}
                              href={link.href}
                              className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-emerald-50"
                            >
                              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-100">
                                <LinkIcon className="h-4 w-4" />
                              </div>
                              <div>
                                <p className="text-sm font-semibold text-heading">
                                  {link.name}
                                </p>
                                <p className="mt-0.5 text-xs leading-relaxed text-muted">
                                  {link.desc}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="rounded-xl px-4 py-2.5 text-sm font-medium text-body transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              href="/book-demo"
              className="flex items-center gap-2 rounded-2xl border border-border bg-surface px-4 py-2.5 text-sm font-medium text-heading shadow-sm transition-all duration-300 hover:border-emerald-200 hover:bg-surface-hover hover:shadow-md cursor-pointer"
            >
              <CalendarDays size={16} className="text-primary" />
              Book Demo
            </Link>

            <Link
              href="#login-anchor"
              className="group relative flex items-center gap-2 rounded-2xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-red transition-all duration-300 hover:-translate-y-0.5 overflow-hidden cursor-pointer"
            >
              <span className="relative z-10">Sign In</span>
              <ChevronRight size={16} className="relative z-10 transition-transform group-hover:translate-x-0.5" />
              <span className="btn-shimmer-line" />
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen((value) => !value)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-heading transition-colors hover:bg-surface-hover lg:hidden cursor-pointer"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-surface xl:hidden max-h-[85vh] overflow-y-auto">
          <div className="container-custom py-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((item) => {
                if (item.type === "dropdown") {
                  const isMobileOpen = mobileDropdown === item.name;
                  return (
                    <div key={item.name} className="flex flex-col">
                      <button
                        onClick={() => setMobileDropdown(isMobileOpen ? null : item.name)}
                        className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-medium text-body transition-colors hover:bg-emerald-50 hover:text-emerald-700 cursor-pointer"
                      >
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isMobileOpen ? "rotate-180" : ""}`} />
                      </button>
                      
                      <div className={`overflow-hidden transition-all duration-300 ease-out ${isMobileOpen ? "max-h-96 opacity-100 pb-2" : "max-h-0 opacity-0"}`}>
                        <div className="ml-4 flex flex-col gap-1 border-l-2 border-emerald-100 pl-4">
                          {item.links.map((link) => (
                            <Link
                              key={link.name}
                              href={link.href}
                              onClick={() => {
                                setMobileOpen(false);
                                setMobileDropdown(null);
                              }}
                              className="rounded-lg px-3 py-2.5 text-sm text-body transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                            >
                              {link.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-xl px-3 py-3 text-sm font-medium text-body transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                  >
                    {item.name}
                  </Link>
                );
              })}

              <div className="mt-6 flex flex-col gap-3 border-t border-border pt-6">
                <Link
                  href="/book-demo"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-surface px-4 py-3.5 text-sm font-medium text-heading transition-colors hover:bg-surface-hover"
                >
                  <CalendarDays size={16} className="text-primary" />
                  Book Demo
                </Link>

                <Link
                  href="#login-anchor"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-3.5 text-sm font-semibold text-white"
                >
                  Sign In
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
