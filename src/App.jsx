import { Toaster } from "sonner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoParent from "./components/TodoParent";

export default function App() {
  return (
    <>
      <Header />
      <main className="grow">
        <TodoParent></TodoParent>
      </main>
      <Footer />
      <Toaster position="top-center" richColors />
    </>
  );
}
