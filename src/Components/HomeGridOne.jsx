import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

export default function HomeGridOne() {
  return (
    <Box>
      <Grid
        templateColumns="repeat(2,1fr)"
        width="60%"
        margin="auto"
        gap="30px"
      >
        <GridItem
          borderRadius="4px"
          border="1px solid #d8d8d8"
          boxShadow="0 2px 2px 0 rgb(0 0 0 / 20%)"
        >
          <Flex borderBottom="1px solid lightgray">
            <Box pt="7" pl="5" textAlign="start" w="100%">
              <Heading fontSize="20px">
                Do your friends like a weekend getaway?
              </Heading>
              <br />
              <Text fontSize="14px" w="70%">
                You earn 1200 in Z-Points. Your friend gets 40% off on first
                booking
              </Text>
              <br />
            </Box>
            <Box w="60%">
              <Image
                src="https://zoomcar-assets.zoomcar.com/images/original/1e3becafed3e6151b17c104858b336bb7e076c11.jpeg?1658213048"
                alt="Grid Item 1"
              />
            </Box>
          </Flex>
          <Flex alignItems="center" pl="5" pt="2" pb="2">
            <ArrowForwardIcon color="green.500" boxSize="1.5em" />
            <Button _hover={{ bg: "whiteAlpha.900" }} bg="whiteAlpha.900">
              REFER FRIENDS
            </Button>
          </Flex>
        </GridItem>
        <GridItem
          borderRadius="4px"
          border="1px solid #d8d8d8"
          boxShadow="0 2px 2px 0 rgb(0 0 0 / 20%)"
        >
          <Flex borderBottom="1px solid lightgray">
            <Box pt="7" pl="5" textAlign="start" w="100%">
              <Heading fontSize="22px">UP TO 50% OFF</Heading>
              <Text color="gray.500" fontWeight="bold">
                on your first booking from the app!
              </Text>
              <br />
              <Box
                p="4"
                border="2px dashed #c8c5c5"
                w="fit-content"
                fontSize="20px"
                fontWeight="bold"
                color="#b9b6b6"
              >
                Use Code: ZOOMAPP
              </Box>
              <br />
              <Text fontSize="20px" fontWeight="bold" color="green.500">
                Install Zoomcar App now!
              </Text>
              <br />
            </Box>
            <Box w="60%">
              <Image
                src="https://www.zoomcar.com/img/cellphone.png"
                alt="Grid Item 2"
              />
            </Box>
          </Flex>
        </GridItem>
      </Grid>
    </Box>
  );
}
