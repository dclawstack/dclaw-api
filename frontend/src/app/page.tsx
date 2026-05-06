import Link from "next/link";
import { Globe } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <Globe className="w-16 h-16 text-[#0D9488] mb-6" />
      <h1 className="text-4xl font-bold text-[#0D9488] mb-4">DClaw API</h1>
      <p className="text-lg text-gray-600 mb-8">API design, testing & documentation</p>
      <Link
        href="/dashboard"
        className="px-6 py-3 bg-[#0D9488] text-white rounded-lg hover:bg-[#0F766E] transition"
      >
        Go to Dashboard
      </Link>
    </main>
  );
}
