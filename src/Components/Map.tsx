import Container from "@mui/material/Container/";
import Box from "@mui/material/Box";

import MapASL from "../Assets/map.png";

export default function Map() {

  return (
      <Container maxWidth="lg" sx={{padding: "0px !important", width: "100%", height:"100%", color: "#0b2e38"}}>
        <Box width="100%" height="100%" pt={4} ml={4} pb={4} sx={{boxSizing: "border-box", pr:{xs: 9, md: 20}}}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15827.618267208618!2d112.7324402!3d-7.3645936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4920623739c23e96!2sPT.%20Angkasa%20Segara%20Logistik!5e0!3m2!1sen!2sid!4v1659156272202!5m2!1sen!2sid" width="100%" height="450" style={{border: 0}} allowFullScreen={true} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          {/* <img src={MapASL} alt="Map" width="100%" /> */}
        </Box>
        <Box ml={4} sx={{fontSize: 26, fontWeight: "500"}}>
          PT. Angkasa Segara Logistik
        </Box>
        <Box ml={4} sx={{fontSize: 17}} mt={2}>
          <Box sx={{fontSize: 20, fontWeight: "500"}}>Head Office</Box>
          <Box>Ruko Delta Sari Indah Blok A Q 12</Box>
          <Box>Kel. Kureksari, Kec. Waru – Sidoarjo 61256</Box>
        </Box>
        <Box ml={4} mt={2}>
          <Box sx={{fontSize: 20, fontWeight: "500"}}>Phone/Fax</Box>
          <Box>+62 31-99660868</Box>
        </Box>
        <Box ml={4} mt={2} pb={4}>
          <Box sx={{fontSize: 20, fontWeight: "500"}}>Email</Box>
          <Box>cs@angkasasegara.com</Box>
          <Box>angkasasegaralogistik@gmail.com</Box>
        </Box>
      </Container>
  );
};
