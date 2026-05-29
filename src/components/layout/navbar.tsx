import Image from "next/image";
import { Mail, Phone } from "lucide-react";

import { NAV_LINKS } from "@/constants/navigation";
import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="border-b border-[#F6D4D7] bg-white">
      <div className="border-b border-[#FBE4E6]">
        <div className="container flex h-10 items-center justify-end gap-6 text-xs text-vbs-black/70">
          <span className="inline-flex items-center gap-1.5">
            <Mail className="h-3.5 w-3.5 text-vbs-red" />
            contact@virtualbuildingstudio.com
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Phone className="h-3.5 w-3.5 text-vbs-red" />
            +1 (409) 800-6601
          </span>
        </div>
      </div>

      <div className="container flex h-20 items-center justify-between">
        <a href="#" className="flex items-center">
          <Image
            src="/logos/logo.svg"
            alt="Virtual Building Studio"
            width={230}
            height={44}
            unoptimized
            priority
            className="h-auto w-[230px] max-w-none"
          />
        </a>

        <nav className="hidden items-center gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-vbs-black transition-colors hover:text-vbs-red"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button size="sm" className="uppercase tracking-wide">
          Inquire Now
        </Button>
      </div>
    </header>
  );
}
