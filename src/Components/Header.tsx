import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Container from "@mui/material/Container/";
import Box from "@mui/material/Box";

import Logo from "../Assets/logo.png";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

export default function Header() {
  const theme = useTheme();
  const matchSM = useMediaQuery(theme.breakpoints.down('sm'));

  return (
      <Container maxWidth="lg" sx={{padding: "0px !important", width: "100%", height:"100%"}}>
        <Box display="flex" alignItems="center" justifyContent="space-around" sx={{width: "100% !important", height: "100%"}}>
          <Box sx={{width: {md: "40%", lg: "50%"}, pl: 4}}>
            <img alt="logo" src={Logo} />
          </Box>
          <Box sx={{width: {md: "60%", lg: "50%"}}}>
            {matchSM ? <MobileMenu /> : <DesktopMenu />}
          </Box>
        </Box>
      </Container>
  );
};
