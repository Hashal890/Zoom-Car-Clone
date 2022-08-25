import {
  Box,
  Button,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import React, { useState } from "react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import HomeGridOne from "../Components/HomeGridOne";
import HomeGridTwo from "../Components/HomeGridTwo";
import HomeGridThree from "../Components/HomeGridThree";
import AboutUs from "../Components/AboutUs";
import SelectHome from "../Components/SelectHome";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [city, setCity] = useState("Pune");
  const [dest, setDest] = useState("Mumbai");
  const navigate = useNavigate();
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
              <SelectHome setCity={setCity} />
              <br />
              <Button
                cursor="pointer"
                w="60%"
                ml="20%"
                _hover={{ bg: "#10a310", color: "whiteAlpha.900" }}
                color="whiteAlpha.900"
                bg="#10a310"
                onClick={() => {
                  onClose();
                }}
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
            onChange={(e) => setDest(e.target.value)}
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
            onClick={()=>{
              if(dest==="") alert("Please select a valid destination!");
              else navigate("/pickupcity");
            }}
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
