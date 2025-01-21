import React from "react";
import "./AboutUs.css";

const teamMembers = [
  {
    name: "Jimmy Donaldson",
    role: "CEO & Founder",
    description:
      "A visionary leader who bridges innovation and strategy to achieve remarkable growth.",
    image: "mrb.jpg",
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
    image: "https://via.placeholder.com/150",
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
    image: "https://via.placeholder.com/150",
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
    image: "https://via.placeholder.com/150",
    socials: {
      linkedin: "https://linkedin.com/in/steve-jobs",
      instagram: "https://instagram.com/stevejobs",
    },
  },
];

const AboutUs: React.FC = () => {
  return (
    <div className="about-us">
      <h1>Meet Our Team</h1>
      <p>Get to know the amazing individuals behind our success.</p>
      <div className="team">
        {teamMembers.map((member, index) => (
          <div className="card" key={index}>
            <div className="image-container">
              <img src={member.image} alt={`${member.name}`} />
            </div>
            <h2>{member.name}</h2>
            <h3>{member.role}</h3>
            <p>{member.description}</p>
            <div className="socials">
              {member.socials.linkedin && (
                <a
                  href={member.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={`${member.name}'s LinkedIn`}
                >
                  LinkedIn
                </a>
              )}
              {member.socials.twitter && (
                <a
                  href={member.socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={`${member.name}'s X`}
                >
                  X
                </a>
              )}
              {member.socials.github && (
                <a
                  href={member.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={`${member.name}'s GitHub`}
                >
                  GitHub
                </a>
              )}
              {member.socials.dribbble && (
                <a
                  href={member.socials.dribbble}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={`${member.name}'s Dribbble`}
                >
                  Dribbble
                </a>
              )}
              {member.socials.instagram && (
                <a
                  href={member.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={`${member.name}'s Instagram`}
                >
                  Instagram
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
