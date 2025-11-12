import Image from 'next/image';

export default function Picture() {
  return (
    <div className="max-w-7xl mx-auto w-full h-full">
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-full h-full overflow-hidden">
          <Image
            src="/gambar-atas.png"
            alt="top-desc"
            width={1200}
            height={520}
            className="w-full h-[520px] object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
