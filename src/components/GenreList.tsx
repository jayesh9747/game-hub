import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCropImgageUrl from "../services/image-url";
import UseGenreList from "../hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreNewList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, error, isLoading } = UseGenreList();
  console.log("this is from api new clinet", data);
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
                src={getCropImgageUrl(genre.image_background)}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
                onClick={() => {
                  onSelectGenre(genre);
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
