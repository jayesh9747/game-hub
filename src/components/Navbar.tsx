import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeswitch from "./ColorModeswitch";
import SearchInput from "./SearchInput";

interface Props {
  onsearch: (searchText: string) => void;
}

const Navbar = ({ onsearch }: Props) => {
  return (
    <HStack padding={"10px"}>
      <Image src={logo} boxSize={"60px"}></Image>
      <SearchInput onsearch={(searchText) => onsearch(searchText)} />
      <ColorModeswitch />
    </HStack>
  );
};

export default Navbar;
