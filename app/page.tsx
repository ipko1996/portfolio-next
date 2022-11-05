export default function Home() {
  return (
    <div className="flex h-full items-center justify-center flex-col space-y-6">
      <div className="text-5xl font-bold text-center leading-snug">
        <span className="">Hi, I'm </span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Bálint
        </span>
      </div>
      <div className="flex flex-col text-lg text-center">
        <span>Full Stack </span>
        <span>Web Developer</span>
      </div>
    </div>
  );
}
