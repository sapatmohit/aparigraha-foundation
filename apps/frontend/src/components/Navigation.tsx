import DonationModal from "@/components/DonationModal";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Heart, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showDonationModal, setShowDonationModal] = useState(false);
  const [showRecurringModal, setShowRecurringModal] = useState(false);

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
        { name: "AurSunao", href: "/program/aursunao" },
        { name: "Meal To Heal", href: "/program/mealtoheal" },
        { name: "Go With The Flow", href: "/program/gowiththeflow" },
        { name: "Root For O2", href: "/program/rootforo2" },
        { name: "Story of FrontLine Warriors", href: "/program/storyoffrontline" },
        { name: "Indradhanush", href: "/program/indradhanush" },
        { name: "Pragya", href: "/program/pragya" },
      ],
    },
    { name: "Get Involved", href: "#get-involved" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-soft border-b border-border/50"
        : "bg-transparent"
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20 lg:h-24">
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
                  <DropdownMenuTrigger className={`nav-link flex items-center space-x-1 ${isScrolled ? 'scrolled' : ''}`}>
                    <span>{item.name}</span>
                    <ChevronDown className={`h-4 w-4 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-background border border-border/30 shadow-medium">
                    {item.dropdown.map((dropdownItem) => (
                      <DropdownMenuItem
                        key={dropdownItem.name}
                        className="hover:bg-primary hover:text-white transition-colors focus:bg-primary focus:text-white"
                      >
                        <Link
                          to={dropdownItem.href}
                          className="w-full block px-2 py-1"
                        >
                          {dropdownItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className={`nav-link ${isScrolled ? 'scrolled' : ''}`}
                >
                  {item.name}
                </a>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/volunteer">
              <Button className="btn-tprimary">
                Volunteer
              </Button>
            </Link>
            <div className="flex space-x-2">
              <Button className="btn-hero" onClick={() => setShowDonationModal(true)}>
                <Heart className="mr-2 h-4 w-4" />
                Donate
              </Button>
            </div>
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/30 bg-background/95 backdrop-blur-md">
            {navItems.map((item) =>
              item.dropdown ? (
                <div key={item.name} className="relative">
                  <button
                    type="button"
                    className="nav-link flex items-center space-x-1 w-full py-2"
                    onClick={() =>
                      setOpenDropdown((prev) =>
                        prev === item.name ? null : item.name
                      )
                    }
                  >
                    <span>{item.name}</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  {openDropdown === item.name && (
                    <div className="pl-4">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block py-1 text-sm text-primary hover:bg-primary hover:text-white transition-colors"
                          onClick={() => {
                            setIsMobileMenuOpen(false);
                            setOpenDropdown(null);
                          }}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="nav-link py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            )}

            {/* Mobile CTA */}
            <div className="flex flex-col space-y-2 pt-4 border-t border-border/30">
              <Link to="/volunteer" onClick={() => setIsMobileMenuOpen(false)}>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  Volunteer
                </Button>
              </Link>
              <div className="flex space-x-2">
                <Button
                  className="btn-hero flex-1"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setShowDonationModal(true);
                  }}
                >
                  <Heart className="mr-2 h-4 w-4" />
                  Donate
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setShowRecurringModal(true);
                  }}
                >
                  AutoPay
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      <DonationModal
        open={showDonationModal}
        onClose={() => setShowDonationModal(false)}
        initialAmount={100}
        isRecurring={false}
      />

      <DonationModal
        open={showRecurringModal}
        onClose={() => setShowRecurringModal(false)}
        initialAmount={50}
        isRecurring={true}
      />
    </nav>
  );
};

export default Navigation;