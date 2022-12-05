import { Box, Button, Flex, Heading } from "@chakra-ui/react";
function Header() {
  return (
    <Flex
      direction="column"
      justifyContent="space-evenly"
      width="100%"
      height="100vh"
      px={20}
    >
      <Box
        boxSize={"full"}
        height="50%"
        width="100%"
        bgImage="url(https://ecolaundry.es/wp-content/uploads/2021/08/lavar-la-ropa-ciclista.jpg)"
        bgPosition="center"
        bgSize="100% 100%"
        bgRepeat="no-repeat"
      >
        <Flex
          width="100%"
          height="100%"
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap={3}
        >
          <Heading textAlign={"center"} textColor="white" fontWeight={200}>
            DOMINA EL TERRENO
          </Heading>
          <Flex
            direction="row"
            width="100%"
            alignItems="center"
            justifyContent="center"
            gap={3}
          >
            <Button background="transparent" border={"1px solid white"}>
              VER DETALLES
            </Button>
            <Button background="transparent" border={"1px solid white"}>
              VER VIDEOS
            </Button>
          </Flex>
        </Flex>
      </Box>
      <Box
        boxSize={"full"}
        height="40%"
        width="25%"
        bgImage="url(https://ecolaundry.es/wp-content/uploads/2021/08/lavar-la-ropa-ciclista.jpg)"
        bgSize="100% 100%"
        bgRepeat="no-repeat"
        bgPosition="right"
      >
        <Flex
          width="100%"
          height="100%"
          direction="column"
          alignItems="center"
          justifyContent="center"
          gap={3}
        >
          <Heading textAlign={"center"} textColor="white" fontWeight={200}>
            DOMINA EL TERRENO
          </Heading>
          <Flex
            direction="column"
            width="100%"
            alignItems="center"
            justifyContent="center"
            gap={3}
          >
            <Button
              background="transparent"
              border={"1px solid white"}
              width="80%"
            >
              VER DETALLES
            </Button>
            <Button
              background="transparent"
              border={"1px solid white"}
              width="80%"
            >
              VER VIDEOS
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
}
export default Header;
