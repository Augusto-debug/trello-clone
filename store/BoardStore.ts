import { databases, storage } from "@/appwrite";
import { getTodosGroupedByColumns } from "@/utils/getTodosGroupedByColumns";
import { create } from "zustand";

interface BoardState {
  board: Board;
  getBoard: () => void;
  setBoardState: (board: Board) => void;
  updateTodoInDb: (todo: Todo, columnId: TypedColumn) => void;
  searchString: string;
  setSearchString: (searchString: string) => void;
  deleteTask: (taskIndex: number, todoId: Todo, id: TypedColumn) => void;
  newTaskInput: string;
  setNewTaskInput: (input: string) => void;
  newTaskType: TypedColumn;
  setNewTaskType: (columnId: TypedColumn) => void;
}

export const useBoardStore = create<BoardState>((set, get) => ({
  board: {
    columns: new Map<TypedColumn, Column>(),
  },
  searchString: "",
  setSearchString: (searchString) => set({ searchString }),
  getBoard: async () => {
    const board = await getTodosGroupedByColumns();
    set({ board });
  },
  setBoardState: (board) => set({ board }),
  updateTodoInDb: async (todo, columnId) => {
    await databases.updateDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_COLLECTION_ID!,
      todo.$id,
      {
        title: todo.title,
        status: columnId,
      }
    );
  },
  deleteTask: async (taskIndex: number, todo: Todo, id: TypedColumn) => {
    const newColumn = new Map(get().board.columns);
    newColumn.get(id)?.todos.splice(taskIndex, 1);

    set({ board: { columns: newColumn } });

    if (todo.image) {
      await storage.deleteFile(todo.image.bucketId, todo.image.fileId);
    }

    await databases.deleteDocument(
      process.env.NEXT_PUBLIC_DATABASE_ID!,
      process.env.NEXT_PUBLIC_COLLECTION_ID!,
      todo.$id
    );
  },
  newTaskInput: "",
  setNewTaskInput: (input) => set({ newTaskInput: input }),
  newTaskType: "todo",
  setNewTaskType: (type) => set({ newTaskType: type }),
}));
