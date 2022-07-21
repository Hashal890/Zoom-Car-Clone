import {
  Box,
  Button,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import BackImg from "../Assets/backgroud.png";
import React, { useState } from "react";

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Navbar />
      <Image src={BackImg} alt="Background Image" />
      <Box>
        <Button onClick={onOpen}>Open Modal</Button>
        <Modal onClose={onClose} size="lg" isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody></ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
      <Footer />
    </Box>
  );
}
