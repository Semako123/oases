import { Navbar, Footer } from "./components";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="pl-10 pr-8 md:pl-36 md:pr-20 md:py-10 py-4 font-primary bg-zinc-200 min-h-screen">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
