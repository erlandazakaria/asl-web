import { Metadata } from 'next';
import ServiceHead from '@/components/ServiceHead';
import FieldOfOperation from '@/components/FieldOfOperation';
import ServiceHeadlights from '@/components/ServiceHeadlights';
import CustomerBenefits from '@/components/CustomerBenefits';

export const metadata: Metadata = {
  title: 'Services - Angkasa Segara Logistik',
  description:
    'PT. Angkasa Segara Logistik provides comprehensive logistics services including international freight forwarding, warehousing, customs clearance, and distribution.',
  keywords:
    'logistics services, freight forwarding, warehousing, customs clearance, distribution, Indonesia logistics',
};

export default function Service() {
  return (
    <>
      <div className="w-full h-auto bg-[#abd7e2] overflow-hidden">
        <ServiceHead />
      </div>
      <div className="w-full h-auto bg-asl-light-blue overflow-hidden">
        <FieldOfOperation />
      </div>
      <div className="w-full h-auto bg-asl-blue overflow-hidden">
        <ServiceHeadlights />
      </div>
      <div className="w-full h-auto bg-[#afb1b3] overflow-hidden">
        <CustomerBenefits />
      </div>
    </>
  );
}
