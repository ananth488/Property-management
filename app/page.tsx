import Header from "@/Component/Header";
import Footer from "@/Component/Footer";
import Dashboard from "@/Component/Dashboard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
      <Header />
      <main className="flex-grow">
        <Dashboard />
      </main>
      <Footer />
    </div>
  );
}

