import { Metadata } from 'next';
import ContactUsHead from '@/components/ContactUsHead';
import Map from '@/components/Map';

export const metadata: Metadata = {
  title: 'Contact Us - Angkasa Segara Logistik',
  description:
    'Get in touch with PT. Angkasa Segara Logistik. Located in Sidoarjo, Indonesia. Contact us for your logistics and transportation needs.',
  keywords:
    'contact PT ASL, logistics company Sidoarjo, Indonesia logistics contact, freight forwarding contact',
};

export default function ContactUs() {
  return (
    <>
      <div className="w-full h-auto bg-[#abd7e2]">
        <ContactUsHead />
      </div>
      <div className="w-full h-auto bg-asl-light-blue">
        <Map />
      </div>
    </>
  );
}
