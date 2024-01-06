import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGame";
import usePlatforms from "../hooks/usePlatforms";
import usePlatformById from "../hooks/usePlatformById";
import UseGameQueryStore from "../store/useGamestore";

const PlatformSelector = () => {
  const selectedPlatformID = UseGameQueryStore((s) => s.gameQuery.platformId);
  const setSelectedPlatformId = UseGameQueryStore((s) => s.setPlatformId);
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
            onClick={() => setSelectedPlatformId(platform.id)}
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
