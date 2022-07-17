import Container from "@mui/material/Container/";
import Box from "@mui/material/Box";

import GambarAtas from "../Assets/gambar-atas.png";

export default function Picture() {

  return (
      <Container maxWidth="lg" sx={{padding: "0px !important", width: "100%", height:"100%"}}>
        <Box display="flex" alignItems="center" justifyContent="center" sx={{width: "100% !important", height: "100%"}}>
          <Box sx={{width: "100% !important", height: "100%", overflow: "hidden"}}>
            <img alt="top-desc" src={GambarAtas} width="100%" height="520px" style={{objectFit: "cover"}} />
          </Box>
        </Box>
      </Container>
  );
};
