import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    {
      name: "Programs",
      href: "#programs",
      dropdown: [
        { name: "AurSunao", href: "#aursunao" },
        { name: "Indradhanush", href: "#indradhanush" },
        { name: "Pragya", href: "#pragya" },
      ],
    },
    { name: "Impact", href: "#impact" },
    { name: "Get Involved", href: "#get-involved" },
    { name: "News", href: "#news" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Aparigraha Logo"
              className="w-32 h-auto rounded-lg"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) =>
              item.dropdown ? (
                <DropdownMenu key={item.name}>
                  <DropdownMenuTrigger
                    className={`nav-link flex items-center space-x-1 ${
                      isScrolled ? "scrolled" : ""
                    }`}
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`h-4 w-4 ${
                        isScrolled ? "text-foreground" : "text-white"
                      }`}
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-background border border-border/30 shadow-medium">
                    {item.dropdown.map((dropdownItem) => (
                      <DropdownMenuItem
                        key={dropdownItem.name}
                        className="hover:bg-primary hover:text-white transition-colors focus:bg-primary focus:text-white"
                      >
                        <a
                          href={dropdownItem.href}
                          className="w-full block px-2 py-1"
                        >
                          {dropdownItem.name}
                        </a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={`nav-link ${isScrolled ? "scrolled" : ""}`}
                >
                  {item.name}
                </a>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button className="btn-tprimary">Volunteer</Button>
            <Button className="btn-hero">Donate Now</Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* ✅ Mobile Menu (Spacing Fixed) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/30 bg-transparent backdrop-blur-md space-y-1">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="relative">
                  <button
                    type="button"
                    className="nav-link flex items-center justify-between w-full py-3 px-3 text-purple-600 font-semibold"
                    onClick={() =>
                      setOpenDropdown((prev) =>
                        prev === item.name ? null : item.name
                      )
                    }
                  >
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-purple-600 transition-transform duration-300 ${
                        openDropdown === item.name ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openDropdown === item.name && (
                    <div className="pl-5 pr-3 pb-2 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="block py-2 px-2 text-sm text-purple-600 hover:text-purple-800 transition-colors"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          {dropdownItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="block w-full py-3 px-3 text-purple-600 font-semibold hover:text-purple-800 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            )}

            {/* Mobile CTA */}
            <div className="flex flex-col space-y-3 pt-4 mt-2 border-t border-border/30 px-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsMobileMenuOpen(false)}
                className="border-purple-600 text-purple-600 hover:bg-purple-100"
              >
                Volunteer
              </Button>
              <Button
                className="btn-hero bg-purple-600 hover:bg-purple-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Donate Now
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
``