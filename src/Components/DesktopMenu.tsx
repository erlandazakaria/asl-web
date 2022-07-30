import { useNavigate } from "react-router-dom";

import Box from "@mui/material/Box";

export default function DesktopMenu() {
    const navigate = useNavigate();

    return (
        <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center" sx={{fontWeight: "500", fontSize: 18, color: "#0e424d"}}>
            <Box padding={1} margin={1} onMouseDown={() => navigate("/")}>Home</Box>
            <Box padding={1} margin={1} onMouseDown={() => navigate("/service")}>Service</Box>
            <Box padding={1} margin={1} onMouseDown={() => navigate("/about-us")}>About Us</Box>
            <Box padding={1} margin={1} onMouseDown={() => navigate("/contact-us")}>Contact Us</Box>
        </Box>
    );
};
