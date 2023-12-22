import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
          width={1}
          flexDirection={{ xs: 'column', sm: 'row' }}
        >
          <Box
            display={'flex'}
            component="a"
            href="/"
            title="theFront"
            width={80}
          >
            <Box
              component={'img'}
              src={
                mode === 'light'
                  ? 'https://blogger.googleusercontent.com/img/a/AVvXsEj_lmI-o2Rd8VTqLqqkWy3G_kcqkGWa1kJwzLdEwzKQ1RooJMKnha1p2_bcAZRh2g0-RvemjLBjCuQcbfthC-2BIMVtmxq0cBd4YYRgltyr31n5HbB1l7INu0KIwjiEMythcaITkrxFle-yc5FyMFAXS-zDTvUTBO50vYxbm-f92-ib9aDODGfnwvJEi_Q'
                  : 'https://blogger.googleusercontent.com/img/a/AVvXsEj_lmI-o2Rd8VTqLqqkWy3G_kcqkGWa1kJwzLdEwzKQ1RooJMKnha1p2_bcAZRh2g0-RvemjLBjCuQcbfthC-2BIMVtmxq0cBd4YYRgltyr31n5HbB1l7INu0KIwjiEMythcaITkrxFle-yc5FyMFAXS-zDTvUTBO50vYxbm-f92-ib9aDODGfnwvJEi_Q'
              }
              height={1}
              width={1}
            />
          </Box>
          <Box display="flex" flexWrap={'wrap'} alignItems={'center'}>
            <Box marginTop={1} marginRight={1}>
              <Link
                underline="none"
                component="a"
                href="/"
                color="text.primary"
                variant={'subtitle2'}
              >
                Home
              </Link>
            </Box>
            <Box marginTop={1} marginRight={1}>
              <Link
                underline="none"
                component="a"
                href="#"
                color="text.primary"
                variant={'subtitle2'}
              >
                Privacy
              </Link>
            </Box>   
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={'center'}
          variant={'subtitle2'}
          color="text.secondary"
          gutterBottom
        >
          &copy; WildlifeChain. 2023. MIT
        </Typography>
        {/* 
        <Typography
          align={'center'}
          variant={'caption'}
          color="text.secondary"
          component={'p'}
        >
          When you visit or interact with our sites, services or tools, we or
          our authorised service providers may use cookies for storing
          information to help provide you with a better, faster and safer
          experience and for marketing purposes.
        </Typography>
        */}
      </Grid>
    </Grid>
  );
};

export default Footer;
