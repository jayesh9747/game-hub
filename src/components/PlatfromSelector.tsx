import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGame";
import usePlatfroms from "../hooks/usePlatforms";

interface Props {
  onselectplatfrom: (platform: Platform) => void;
  selectedPlatfrom: Platform | null;
}

const PlatfromSelector = ({ onselectplatfrom, selectedPlatfrom }: Props) => {
  const { data, error } = usePlatfroms();
  console.log("calling from platfrom icon list", data);
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatfrom?.name || "platfrom"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onselectplatfrom(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatfromSelector;
