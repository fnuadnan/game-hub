import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

const App = () => {
  return (
    <div>
      <Grid
        templateAreas={{
          base: `"nav" 
                 "main"`,
          lg: `"nav nav" 
               "aside main"`,
        }}
      >
        <GridItem area="nav" bg={"coral"}>
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" bg={"gold"}>
            Aside
          </GridItem>
        </Show>
        <GridItem area="main" bg={"dodgerblue"}>
          <GameGrid />
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
