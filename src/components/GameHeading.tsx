import { Heading } from "@chakra-ui/react";
import { Gamequery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatfroms from "../hooks/usePlatforms";
import usePlatformById from "../hooks/usePlatformById";
import useGenreById from "../hooks/useGenreById";

interface Props {
  gameQuery: Gamequery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useGenreById(gameQuery.genreID);
  const platform = usePlatformById(gameQuery.platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
