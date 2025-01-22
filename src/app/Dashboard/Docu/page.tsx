import * as React from "react";
import { Box, Drawer, List, ListItem, ListItemText, Divider, Container, Typography, Button } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import image from "./img.png";

const navItems = [
  { href: "/docs", text: "Getting Started" },
  { href: "/docs/creating-with-synx", text: "Create with Synx" },
  { href: "/docs/synx-partners", text: "Synx Brand Partners" },
  { href: "/docs/faqs", text: "FAQs" },
  { href: "/docs/contacts", text: "Contact us" },
];

export default function Home() {
  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar */}
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
            backgroundColor: "#f4f6f8",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* Logo */}
        <Box sx={{ padding: 2, display: "flex", justifyContent: "center" }}>
          <Image src={image} alt="Synx Logo" width={180} height={120} />
        </Box>

        <Divider />

        {/* Navigation List */}
        <List>
          {navItems.map(({ href, text }) => (
            <Link key={href} href={href} passHref legacyBehavior>
              <ListItem
                component="a"
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: "#6A00D1",
                    color: "white",
                  },
                }}
              >
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))}
        </List>

        <Divider />

        {/* Back to Home Button */}
        <Box sx={{ padding: 2, marginTop: "auto" }}>
          <Link href="/Dashboard/Homepage" passHref legacyBehavior>
            <Button
              component="a"
              fullWidth
              variant="outlined"
              sx={{
                borderColor: "#6A00D1",
                color: "#6A00D1",
                "&:hover": {
                  backgroundColor: "#6A00D1",
                  color: "white",
                },
              }}
            >
              ← Back to Home
            </Button>
          </Link>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" gutterBottom>
            What is Synx?
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Typography>

          <Typography variant="h4" gutterBottom>
            Why choose Synx?
          </Typography>
          <Typography variant="body1" paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </Typography>

          <Typography variant="h4" gutterBottom>
            Synx Features
          </Typography>
          <List>
            {["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"].map((text, index) => (
              <ListItem key={index}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>

          <Typography variant="body1" paragraph>
            
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          </Typography>

          
          <Typography variant="body1" paragraph>
            
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

          </Typography>
        </Container>
      </Box>
    </Box>
  );
}
