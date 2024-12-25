import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import TodoItem from "./TodoItem";
import { addTodo, deleteTodo, editTodo } from "../crud";
import { toast } from "sonner";

export default function TodoParent() {
  const [list, setList] = useState([]);
  const [todoName, setTodoName] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!todoName.trim() || !description.trim()) {
      toast.warning("Barcha maydonlarni to‘ldiring!");
      return;
    }

    const newTodo = {
      id: uuidv4(), // UUID avtomatik generatsiya qilinadi
      todoName: todoName.trim(),
      description: description.trim(),
    };

    setList(addTodo(newTodo, list)); // Yangi todo ni ro‘yxatga qo‘shish
    setTodoName(""); // Inputlarni tozalash
    setDescription("");
  }

  return (
    <div className="flex flex-col items-center py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 border p-5 rounded-md shadow-md"
      >
        <h2 className="text-xl font-semibold text-center">Yangi Todo Qo‘shish</h2>
        <div>
          <Label htmlFor="todoName">Todo nomi</Label>
          <Input
            id="todoName"
            name="todoName"
            placeholder="Todo nomini kiriting"
            value={todoName}
            onChange={(e) => setTodoName(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="description">Description</Label>
          <Input
            id="description"
            name="description"
            placeholder="Todo uchun tavsif kiriting"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <Button type="submit" className="w-full">
          Qo‘shish
        </Button>
      </form>

      <ul className="flex flex-col max-w-md w-full gap-5 mt-10">
        {list.length > 0 ? (
          list.map(({ id, todoName, description }) => (
            <li key={id}>
              <TodoItem
                id={id}
                title={todoName}
                description={description}
                list={list}
                setList={setList}
                editTodo={editTodo}
                deleteTodo={deleteTodo}
              />
            </li>
          ))
        ) : (
          <li className="text-center text-gray-500">Ma’lumotlar yo‘q</li>
        )}
      </ul>
    </div>
  );
}
