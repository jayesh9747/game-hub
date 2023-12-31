import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGame";
import usePlatforms from "../hooks/usePlatforms";
import usePlatformById from "../hooks/usePlatformById";

interface Props {
  onselectplatform: (platform: Platform) => void;
  selectedPlatformID?: Number;
}

const PlatformSelector = ({ onselectplatform, selectedPlatformID }: Props) => {
  const { data, error } = usePlatforms();
  const selectedPlatform = usePlatformById(selectedPlatformID);

  if (error) return null;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "platform"}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            onClick={() => onselectplatform(platform)}
            key={platform.id}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
