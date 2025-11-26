import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

function Footer() {
  return (
    <footer className="mt-16">
      <div className="container mx-auto py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + mô tả */}
        <div>
          <h2 className="text-xl font-bold text-white">OnlyFone</h2>
          <p className="mt-4 text-sm text-gray-400">
            Cửa hàng điện thoại uy tín với các dòng iPhone, Samsung, Xiaomi,
            Vivo… Giá tốt – Bảo hành dài hạn.
          </p>

          {/* Icons mạng xã hội */}
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-white">
              <Twitter size={20} />
            </a>
          </div>
        </div>

        {/* Danh mục sản phẩm */}
        <div>
          <h3 className="font-semibold dark:text-white text-lg">Danh mục</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            <Link to="/products" className="hover:text-white">
              Điện thoại
            </Link>
            <Link to="/accessories" className="hover:text-white">
              Phụ kiện
            </Link>
            <Link to="/sale" className="hover:text-white">
              Khuyến mãi
            </Link>
            <Link to="/contact" className="hover:text-white">
              Liên hệ
            </Link>
          </ul>
        </div>

        {/* Hỗ trợ khách hàng */}
        <div>
          <h3 className="font-semibold text-white text-lg">Hỗ trợ</h3>
          <ul className="mt-4 flex flex-col gap-2 text-sm">
            <Link to="/policy" className="hover:text-white">
              Chính sách bảo hành
            </Link>
            <Link to="/shipping" className="hover:text-white">
              Chính sách giao hàng
            </Link>
            <Link to="/return" className="hover:text-white">
              Đổi trả - Hoàn tiền
            </Link>
            <Link to="/faq" className="hover:text-white">
              Câu hỏi thường gặp
            </Link>
          </ul>
        </div>

        {/* Thông tin liên hệ */}
        <div>
          <h3 className="font-semibold text-white text-lg">Liên hệ</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={18} /> <span>0901 234 567</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} /> <span>support@OnlyFone.vn</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={18} />
              <span>123 Nguyễn Trãi, Q1, TP.HCM</span>
            </div>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-700 py-4">
        <p className="text-center text-sm text-gray-500">
          © 2025 PhoneStore. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
