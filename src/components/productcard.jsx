import { ShoppingCart, Heart, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProductCard({ product }) {
  return (
    <Card
      className="
        group overflow-hidden rounded-xl transition-all duration-300
        cursor-pointer

        /* Glass effect main card */
        bg-white/30 dark:bg-white/10
        border border-white/40 dark:border-white/20
        backdrop-blur-xl shadow-sm

        /* Hover */
        hover:bg-white/40 dark:hover:bg-white/20
        hover:shadow-md hover:-translate-y-1
      "
    >
      {/* Image Section */}
      <div
        className="
          relative p-4 h-64 flex items-center justify-center overflow-hidden
          bg-white/20 dark:bg-white/5
          backdrop-blur-xl
          border-b border-white/30 dark:border-white/10
        "
      >
        <div
          className="
            text-7xl transition-transform duration-500
            group-hover:scale-110
          "
        >
          {product.image}
        </div>

        {/* Badge */}
        {product.badge && (
          <span
            className="
              absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold
              bg-white/30 text-yellow-600 dark:text-yellow-400
              border border-white/40 dark:border-white/20
              backdrop-blur-xl shadow-sm
            "
          >
            {product.badge}
          </span>
        )}

        {/* Add to cart button */}
        <Button
          className="
            absolute bottom-3 left-3 right-3
            opacity-0 translate-y-2
            group-hover:opacity-100 group-hover:translate-y-0
            transition-all duration-300
            flex items-center justify-center gap-2 font-semibold

            bg-white/40 dark:bg-white/10
            backdrop-blur-xl
            border border-white/40 dark:border-white/20
          "
        >
          <ShoppingCart size={18} />
          Thêm vào giỏ
        </Button>
      </div>

      {/* Content */}
      <CardContent className="p-4">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300 dark:text-neutral-600"
                }
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 dark:text-gray-400">
            ({product.reviews})
          </span>
        </div>

        {/* Prices */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xl font-bold text-blue-600 dark:text-blue-400">
            {product.price}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
              {product.originalPrice}
            </span>
          )}
        </div>

        {/* Favorite button */}
        {/* <Button
          variant="outline"
          className="
            w-full flex items-center justify-center gap-2

            bg-white/20 dark:bg-white/5
            backdrop-blur-xl
            border border-white/40 dark:border-white/20
            hover:bg-white/30 dark:hover:bg-white/10
          "
        >
          <Heart size={18} className="text-gray-700 dark:text-gray-300" />
          Yêu thích
        </Button> */}
      </CardContent>
    </Card>
  );
}
