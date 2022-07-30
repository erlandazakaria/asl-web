import { useNavigate, useMatch } from "react-router-dom";

import Box from "@mui/material/Box";

export default function DesktopMenu() {
    const navigate = useNavigate();
    const isHome = useMatch("/");
    const isService = useMatch("/service");
    const isAboutUs = useMatch("/about-us");
    const isContactUs = useMatch("/contact-us");

    return (
        <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center" sx={{fontWeight: "500", fontSize: 18, color: "#0e424d"}}>
            <Box 
                px={2}
                py={0.5}
                m={1} 
                onMouseDown={() => navigate("/")}
                sx={[{borderRadius: 5, cursor: "pointer", '&:hover': { border: "2px solid #13596c" }}, isHome && {backgroundColor: "#13596c", color: "#e2f1fd"}]}
            >Home</Box>
            <Box 
                px={2}
                py={0.5}
                m={1} 
                onMouseDown={() => navigate("/service")}
                sx={[{borderRadius: 5, cursor: "pointer", '&:hover': { border: "2px solid #13596c" }}, isService && {backgroundColor: "#13596c", color: "#e2f1fd"}]}
            >Service</Box>
            <Box 
                px={2}
                py={0.5}
                m={1} 
                onMouseDown={() => navigate("/about-us")}
                sx={[{borderRadius: 5, cursor: "pointer", '&:hover': { border: "2px solid #13596c" }}, isAboutUs && {backgroundColor: "#13596c", color: "#e2f1fd"}]}
            >About Us</Box>
            <Box 
                px={2}
                py={0.5}
                m={1} 
                onMouseDown={() => navigate("/contact-us")}
                sx={[{borderRadius: 5, cursor: "pointer", '&:hover': { border: "2px solid #13596c" }}, isContactUs && {backgroundColor: "#13596c", color: "#e2f1fd"}]}
            >Contact Us</Box>
        </Box>
    );
};
