import {
  Box,
  Button,
  Flex,
  Image,
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
import { PostData } from "../Components/Api";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const modal1 = useDisclosure();
  const modal2 = useDisclosure();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [pin, setPin] = useState("");
  const navigate = useNavigate();
  let tempOtp =
    Math.floor(Math.random() * 10) +
    "" +
    Math.floor(Math.random() * 10) +
    "" +
    Math.floor(Math.random() * 10) +
    "" +
    Math.floor(Math.random() * 10) +
    "";
  let setTimeoutID;
  return (
    <Box>
      <Navbar />
      <br />
      <Box w="25%" m="auto">
        <Image
          src="https://www.zoomcar.com/build/fb65fcc43b8bededb813e093ea2d47d3.svg"
          alt="Login Bg"
          w="100%"
        />
        <Text
          padding="16px 0 24px 0"
          lineHeight="28px"
          color="#1f1f1f"
          fontSize="20px"
          fontWeight="bold"
          textAlign="start"
        >
          Enter details to Sign-up
        </Text>
        <br />
        <Button
          onClick={modal1.onOpen}
          _hover={{ bg: "whiteAlpha.900" }}
          bg="whiteAlpha.900"
          borderBottom="1px solid #e0e0e0"
          display="flex"
          alignItems="center"
          gap="8px"
          color="#666"
          fontWeight="semibold"
          p="10"
          w="100%"
        >
          <Image
            src="https://zoomcar-assets.zoomcar.com/images/original/38ff9c58fe221677b6e8958c1caba43d35710fe2.png?1654779648"
            alt="India Logo"
            h="40px"
            mr="-2"
          />{" "}
          <span>+91</span>
          <Text ml="3" pl="2" borderLeft="1px solid #e0e0e0">
            Enter Mobile Number
          </Text>
        </Button>
        <Modal isOpen={modal1.isOpen} onClose={modal1.onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Enter Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Input
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Name"
              />
              <br />
              <br />
              <Flex alignItems="center" gap="10px">
                <Button
                  _hover={{ bg: "whiteAlpha.900" }}
                  bg="whiteAlpha.900"
                  borderBottom="1px solid #e0e0e0"
                  display="flex"
                  alignItems="center"
                  gap="8px"
                  color="#666"
                  fontWeight="semibold"
                >
                  <Image
                    src="https://zoomcar-assets.zoomcar.com/images/original/38ff9c58fe221677b6e8958c1caba43d35710fe2.png?1654779648"
                    alt="India Logo"
                    h="40px"
                    mr="-2"
                  />{" "}
                  <span>+91</span>
                </Button>
                <Input
                  onChange={(e) => setNumber(e.target.value)}
                  placeholder="Enter Mobile Number"
                />
              </Flex>
              <br />
              <Input
                placeholder="Enter Email-ID"
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <br />
              <Input
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={modal1.onClose}>
                Close
              </Button>
              <Button
                variant="ghost"
                onClick={() => {
                  PostData({ name, email, number, password })
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err));
                  modal2.onOpen();
                  if (setTimeoutID) clearTimeout(setTimeoutID);
                  setTimeoutID = setTimeout(() => {
                    alert(`Your OTP IS ${tempOtp}`);
                  }, 1000);
                }}
              >
                Continue
              </Button>
              <Modal isOpen={modal2.isOpen} onClose={modal2.onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Enter 4 digit OTP</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <br />
                    <Input
                      placeholder="Enter OTP"
                      onChange={(e) => setPin(e.target.value)}
                    />
                    <br />
                    <br />
                    <br />
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={modal2.onClose}>
                      Go Back
                    </Button>
                    <Button
                      onClick={() => {
                        if (pin === "" || pin.length !== 4)
                          alert("Please enter valid otp!");
                        else {
                          alert("Verification completed!");
                          modal2.onClose();
                          modal1.onClose();
                          navigate("/");
                        }
                      }}
                      variant="ghost"
                    >
                      Continue
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Box textAlign="start" fontWeight="bold" color="green.500">
          <Button
            _hover={{ bg: "whiteAlpha.900" }}
            bg="whiteAlpha.900"
            borderBottom="1px solid #e0e0e0"
            p="7"
            w="100%"
          >
            <Text> Continue with Email ID</Text>
          </Button>
          <Button
            _hover={{ bg: "whiteAlpha.900" }}
            bg="whiteAlpha.900"
            borderBottom="1px solid #e0e0e0"
            p="7"
            w="100%"
            display="flex"
            alignItems="center"
            gap="8px"
          >
            <Text>Continue via Social</Text>
            <Image
              src="https://www.zoomcar.com/build/62ba375ec1a9fbcbee9e9099181c8d38.svg"
              alt="Facebook"
            />
            <Image
              src="https://www.zoomcar.com/build/279de03b0c8ecdb4db56a79da6e775e6.svg"
              alt="Google"
            />
          </Button>
        </Box>
      </Box>
      <br />
      <Footer />
    </Box>
  );
}
