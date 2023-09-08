import React from "react";
import { Flex } from "@chakra-ui/react";

import { TodosListWidget } from "../widgets/TodosList";

export function TodosPage() {
  return (
    <Flex justify="center">
      <TodosListWidget />
    </Flex>
  );
}
