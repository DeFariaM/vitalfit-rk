"use client";

import Btn from "@/components/Btn";
import InputField from "@/components/InputField";
import { signup } from "@/firebase/auth";
import { handleInputs } from "@/helpers/handleInput";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Signup() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div>
      <h1 className="font-bebas text-bgray text-center text-2xl">
        ¡Bienvenido a Vital<span className="text-primary">Fit</span>!
      </h1>
      <h2 className="font-bebas text-bgray text-center text-xl">Registrarse</h2>
      <form className="input-cont">
        <InputField
          label={"Nombre"}
          name={"name"}
          value={user.name}
          onChange={(e) => handleInputs(e, setUser)}
        />
        <InputField
          label={"Email"}
          name={"email"}
          type="email"
          value={user.email}
          onChange={(e) => handleInputs(e, setUser)}
        />
        <InputField
          label={"Password"}
          name={"password"}
          type="password"
          value={user.password}
          onChange={(e) => handleInputs(e, setUser)}
        />
        <Btn
          text={"Registrarse"}
          onClick={async (e) => {
            e.preventDefault();
            const { ok } = await signup(user);
            ok && redirect("/");
          }}
        />
      </form>
      <div className="mt-4">
        <p className="text-bgray text-center text-sm"></p>
        <p className="text-bgray mt-4 text-center text-sm">
          ¿Ya tienes una cuenta?{" "}
          <Link
            className="hover:text-primary underline transition-colors duration-500"
            href={"/login"}
          >
            Ingresar
          </Link>
        </p>
      </div>
    </div>
  );
}
