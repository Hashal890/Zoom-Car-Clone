import {
  Box,
  Button,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import React from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import HomeGridOne from "../Components/HomeGridOne";
import HomeGridTwo from "../Components/HomeGridTwo";
import HomeGridThree from "../Components/HomeGridThree";
import AboutUs from "../Components/AboutUs";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Navbar />
      <Box
        h="73vh"
        bgImage="https://www.zoomcar.com/img/bg-desktop.png"
        bgSize="cover"
        bgPosition="bottom right"
        w="100%"
      >
        {" "}
      </Box>
      <Box>
        <Button
          bg="none"
          _hover={{ bg: "none" }}
          ml="-300px"
          mt="-350px"
          onClick={onOpen}
          fontSize="15px"
          fontWeight="normal"
          mb="0px"
          mr="0px"
        >
          Round Trip {<ChevronDownIcon />}
        </Button>
        <Modal onClose={onClose} size="xl" isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              <Text fontSize="28px" textAlign="center">
                Select your pickup country/city
              </Text>
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Select cursor="pointer" w="60%" m="auto">
                <option value="INDIA" display="flex" alignItems="center">
                  <span>
                    <Image
                      src="https://zoomcar-assets.zoomcar.com/images/original/f0d042984d127268653508c035fbc01a5613ae45.png?1654779701"
                      alt="Indonesia Logo"
                    />
                  </span>
                  VIETNAM
                </option>
                <option value="INDONESIA" display="flex" alignItems="center">
                  <span>
                    <Image
                      src="https://zoomcar-assets.zoomcar.com/images/original/9629b3e6f9f92bdbcb47471851a45c475cae938f.png?1654779720"
                      alt="Indonesia Logo"
                    />
                  </span>
                  INDONESIA
                </option>
                <option
                  selected
                  value="INDIA"
                  display="flex"
                  alignItems="center"
                >
                  <span>
                    <Image
                      src="https://zoomcar-assets.zoomcar.com/images/original/38ff9c58fe221677b6e8958c1caba43d35710fe2.png?1654779648"
                      alt="India Logo"
                    />
                  </span>
                  INDIA
                </option>
                <option value="EGYPT" display="flex" alignItems="center">
                  <span>
                    <Image
                      src="https://zoomcar-assets.zoomcar.com/images/original/e624749b40c1d9910eaaee74f0a83ea3867e2322.png?1654779678"
                      alt="Egypt Logo"
                    />
                  </span>
                  EGYPT
                </option>
              </Select>
              <br />
              <Select cursor="pointer" w="60%" m="auto" overflow="scroll">
                <option value="INDIA" display="flex" alignItems="center">
                  Bangalore
                </option>
                <option
                  selected
                  value="INDIA"
                  display="flex"
                  alignItems="center"
                >
                  Pune
                </option>
                <option value="INDONESIA" display="flex" alignItems="center">
                  Delhi NCR
                </option>
                <option value="EGYPT" display="flex" alignItems="center">
                  Mumbai
                </option>
                <option value="INDIA" display="flex" alignItems="center">
                  Chennai
                </option>
                <option value="INDONESIA" display="flex" alignItems="center">
                  Hyderabad
                </option>
                <option value="EGYPT" display="flex" alignItems="center">
                  Chandigarh
                </option>
                <option value="INDONESIA" display="flex" alignItems="center">
                  Kolkata
                </option>
                <option value="EGYPT" display="flex" alignItems="center">
                  Ahmedabad
                </option>
                <option value="INDIA" display="flex" alignItems="center">
                  Coimbatore
                </option>
                <option value="INDONESIA" display="flex" alignItems="center">
                  Hyderabad
                </option>
                <option value="EGYPT" display="flex" alignItems="center">
                  Indore
                </option>
                <option value="INDONESIA" display="flex" alignItems="center">
                  Jaipur
                </option>
                <option value="EGYPT" display="flex" alignItems="center">
                  Mangalore
                </option>
                <option value="INDIA" display="flex" alignItems="center">
                  Mysure
                </option>
                <option value="INDONESIA" display="flex" alignItems="center">
                  Vizag
                </option>
                <option value="EGYPT" display="flex" alignItems="center">
                  Goa
                </option>
                <option value="INDONESIA" display="flex" alignItems="center">
                  Nagpur
                </option>
                <option value="EGYPT" display="flex" alignItems="center">
                  Kochi
                </option>
                <option value="INDIA" display="flex" alignItems="center">
                  Vijaywada
                </option>
                <option value="INDONESIA" display="flex" alignItems="center">
                  Siliguri
                </option>
                <option value="EGYPT" display="flex" alignItems="center">
                  Bhopal
                </option>
                <option value="INDONESIA" display="flex" alignItems="center">
                  Lucknow
                </option>
                <option value="EGYPT" display="flex" alignItems="center">
                  Guwhavti
                </option>
                <option value="INDIA" display="flex" alignItems="center">
                  Bhubhneswar
                </option>
                <option value="INDONESIA" display="flex" alignItems="center">
                  Vadodara
                </option>
                <option value="EGYPT" display="flex" alignItems="center">
                  Raipur
                </option>
                <option value="INDONESIA" display="flex" alignItems="center">
                  Nashik
                </option>
                <option value="EGYPT" display="flex" alignItems="center">
                  Hubli
                </option>
                <option value="INDIA" display="flex" alignItems="center">
                  Calicut
                </option>
                <option value="INDONESIA" display="flex" alignItems="center">
                  Udupi-Manipal
                </option>
                <option value="EGYPT" display="flex" alignItems="center">
                  Trichy
                </option>
                <option value="INDONESIA" display="flex" alignItems="center">
                  Madurai
                </option>
              </Select>
              <br />
              <Button
                cursor="pointer"
                w="60%"
                ml="20%"
                _hover={{ bg: "#10a310", color: "whiteAlpha.900" }}
                color="whiteAlpha.900"
                bg="#10a310"
              >
                CONFIRM
              </Button>
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Box mt="-150px" ml="-50px">
          <Input
            w="350px"
            fontSize="14px"
            placeholder="Pick Up City, Airport, Address or Hotel"
            color="#1f1f1f"
            cursor="pointer"
            bg="whiteAlpha.900"
          />
          <br />
          <br />
          <Button
            w="350px"
            bg="#e0e0e0"
            color="#a8a8a8"
            cursor="pointer"
            boxShadow="0px 8px 15px rgb(0 0 0 / 10%)"
            _hover={{ bg: "#10a310", color: "whiteAlpha.900" }}
          >
            FIND CARS
          </Button>
        </Box>
        <br />
        <br />
        <br />
        <HomeGridOne />
        <br />
        <br />
        <HomeGridTwo />
        <br />
        <br />
        <HomeGridThree />
        <br />
        <br />
        <AboutUs />
        <br />
        <br />
      </Box>
      <Footer />
    </Box>
  );
}
