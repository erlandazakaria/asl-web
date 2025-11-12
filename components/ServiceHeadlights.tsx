export default function ServiceHeadlights() {
  return (
    <div className="max-w-7xl mx-auto w-full h-full relative">
      <div className="absolute w-[350px] h-[85px] bg-[#0b2e38] z-10"></div>
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="m-8 z-20">
          <div className="mb-8 text-[31px] text-asl-light-blue">
            Service Headlights
          </div>
          <div className="mt-8 text-[23px] text-asl-light-blue text-left font-medium mr-0 md:mr-0">
            <div className="w-full h-full flex flex-col md:flex-row justify-evenly">
              <div className="w-full md:w-1/2">
                <ul className="list-disc list-inside">
                  <li>Full-container-load (FCL)</li>
                  <li>Less-than-container-load (LCL)</li>
                  <li>Dry or liquid bulk shipments</li>
                  <li>Full or partial vessel charters</li>
                  <li>Physical cargo and paper-consolidation</li>
                  <li>Dangerous Goods Handling (DGR)</li>
                </ul>
              </div>
              <div className="w-full md:w-1/2">
                <ul className="list-disc list-inside">
                  <li>Cargo Insurance</li>
                  <li>Certification and Legalisation of Documents</li>
                  <li>Food and Drug Registration & Administration Filing (FDA)</li>
                  <li>Prior Notice Filing (PNF)</li>
                  <li>Importer Security Filing (ISF)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
