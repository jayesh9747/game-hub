import { Heading } from "@chakra-ui/react";
import { Gamequery } from "../App";
import useGenres from "../hooks/useGenres";
import usePlatfroms from "../hooks/usePlatforms";

interface Props {
  gameQuery: Gamequery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatfroms();
  const genre = genres.results.find((g) => g.id === gameQuery.genreID);
  const platform = platforms.results.find((p) => p.id == gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <Heading as="h1" marginY={5}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
