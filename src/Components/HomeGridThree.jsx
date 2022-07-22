import { Box, Grid, GridItem, Image, Text } from "@chakra-ui/react";

export default function HomeGridThree() {
  return (
    <Box width="60%" margin="auto">
      <Text textAlign="start" fontWeight="bold" pb="3">
        OFFERS
      </Text>
      <Grid templateColumns="repeat(3,1fr)" gap="30px">
        <GridItem>
          <Image
            src="https://zoomcar-assets.zoomcar.com/photos/original/0d948091d1befad4507bd5710ad03a309f5b5345.jpg?1651837793"
            alt="Grid Image 1"
            borderRadius="10px"
            w="100%"
            h="100%"
          />
        </GridItem>
        <GridItem>
          <Image
            src="https://zoomcar-assets.zoomcar.com/photos/original/1d96a8389f06beb050e83374b5e3ac9cb448e54c.jpg?1655705601"
            alt="Grid Image 2"
            borderRadius="10px"
            w="100%"
            h="100%"
          />
        </GridItem>
        <GridItem>
          <Image
            src="https://zoomcar-assets.zoomcar.com/photos/original/67aa017f464b45e52f7bc9a206245e5f15f5a316.jpg?1655478529"
            alt="Grid Image 3"
            borderRadius="10px"
            w="100%"
            h="100%"
          />
        </GridItem>
      </Grid>
    </Box>
  );
}
