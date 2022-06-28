import React from "react";
import { makeStyles } from "@mui/styles";
import EmailIcon from '@mui/icons-material/Email';
import Typography from "@mui/material/Typography";
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";

import Nav from './Nav';

const Header = () => {
  const useStyles = makeStyles((theme) => ({
    container: {
      height: '100%',
    },
    content: {
      height: '100%',
    },
   }));
  
  const styles = useStyles()

  return (    
      <header>
        <Container 
          className={styles.container} 
          maxWidth="md"
          sx={{ 
            display: {
                xs: 'none',
                sm: 'block',
              }
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gap: 1,
              gridTemplateColumns: 'repeat(2, 1fr)',
            }}
          >
            <Grid
              className={styles.content}
              container
              alignItems="center"
              columnSpacing={{ sm: .5, md: 1 }}
              justifyContent="flex-start"
            >
              <Grid item>
                <EmailIcon />              
              </Grid>
              <Grid item>
                  <Typography>contact@gatsby.com</Typography>
              </Grid>
            </Grid>
            <Grid
              className={styles.content}
              container
              alignItems="center"
              columnSpacing={{ sm: .5, md: 1 }}
              justifyContent="flex-end"
            >
              <Grid item>
                <PhoneEnabledIcon />
              </Grid>
              <Grid item>
                  <Typography>+1-555-5555</Typography>
              </Grid>
            </Grid>        
          </Box>          
        </Container>
        <Nav />
      </header>   
  )    
}

export default Header