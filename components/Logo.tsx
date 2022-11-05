import { Roboto_Mono } from "@next/font/google";
import Link from "next/link";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
});

export default function Logo() {
  return (
    <div className={""}>
      <Link href={"/"}>
        <h1
          className={`${roboto_mono.className} font-bold text-4xl cursor-pointer`}
        >
          ipko.dev
        </h1>
      </Link>
    </div>
  );
}
