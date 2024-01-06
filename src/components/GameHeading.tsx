import { Heading } from "@chakra-ui/react";
import usePlatformById from "../hooks/usePlatformById";
import useGenreById from "../hooks/useGenreById";
import UseGameQueryStore from "../store/useGamestore";

const GameHeading = () => {
  const genreID = UseGameQueryStore((s) => s.gameQuery.genreID);
  const genre = useGenreById(genreID);

  const platformId = UseGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatformById(platformId);
  
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
