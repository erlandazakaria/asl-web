export default function Map() {
  return (
    <div className="max-w-7xl mx-auto w-full h-full text-[#0b2e38]">
      <div className="w-full h-full pt-8 ml-8 pb-8 pr-9 md:pr-20 box-border">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15827.618267208618!2d112.7324402!3d-7.3645936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4920623739c23e96!2sPT.%20Angkasa%20Segara%20Logistik!5e0!3m2!1sen!2sid!4v1659156272202!5m2!1sen!2sid"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="ml-8 text-2xl font-medium">
        PT. Angkasa Segara Logistik
      </div>
      <div className="ml-8 text-[17px] mt-4">
        <div className="text-xl font-medium">Head Office</div>
        <div>Ruko Delta Sari Indah Blok A Q 12</div>
        <div>Kel. Kureksari, Kec. Waru – Sidoarjo 61256</div>
      </div>
      <div className="ml-8 mt-4">
        <div className="text-xl font-medium">Phone/Fax</div>
        <div>+62 31-99660868</div>
      </div>
      <div className="ml-8 mt-4 pb-8">
        <div className="text-xl font-medium">Email</div>
        <div>cs@angkasasegara.com</div>
        <div>angkasasegaralogistik@gmail.com</div>
      </div>
    </div>
  );
}
