import { Box, Center, Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import NavBar from "../NavBar";

export default function Layout({ children }) {
  const widthDisplay = useBreakpointValue({
    base: "flex",
    md: "flex",
    lg: "none",
    xl: "none",
  });

  return (
    <Flex display={widthDisplay} h="full" gap={"10"} flexDirection="column">
      <Flex as={"header"} position="fixed" zIndex={1} w="full">
        <NavBar />
      </Flex>

      <Box as={"main"} padding={2} mt={16}>
        {children}
      </Box>

      <Flex as={"footer"} justify={"center"} padding={2}>
        <Text fontSize={"xs"} fontWeight={"semibold"} color={"blue.800"}>
          &copy; Desenvolvido por Rachinha Tech | 2023
        </Text>
      </Flex>
    </Flex>
  );
}
