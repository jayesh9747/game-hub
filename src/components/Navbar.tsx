import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeswitch from "./ColorModeswitch";
import SearchInput from "./SearchInput";
import UseGameQueryStore from "../store/useGamestore";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack padding={"10px"}>
      <Link to={"/"}>
        <Image src={logo} boxSize={"60px"} objectFit={"cover"}></Image>
      </Link>
      <SearchInput />
      <ColorModeswitch />
    </HStack>
  );
};

export default Navbar;
