import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

import MenuLink from './MenuLink';

const drawerWidth = 200;

const Nav = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      prismicNavigations {
        data {
          body {
            ... on PrismicNavigationsDataBodyNavItem {
              slice_type
              primary {
                label {
                  text
                }
                nav_to        
              }
            }
          }
        }
      }
    }
  `  
  )

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const topNav = data.prismicNavigations.data.body

  const useStyles = makeStyles({
    container: {
      height: '100%',
    },
    rightToolbar: {
      marginLeft: "auto",
      marginRight: -16,
    },
  });

  const styles = useStyles()

  // Temp dev contstant => to delete
  const rightToolbar = [
    "Contact",
    "Login",
  ]

  return (
    <Box 
      sx={{
        alignItems: "center", 
        height: 60, 
        display: 'flex'
        }}
    >
      <AppBar component="nav" position="static" color="default" enableColorOnDark>
       <Container className={styles.container} maxWidth="md" >
        <Toolbar sx={{ mx: -4 }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mx: 1, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {topNav.map((navItem) => (          
            <MenuLink
              nav_to={navItem.primary.nav_to}
              labelText={navItem.primary.label.text}
            />
          ))}
          <section className={styles.rightToolbar}>
            <Toolbar>
              {rightToolbar.map((rightItem) => (
                <MenuLink
                  nav_to="/404"
                  labelText={rightItem}
                />
              ))}
              <Box 
                mx={3}
                sx={{ 
                  display: { 
                    xs: 'none',
                    sm: 'block'
                  },                
                }
              }>
                <Button
                  href="/404"
                  variant="outlined"
                  color="secondary"
                >
                  Get Started
                </Button>
              </Box>
              
            </Toolbar>            
          </section>          
        </Toolbar>
       </Container>      
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { 
              xs: 'block', 
              sm: 'none'
            },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth 
            },
          }}
        >
          <Box 
            onClick={handleDrawerToggle} 
            sx={{ textAlign: 'center' }}
          >
            TEST
            <Divider />
            <List>
              {topNav.map((navItem) => (          
                <ListItem>               
                  <MenuLink
                    nav_to={navItem.primary.nav_to}
                    labelText={navItem.primary.label.text}
                    isDrawerLink={true}
                  />
                </ListItem>
              ))}
              {rightToolbar.map((rightItem) => (
                <ListItem>  
                  <MenuLink
                    nav_to="/404"
                    labelText={rightItem}
                    isDrawerLink={true}
                  />
                </ListItem>
              ))}
              <Box my={3}>
                <Button
                  href="/404"
                  variant="outlined"
                  color="secondary"
                >
                  Get Started
                </Button>
              </Box>              
            </List>
          </Box>
        </Drawer>
    </Box>
  </Box>
  )
}

export default Nav