import { Roboto_Mono } from "@next/font/google";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
});

export default function WorkInProgress({text}: {text: string}) {
  return (
    <div className="flex h-full items-center justify-center flex-col">
      <div className="w-11/12 md:w-1/2 bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
        <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
          {text}
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
