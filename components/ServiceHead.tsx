import Image from 'next/image';

export default function ServiceHead() {
  return (
    <div className="max-w-7xl mx-auto w-full h-full relative">
      <div className="absolute w-[350px] h-[85px] bg-[#0b2e38] z-10"></div>
      <div className="absolute -right-[400px] -top-[150px] z-0">
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
          <div className="mt-8 text-[23px] text-[#0b2e37] text-justify font-medium mr-0 md:mr-0">
            PT. Angkasa Segara Logistik understands customer service satisfaction
            has become a basis on which companies drive business growth and
            profitability. Reduce shipping costs and ensure timely delivery of
            goods are integral parts of a solid logistics management system,
            emphasizing the importance of warehousing and transportation for
            customer service excellence for end-user product delivery. From the
            same spirits and motivation we provide our customers the following
            services:
          </div>
        </div>
      </div>
    </div>
  );
}
