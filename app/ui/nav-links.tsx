"use client";

import Link from "next/link";
import { clsx } from "clsx";
import { usePathname } from "next/navigation";
import Image from "next/image";

const links = [
  { name: "home", href: "/" },
  { name: "about", href: "/about" },
  { name: "projects", href: "/projects" },
];

export default function NavLinks() {
  const pathname = usePathname();

  if (pathname === "/") {
    console.log("pathname home");
  }

  return (
    <div className="flex flex-col space-y-3 font-sans">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex flex-col items-center"
          >
            <div
              className={clsx("p-1 rounded mb-1", {
                "border border-zinc-700 rounded-md": pathname === link.href,
                "border border-transparent": pathname !== link.href,
              })}
            >
              <Image
                src="/mac-folder.svg"
                alt="folder"
                width={80}
                height={80}
                // className={clsx("", {
                //   "border border-stone-700 rounded": pathname === link.href,
                //   "border-none": pathname !== link.href,
                // })}
              />
            </div>
            <p
              className={clsx("text-sm uppercase px-2", {
                "bg-zinc-700 rounded": pathname === link.href,
                "text-white": pathname !== link.href,
              })}
            >
              {link.name}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
