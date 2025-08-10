import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col items-center justify-center">
          <h1 className="pointer-events-none whitespace-pre-wrap bg-clip-text text-center text-8xl font-semibold leading-none">
            Bitlinks
          </h1>
          <p>
            <span className="font-semibold text-purple-700">Bitlinks</span> is a free and open
            source url shortener.
          </p>
          <p className="font-normal text-sm text-purple-900">Most URL shorteners are not free or ask for signups. Bitlinks understands your needs and privacy.</p>
          <div className="flex gap-4 mt-4">
            <Link href="/shorten">
            <button className='bg-purple-200 outline outline-purple-900 hover:outline-2 text-purple-700 px-4 py-1 rounded-lg transition-all duration-100 hover:scale-105 cursor-pointer'>Try Now</button>
            </Link>
            <Link href="/github">
            <button className='bg-purple-200 outline outline-purple-900 hover:outline-2 text-purple-700 px-4 py-1 rounded-lg transition-all duration-100 hover:scale-105 cursor-pointer'>GitHub</button>
            </Link>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/vector.jpg"
            alt="Bitlinks"
            fill
            className="pointer-events-none mix-blend-darken"
          />
        </div>
      </section>
    </main>
  );
}
