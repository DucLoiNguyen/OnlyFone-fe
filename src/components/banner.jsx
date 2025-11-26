import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

function Banner(){
    return(
    <section className="
      bg-gradient-to-r from-blue-600 to-blue-400 text-white
      dark:from-gray-900 dark:to-gray-800 dark:text-gray-100
    ">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Left content */}
          <div>
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">
              Điện thoại cao cấp, giá tốt nhất
            </h1>
            <p className="mb-8 text-xl text-blue-100 dark:text-gray-300">
              Khám phá bộ sưu tập điện thoại mới nhất từ những thương hiệu hàng đầu thế giới
            </p>

            <Button
              size="lg"
              className="
                bg-white text-blue-600 hover:bg-gray-100
                dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600
                font-semibold px-8 py-6 text-lg
              "
            >
              Mua sắm ngay
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Right icon */}
          <div className="text-center text-7xl">📱</div>
        </div>
      </div>
    </section>
    );
}

export default Banner;