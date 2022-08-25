import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";
// import { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/logo.png";
// import AuthContext from "../Context/AuthContext";

export default function Navbar() {
  // const [isAuth, toggleIsAuth] = useContext(AuthContext);
  return (
    <Flex
      h="70px"
      color="whiteAlpha.900"
      bg="#000"
      flexDirection="row"
      minWidth="max-content"
      alignItems="center"
      pl="2"
      pr="16"
      position="sticky"
      top="0"
      zIndex="1000"
    >
      <Flex gap="10px" alignItems="center" h="100%">
        <Text style={{ cursor: "pointer" }}>
          <Button
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
            <Box>
              <Link to="/login">
                <Box bg="#e5e8ec" p="4">
                  <Text
                    color="#323a44"
                    gap="10px"
                    display="flex"
                    alignItems="center"
                    pl="2"
                    fontSize="13px"
                  >
                    <i class="fa-solid fa-user-large"></i>
                    <Text fontSize="15px">Login or Signup</Text>
                  </Text>
                </Box>
              </Link>
              <br />
              <Link to="">
                <Text
                  color="#323a44"
                  gap="20px"
                  display="flex"
                  alignItems="center"
                  w="94%"
                  ml="6%"
                  fontSize="22px"
                >
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.397 16.515c6.05 1.21 6.788 4.53 1.55 5.959-4.254 1.16-9.64 1.16-13.894 0-5.238-1.429-4.5-4.75 1.55-5.96a.75.75 0 1 1 .294 1.471c-1.297.26-2.303.585-2.982.947-.537.285-.8.554-.84.73-.021.1.054.253.341.479.412.323 1.107.633 2.031.885 3.996 1.09 9.11 1.09 13.106 0 .924-.252 1.619-.562 2.03-.885.288-.226.363-.378.341-.478-.04-.177-.302-.446-.839-.731-.68-.362-1.685-.687-2.982-.947a.75.75 0 0 1 .294-1.47zM12 .75c4.044 0 7.125 3.21 7.125 7.125 0 2.764-5.873 12.375-7.125 12.375-1.252 0-7.125-9.61-7.125-12.375C4.875 3.96 7.956.75 12 .75zm0 1.5c-3.201 0-5.625 2.525-5.625 5.625 0 1.032.947 3.176 2.465 5.759l.153.26.319.527a54.206 54.206 0 0 0 2.143 3.247l.242.333.22.292.083.107.19-.248.231-.313.124-.171a54.206 54.206 0 0 0 2.143-3.247l.319-.527c1.607-2.7 2.618-4.953 2.618-6.019 0-3.1-2.424-5.625-5.625-5.625zm0 1.875a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5zm0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5z"
                      fill="#383838"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                  <Text fontSize="15px">Change City</Text>
                </Text>
              </Link>
              <br />
              <Link to="/fleetpolicy">
                <Text
                  color="#323a44"
                  gap="20px"
                  display="flex"
                  alignItems="center"
                  w="94%"
                  ml="6%"
                  fontSize="22px"
                >
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 16.5a2.25 2.25 0 0 1-2.25 2.25h-7.5v.75c0 .385.29.702.663.745L9 20.25h9.75a.75.75 0 0 0 .745-.663l.005-.087v-12a.75.75 0 0 0-.663-.745l-.087-.005H18v9.75zM15.75 3.75H6a.75.75 0 0 0-.745.663L5.25 4.5v12c0 .385.29.702.663.745L6 17.25h9.75a.75.75 0 0 0 .745-.663l.005-.087v-12a.75.75 0 0 0-.663-.745l-.087-.005zm-1.5 9.75a.75.75 0 0 1 .087 1.495L14.25 15H7.5a.75.75 0 0 1-.087-1.495L7.5 13.5h6.75zm0-3.75a.75.75 0 0 1 .087 1.495l-.087.005H7.5a.75.75 0 0 1-.087-1.495L7.5 9.75h6.75zm0-3.75a.75.75 0 0 1 .087 1.495l-.087.005H7.5a.75.75 0 0 1-.087-1.495L7.5 6h6.75zM6 18.75a2.25 2.25 0 0 1-2.25-2.25v-12A2.25 2.25 0 0 1 6 2.25h9.75A2.25 2.25 0 0 1 18 4.5v.75h.75A2.25 2.25 0 0 1 21 7.5v12a2.25 2.25 0 0 1-2.25 2.25H9a2.25 2.25 0 0 1-2.25-2.25v-.75H6z"
                      fill="#383838"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                  <Text fontSize="15px">Zoomcar Fleet Vehicles Policies</Text>
                </Text>
              </Link>
              <br />
              <Link to="/hostpolicy">
                <Text
                  color="#323a44"
                  gap="20px"
                  display="flex"
                  alignItems="center"
                  w="94%"
                  ml="6%"
                  fontSize="22px"
                >
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 16.5a2.25 2.25 0 0 1-2.25 2.25h-7.5v.75c0 .385.29.702.663.745L9 20.25h9.75a.75.75 0 0 0 .745-.663l.005-.087v-12a.75.75 0 0 0-.663-.745l-.087-.005H18v9.75zM15.75 3.75H6a.75.75 0 0 0-.745.663L5.25 4.5v12c0 .385.29.702.663.745L6 17.25h9.75a.75.75 0 0 0 .745-.663l.005-.087v-12a.75.75 0 0 0-.663-.745l-.087-.005zm-1.5 9.75a.75.75 0 0 1 .087 1.495L14.25 15H7.5a.75.75 0 0 1-.087-1.495L7.5 13.5h6.75zm0-3.75a.75.75 0 0 1 .087 1.495l-.087.005H7.5a.75.75 0 0 1-.087-1.495L7.5 9.75h6.75zm0-3.75a.75.75 0 0 1 .087 1.495l-.087.005H7.5a.75.75 0 0 1-.087-1.495L7.5 6h6.75zM6 18.75a2.25 2.25 0 0 1-2.25-2.25v-12A2.25 2.25 0 0 1 6 2.25h9.75A2.25 2.25 0 0 1 18 4.5v.75h.75A2.25 2.25 0 0 1 21 7.5v12a2.25 2.25 0 0 1-2.25 2.25H9a2.25 2.25 0 0 1-2.25-2.25v-.75H6z"
                      fill="#383838"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                  <Text fontSize="15px">Zoomcar Host Vehicles Policies</Text>
                </Text>
              </Link>
              <br />
              <Link to="/helpandsupport">
                <Text
                  color="#323a44"
                  gap="20px"
                  display="flex"
                  alignItems="center"
                  w="94%"
                  ml="6%"
                  fontSize="22px"
                >
                  <svg
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="m8.743 9.409 1.347-1.184a2.366 2.366 0 0 0 .057-3.493L6.575 1.378a2.306 2.306 0 0 0-3.577.519C1.385 4.633.629 6.818.766 8.505c.251 3.114 2.06 6.275 5.384 9.494 3.44 3.331 6.748 5.095 9.936 5.246 1.561.074 3.548-.623 6.004-2.06a2.363 2.363 0 0 0 .496-3.676l-3.457-3.567a2.305 2.305 0 0 0-3.173-.14l-.13.122-1.41 1.425a4.56 4.56 0 0 0-.383 5.956c-2.15-.65-4.422-2.122-6.812-4.436-2.33-2.258-3.827-4.434-4.508-6.523l-.081-.26a5.348 5.348 0 0 0 6.111-.677zm6.69 11.147a2.98 2.98 0 0 1 .079-4.1l1.415-1.43a.769.769 0 0 1 1.096.011l3.457 3.568a.788.788 0 0 1-.165 1.225c-1.95 1.14-3.521 1.747-4.688 1.841l-.164.01-1.03-1.125zM4.328 2.698a.769.769 0 0 1 1.192-.173l3.573 3.354a.789.789 0 0 1-.019 1.164L7.727 8.228a3.812 3.812 0 0 1-4.64.31L2.3 8.012c.032-1.274.699-3.058 2.028-5.314z"
                      fill="#383838"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                  <Text fontSize="15px">Help & Support</Text>
                </Text>
              </Link>
            </Box>
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
      <Flex alignItems="center" justifyContent="space-around" gap="32">
        <Link to="#">
          <Heading fontSize="20px" _hover={{ color: "white" }}>
            <b>Become a Host</b>
          </Heading>
        </Link>
        <Link to="#">
          <Heading fontSize="20px" _hover={{ color: "white" }}>
            <b>ZMS</b>
          </Heading>
        </Link>
        {/* {isAuth ? (
          <Button onClick={toggleIsAuth}>Logout</Button>
        ) : ( */}
          <Link to="/login">
            <Heading fontSize="20px" _hover={{ color: "white" }}>
              <b>Login/Signup</b>
            </Heading>
          </Link>
        {/* )} */}
      </Flex>
    </Flex>
  );
}
