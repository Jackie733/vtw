import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <header className="dark:bg-stone-90 fixed top-0 z-50 mx-auto flex h-12 w-full items-center bg-white px-4 shadow dark:border-b dark:border-stone-600 dark:bg-black sm:px-20">
      <h1 className="flex-1 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text font-bold text-transparent">
        View the world
      </h1>
      <ModeToggle />
    </header>
  );
}
