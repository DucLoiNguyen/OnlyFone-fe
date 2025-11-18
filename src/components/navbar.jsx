import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

// Icons từ lucide-react
import { Menu } from "lucide-react";

// Component Link giả định
// const Link = ({ href, children, className }) => (
//   <a href={href} className={className}>{children}</a>
// );

// Dữ liệu cho menu điều hướng
const navItems = [
  { title: "Trang Chủ", href: "/" },
  { title: "Sản Phẩm", href: "/products" },
  { title: "Giới Thiệu", href: "/about" },
  { title: "Liên Hệ", href: "/contact" },
];

// Component Menu Mobile
const MobileMenu = ({ navItems }) => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="ghost" size="icon" aria-label="Mở menu">
        <Menu className="h-6 w-6" />
      </Button>
    </SheetTrigger>
    <SheetContent side="left">
      <Link href="/" className="text-xl font-bold text-primary">
        Tên Website
      </Link>
      <Separator className="my-4" />
      <div className="flex flex-col space-y-4">
        {navItems.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            // Định kiểu cho link trên di động
            className="text-lg font-medium hover:text-primary transition-colors block p-2"
          >
            {item.title}
          </Link>
        ))}
      </div>
    </SheetContent>
  </Sheet>
);


function Navbar() {

  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-4 md:px-6 w-full">
        
        {/* Logo / Tên Thương Hiệu */}
        <Link href="/" className="text-xl font-bold text-foreground">
          Tên Website
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link 
              key={item.title} 
              href={item.href} 
              // Định kiểu cho link trên desktop
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Trigger (Hamburger Icon) */}
        <div className="md:hidden">
          <MobileMenu navItems={navItems} />
        </div>
      </div>
    </header>)
}

export default Navbar;
