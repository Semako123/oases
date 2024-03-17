import { Navbar, Footer } from "./components";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="pl-36 pr-20 py-10 font-primary bg-zinc-200 min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
