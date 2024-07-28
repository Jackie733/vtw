import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <header className="dark:bg-stone-90 fixed top-0 z-50 mx-auto flex w-full items-center px-4 shadow dark:border-b dark:border-stone-600 sm:px-20">
      <h1 className="flex-1">View the world</h1>
      <ModeToggle />
    </header>
  );
}
