import * as React from 'react'
import { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Zoom from "@mui/material/Zoom";
import { GatsbyImage } from 'gatsby-plugin-image';

const useStyles = makeStyles((theme) => ({
  section: {
    height: "auto",
    backgroundImage: "", //`url(${backgroundUrl})`,
    backgroundSize: "cover",
    backgroundRepeat:"no-repeat",
    backgroundPosition: "center",
  },
  container: {
    height: "100%",
  },
  content: {
    height: "100%",
  },
}));

const Hero = ({
  title,
  description,
  linkUrl,
  linkLabel,
  backgroundData,
  backgroundAlt,
}) => {
  const styles = useStyles()
  const [shouldShow, setShouldShow] = useState(false)
  useEffect(() => setShouldShow(true), []);

  return (
    <Paper className={styles.section}>
      <Container className={styles.container} maxWidth="md">
        <Grid 
          className={styles.content} 
          container 
          rowSpacing={3} 
          alignItems="center"
        >
          <Zoom in={shouldShow}>
            <Grid item sm={6}>
              <Typography component="h1" variant="h3">
                {title}
              </Typography>             
              <Typography component="h2" variant="h4">
                {description}
              </Typography>
              <Box my={3}>
                <Button
                  href={linkUrl}
                  variant="outlined"
                  color="secondary"
                >
                  {linkLabel}
                </Button>
              </Box>            
            </Grid>
          </Zoom>
          <Grid item sm>
            <GatsbyImage image={backgroundData} alt={backgroundAlt} />
          </Grid>                           
        </Grid>  
      </Container>
    </Paper>
  )
}

export default Hero
