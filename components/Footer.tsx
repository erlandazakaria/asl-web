'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto w-full h-full">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-center w-full h-full">
        <div className="m-8">
          <div className="mb-4 text-2xl font-medium text-asl-blue">
            PT. Angkasa Segara Logistik
          </div>
          <div className="mb-0 text-[17px] text-asl-blue">
            Ruko Delta Sari Indah Blok AQ 12
          </div>
          <div className="mb-0 text-[17px] text-asl-blue">
            Kel. Kureksari, Kec. Waru – Sidoarjo 61256
          </div>
          <div className="mb-0 text-[17px] text-asl-blue flex flex-row">
            <div className="w-[100px]">Phone/Fax</div>
            <div className="w-[10px]">:</div>
            <div>+62 31-99660868</div>
          </div>
          <div className="mb-0 text-[17px] text-asl-blue flex flex-col sm:flex-row">
            <div className="flex flex-row">
              <div className="w-[100px]">Email</div>
              <div className="w-[10px]">:</div>
            </div>
            <div className="text-center sm:text-left">cs@angkasasegara.com</div>
          </div>
          <div className="mb-0 text-[17px] text-asl-blue flex flex-col sm:flex-row">
            <div className="flex flex-row">
              <div className="w-[100px]"></div>
              <div className="w-[10px]"></div>
            </div>
            <div className="text-center sm:text-left">
              angkasasegaralogistik@gmail.com
            </div>
          </div>
        </div>

        <div className="m-8 text-center md:text-right">
          <div className="mb-4 text-2xl font-medium text-asl-blue">
            Site Navigation
          </div>
          <Link
            href="/"
            className="block mb-0 text-[17px] text-asl-blue cursor-pointer hover:underline"
          >
            Home
          </Link>
          <Link
            href="/service"
            className="block mb-0 text-[17px] text-asl-blue cursor-pointer hover:underline"
          >
            Service
          </Link>
          <Link
            href="/about-us"
            className="block mb-0 text-[17px] text-asl-blue cursor-pointer hover:underline"
          >
            About Us
          </Link>
          <Link
            href="/contact-us"
            className="block mb-0 text-[17px] text-asl-blue cursor-pointer hover:underline"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
