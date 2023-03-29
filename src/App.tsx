import { Grid, GridItem } from "@chakra-ui/react"
import { useState } from "react";
import DogBreedGrid from "./components/DogBreedGrid"
import NavBar from "./components/NavBar"

export interface BreedQuery {
  searchText: string;
}

function App() {
  const [breedQuery, setBreedQuery] = useState<BreedQuery>({} as BreedQuery);

  return (
    <Grid templateAreas={`"nav" "main"`} templateColumns="1fr">
      <GridItem area="nav">
        <NavBar onSearch={(searchText) => setBreedQuery({...breedQuery, searchText})} />
      </GridItem>
      <GridItem area="main">
        <DogBreedGrid breedQuery={breedQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
