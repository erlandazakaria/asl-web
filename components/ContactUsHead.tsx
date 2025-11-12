'use client';

import { FormEvent } from 'react';
import { useToast } from '@/contexts/Toast';

export default function ContactUsHead() {
  const { openToast } = useToast();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        openToast('Message sent successfully!');
        form.reset();
      } else {
        openToast('Failed to send message. Please try again.');
      }
    } catch (error) {
      openToast('An error occurred. Please try again.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto w-full h-full relative">
      <form onSubmit={handleSubmit}>
        <div className="absolute w-[350px] h-[85px] bg-[#0b2e38] z-10"></div>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="m-8 z-20 w-full">
            <input
              type="hidden"
              name="access_key"
              value="69f8a533-d1b0-49b5-b17d-ffed6b9a401b"
            />
            <div className="px-4 mb-12 text-[31px] text-white">Contact Us</div>
            <div className="px-8 w-full flex flex-col md:flex-row mt-8 text-[23px] text-[#0b2e37] font-medium justify-start md:justify-evenly">
              <div className="w-full md:w-1/2 flex flex-col">
                <div>Your Name*</div>
                <div className="my-2 pr-8 md:pr-20">
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-asl-blue"
                  />
                </div>
                <div>Your Email*</div>
                <div className="my-2 pr-8 md:pr-20">
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-asl-blue"
                  />
                </div>
              </div>
              <div className="w-full md:w-1/2 mt-4 md:mt-0">
                <div className="flex flex-col">
                  <div>Your Message</div>
                  <div className="my-2 pr-8 md:pr-20">
                    <textarea
                      name="message"
                      rows={10}
                      className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-asl-blue resize-none"
                    />
                  </div>
                  <div className="my-2 pr-8 md:pr-20 text-right">
                    <button
                      type="submit"
                      className="w-[120px] bg-[#d5820c] hover:bg-[#c07509] text-white font-medium py-2 px-4 rounded transition-colors"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
