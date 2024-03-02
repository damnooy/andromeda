import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-20 my-5 flex items-center">
      <div className="max-w-[50%]">
        <h1 className="text-5xl">
          Menjadikan Pengantaran Barang Begitu Mudah
        </h1>
        <p className="text-lg my-4">
          AndromedaMovers dapat membantu kamu untuk mengantar barang menjadi
          lebih mudah.
        </p>
        <a className="bg-[#8b0000] text-white p-2 rounded-lg" href="https://wa.me/6287884393999">
          Pesan Sekarang
        </a>
      </div>
      <Image className="" width={700} height={700} src="/img/mobil.png" alt="" />
    </div>
  );
}
