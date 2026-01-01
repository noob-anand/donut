import { Suspense } from "react";
import QRClient from "./QRClient";

export default function QRPage() {
  return (
    <Suspense fallback={<Loading />}>
      <QRClient />
    </Suspense>
  );
}

function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center text-white">
      Loading QR...
    </div>
  );
}
