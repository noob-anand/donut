"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";


const Username = ({ username, user }) => {
  if (!user || !user.username) return null;

  const [donuts, setDonuts] = useState("");
  const router = useRouter();


  const handleGift = async () => {
    if (!name || !donuts) {
      alert("Name and donuts are required");
      return;
    }
    const res = await fetch("/api/payment", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        to_user: user.username,
        amount: donuts,
        message,
      }),
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.error);
      return;
    }

    router.push(`/qr?donuts=${donuts}&to=${encodeURIComponent(user.username)}`);
  };

  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // 🔒 KEEP SUPPORTERS SAME
  const supporters = [
    { id: 1, name: "Alice", amount: 12, avatar: "pp2.jpeg" },
    { id: 2, name: "Bob", amount: 11, avatar: "pp3.jpeg" },
    { id: 3, name: "Carlos", amount: 11, avatar: "pp4.jpeg" },
    { id: 4, name: "Diana", amount: 10, avatar: "pp5.jpeg" },
    { id: 5, name: "Eve", amount: 9, avatar: "pp6.jpeg" },
    { id: 6, name: "Alice", amount: 9, avatar: "pp2.jpeg" },
    { id: 7, name: "Bob", amount: 8, avatar: "pp3.jpeg" },
    { id: 8, name: "Carlos", amount: 8, avatar: "pp4.jpeg" },
    { id: 9, name: "Diana", amount: 8, avatar: "pp5.jpeg" },
    { id: 10, name: "Eve", amount: 7, avatar: "pp6.jpeg" },
  ];

  const topSupporters = [...supporters]
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 10);

  const Avatar = ({ src, name }) => {
    const [errored, setErrored] = useState(false);
    const initials = (name || "")
      .split(" ")
      .map((n) => n[0])
      .join("")
      .slice(0, 2)
      .toUpperCase();

    if (errored) {
      return (
        <div className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white">
          {initials}
        </div>
      );
    }

    return (
      <img
        src={src || "pp.jpeg"}
        alt={name}
        onError={() => setErrored(true)}
        className="w-10 h-10 rounded-full object-cover"
      />
    );
  };

  return (
    <>
      <div className="text-white">
        <div className="min-h-[50px]" />

        {/* COVER + PROFILE */}
        <div className="w-full">
          <img src={user?.coverpic || "bg.jpeg"} alt="" />
          <div className="w-[150px] mx-auto -mt-16">
            <img
              className="rounded-xl"
              src={user?.profilepic || "pp.jpeg"}
              alt=""
            />
          </div>
        </div>

        <div className="text-center mt-4 text-3xl font-semibold">
          @{user.username}
        </div>

        <div className="text-center mt-4">
          <p>Creating Words for Granted podcast</p>
        </div>

        <div className="text-gray-400 flex font-medium justify-center">
          81 members
          <span className="text-[#00000000]">_____</span>
          <ul className="list-disc">
            <li>29 posts</li>
          </ul>
        </div>


        <div className="flex justify-around my-10">
          {/* SUPPORTERS */}
          <div className="w-[30vw] p-5 rounded-lg bg-[#fefefe0d]">
            <h3 className="text-white font-semibold mb-3 text-2xl">
              Supporters Leaderboard
            </h3>
            <ul className="space-y-2">
              {topSupporters.map((s, i) => (
                <li
                  key={s.id}
                  className="flex items-center justify-between bg-white/5 p-3 rounded"
                >
                  <div className="flex items-center gap-3">
                    <div className="text-gray-300 font-medium w-6 text-center">
                      {i + 1}
                    </div>
                    <Avatar src={s.avatar} name={s.name} />
                    <div>
                      <div className="text-white font-medium">{s.name}</div>
                      <div className="text-gray-400 text-sm">Supporter</div>
                    </div>
                  </div>
                  <div className="text-white font-semibold flex">
                    <img className="w-8" src="favicon.ico" alt="" />
                    {s.amount}
                  </div>
                </li>
              ))}
            </ul>
          </div>


          <div className="w-[50vw] bg-[#fefefe0d] p-5 rounded-lg max-h-95">
            <h1 className="flex font-semibold text-2xl">
              Send donuts
              <span className="text-[#00000000]">_</span>
              <img src="favicon.ico" className="w-10" alt="" />
            </h1>

            <div className="text-2xl">
              <div className="flex text-white p-5 gap-5">
                <input
                  type="text"
                  className="placeholder:text-lg bg-[#ffffff13] w-3/6 rounded-lg p-3"
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  className="bg-[#ffffff13] placeholder:text-lg p-3 w-3/6 rounded-lg"
                  placeholder="Enter Message"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>

              <div className="p-5">
                <input
                  type="text"
                  className="placeholder:text-lg bg-[#ffffff13] p-3 w-full rounded-lg"
                  placeholder="Enter Donuts (1🍩 = 10$)"
                  onChange={(e) => setDonuts(e.target.value)}
                />
              </div>

              <div className="p-5">
                <button
                  type="button"
                  onClick={handleGift}
                  className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 w-full p-3 rounded-lg"
                >
                  Gift Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
