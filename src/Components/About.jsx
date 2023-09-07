/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/bg1.jpg";

const imageAltText = "coding backround image";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I'm a Java Developer and a Computer Engineering student at the Marwadi University. I am passionate about using technology to solve real-world problems and create innovative solutions. I am eager to embark on a career in the tech industry, where I can continue to learn and grow as a professional. My goal is to work for a company that values innovation, creativity, and teamwork, and where I can contribute my skills and knowledge to make a meaningful impact.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Java Development",
  "Web Development",
  "Software Development",
  "Competitive Programming",
  "Microsoft Learn Student Ambassador",
  "Learner",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "As a B.Tech Computer Engineering student, I am passionate about using technology to solve real-world problems and create innovative solutions. My academic background is going to equip me with a strong foundation in programming, algorithms, data structures, and computer networks.In addition to my technical expertise, I possess excellent communication and problem-solving skills, which I believe are essential for any successful engineer. I enjoy collaborating with others and leveraging diverse perspectives to arrive at the best possible outcome.I am eager to embark on a career in the tech industry, where I can continue to learn and grow as a professional. My goal is to work for a company that values innovation, creativity, and teamwork, and where I can contribute my skills and knowledge to make a meaningful impact.If you are looking for a driven and dedicated B.Tech Computer Engineering student, please do not hesitate to reach out. I am excited to explore new opportunities and connect with like-minded individuals.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
