import { Box, Image, Text } from "@chakra-ui/react";
import footer from "../Assets/footer.png";

export default function Footer() {
  return (
    <Box>
      <Box h="214px" maxWidth="229px" margin="0 1rem" bgSize="contain"  bgImage="https://www.zoomcar.com/build/6b51f1464b17dbb1d002f16e26572662.png" ></Box>
      <Text color="#666" p="3" fontSize="12px" textAlign="center">
        © Copyright 2022 Zoomcar India Private Ltd. All rights reserved
      </Text>
    </Box>
  );
}
