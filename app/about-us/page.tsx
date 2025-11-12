import { Metadata } from 'next';
import AboutUsContent from '@/components/AboutUsContent';
import VisionContent from '@/components/VisionContent';
import { VisionImage } from '@/components/VisionImage';
import LogisticAndStrategicPlanning from '@/components/LogisticAndStrategicPlanning';

export const metadata: Metadata = {
  title: 'About Us - Angkasa Segara Logistik',
  description:
    'Learn about PT. Angkasa Segara Logistik - your trusted partner in transportation and logistics solutions for global trade and international supply chain.',
  keywords:
    'about PT ASL, logistics company Indonesia, transportation solutions, supply chain management, logistics vision',
};

export default function AboutUs() {
  return (
    <>
      <div className="w-full h-full bg-[#abd7e2]">
        <AboutUsContent />
      </div>
      <div className="w-full h-full bg-asl-light-blue">
        <VisionContent />
      </div>
      <div className="w-full h-full bg-black text-white">
        <VisionImage />
      </div>
      <div className="w-full h-full bg-asl-light-blue">
        <LogisticAndStrategicPlanning />
      </div>
    </>
  );
}
