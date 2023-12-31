import { useState } from "react";
import { Grid, GridItem, Show, Flex, Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import PlatformSelector from "./components/PlatfromSelector";

export interface Gamequery {
  genreID?: number;
  platformId?: number;
  sortOrder: string;
  searchText: string;
}

const App = () => {
  const [gameQuery, setgameQuery] = useState<Gamequery>({} as Gamequery);
  return (
    <Grid
      templateAreas={{ base: `"nav" "main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <Navbar
          onsearch={(searchText) => setgameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenreId={gameQuery.genreID}
            onSelectGenre={(genre) =>
              setgameQuery({ ...gameQuery, genreID: genre.id })
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={3}>
            <Box paddingX={1}>
              <PlatformSelector
                selectedPlatformID={gameQuery.platformId}
                onselectplatform={(platform) =>
                  setgameQuery({ ...gameQuery, platformId: platform.id })
                }
              />
            </Box>
            <SortSelector
              sortorder={gameQuery.sortOrder}
              onSelectsortorder={(sortOrder) =>
                setgameQuery({ ...gameQuery, sortOrder })
              }
            />
          </Flex>
        </Box>
        <GameGrid gamequery={gameQuery} />
      </GridItem>
    </Grid>
  );
};

export default App;
