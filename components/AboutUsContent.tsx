import Image from 'next/image';

export default function AboutUsContent() {
  return (
    <div className="max-w-7xl mx-auto w-full h-full relative">
      <div className="absolute w-[350px] h-[85px] bg-[#0b2e38] z-10"></div>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="m-0 z-20 w-full">
          <div className="px-0 m-8 text-[31px] text-white">About Us</div>
          <div
            className="m-8 bg-no-repeat"
            style={{ backgroundImage: 'url(/map-background.png)' }}
          >
            <div className="mt-8 mb-6 text-[23px] text-[#0b2e37] font-medium text-justify mr-0 md:mr-0">
              PT. Angkasa Segara Logistik was founded to answer the needs of
              advanced transportation and logistics solution in the global trade
              and international supply chain. For over the years it has been
              committed to provide customers and overseas associates with level of
              services reliability.
            </div>
            <div className="mb-6 text-[23px] text-[#0b2e37] font-medium text-justify mr-0 md:mr-0">
              PT. Angkasa Segara Logistik was founded to answer the needs of
              advanced transportation and logistics solution in the global trade
              and international supply chain. For over the years it has been
              committed to provide customers and overseas associates with level of
              services reliability.
            </div>
            <div className="mb-6 text-[23px] text-[#0b2e37] font-medium text-justify mr-0 md:mr-0">
              Having its agency network throughout the world, PT. ASL is providing
              its customers a comprehensive and service ability in all main areas
              in the dynamic world of shipping and logistics. We offer
              International Sea and Air freight forwarding, Customs Brokerage, Tug
              and Barge operation, Door to Door Service, Distribution, Inland
              Trucking, Warehousing and Custom Clearance.
            </div>
            <div className="text-[23px] text-[#0b2e37] font-medium text-justify mr-0 md:mr-0">
              We would like to thank you to our valued customers and for our good
              cooperation, trust and support in order to deliver the best service
              and quality. We shall continue to progress and improve the quality
              and service in all areas and keep positive track going on upward.
            </div>
            <div className="h-auto lg:h-[150px] w-full flex justify-end items-end">
              <Image
                src="/about-us-bottom.png"
                alt="About us decoration"
                width={300}
                height={200}
                className="mt-6 sm:mt-8 md:mt-8 lg:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
