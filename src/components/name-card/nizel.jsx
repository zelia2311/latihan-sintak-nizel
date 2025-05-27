import { Instagram } from "lucide-react";
import React from "react";

function Namecard() {
  return (
    <div className="border border-gray-300 p-4 rounded-lg max-w-sm">
      <div className=" flex flex-col rounded-lg max-w-sm gap-4">
        <img
          src="./nzl.jpg"
          alt="logo"
          className="w-18 rounded-full border border-gray-300 hover:animate-spin
        "
        />
        <div>
          <h1 className="font-bold text-lg">Nizelia Khairunisa</h1>
          <span className="text-shadow-amber-950 text-sm">
            Mahasiswa Politeknik Negeri Sriwijaya
          </span>
        </div>

        <p className="text-gray-500">
          "Halo salam kenal, aku Nizelia Khairunisa saya adalah salah satu peserta pelatihan dari SINTAK 2025.Follow instagram aku yaaa!"
        </p>

        <a
          href="https://www.instagram.com/"
          target="blank"
          className="flex items-center justify-center gap-2 bg-black text-white py-2 rounded-md animate-bounce"
        >
          <Instagram size= {18} />
          Instagram
        </a>
      </div>
    </div>
  );
}

export default Namecard;
