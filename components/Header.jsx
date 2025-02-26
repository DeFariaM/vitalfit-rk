import Image from "next/image";
import React from "react";
import NavLinks from "./NavLinks";
import Cart from "./Cart";
import Review from "./Review";
import User from "./User";
import Favorites from "./Favorites";

export default function Header() {
  return (
    <div className="bg-gray-200 py-4">
      <div className="container mx-auto grid grid-cols-3 justify-between">
        <div>
          <Image
            src={"logo.svg"}
            height={70}
            width={35}
            alt="Logo Vitalfit"
            priority
          />
        </div>
        <div className="hidden items-center justify-center space-x-4 text-center md:flex">
          <NavLinks path={"/home"} title={"HOME"} />
          <NavLinks path={"/products"} title={"PRODUCTOS"} />
        </div>
        <div className="hidden items-center justify-end text-end md:flex">
          <Cart />
          <Favorites />
          <Review />
          <User />
        </div>
      </div>
    </div>
  );
}
