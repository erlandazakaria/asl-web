import { Metadata } from 'next';
import Picture from '@/components/Picture';
import Introduction from '@/components/Introduction';
import Service from '@/components/Service';

export const metadata: Metadata = {
  title: 'Home - PT Angkasa Segara Logistik',
  description:
    'PT Angkasa Segara Logistik - Leading logistics company in Indonesia providing international freight forwarding, warehousing, customs clearance, and distribution services.',
  keywords:
    'logistics company Indonesia, international freight forwarding, sea freight Indonesia, air freight Indonesia, logistics solutions, supply chain management',
};

export default function Home() {
  return (
    <>
      <div className="w-full h-[520px] bg-asl-light-blue">
        <Picture />
      </div>
      <div className="w-full h-auto bg-asl-blue overflow-hidden">
        <Introduction />
      </div>
      <div className="w-full h-auto bg-asl-light-blue overflow-hidden">
        <Service />
      </div>
    </>
  );
}
