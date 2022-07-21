import { Box, Image, Text } from "@chakra-ui/react";
import footer from "../Assets/footer.png";

export default function Footer() {
  return (
    <Box>
      <Image w="100%" src={footer} alt="Footer Image" />
      <Text color="#666" p="3" fontSize="12px" textAlign="center">
        © Copyright 2022 Zoomcar India Private Ltd. All rights reserved
      </Text>
    </Box>
  );
}
