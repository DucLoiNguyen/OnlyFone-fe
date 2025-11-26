import { Outlet } from "react-router-dom";

export default function AuthLayout(){
    return(
    <div>
      <main className="min-h-screen bg-gray-50">
        <Outlet /> {/* Nơi render các page con */}
      </main>
    </div>
  );
}