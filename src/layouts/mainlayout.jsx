import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function MainLayout() {
  return (
    <div>
      <Navbar />
      <main style={{ minHeight: "81vh" }}>
        <Outlet /> {/* Nơi render các page con */}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;
