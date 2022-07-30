import { useNavigate } from "react-router-dom";

import Container from "@mui/material/Container/";
import Box from "@mui/material/Box";

export default function Footer() {
  const navigate = useNavigate();

  return (
      <Container maxWidth="lg" sx={{padding: "0px !important", width: "100%", height:"100%"}}>
        <Box 
          display="flex"
          sx={{
            width: "100% !important", 
            height: "100%", 
            justifyContent: {xs: "center", md: "space-between"}, 
            flexDirection: {xs: "column", md: "row"},
            alignItems: "center"
          }}>
          <Box m={4}>
            <Box mb={2} sx={{fontSize: 26, fontWeight: "500", color: "#13596c"}}>
              PT. Angkasa Segara Logistik
            </Box>
            <Box mb={0} sx={{fontSize: 17, color: "#13596c"}}>
              Ruko Delta Sari Indah Blok AQ 12
            </Box>
            <Box mb={0} sx={{fontSize: 17, color: "#13596c"}}>
              Kel. Kureksari, Kec. Waru – Sidoarjo 61256
            </Box>
            <Box mb={0} sx={{fontSize: 17, color: "#13596c"}} display="flex" flexDirection="row">
              <Box width={100}>Phone/Fax</Box>
              <Box width={10}>:</Box>
              <Box>+62 31-99660868</Box>
            </Box>
            <Box mb={0} display="flex" sx={{fontSize: 17, color: "#13596c", flexDirection: {xs: "column", sm: "row"}}}>
              <Box display="flex" flexDirection="row">
                <Box width={100}>Email</Box>
                <Box width={10}>:</Box>
              </Box>
              <Box sx={{textAlign: {xs: "center", sm: "left"}}}>cs@angkasasegara.com</Box>
            </Box>
            <Box mb={0} display="flex" sx={{fontSize: 17, color: "#13596c", flexDirection: {xs: "column", sm: "row"}}}>
              <Box display="flex" flexDirection="row">
                <Box width={100}></Box>
                <Box width={10}></Box>
              </Box>
              <Box sx={{textAlign: {xs: "center", sm: "left"}}}>angkasasegaralogistik@gmail.com</Box>
            </Box>
          </Box>
          <Box m={4} sx={{textAlign: {xs: "center", md: "right"}}}>
            <Box mb={2} sx={{fontSize: 26, fontWeight: "500", color: "#13596c"}} onMouseDown={() => navigate("/")}>
              Site Navigation
            </Box>
            <Box mb={0} sx={{fontSize: 17, color: "#13596c", cursor: "pointer"}} onMouseDown={() => navigate("/")}>
              Home
            </Box>
            <Box mb={0} sx={{fontSize: 17, color: "#13596c", cursor: "pointer"}} onMouseDown={() => navigate("/service")}>
              Service
            </Box>
            <Box mb={0} sx={{fontSize: 17, color: "#13596c", cursor: "pointer"}} onMouseDown={() => navigate("/about-us")}>
              About Us
            </Box>
            <Box mb={0} sx={{fontSize: 17, color: "#13596c", cursor: "pointer"}} onMouseDown={() => navigate("/contact-us")}>
              Contact Us
            </Box>
          </Box>
        </Box>
      </Container>
  );
};
