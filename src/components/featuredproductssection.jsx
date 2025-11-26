import ProductCard from "@/components/productcard";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FeaturedProductsSection() {
  const featuredProducts = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: "29,999,000₫",
      originalPrice: "32,999,000₫",
      image: "📱",
      rating: 4.8,
      reviews: 234,
      badge: "Hot",
    },
    {
      id: 2,
      name: "Samsung Galaxy S24",
      price: "24,999,000₫",
      originalPrice: "27,999,000₫",
      image: "📱",
      rating: 4.7,
      reviews: 189,
      badge: "Mới",
    },
    {
      id: 3,
      name: "Xiaomi 14 Ultra",
      price: "18,999,000₫",
      originalPrice: "21,999,000₫",
      image: "📱",
      rating: 4.6,
      reviews: 156,
      badge: "Sale",
    },
    {
      id: 4,
      name: "Google Pixel 8 Pro",
      price: "22,999,000₫",
      originalPrice: "25,999,000₫",
      image: "📱",
      rating: 4.9,
      reviews: 267,
    },
  ];

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Sản phẩm nổi bật
          </h2>

          <Button
            variant="link"
            className="text-blue-600 dark:text-blue-400 font-semibold flex items-center gap-2 p-0 h-auto focus:ring-0"
          >
            Xem tất cả
            <ChevronRight size={20} />
          </Button>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
