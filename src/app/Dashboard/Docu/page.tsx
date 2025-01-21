import * as React from 'react';
import { Box, Drawer, List, ListItem, ListItemText, Divider, Container, Typography, Button } from '@mui/material';
import Link from 'next/link';
import image from "./img.png"
import Image from 'next/image';

export default function Home() {
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sidebar */}
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: '#f4f6f8',
          },
        }}
        variant="permanent"
        anchor="left"
      ><Box sx={{ padding: 2, display: 'flex', alignItems: 'center' }}>
      <Image src={image} alt="Synx Logo" width={180} height={120} />
        </Box>
        <Divider />
        <List>
  <ListItem
    button
    component={Link}
    href="/docs"
    sx={{
      '&:hover': {
        backgroundColor: '#6A00D1',  
        color: 'white',              
      },
    }}
  >
    <ListItemText primary="Getting Started" />
  </ListItem>
  <ListItem
    button
    component={Link}
    href="/docs/creating-with-synx"
    sx={{
      '&:hover': {
        backgroundColor: '#6A00D1',  
        color: 'white',              
      },
    }}
  >
    <ListItemText primary="Create with Synx" />
  </ListItem>
  <ListItem
    button
    component={Link}
    href="/docs/synx-partners"
    sx={{
      '&:hover': {
        backgroundColor: '#6A00D1',  
        color: 'white',              
      },
    }}
  >
    <ListItemText primary="Synx Brand Partners" />
  </ListItem>
  <ListItem
    button
    component={Link}
    href="/docs/faqs"
    sx={{
      '&:hover': {
        backgroundColor: '#6A00D1',  
        color: 'white',              
      },
    }}
  >
    <ListItemText primary="FAQs" />
  </ListItem>
  <ListItem
    button
    component={Link}
    href="/docs/contacts"
    sx={{
      '&:hover': {
        backgroundColor: '#6A00D1',  
        color: 'white',              
      },
    }}
  >
    <ListItemText primary="Contact us" />
  </ListItem>
</List>
<Divider />

        <Box sx={{ padding: 2, marginTop: 'auto' }}>
  <Button
    component={Link}
    href="/Dashboard/Homepage"
    fullWidth
    variant="outlined"
    sx={{
      borderColor: '#6A00D1',  
      color: '#6A00D1',        
      '&:hover': {
        backgroundColor: '#6A00D1',  
        color: 'white',             
      },
    }}
  >
    ← Back to Home
  </Button>
</Box>

      </Drawer>

      {/* Main content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
        }}
      >
        <Container maxWidth="lg">
          <Typography variant="h3" gutterBottom>
            What is Synx?
          </Typography>
          <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Why choose Synx?
          </Typography>
          <Typography variant="body1" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Typography variant="h4" gutterBottom>
            Synx Features
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Lorem ipsum dolor sit amet" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Lorem ipsum dolor sit amet" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Lorem ipsum dolor sit amet" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Lorem ipsum dolor sit amet" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Lorem ipsum dolor sit amet" />
            </ListItem>
          </List>
          <Typography variant="body1" paragraph>
            Explore our documentation to learn more about how to use Synx and make the most of our platform.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
