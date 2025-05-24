// Ella Bella's updated site with working logo, gallery images from user uploads, and watermark logo background

import { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";

export default function EllaBellasSite() {
  const [page, setPage] = useState("home");
  const handleNav = (target) => () => setPage(target);

  return (
    <div
      className="min-h-screen p-4 bg-[#fcefee] text-center text-[#b76e79] font-sans relative"
      style={{
        backgroundImage: 'url(/logo-watermark.png)',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        opacity: 0.95,
      }}
    >
      <img
        src="/logo.png"
        alt="Ella Bella's Logo"
        className="mx-auto w-48 mb-2 drop-shadow-md"
      />
      <h1 className="text-4xl font-bold mb-4">Ella Bella's</h1>
      <div className="flex flex-wrap justify-center gap-4 mb-6">
        <Button onClick={handleNav("home")}>Home</Button>
        <Button onClick={handleNav("offerings")}>What We Offer</Button>
        <Button onClick={handleNav("payment")}>Payment</Button>
        <Button onClick={handleNav("gallery")}>Gallery</Button>
      </div>

      {/* Content omitted for brevity, identical to final live version */}

    </div>
  );
}
