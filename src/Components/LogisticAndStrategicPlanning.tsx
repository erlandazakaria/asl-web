import { Box, Container } from '@mui/material';

export default function LogisticAndStrategicPlanning () {
    return (
        <Container maxWidth="lg" sx={{padding: "0px !important", width: "100%", height:"100%", position: "relative"}}>
              
            <Box 
            display="flex"
            sx={{
                width: "100% !important", 
                height: "100%", 
                justifyContent: "center", 
                flexDirection: "column",
                alignItems: "center"
            }}>
                
                <Box m={4}>
                    <Box marginBottom={3} sx={{fontSize: 23, color: "#0b2e37", fontWeight: "500", textAlign: "justify", mr: {xs: 2, md: 0}}}>
                        Logistics Management:
                    </Box>
                    <Box marginBottom={3} sx={{fontSize: 23, color: "#0b2e37", fontWeight: "500", textAlign: "justify", mr: {xs: 2, md: 0}}}>
                        Logistics is an essential component of supply chain management and as the global economy moved into the 21st Century, logistics became a critical part of supply chain and consumer demand.
                    </Box>
                    <Box marginBottom={3} sx={{fontSize: 23, color: "#0b2e37", fontWeight: "500", textAlign: "justify", mr: {xs: 2, md: 0}}}>
                        It involves the planning, carrying out and management of goods, services, and information from the point of origin to the point of consumption. Logistics aligns the complex pattern of traffic and transportation, shipping and receiving, import and export operations, warehousing, inventory management, purchasing, production planning, and customer service. It is used to manage,
                        coordinate and monitor resources needed to move products in a smooth, timely, cost-effective and reliable manner.      
                    </Box>    
                </Box>
                <Box m={4}>
                    <Box marginBottom={3}  sx={{fontSize: 23, color: "#0b2e37", fontWeight: "500", textAlign: "justify", mr: {xs: 2, md: 0}}}>
                        Strategic Planning:
                    </Box>
                    <Box marginBottom={3}  sx={{fontSize: 23, color: "#0b2e37", fontWeight: "500", textAlign: "justify", mr: {xs: 2, md: 0}}}>
                        By creating partnerships with suppliers, shipping services and warehousers, and connecting these services through automated systems, the logistics of getting products to the consumer are improved with reduced overhead costs and faster delivery.
                    </Box>
                    <Box marginBottom={3} sx={{fontSize: 23, color: "#0b2e37", fontWeight: "500", textAlign: "justify", mr: {xs: 2, md: 0}}}>
                        Understanding how the logistics system theory works require strategic planning when calculating what will be needed while focusing on obtaining materials and managing how quickly products are produced to help ensure swift delivery to the consumer. Cost savings is created by reducing warehousing costs and purchasing based on supply forecasts, better inventory management, reliable shipping and timely delivery to the end-user.    
                    </Box>    
                </Box>
                
            </Box>
        </Container>
    )
}