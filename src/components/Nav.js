import React from 'react'
import { graphql, useStaticQuery } from 'gatsby';
import { Link } from 'gatsby'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


const drawerWidth = 240;

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

  const linkStyles = {
    color: 'white',
    display: 'inline-block',
    margin: '0 0.5rem',
    padding: '0.25rem',
    textDecoration: 'none'

  }
  const activeStyle = {
    backgroud: 'white',
    color: 'rebeccapurple'
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="sticky" color="default">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          {topNav.map((navItem) => (          
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Link               
                to={navItem.primary.nav_to}               
                style={linkStyles} 
                activeStyle={activeStyle}               
            >
                {navItem.primary.label.text}
              </Link>     
            </Box>
          ))}
        </Toolbar>      
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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
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
                <Link               
                  to={navItem.primary.nav_to}               
                  style={linkStyles} 
                  activeStyle={activeStyle}               
                >
                  {navItem.primary.label.text}
                </Link>
              </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
    </Box>
  </Box>
  )
}

export default Nav