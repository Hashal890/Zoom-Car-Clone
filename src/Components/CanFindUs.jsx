import { Box, Button, Flex, Text } from "@chakra-ui/react";

export default function CanFindUs() {
  return (
    <Box box-shadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset">
      <Flex
        width="100%"
        justifyContent="space-between"
        alignItems="center"
        border="solid 1px #e0e0e0"
        p="1em 2em"
        m="2em 0em 0em"
        boxSizing="inherit"
        flex="1 0 50%"
      >
        <Box>
          <br />
          <Text fontSize="20px" fontWeight="bold">
            Cant find answer?
          </Text>
          <Text pt="3" fontSize="14px" color="#ccc">
            Get in touch with us. We are here to help you.
          </Text>
          <br />
        </Box>
        <Box>
          <Flex
            borderRadius="4px"
            minHeight="10vh"
            flexWrap="wrap"
            boxSizing="inherit"
            border="1px solid #e0e0e0"
            p="5"
          >
            <Button
              p="5"
              pt="10"
              pb="10"
              bg="whiteAlpha.900"
              _hover={{ bg: "whiteAlpha.900" }}
              textAlign="start"
            >
              <Flex flexDirection="column">
                <Text fontSize="18px" fontWeight="bold" color="#383838">
                  Email
                </Text>
                <br />
                <Text color="#10a310" fontWeight="700" fontSize="14px">
                  help@zoomcar.com
                </Text>
              </Flex>
            </Button>
            <Button
              p="5"
              pt="10"
              pb="10"
              bg="whiteAlpha.900"
              _hover={{ bg: "whiteAlpha.900" }}
              textAlign="start"
            >
              <Flex flexDirection="column">
                <Text fontSize="18px" fontWeight="bold" color="#383838">
                  Call center number
                </Text>
                <br />
                <Text color="#10a310" fontWeight="700" fontSize="14px">
                  08068976666
                </Text>
              </Flex>
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
