import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

const socialItems = [
    {icon: GitHubIcon, url: ""},
    {icon: Twitter, url: ""},
    {icon: LinkedIn, url: ""},
];

const Social = () => {
  return (
    <Grid container spacing={1}>
      {socialItems.map((item) => (
        <Grid item>
          <Link href={socialItems.url}>
            <IconButton>
              <item.icon />
            </IconButton>       
          </Link>                   
        </Grid>
      ))}          
    </Grid>
  )
};

export default Social