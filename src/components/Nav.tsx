import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-900 shadow-md shadow-gray-950/30 text-white p-4 z-20">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-bold flex flex-row space-x-4">
          <img src="public/logo.svg" alt="logo" className="w-8 h-8 invert" />
          <p className="flex text-center items-center">ZenFlow</p>
        </Link>
        <div className="space-x-4">
          <Link
            to="/"
            className="px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 active:bg-gray-600 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 active:bg-gray-600 transition-colors"
          >
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};
