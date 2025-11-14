import Image from 'next/image';
import Link from 'next/link';
import { getAssetPath } from '@/lib/config';

export default function Introduction() {
  return (
    <div className="max-w-7xl mx-auto w-full h-full relative">
      <div className="absolute w-[250px] h-[85px] bg-[#0b2e38] z-10"></div>
      <div className="absolute -left-[200px] -top-[10px] z-0">
        <Image
          src={getAssetPath('/background-tengah.png')}
          alt="mid-background"
          width={400}
          height={400}
        />
      </div>
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start w-full h-full">
        <div className="m-8 z-20">
          <div className="mb-8 text-[31px] text-white">Introduction</div>
          <div className="mb-4 text-xl text-white text-justify mr-0 md:mr-0">
            PT. Angkasa Segara Logistik was founded to answer the needs of
            advanced transportation and logistics solution in the global trade
            and international supply chain. For over the years it has been
            committed to provide customers and overseas associates with level of
            services reliability.
          </div>
          <Link
            href="/about-us"
            className="inline-block bg-white text-asl-blue font-semibold text-lg px-6 py-2 rounded hover:bg-gray-100 transition-colors"
          >
            Learn More
          </Link>
        </div>
        <div className="m-8">
          <Image
            src={getAssetPath('/gambar-tengah.png')}
            alt="mid-desc"
            width={400}
            height={300}
          />
        </div>
      </div>
    </div>
  );
}
