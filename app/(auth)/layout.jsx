import SignBtns from "@/components/SignBtns";
import Image from "next/image";

export default function AuthLayout({ children }) {
  return (
    <div className="bg-pattern flex h-[100vh] items-center justify-center bg-opacity-80 lg:grid lg:grid-cols-3 lg:bg-none">
      <div className="hidden h-[400px] flex-col items-center justify-end border-b-[1px] border-gray-300 p-12 lg:flex">
        <Image
          alt=""
          src={"bike.svg"}
          width={480}
          height={480}
          className="inset-0 object-cover"
          priority
        />
      </div>
      <div className="flex min-h-[500px] min-w-[300px] max-w-[600px] flex-col gap-3 rounded-lg bg-gray-100 px-6 py-3 shadow-md">
        <div className="flex flex-col items-center justify-evenly gap-4 lg:flex-row">
          <Image
            alt=""
            src={"logo.svg"}
            width={40}
            height={80}
            className="inset-0 object-cover"
            priority
          />
        </div>
        <div className="flex-grow">{children}</div>
        <div className="border-bgray text-bgray mt-4 flex items-center text-sm font-light">
          <hr className="border-bgray flex-grow border-t" />
          <span className="px-3">O continuar con</span>
          <hr className="border-bgray flex-grow border-t" />
        </div>
        <SignBtns />
      </div>
      <div className="hidden h-[400px] flex-col items-center border-b-[1px] border-gray-300 p-12 lg:flex">
        <Image
          alt=""
          src={"personal-training.svg"}
          width={500}
          height={500}
          className="inset-0 object-cover"
          priority
        />
      </div>
    </div>
  );
}
