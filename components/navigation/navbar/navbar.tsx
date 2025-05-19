import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center bg-background h-20 drop-shadow-md">
      <div className="w-full mx-8 flex justify-between items-center text-sm">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold">
            MyApp
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/profile" className="text-lg">
            Profile
          </Link>
          <Link href="/resume" className="text-lg">
            Resume
          </Link>
          <Link href="/settings" className="text-lg">
            Settings
          </Link>
          <Link
            href="/login"
            className="py-3 px-4 rounded-lg text-base bg-primary hover:bg-primary/50 transition-all ease-in duration-200 text-white outline-0">
            Log In
          </Link>
          <Link
            href="/signup"
            className="py-3 px-4 rounded-lg text-base bg-secondary hover:bg-secondary/50 transition-all ease-in duration-200 outline-0">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
