import { Roboto_Mono } from "@next/font/google";
import DarkModeToggle from "../components/DarkModeToggle";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex h-full items-center justify-center flex-col">
      <h1 className="text-xl font-semibold p-10">Hi, I'm Bálint</h1>

      <div className="w-1/2 bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          Work in progress...
        </h3>
        <p
          className={`${roboto_mono.className} text-slate-500 dark:text-slate-400 mt-2 text-sm`}
        >
          &#62;COMING: WHEN IT'S READY
        </p>
      </div>
    </div>
  );
}
