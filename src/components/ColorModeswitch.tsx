import React from "react";
import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeswitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode == "dark"}
        onChange={toggleColorMode}
      ></Switch>
      <Text whiteSpace="nowrap">Dark mode</Text>
    </HStack>
  );
};

export default ColorModeswitch;
