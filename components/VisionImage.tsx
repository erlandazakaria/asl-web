import Image from 'next/image';

export function VisionImage() {
  return (
    <div className="max-w-7xl mx-auto w-full h-full relative">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <Image
          src="/vision2.png"
          alt="Vision"
          width={1200}
          height={240}
          className="w-full h-auto lg:h-[240px] object-contain lg:object-cover"
        />
      </div>
    </div>
  );
}
