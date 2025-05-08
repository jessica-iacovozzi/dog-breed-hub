import { Box, Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import DogBreedGrid from "./components/DogBreedGrid";
import DogBreedHeading from "./components/DogBreedHeading";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import SkipLinks from "./components/SkipLinks";

export interface BreedQuery {
  searchText?: string;
  sortOrder?: string;
}

function App() {
  const [breedQuery, setBreedQuery] = useState<BreedQuery>({} as BreedQuery);

  return (
    <Box position="relative">
      <SkipLinks />
      <Grid templateAreas={`"nav"
                          "header"
                          "main"`}
          templateColumns="fr"
          gap='2'>
        <GridItem area="nav">
          <nav id="navigation" aria-label="Main Navigation">
            <NavBar onSearch={(searchText) => setBreedQuery({...breedQuery, searchText})} />
          </nav>
        </GridItem>
        <GridItem area="header" margin={4}>
          <Header />
        </GridItem>
        <GridItem area="main">
          <main id="main-content" tabIndex={-1}>
            <DogBreedHeading breedQuery={breedQuery} />
            <DogBreedGrid breedQuery={breedQuery} />
          </main>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default App;
