import { Grid, GridItem, Heading } from "@chakra-ui/react";
import RefreshButton from "./RefreshButton";

const Header = () => {
  return(
    <Grid templateColumns={{ base: '1fr', md: 'repeat(5, 1fr)' }} gap={2} className="header" padding='15px'>
      <GridItem marginBottom={{ base: 7, md: 0 }} colSpan={{ base: 1, md: 3 }}>
        <Heading as="h1" size="2xl" width="100%">Find the perfect breed for you!</Heading>
      </GridItem>
      <GridItem marginX={{ base: 0, md: 7 }} colSpan={{ base: 1, md: 2 }}>
        <RefreshButton />
      </GridItem>
    </Grid>
  )
}

export default Header;
