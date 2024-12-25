import { PlusIcon } from "@radix-ui/react-icons";
import { Button } from "../components/ui/button";

export default function Header() {
  return (
    <header className="py-5 shadow-sm bg-gray-100">
      <div className="container flex items-center justify-between px-5">
        <h1 className="font-semibold text-2xl text-gray-800">
          Todo App
        </h1>
        <Button
          aria-label="Add new todo"
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium bg-blue-500 text-white hover:bg-blue-600"
        >
          <PlusIcon className="w-4 h-4" />
          <span>Yangi Todo Qo'shish</span>
        </Button>
      </div>
    </header>
  );
}
