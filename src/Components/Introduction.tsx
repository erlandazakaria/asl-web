import Container from "@mui/material/Container/";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import GambarTengah from "../Assets/gambar-tengah.png";
import BackgroundTengah from "../Assets/background-tengah.png";

export default function Introduction() {

  return (
      <Container maxWidth="lg" sx={{padding: "0px !important", width: "100%", height:"100%", position: "relative"}}>
        <Box position="absolute" width={250} height={85} sx={{backgroundColor: "#0b2e38", zIndex: 1}}></Box>
        <Box position="absolute" left={-200} top={-10} zIndex={0} >
          <img src={BackgroundTengah} alt="mid-background" />
        </Box>
        <Box 
          display="flex"
          sx={{
            width: "100% !important", 
            height: "100%", 
            justifyContent: {xs: "center", md: "space-between"}, 
            flexDirection: {xs: "column", md: "row"},
            alignItems: {xs: "center", md: "flex-start"}
          }}>
          <Box m={4} sx={{zIndex: 2}}>
            <Box mb={4} sx={{fontSize: 31, color: "white"}}>
              Introduction
            </Box>
            <Box mb={2} sx={{fontSize: 20, color: "white", textAlign: "justify", mr: {xs: 2, md: 0}}}>
              PT. Angkasa Segara Logistik was founded to answer
              the needs of advanced transportation and logistics
              solution in the global trade and international supply
              chain. For over the years it has been committed to
              provide customers and overseas associates with
              level of services reliability.
            </Box>
            <Button variant="contained" sx={{backgroundColor: "white", color: "#13596c", fontWeight: "600", fontSize: 18, textTransform: "capitalize"}}>
              Learn More
            </Button>
          </Box>
          <Box m={4}>
            <img src={GambarTengah} alt="mid-desc" />
          </Box>
        </Box>
      </Container>
  );
};
