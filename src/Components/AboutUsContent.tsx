import { Box, Container } from '@mui/material';
import mapBackground from '../Assets/map-background.png';
import aboutUsBottom from '../Assets/about-us-bottom.png';
export default function AboutUsContent () {

    return (
        <Container maxWidth="lg" sx={{padding: "0px !important", width: "100%", height:"100%", position: "relative"}}>
            <Box position="absolute" width={350} height={85} sx={{backgroundColor: "#0b2e38", zIndex: 1}}></Box>    
            <Box 
            display="flex"
            sx={{
                width: "100% !important", 
                height: "100%", 
                justifyContent: "center", 
                flexDirection: "column",
                alignItems: "center"
            }}>
                <Box m={0} sx={{zIndex: 2}} width="100%">
                    <Box px={0} m={4} sx={{fontSize: 31, color: "white"}}>
                        About Us
                    </Box>   
                        <Box m={4}  style={{backgroundImage: `url(${mapBackground})`, backgroundRepeat: "no-repeat"}}>
                            <Box mt={4} marginBottom={3} sx={{fontSize: 23, color: "#0b2e37", fontWeight: "500", textAlign: "justify", mr: {xs: 2, md: 0}}}>
                                PT. Angkasa Segara Logistik was founded to answer the needs of advanced transportation and logistics solution in the global trade and international supply chain. 
                                For over the years it has been committed to provide customers and overseas associates with level of services reliability.
                            </Box>
                            <Box marginBottom={3} sx={{fontSize: 23, color: "#0b2e37", fontWeight: "500", textAlign: "justify", mr: {xs: 2, md: 0}}}>
                                PT. Angkasa Segara Logistik was founded to answer the needs of advanced transportation and logistics solution in the global trade and international supply chain. 
                                For over the years it has been committed to provide customers and overseas associates with level of services reliability.
                            </Box>
                            
                            <Box marginBottom={3} sx={{fontSize: 23, color: "#0b2e37", fontWeight: "500", textAlign: "justify", mr: {xs: 2, md: 0}}}>
                                Having its agency network throughout the world, PT. ASL is providing its customers a comprehensive and service ability in all main areas in the dynamic world of shipping and
                                logistics. We offer International Sea and Air freight forwarding,Customs Brokerage, Tug and Barge operation, Door to Door Service, Distribution, Inland Trucking, Warehousing and Custom Clearance.     
                            </Box>

                            <Box  sx={{fontSize: 23, color: "#0b2e37", fontWeight: "500", textAlign: "justify", mr: {xs: 2, md: 0}}}>
                                We would like to thank you to our valued customers and for our good cooperation, trust and support in order to deliver the best service and quality. We shall continue to progress and improve the quality and service in all areas and keep positive track going on upward.
                            </Box>  
                            <Box sx={{height: {lg:"150px"},width: {lg: "100%"}, display: "flex", justifyContent: "flex-end", alignItems: "flex-end", imageResolution: "" }}>
                                <Box component="img" src={aboutUsBottom} sx={{marginTop: {lg: 10, md: 8, sm: 8, xs: 6}}} />
                            </Box>
                        </Box> 
                </Box>
            </Box>   
        </Container>
    )
}