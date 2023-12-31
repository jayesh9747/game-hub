import {
  Box,
  Button,
  Center,
  Flex,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Gamequery } from "../App";
import useGames from "../hooks/useGame";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

interface Props {
  gamequery: Gamequery;
}

const GameGrid = ({ gamequery }: Props) => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames(gamequery);

  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  if (error) return <Text>{error.message}</Text>;

  const FetchedGamesCount =
    data?.pages.reduce((total, pages) => total + pages.results.length, 0) || 0;

  return (
    <>
      <InfiniteScroll
        dataLength={FetchedGamesCount}
        next={() => fetchNextPage()}
        hasMore={!!hasNextPage}
        loader={isLoading}
      >
        <SimpleGrid
          columns={{ sm: 1, lg: 3, md: 2, xl: 4 }}
          spacing={6}
          padding={"10px"}
        >
          {isLoading &&
            skeletons.map((skeleton) => (
              <GameCardContainer key={skeleton}>
                <GameCardSkeleton />
              </GameCardContainer>
            ))}

          {data?.pages.map((page, index) => (
            <React.Fragment key={index}>
              {page.results.map((game) => (
                <GameCardContainer key={game.id}>
                  <GameCard game={game} />
                </GameCardContainer>
              ))}
            </React.Fragment>
          ))}
        </SimpleGrid>
      </InfiniteScroll>
    </>
  );
};

export default GameGrid;
