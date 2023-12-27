import { Heading } from "@chakra-ui/react";
import { Gamequery } from "../App";

interface Props {
  gameQuery: Gamequery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginY={5} >
      {heading}
    </Heading>
  );
};

export default GameHeading;
