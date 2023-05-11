import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "../app_atm/components/Link";
import ProTip from "../app_atm/components/ProTip";
import Copyright from "../app_atm/components/Copyright";
import ThemeUpdater from "../app_atm/components/ThemeUpdater";

const Home: NextPage = () => {
  return ( 
   
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          MUI v5 + Next.js with TypeScript example
        </Typography>

        <ThemeUpdater />

        <Link href="/about" color="secondary">
          Go to the about page
        </Link>

        <ProTip />
        <Copyright />
      </Box>
    </Container>
   
  );
};

export default Home;
