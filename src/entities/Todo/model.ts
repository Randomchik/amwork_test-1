import { useEffect, useState } from "react"
import { faker } from "@faker-js/faker";

import { server } from "../../app/server";

const TOTAL_PAGES = 20;

export type TTodosResponse = {
  userId: number;
  id: number;
  title: number;
  completed: boolean;
};

export type TTodo = TTodosResponse & {
  start: Date;
  end: Date;
  description: string;
  tag1: string;
  tag2: string;
};

async function fetchTodos(pageNum: number): Promise<TTodosResponse[]> {
  try {
    const todos = await server.get(`todos?_page=${pageNum}`);
    return todos.data;
  } catch {
    console.log("Network Erro");
    return [];
  }
}

export function useTodos() {
  const [todos, setTodos] = useState<TTodo[]>([]);
  const [pageNum, setPageNum] = useState(1);

  async function getAndSetTodos(pageNum: number) {
    const newTodos = await fetchTodos(pageNum);
    const newTodosClientModel = newTodos.map((todoItem) => ({
      ...todoItem,
      start: faker.date.recent(),
      end: faker.date.future(),
      description: faker.word.words({ count: { min: 3, max: 30 } }),
      tag1: faker.word.noun(),
      tag2: faker.word.verb(),
    }));
    setTodos([...todos, ...newTodosClientModel]);
  }

  useEffect(() => {
    pageNum <= TOTAL_PAGES && getAndSetTodos(pageNum);
  }, [pageNum]);

  return { todos, setTodos, pageNum, setPageNum };
}
