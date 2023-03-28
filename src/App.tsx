import { Grid, GridItem, Show } from "@chakra-ui/react"

function App() {
  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem area="nav" bg="tan">
        Nav
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" bg="teal">
          Aside
        </GridItem>
      </Show>
      <GridItem area="main" bg="indigo">
        Main
      </GridItem>
    </Grid>
  )
}

export default App
