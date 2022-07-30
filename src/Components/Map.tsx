import Container from "@mui/material/Container/";
import Box from "@mui/material/Box";

import MapASL from "../Assets/map.png";

export default function Map() {

  return (
      <Container maxWidth="lg" sx={{padding: "0px !important", width: "100%", height:"100%", color: "#0b2e38"}}>
        <Box width="100%" height="100%" pt={4} ml={4} pb={4} sx={{boxSizing: "border-box", pr:{xs: 9, md: 20}}}>
          <img src={MapASL} alt="Map" width="100%" />
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
