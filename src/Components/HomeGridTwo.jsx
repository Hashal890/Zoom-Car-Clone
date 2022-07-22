import { Box, Grid, GridItem, Image } from "@chakra-ui/react";

export default function HomeGridTwo() {
  return (
    <Box bg="#f4f4f4" pt="5" pb="10">
      <Grid
        templateColumns="repeat(2,1fr)"
        width="60%"
        margin="auto"
        gap="30px"
      >
        <GridItem>
          <Image
            src="https://zoomcar-assets.zoomcar.com/pictures/original/418d6028cb695a1f4c51e31d190361c03493e257.jpeg?1655973605"
            alt="Grid Image 1"
            borderRadius="10px"
            w="100%"
            h="100%"
          />
        </GridItem>
        <GridItem>
          <Image
            src="https://zoomcar-assets.zoomcar.com/pictures/original/d70e7f58da384df0f3ba169cf19e8e931879c66c.jpeg?1652354515"
            alt="Grid Image 2"
            borderRadius="10px"
            w="100%"
            h="100%"
          />
        </GridItem>
      </Grid>
      <br />
      <br />
      <Grid
        templateColumns="repeat(2,1fr)"
        width="60%"
        margin="auto"
        gap="30px"
      >
        <GridItem>
          <Image
            src="https://zoomcar-assets.zoomcar.com/pictures/original/e3dfe0ed91abc29facaf56a327b4498ce4e9b75e.jpeg?1652363808"
            alt="Grid Image 3"
            borderRadius="10px"
            w="100%"
            h="100%"
          />
        </GridItem>
        <GridItem>
          <Image
            src="https://zoomcar-assets.zoomcar.com/pictures/original/55c3970a33c8f4d10dd3c9ace39d20e32af5c8ba.jpg?1651758755"
            alt="Grid Image 4"
            borderRadius="10px"
            w="100%"
            h="100%"
          />
        </GridItem>
      </Grid>
    </Box>
  );
}
