import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, Box } from '@chakra-ui/react'

import { Router } from "./Router";
import "./App.css";

export function App() {
  return (
    <BrowserRouter>
      <ChakraProvider>
        <Box style={{ backgroundColor: "rgb(99, 154, 255)" }}>AMwork</Box>
          {/* <Sider style={{ backgroundColor: "rgb(99, 154, 255)" }} width={"35vw"}>
            <RouteTable />
          </Sider> */}
          <Box>
            <Router />
          </Box>
        </ChakraProvider>
      </BrowserRouter>
  );
}
