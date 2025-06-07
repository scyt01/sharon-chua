import React from "react";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "../components/ThemeToggle";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Projects", href: "#projects" },
  { name: "Hire Me", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.screenY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-2xl font-bold text-primary flex items-center"
          href="#hero"
        >
          <span className="relative z-10">
            <span className="text-glow">Sharon Chua</span>{" "}
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-15">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className={cn(
                "text-lg transition-colors duration-300",
                item.name === "Hire Me"
                  ? "text-primary text-xl transition-colors duration-700 hover:text-glow hover:scale-110"
                  : "text-foreground/80 transition-colors duration-300 hover:text-glow hover:scale-110"
              )}
            >
              {item.name}
            </a>
          ))}

          <div>
            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Nav */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl items-center">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className={cn(
                  "text-lg transition-colors duration-300",
                  item.name === "Hire Me"
                    ? "text-primary text-xl transition-colors duration-700 hover:text-glow hover:scale-110"
                    : "text-foreground/80 transition-colors duration-300 hover:text-glow hover:scale-110"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <div>
              {/* Theme Toggle */}
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
