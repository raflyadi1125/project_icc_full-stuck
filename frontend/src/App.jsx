import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import AppRouter from "./router";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
