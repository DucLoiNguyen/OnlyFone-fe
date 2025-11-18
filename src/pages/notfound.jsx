import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>404 - Không Tìm Thấy Trang</h1>
      <p>Trang bạn tìm kiếm không tồn tại.</p>
      <Link to="/">Quay về trang chủ</Link>
    </div>
  );
}

export default NotFound;
