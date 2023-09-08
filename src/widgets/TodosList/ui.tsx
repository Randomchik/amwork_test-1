import React from "react";
import { Card, Stack, SkeletonText } from "@chakra-ui/react";

import { useTodos } from "../../entities/Todo/model";
import { TodoEntity } from "../../entities/Todo";
import { TodosListHeader } from "../../entities/TodosListHeader";
import { useTodosInfiniteScroll } from "./model";

export function TodosListWidget() {
  const { todos, setTodos, pageNum, setPageNum } = useTodos();
  const lastElementRef = useTodosInfiniteScroll(pageNum, setPageNum);

  return (
    <Stack
      // sx={{
      //   "&::-webkit-scrollbar": {
      //     width: "16px",
      //     borderRadius: "8px",
      //     backgroundColor: `rgba(0, 0, 0, 0.05)`,
      //   },
      //   "&::-webkit-scrollbar-thumb": {
      //     backgroundColor: `rgba(0, 0, 0, 0.05)`,
      //   },
      // }}
      sx={{
        "::-webkit-scrollbar": {
          display: "none",
        },
      }}
      overflowY="auto"
      width="21vw"
      height="90vh"
    >
      <TodosListHeader todosCount={todos.length} />
      {todos.map((todoItem, index) => {
        const ref = index === todos.length + 1 ? lastElementRef : null;
        return (
          <div ref={ref}>
            <TodoEntity todo={todoItem} />
          </div>
        );
      })}
      <div>
        <Card width="20vw" marginLeft="5px" height={"150px"}>
          <SkeletonText mt="4" noOfLines={4} spacing="4" skeletonHeight="2" />
        </Card>
      </div>
    </Stack>
  );
}
