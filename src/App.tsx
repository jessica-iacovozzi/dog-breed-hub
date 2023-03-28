import { Grid, GridItem, Show } from "@chakra-ui/react"
import DogBreedGrid from "./components/DogBreedGrid"
import NavBar from "./components/NavBar"

function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main">
        <DogBreedGrid />
      </GridItem>
    </Grid>
  )
}

export default App
