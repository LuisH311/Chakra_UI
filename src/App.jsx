import "./App.css";
import { Box, ChakraProvider } from "@chakra-ui/react";
import Header from "./Header";

function App() {
  return (
    <ChakraProvider>
      <Header />
    </ChakraProvider>
  );
}

export default App;
