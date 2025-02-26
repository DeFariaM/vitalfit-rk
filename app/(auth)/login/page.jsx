"use client";

import Btn from "@/components/Btn";
import InputField from "@/components/InputField";
import { login } from "@/firebase/auth";
import { handleInputs } from "@/helpers/handleInput";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  return (
    <div>
      <h1 className="font-bebas text-bgray text-center text-2xl">
        ¡Bienvenido de <span className="text-primary">vuelta</span>!
      </h1>
      <h2 className="font-bebas text-bgray text-center text-xl">Ingresar</h2>
      <form className="input-cont">
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
          text={"Ingresar"}
          onClick={async (e) => {
            e.preventDefault();
            const { ok } = await login(user);
            ok && redirect("/");
          }}
        />
      </form>
      <div className="mt-4">
        <p className="text-bgray text-center text-sm">
          <Link
            className="hover:text-primary underline transition-colors duration-500"
            href={"/sign-up"}
          >
            ¿Olvidaste tu contraseña?{" "}
          </Link>
        </p>
        <p className="text-bgray mt-4 text-center text-sm">
          ¿Aún no tienes una cuenta?{" "}
          <Link
            className="hover:text-primary underline transition-colors duration-500"
            href={"/sign-up"}
          >
            Registrarse
          </Link>
        </p>
      </div>
    </div>
  );
}
