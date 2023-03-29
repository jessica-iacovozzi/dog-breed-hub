import { Grid, GridItem } from "@chakra-ui/react"
import DogBreedGrid from "./components/DogBreedGrid"
import NavBar from "./components/NavBar"

function App() {
  return (
    <Grid templateAreas={`"nav" "main"`} templateColumns="1fr">
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <GridItem area="main">
        <DogBreedGrid />
      </GridItem>
    </Grid>
  )
}

export default App
