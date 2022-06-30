import React from 'react'
import { Link as GatsbyLink } from 'gatsby'
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";

const DrawerMenuLink = ({ nav_to, labelText }) => {
  const activeStyle = {
      backgroud: 'white',
      color: 'rebeccapurple'
  }

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
}

export default DrawerMenuLink;