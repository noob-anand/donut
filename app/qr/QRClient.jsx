"use client";

import { useSearchParams, useRouter } from "next/navigation";

const QRClient = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const donuts = searchParams.get("donuts");
  const toUser = searchParams.get("to");

  if (!donuts || !toUser) {
    return (
      <div className="text-white text-center mt-20">
        Invalid payment session
      </div>
    );
  }

  const handleDone = () => {
    router.push(`/${toUser}`);
  };

  return (
    <div className="text-center text-white min-h-screen flex flex-col items-center justify-center">
      <img src="/qr.jpeg" className="h-[60vh] mb-6" alt="QR" />

      <div className="text-xl mb-6">
        Total: ${Number(donuts) * 10}
      </div>

      <button
        onClick={handleDone}
        className="bg-green-500 px-8 py-3 rounded-lg text-white font-semibold hover:bg-green-600"
      >
        Done
      </button>
    </div>
  );
};

export default QRClient;
