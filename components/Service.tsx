import Image from 'next/image';

export default function Service() {
  const services = [
    {
      icon: '/icon-1.png',
      title: 'INTERNATIONAL SEA AND AIR FREIGHT FORWARDING',
      top: -15,
      left: -15,
      width: 150,
    },
    { icon: '/icon-2.png', title: 'INLAND TRUCK', top: -15, left: -15, width: 150 },
    {
      icon: '/icon-3.png',
      title: 'WAREHOUSING AND CUSTOM CLEARANCE',
      top: 5,
      left: 5,
      width: 110,
    },
    { icon: '/icon-4.png', title: 'DISTRIBUTION', top: 0, left: -15, width: 150 },
    {
      icon: '/icon-5.png',
      title: 'CUSTOMS BROKERAGE',
      top: -15,
      left: -15,
      width: 150,
    },
    {
      icon: '/icon-6.png',
      title: 'DOOR TO DOOR SERVICE',
      top: -15,
      left: -15,
      width: 150,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto w-full h-full relative">
      <div className="absolute w-[250px] h-[85px] bg-[#0b2e38] z-10"></div>
      <div className="absolute -right-[300px] -top-[180px] z-0">
        <Image
          src="/background-bawah.png"
          alt="bot-background"
          width={400}
          height={400}
        />
      </div>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="m-8 z-20">
          <div className="mb-8 text-[31px] text-white">Service</div>
          <div className="mt-8 text-xl text-[#0b2e37] text-justify mr-0 md:mr-0">
            PT. Angkasa Segara Logistik understands customer service
            satisfaction has become a basis on which companies drive business
            growth and profitability. From the same spirits and motivation we
            provide our customers the following services:
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center md:items-start flex-wrap w-full h-full mt-0 my-8 mb-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center w-[250px] text-center mb-4"
            >
              <div className="relative mb-2 w-[120px] h-[120px] bg-[#5ea3b5] rounded-3xl">
                <Image
                  src={service.icon}
                  alt={`icon-${index + 1}`}
                  width={service.width}
                  height={service.width}
                  className="absolute object-contain"
                  style={{ top: service.top, left: service.left }}
                />
              </div>
              {service.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
