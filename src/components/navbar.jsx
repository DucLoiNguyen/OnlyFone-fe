import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { Menu, ShoppingCart, Search, LogIn, LogOut, User } from "lucide-react";
import { useState, useEffect } from "react";
import { useAuth } from "@/context/authcontext";

function Navbar() {

  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="border-b bg-[#0a0a0a] sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-white">
          OnlyFone
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-white">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-4">
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/products" className="text-sm font-medium">
                    Sản phẩm
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/sale" className="text-sm font-medium">
                    Khuyến mãi
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/contact" className="text-sm font-medium">
                    Liên hệ
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Search */}
          <div className="flex w-64">
            <Input
              className="focus-visible:ring-0 focus-visible:ring-offset-0"
              placeholder="Tìm kiếm điện thoại..."
            />
            <Button type="submit" variant="outline" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Cart */}
          <Button variant="outline" size="icon">
            <ShoppingCart className="h-5 w-5" />
          </Button>

          {/* Avatar menu */}
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Avatar className="h-8 w-8 cursor-pointer">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>OF</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48">
              {isAuthenticated ? (
                <>
                  <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center gap-2">
                      <User size={16} /> Hồ sơ cá nhân
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link to="/orders" className="flex items-center gap-2">
                      <ShoppingCart size={16} /> Đơn hàng
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  <DropdownMenuItem
                    onClick={logout}
                    className="flex items-center gap-2 text-red-500"
                  >
                    <LogOut size={16} /> Đăng xuất
                  </DropdownMenuItem>
                </>
              ) : (
                <>
                  <DropdownMenuLabel>Tài khoản</DropdownMenuLabel>
                  <DropdownMenuSeparator />

                  <DropdownMenuItem asChild>
                    <Link to="/login" className="flex items-center gap-2">
                      <LogIn size={16} /> Đăng nhập
                    </Link>
                  </DropdownMenuItem>

                  <DropdownMenuItem asChild>
                    <Link to="/register" className="flex items-center gap-2">
                      <User size={16} /> Đăng ký
                    </Link>
                  </DropdownMenuItem>
                </>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger className="md:hidden text-white">
            <Menu className="h-6 w-6" />
          </SheetTrigger>

          <SheetContent side="left" className="w-64">
            <div className="flex flex-col gap-4 mt-6">
              <Link to="/products">Sản phẩm</Link>
              <Link to="/sale">Khuyến mãi</Link>
              <Link to="/contact">Liên hệ</Link>

              {/* Login / logout mobile */}
              {!isAuthenticated ? (
                <>
                  <Link to="/login">Đăng nhập</Link>
                  <Link to="/register">Đăng ký</Link>
                </>
              ) : (
                <>
                  <Link to="/profile">Hồ sơ</Link>
                  <Link to="/orders">Đơn hàng</Link>
                  <button
                    onClick={logout}
                    className="text-left text-red-500"
                  >
                    Đăng xuất
                  </button>
                </>
              )}

              <Input placeholder="Tìm kiếm..." className="mt-4" />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

export default Navbar;
