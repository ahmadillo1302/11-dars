import { Card, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TodoItem({
  id,
  title,
  description,
  list,
  setList,
  editTodo,
  deleteTodo,
}) {
  function handleEdit(todoId) {
    const todo = list.find(({ id }) => id === todoId);
    const newTodoName = prompt("Yangi todo nomini kiriting", todo.todoName);
    const newDescription = prompt("Yangi description kiriting", todo.description);

    if (newTodoName && newDescription) {
      const updatedTodo = { id: todoId, todoName: newTodoName, description: newDescription };
      setList(editTodo(updatedTodo, list));
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <Button
          variant="destructive"
          className="mr-3"
          onClick={() => {
            confirm("Rostan todoni o‘chirmoqchimisiz?") &&
              setList(deleteTodo(id, list));
          }}
        >
          O'chirish
        </Button>
        <Button variant="outline" onClick={() => handleEdit(id)}>
          Tahrirlash
        </Button>
      </CardFooter>
    </Card>
  );
}
