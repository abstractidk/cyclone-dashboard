import Navbar from "../components/Navbar";

export default function Purchase() {
  return (
    <div>
      <Navbar />
      <main className="p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Purchase Premium</h1>
        <a
          href="https://buy.stripe.com/test_xxx"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded mt-4 hover:bg-blue-700 transition"
        >
          Buy Now
        </a>
      </main>
    </div>
  );
}
