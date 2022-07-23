import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import FleetTableOne from "../Components/FleetTableOne";
import NoteOneFleet from "../Components/NoteOneFleet";
import FleetTableTwo from "../Components/FleetTableTwo";
import NoteTwoFleet from "../Components/NoteTwoFleet";
import FleetResponsibility from "../Components/FleetResponsibility";

export default function HostPolicies() {
  return (
    <Box>
      <Navbar />
      <br />
      <Box maxWidth="960px" textAlign="start" m="0 auto">
        <Heading
          fontWeight="normal"
          mg="0px 0 30px"
          fontSize="2em"
          lineHeight="34px"
          color="#323a45"
          textAlign="center"
        >
          Policies
        </Heading>
        <br />
        <Flex
          boxSizing="inherit"
          lineHeight="20px"
          justifyContent="space-around"
          alignItems="center"
          flexWrap="wrap"
          w="100%"
          borderTop="1px #c7c7c7 solid"
          borderBottom="1px #c7c7c7 solid"
          p="3"
          fontWeight="semibold"
          textAlign="center"
        >
          <Box cursor="pointer">
            <Text color="green.500">Fee Policy: Renter Fee Policy</Text>
          </Box>
          <Box cursor="pointer">
            <Text>ELIGIBILITY</Text>
          </Box>
          <Box cursor="pointer">
            <Text>Platform Terms of Use</Text>
          </Box>
          <Box cursor="pointer">
            <Text>Privacy Policy</Text>
          </Box>
          <Box cursor="pointer">
            <Text>INTER STATE TRAVEL</Text>
          </Box>
        </Flex>
        <br />
        <Text>
          Zoomcar takes pride in being completely transparent with our members.
          Here is a comprehensive list of fees for certain scenarios after you
          have created your reservation.
        </Text>
        <br />
        <FleetTableOne />
        <br />
        <NoteOneFleet />
        <FleetTableTwo />
        <br />
        <NoteTwoFleet />
        <FleetResponsibility />
      </Box>
      <br />
      <Footer />
    </Box>
  );
}
