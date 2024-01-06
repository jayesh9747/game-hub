import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Spinner,
} from "@chakra-ui/react";
import UseGenreList, { Genre } from "../hooks/useGenres";
import getCropImageUrl from "../services/image-url";
import UseGameQueryStore from "../store/useGamestore";

const GenreNewList = () => {
  const { data, error, isLoading } = UseGenreList();
  const selectedGenreId = UseGameQueryStore((s) => s.gameQuery.genreID);
  const setselectedGenreId = UseGameQueryStore((s) => s.setGenreId);
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre: Genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit={"cover"}
                src={getCropImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={selectedGenreId === genre.id ? "bold" : "normal"}
                onClick={() => {
                  setselectedGenreId(genre.id);
                }}
                variant="link"
                fontSize="lg"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreNewList;
