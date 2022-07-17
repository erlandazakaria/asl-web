import Container from "@mui/material/Container/";
import Box from "@mui/material/Box";

import BackgroundBawah from "../Assets/background-bawah.png";
import Icon1 from "../Assets/icon-1.png";
import Icon2 from "../Assets/icon-2.png";
import Icon3 from "../Assets/icon-3.png";
import Icon4 from "../Assets/icon-4.png";
import Icon5 from "../Assets/icon-5.png";
import Icon6 from "../Assets/icon-6.png";

export default function Service() {

  return (
      <Container maxWidth="lg" sx={{padding: "0px !important", width: "100%", height:"100%", position: "relative"}}>
        <Box position="absolute" width={250} height={85} sx={{backgroundColor: "#0b2e38", zIndex: 1}}></Box>
        <Box position="absolute" right={-300} top={-180} zIndex={0} >
          <img src={BackgroundBawah} alt="bot-background" />
        </Box>
        <Box 
          display="flex"
          sx={{
            width: "100% !important", 
            height: "100%", 
            justifyContent: "center", 
            flexDirection: "column",
            alignItems: "center"
          }}>
          <Box m={4} sx={{zIndex: 2}}>
            <Box mb={4} sx={{fontSize: 31, color: "white"}}>
              Service
            </Box>
            <Box mt={4} sx={{fontSize: 20, color: "#0b2e37", textAlign: "justify", mr: {xs: 2, md: 0}}}>
              PT. Angkasa Segara Logistik understands customer service satisfaction has 
              become a basis on which companies drive business growth and profitability. 
              From the same spirits and motivation we provide our customers the following services:
            </Box>
          </Box>
          <Box 
            mt={0} 
            my={4} 
            mb={4}
            display="flex"
            sx={{
              width: "100% !important", 
              height: "100%", 
              justifyContent: {xs: "center", md: "space-evenly"}, 
              flexDirection: {xs: "column", md: "row"},
              alignItems: {xs: "center", md: "flex-start"}
          }}>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width={250} textAlign="center" mb={2}>
              <Box mb={1} width={120} height={120} position="relative" sx={{backgroundColor: "#5ea3b5", borderRadius: 20}}>
                <img src={Icon1} width={150} height={150} style={{objectFit: "contain", position: "absolute", top: -15, left: -15}} alt="icon-1" />
              </Box>
              INTERNATIONAL SEA AND AIR FREIGHT FORWARDING
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width={250} textAlign="center" mb={2}>
              <Box mb={1} width={120} height={120} position="relative" sx={{backgroundColor: "#5ea3b5", borderRadius: 20}}>
                <img src={Icon2} width={150} height={150} style={{objectFit: "contain", position: "absolute", top: -15, left: -15}} alt="icon-2" />
              </Box>
              INLAND TRUCK
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width={250} textAlign="center" mb={2}>
              <Box mb={1} width={120} height={120} position="relative" sx={{backgroundColor: "#5ea3b5", borderRadius: 20}}>
                <img src={Icon3} width={110} height={110} style={{objectFit: "contain", position: "absolute", top: 5, left: 5}} alt="icon-3" />
              </Box>
              WAREHOUSING AND CUSTOM CLEARANCE
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width={250} textAlign="center" mb={2}>
              <Box mb={1} width={120} height={120} position="relative" sx={{backgroundColor: "#5ea3b5", borderRadius: 20}}>
                <img src={Icon4} width={150} height={150} style={{objectFit: "contain", position: "absolute", top: 0, left: -15}} alt="icon-4" />
              </Box>
              DISTRIBUTION
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width={250} textAlign="center" mb={2}>
              <Box mb={1} width={120} height={120} position="relative" sx={{backgroundColor: "#5ea3b5", borderRadius: 20}}>
                <img src={Icon5} width={150} height={150} style={{objectFit: "contain", position: "absolute", top: -15, left: -15}} alt="icon-5" />
              </Box>
              CUSTOMS BROKERAGE
            </Box>
            <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" width={250} textAlign="center" mb={2}>
              <Box mb={1} width={120} height={120} position="relative" sx={{backgroundColor: "#5ea3b5", borderRadius: 20}}>
                <img src={Icon6} width={150} height={150} style={{objectFit: "contain", position: "absolute", top: -15, left: -15}} alt="icon-6" />
              </Box>
              DOOR TO DOOR SERVICE
            </Box>
          </Box>
        </Box>
      </Container>
  );
};
