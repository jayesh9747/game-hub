import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatfroms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useGame";

interface Props {
  onselectplatfrom: (platform: Platform) => void;
  selectedPlatfrom: Platform | null ;
}

const PlatfromSelector = ({ onselectplatfrom ,selectedPlatfrom }: Props) => {
  const { data, error } = usePlatfroms();
  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatfrom?.name || 'platfrom'}
      </MenuButton>
      <MenuList>
        {data.map((platform) => (
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
