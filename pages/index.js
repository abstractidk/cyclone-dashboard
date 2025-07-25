import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-10 text-center">
        <h1 className="text-5xl font-bold mb-4">Cyclone Automations</h1>
        <p className="text-lg text-gray-600">
          A sleek, fast, and user-friendly Discord bot dashboard.
        </p>
      </main>
    </div>
  );
}
