import { Button, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-pink-400 via-pink-300 to-blue-400 rounded-xl text-white">
          Save Street Child
        </span>
        <span className="text-base px-1">Sidoarjo</span>
      </Link>
      <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        ></TextInput>
      </form>
      <Button className="w-12 h-10 lg:hidden" color="pink" pill>
        <AiOutlineSearch />
      </Button>
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="pink" pill>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToPink">Sign In</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/"} as={"div"} color="blue">
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Project</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
