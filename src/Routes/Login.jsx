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
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useState } from "react";
import { GetData } from "../Components/Api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const modal1 = useDisclosure();
  const modal2 = useDisclosure();
  const [mbNum, setMbNum] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
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
          Enter details to Login
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
            <ModalHeader>Enter Mobile Number</ModalHeader>
            <ModalCloseButton />
            <ModalBody display="flex" alignItems="center" gap="10px">
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
                placeholder="Enter your registered mobile number"
                onChange={(e) => setMbNum(e.target.value)}
              />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={modal1.onClose}>
                Close
              </Button>
              <Button
                onClick={() => {
                  GetData(mbNum)
                    .then((res) => {
                      if (res.data.length === 0) navigate("/signup");
                      else modal2.onOpen();
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
                variant="ghost"
              >
                Continue
              </Button>
              <Modal isOpen={modal2.isOpen} onClose={modal2.onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Enter Password</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <br />
                    <Input
                      placeholder="Enter your password"
                      onChange={(e) => setPass(e.target.value)}
                      type="password"
                    />
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={modal2.onClose}>
                      Close
                    </Button>
                    <Button
                      onClick={() => {
                        if (mbNum === "" || mbNum.length !== 10)
                          alert("Please enter valid mobile number!");
                        else {
                          GetData(mbNum)
                            .then((res) => {
                              if (pass === "" || res.data[0].password !== pass)
                                alert("Please enter valid password!");
                              else if (res.data[0].password === pass) {
                                alert("Login successfull!");
                                modal2.onClose();
                                modal1.onClose();
                                navigate("/");
                              }
                            })
                            .catch((err) => {
                              console.log(err);
                            });
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
