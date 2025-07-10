import { cn } from "../lib/utils";
import { useState, useEffect } from "react";
import { Menu,X } from "lucide-react";
const Navbar = () => {
  const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const [isScrolled, setisScrolled] = useState(false);
  const [isMenuOpen, setisMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setisScrolled(window.screenY > 10);
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
      <div className="container w-[80vw] flex items-center justify-between">
        <a
          hrerf="#hero"
          className="text-xl font-bold text-primary flex items-center"
        >
          <span>
            <span className="text-glow text-foreground">
              Vishal Sahu's
            </span>
            &nbsp;&nbsp; PortFolio
          </span>
        </a>

        {/* desktop version */}

        <div className="hidded font-bold md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* mobile version */}

        <button
          onClick={() => {
            setisMenuOpen((prev) => !prev);
          }}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen?" Close Menu":"Open Menu"}
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
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => {
                  setisMenuOpen(false);
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
