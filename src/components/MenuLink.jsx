import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const MenuLink = ({ nav_to, labelText, isDrawerLink }) => {
  const activeStyle = {
      backgroud: 'white',
      color: 'rebeccapurple'
  };

  const useStyles = makeStyles({
      linkStyle: {
        color: 'white',
        display: 'inline-block',
        margin: '0 0.5rem',
        padding: '0.25rem',
        textDecoration: 'none',
      },      
  });
  
  const styles = useStyles()

  if (!isDrawerLink) {
    return (
      <Box 
        sx={{ 
          display: { 
            xs: 'none',
            sm: 'block'
          },                
        }
      }>
        <GatsbyLink
          className={styles.linkStyle}
          to={nav_to}
          activeStyle={activeStyle}
        >
          {labelText}
        </GatsbyLink>     
      </Box>
    )
  } else {
    return (
      <Box>
        <GatsbyLink
          className={styles.linkStyle}
          to={nav_to}
          activeStyle={activeStyle}
        >
          {labelText}
        </GatsbyLink>     
      </Box>
    )
  };
};
  

export default MenuLink;