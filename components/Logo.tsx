import { Roboto_Mono } from "@next/font/google";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
});

export default function Logo() {
  return (
    <div>
      <h1 className={`${roboto_mono.className} font-bold text-4xl`}>
        ipko.dev
      </h1>
    </div>
  );
}
