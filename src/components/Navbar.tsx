import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeswitch from "./ColorModeswitch";
import SearchInput from "./SearchInput";
import UseGameQueryStore from "../store/useGamestore";

const Navbar = () => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize={"60px"}></Image>
      <SearchInput />
      <ColorModeswitch />
    </HStack>
  );
};

export default Navbar;
