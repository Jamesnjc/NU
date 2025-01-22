"use client";

import React from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Link,
  Paper,
} from "@mui/material";
import { StaticImageData } from "next/image";
import jimmyImage from "./jimmy-donaldson.jpg";
import kevinImage from "./ks.jpg";
import steveImage from "./sj.jpg";
import yvesImage from "./ysl.jpg";


interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  github?: string;
  dribbble?: string;
  instagram?: string;
}

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string | StaticImageData; // Updated type
  socials: SocialLinks;
}

const teamMembers: TeamMember[] = [
  {
    name: "Jimmy Donaldson",
    role: "CEO & Founder",
    description:
      "A visionary leader who bridges innovation and strategy to achieve remarkable growth.",
    image: jimmyImage.src, // Use .src for imported images
    socials: {
      linkedin: "https://linkedin.com/in/jimmy-donaldson",
      twitter: "https://twitter.com/jimmydonaldson",
    },
  },
  {
    name: "Kevin Scott",
    role: "Chief Technology Officer",
    description:
      "A tech pioneer creating groundbreaking solutions that transform industries.",
    image: kevinImage.src, // Use .src for imported images
    socials: {
      linkedin: "https://linkedin.com/in/kevin-scott",
      github: "https://github.com/kevinscott",
    },
  },
  {
    name: "Yves Saint Laurent",
    role: "Lead Designer",
    description:
      "An artist with a passion for creating intuitive and captivating user experiences.",
    image: yvesImage.src, // Use .src for imported images
    socials: {
      linkedin: "https://linkedin.com/in/yves-saint-laurent",
      dribbble: "https://dribbble.com/yvessaintlaurent",
    },
  },
  {
    name: "Steve Jobs",
    role: "Marketing Director",
    description:
      "A marketing guru who crafts compelling stories and drives brand success.",
    image: steveImage.src, // Use .src for imported images
    socials: {
      linkedin: "https://linkedin.com/in/steve-jobs",
      instagram: "https://instagram.com/stevejobs",
    },
  },
];


const AboutUs: React.FC = () => {

  return (
    <Box sx={{ padding: 4, backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      {}
      <Button
        component={Link}
        href="/Dashboard/Homepage"
        variant="outlined"
        sx={{
          borderColor: "#6A00D1",
          color: "#6A00D1",
          "&:hover": {
            backgroundColor: "#6A00D1", 
            color: "white",               
          },
          position: "absolute",
          top: 16,
          left: 16,
          padding: "6px 12px", 
        }}
      >
        ← Back to Home
      </Button>

      {/* Title */}
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: 3,
          fontFamily: 'Poppins, sans-serif',  
        }}
      >
        Meet Our Team
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        sx={{
          textAlign: "center",
          marginBottom: 5,
          fontFamily: 'Poppins, sans-serif', 
        }}
      >
        Get to know the amazing individuals behind our success.
      </Typography>

      {/* Team Cards */}
      <Grid container spacing={4} justifyContent="center">
        {teamMembers.map((member, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Paper
              elevation={3}
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "100%",
                transition: "transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
                  backgroundColor: "#6A00D1", 
                  color: "#ffffff", 
                },
              }}
            >
              <Card
  sx={{
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    maxWidth: 300, // Set a maximum width for consistency
  }}
>
  <CardMedia
    component="img"
    sx={{
      height: 300, // Ensure the height matches the card's width for a square card
      width: "100%",
      objectFit: "cover", // Ensures the image covers the area without distortion
    }}
    image={member.image}
    alt={member.name || "Team Member"}
    onError={(e: React.SyntheticEvent<HTMLImageElement>) =>
      (e.currentTarget.src = "/images/default-image.jpg") // Fallback image
    }
  />
  <CardContent sx={{ flexGrow: 1 }}>
    <Typography
      variant="h6"
      component="div"
      sx={{
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {member.name}
    </Typography>
    <Typography
      variant="subtitle2"
      color="text.secondary"
      sx={{
        textAlign: "center",
        marginBottom: 1,
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {member.role}
    </Typography>
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{
        textAlign: "justify",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {member.description}
    </Typography>
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        gap: 1,
        marginTop: 2,
      }}
    >
      {member.socials.linkedin && (
        <Link
          href={member.socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          LinkedIn
        </Link>
      )}
      {member.socials.twitter && (
        <Link
          href={member.socials.twitter}
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          Twitter
        </Link>
      )}
      {member.socials.github && (
        <Link
          href={member.socials.github}
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          GitHub
        </Link>
      )}
      {member.socials.dribbble && (
        <Link
          href={member.socials.dribbble}
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          Dribbble
        </Link>
      )}
      {member.socials.instagram && (
        <Link
          href={member.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          Instagram
        </Link>
      )}
    </Box>
  </CardContent>
</Card>

            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default AboutUs;
