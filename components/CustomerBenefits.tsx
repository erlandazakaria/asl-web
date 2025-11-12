import Image from 'next/image';

export default function CustomerBenefits() {
  return (
    <div className="max-w-7xl mx-auto w-full h-full relative">
      <div className="absolute w-[350px] h-[85px] bg-[#0b2e38] z-10"></div>
      <div className="absolute right-[-100px] md:right-[-100px] lg:right-[-200px] xl:right-[-400px] -top-[60px] z-0">
        <Image
          src="/service-customer-benefits.png"
          alt="customer-benefit-background"
          width={400}
          height={400}
        />
      </div>
      <div className="flex flex-col justify-start items-center w-full md:w-1/2 h-full">
        <div className="m-8 z-20">
          <div className="mb-8 text-[31px] text-asl-light-blue">
            Customer Benefits
          </div>
          <div className="mt-8 text-[23px] text-[#0b2e38] text-left font-medium">
            <div className="w-full h-full flex flex-row">
              <div className="w-full">
                <ul className="list-disc list-inside">
                  <li>Full-container-load (FCL)</li>
                  <li>Less-than-container-load (LCL)</li>
                  <li>Dry or liquid bulk shipments</li>
                  <li>Full or partial vessel charters</li>
                  <li>Physical cargo and paper-consolidation</li>
                  <li>Dangerous Goods Handling (DGR)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
