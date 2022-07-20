import {
  Box,
  Button,
  color,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";

export default function Navbar() {
  return (
    <Flex
      h="70px"
      color="whiteAlpha.900"
      bg="#000"
      flexDirection="row"
      minWidth="max-content"
      alignItems="center"
      pl="5"
      pr="16"
      position="sticky"
      top="0"
    >
      <Flex gap="10px" alignItems="center" h="100%">
        <Text style={{ cursor: "pointer" }}>
          <Button
            class="btn btn-primary"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasWithBothOptions"
            aria-controls="offcanvasWithBothOptions"
            bg="#000"
            _hover={{ bg: "#000" }}
          >
            <i class="fa-solid fa-bars"></i>
          </Button>

          <div
            class="offcanvas offcanvas-start"
            data-bs-scroll="true"
            tabindex="-1"
            id="offcanvasWithBothOptions"
            aria-labelledby="offcanvasWithBothOptionsLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">
                Backdrop with scrolling
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <p>
                Try scrolling the rest of the page to see this option in action.
              </p>
            </div>
          </div>
        </Text>
        <Link to="/">
          <Image
            style={{ cursor: "pointer" }}
            p="0"
            w="90%"
            h="60%"
            src={logo}
            alt="Zoom Car Logo"
          />
        </Link>
      </Flex>
      <Spacer />
      <Flex
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        // w="40%"
        gap="24"
      >
        <Link to="#">
          <Heading fontSize="20px">
            <b>Become a Host</b>
          </Heading>
        </Link>
        <Link to="#">
          <Heading fontSize="20px">
            <b>ZMS</b>
          </Heading>
        </Link>
        <Link to="/login">
          <Heading fontSize="20px">
            <b>Login/Signup</b>
          </Heading>
        </Link>
      </Flex>
    </Flex>
  );
}
