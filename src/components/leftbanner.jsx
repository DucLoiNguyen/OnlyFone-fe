// LeftBanner.jsx
export default function LeftBanner() {
  const features = [
    { icon: "🛍️", title: "Mua sắm dễ dàng", description: "Tìm kiếm và mua điện thoại yêu thích" },
    { icon: "📦", title: "Giao hàng nhanh", description: "Miễn phí đơn hàng từ 1.000.000đ" },
    { icon: "🛡️", title: "An toàn đảm bảo", description: "Thanh toán bảo mật – hoàn tiền nhanh" },
    { icon: "💬", title: "Hỗ trợ 24/7", description: "Luôn sẵn sàng khi bạn cần" },
  ];

  return (
    <div className="
      flex flex-col justify-center px-12 
      bg-gradient-to-br from-blue-600 to-blue-400 
      dark:from-blue-700 dark:to-blue-500 
      text-white w-full
    ">
      <h2 className="text-4xl font-bold mb-6">OnlyFone</h2>
      <p className="text-lg text-blue-100 dark:text-blue-200 mb-10">
        Cửa hàng điện thoại uy tín hàng đầu Việt Nam
      </p>

      <div className="space-y-6">
        {features.map((item, i) => (
          <div key={i} className="flex gap-4 items-start">
            <span className="text-3xl">{item.icon}</span>
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-blue-100 dark:text-blue-200 text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
