"use client";
import { signInWithGoogle } from "@/firebase/auth";
import { redirect } from "next/navigation";
import { FaGoogle } from "react-icons/fa";

export default function SignBtns() {
  return (
    <div className="my-2">
      <button
        onClick={async () => {
          const { ok } = await signInWithGoogle();
          ok && redirect("/");
        }}
        className="text-bgray hover:bg-bgray mx-auto flex space-x-3 rounded-md px-4 py-2 transition-all duration-500 hover:text-white"
      >
        <span>Google</span>
        <FaGoogle className="h-6 w-6" />
      </button>
    </div>
  );
}
