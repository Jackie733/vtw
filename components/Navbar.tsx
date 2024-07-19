import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  return (
    <header className="dark:bg-stone-90 fixed top-0 z-50 mx-auto w-full bg-white px-4 shadow sm:px-20 dark:border-b dark:border-stone-600">
      View the world
      <ModeToggle />
    </header>
  );
}
