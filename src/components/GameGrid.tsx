import { Center, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import { Gamequery } from "../App";
import useGames from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  gamequery: Gamequery;
}

const GameGrid = ({ gamequery }: Props) => {
  const { data, error, isLoading } = useGames(gamequery);
  
  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  if (error) return <Text>{error.message}</Text>;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, lg: 3, md: 2, xl: 4 }}
        padding={"10px"}
        spacing={6}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}

        {data?.results.length === 0 ? (
          <Flex paddingTop={5} justifyContent={"center"}>
            <Center fontSize={"2xl"}>Opps!!! No Games are found</Center>{" "}
          </Flex>
        ) : (
          data?.results.map((game) => (
            <GameCardContainer key={game.id}>
              <GameCard game={game} />
            </GameCardContainer>
          ))
        )}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
