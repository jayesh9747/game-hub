import { useState } from "react";
import { Grid, GridItem, Show, Flex, Box } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/usePlatforms";
import PlatfromSelector from "./components/PlatfromSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface Gamequery {
  genre: Genre | null;
  platform: Platform | null;
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
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setgameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery} />
          <Flex marginBottom={3}>
            <Box paddingX={1}>
              <PlatfromSelector
                selectedPlatfrom={gameQuery.platform}
                onselectplatfrom={(platform) =>
                  setgameQuery({ ...gameQuery, platform })
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
