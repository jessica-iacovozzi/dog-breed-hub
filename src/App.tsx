import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import DogBreedGrid from "./components/DogBreedGrid";
import DogBreedHeading from "./components/DogBreedHeading";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

export interface BreedQuery {
  searchText?: string;
  sortOrder?: string;
}

function App() {
  const [breedQuery, setBreedQuery] = useState<BreedQuery>({} as BreedQuery);

  return (
    <Grid templateAreas={`"nav"
                          "header"
                          "main"`}
          templateColumns="fr"
          gap='2'>
      <GridItem area="nav">
        <NavBar onSearch={(searchText) => setBreedQuery({...breedQuery, searchText})} />
      </GridItem>
      <GridItem area="header" margin={4}>
        <Header />
      </GridItem>
      <GridItem area="main">
        <DogBreedHeading breedQuery={breedQuery} />
        <DogBreedGrid breedQuery={breedQuery} />
      </GridItem>
    </Grid>
  )
}

export default App;
