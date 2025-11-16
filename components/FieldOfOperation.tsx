import Image from 'next/image';
import { getAssetPath } from '@/lib/config';

export default function FieldOfOperation() {
  const operations = [
    {
      image: getAssetPath('/international.png'),
      title: 'International Sea and Air Freight Forwarding',
    },
    { image: getAssetPath('/inland-trucking.png'), title: 'Inland Trucking' },
    { image: getAssetPath('/warehousing.png'), title: 'Warehousing and Customs Clearance' },
    { image: getAssetPath('/distribution.png'), title: 'Distribution' },
    { image: getAssetPath('/customs.png'), title: 'Customs Brokerage' },
    { image: getAssetPath('/door-to-door.png'), title: 'Door to Door Service' },
    { image: getAssetPath('/tug.png'), title: 'Tug and Barge Operation' },
    { image: getAssetPath('/inland-service.png'), title: 'Inland Service' },
    { image: getAssetPath('/intercity.png'), title: 'Intercity Railways Transport' },
  ];

  return (
    <div className="max-w-7xl mx-auto w-full h-full relative">
      <div className="absolute w-[350px] h-[85px] bg-[#0b2e38] z-10"></div>
      <div className="flex flex-col w-full h-full">
        <div className="m-8 z-20">
          <div className="mb-8 text-[31px] text-white text-left">
            Field Of Operation
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-8 font-medium">
          {operations.map((operation, index) => (
            <div
              key={index}
              className="w-full h-full flex justify-center items-center"
            >
              <div className="flex flex-col justify-center items-center w-[300px] text-center">
                <Image
                  src={operation.image}
                  alt={operation.title}
                  width={300}
                  height={200}
                  className="rounded-[30px] object-cover"
                />
                <div className="h-[60px] mt-2 mb-2">{operation.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
