import Box from "@mui/material/Box";

export default function DesktopMenu() {
    return (
        <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center" sx={{fontWeight: "500", fontSize: 18, color: "#0e424d"}}>
            <Box padding={1} margin={1}>Home</Box>
            <Box padding={1} margin={1}>Service</Box>
            <Box padding={1} margin={1}>About Us</Box>
            <Box padding={1} margin={1}>Contact Us</Box>
        </Box>
    );
};
