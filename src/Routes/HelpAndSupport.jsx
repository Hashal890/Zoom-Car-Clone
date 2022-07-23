import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "../App.css";
import PopularQueries from "../Components/PopularQueries";
import CanFindUs from "../Components/CanFindUs";

export default function HelpAndSupport() {
  return (
    <Box>
      <Navbar />
      <Box bg="#f5f5f5" pt="100px">
        <Box
          pt="5"
          pl="5"
          pb="5"
          pr="5"
          textAlign="start"
          maxWidth="960px"
          m="auto"
          bg="#fff"
          border="1px #e0e0e0 solid"
        >
          <Heading fontSize="1.7em" fontWeight="600">
            HELP & SUPPORT
          </Heading>
          <Flex
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
            gap="20px"
            p="0"
            boxSizing="inherit"
            pt="38"
          >
            <Box
              textAlign="center"
              border="1px #e0e0e0 solid"
              p="10px 10px"
              cursor="pointer"
              w="125px"
              h="120px"
              display="block"
              boxSizing="inherit"
            >
              <Image
                src="https://zoomcar-assets.zoomcar.com/images/original/5bf429e9b5b79b217ba71f00cff8dff3f17d71e8.png"
                alt="Join"
                h="35px"
                m="auto"
              />
              <Text pt="5">Joining Zoomcar</Text>
            </Box>
            <Box
              textAlign="center"
              border="1px #e0e0e0 solid"
              p="10px 10px"
              cursor="pointer"
              w="125px"
              h="120px"
              display="block"
              boxSizing="inherit"
            >
              <Image
                src="https://zoomcar-assets.zoomcar.com/images/original/f6a4cda1d027872d4276416e9b0cc94a208d342f.png"
                alt="Book"
                h="35px"
                m="auto"
              />
              <Text pt="5">Booking a Zoomcar</Text>
            </Box>
            <Box
              textAlign="center"
              border="1px #e0e0e0 solid"
              p="10px 10px"
              cursor="pointer"
              w="125px"
              h="120px"
              m="8px 7px"
              display="block"
              boxSizing="inherit"
            >
              <Image
                src="https://zoomcar-assets.zoomcar.com/images/original/fb893c01d3f0f43ff788fe40423d1713bb14b2e6.png"
                alt="Payment"
                h="35px"
                m="auto"
              />
              <Text pt="5">Payments and Charges</Text>
            </Box>
            <Box
              textAlign="center"
              border="1px #e0e0e0 solid"
              p="10px 10px"
              cursor="pointer"
              w="125px"
              h="120px"
              m="8px 7px"
              display="block"
              boxSizing="inherit"
            >
              <Image
                src="https://zoomcar-assets.zoomcar.com/images/original/7c85b49667922f6ed6ca33b3bcef0f9df8310446.png"
                alt="Wallet"
                h="35px"
                m="auto"
              />
              <Text pt="5">Wallet & Refunds</Text>
            </Box>
            <Box
              textAlign="center"
              border="1px #e0e0e0 solid"
              p="10px 10px"
              cursor="pointer"
              w="125px"
              h="120px"
              m="8px 7px"
              display="block"
              boxSizing="inherit"
            >
              <Image
                src="https://zoomcar-assets.zoomcar.com/images/original/3ad20d92611d0cc9543ea9579f2fdc85486c5b70.png"
                alt="Deals"
                h="35px"
                m="auto"
              />
              <Text pt="5">Deals & Discounts</Text>
            </Box>
            <Box
              textAlign="center"
              border="1px #e0e0e0 solid"
              p="10px 10px"
              cursor="pointer"
              w="125px"
              h="120px"
              m="8px 7px"
              display="block"
              boxSizing="inherit"
            >
              <Image
                src="https://zoomcar-assets.zoomcar.com/images/original/c5a9cba447b3c3d118fa4707ec3a93fb80e92364.png"
                alt="Live"
                h="35px"
                m="auto"
              />
              <Text pt="5">Live Assistance</Text>
            </Box>
          </Flex>
          <br />
          <br />
          <Box>
            <Heading fontSize="1.5em" fontWeight="600" pb="5">
              POPULAR QUERIES
            </Heading>
            <PopularQueries />
          </Box>
          <br />
          <CanFindUs />
        </Box>
        <br />
      </Box>
      <br />
      <Footer />
    </Box>
  );
}
