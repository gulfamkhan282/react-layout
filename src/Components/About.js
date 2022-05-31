import { Col, Divider, Image, Row } from "antd";
import { Content } from "antd/lib/layout/layout";
import Title from "antd/lib/skeleton/Title";
import React from "react";
import { StyledParagraph } from "./StyledComponents";
import aboutImg from './images/about.jpeg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function About() {
  return (
    
      
      <Content id="aboutID">
        <Divider>
      <h1  style={{ color: "black", margin: "auto", width: "100%" }}>About</h1>
      </Divider>
      <h1 style={{    margin: 'auto',
    width: '667px'}}> HI, I'M BETH...</h1>
      <StyledParagraph style={{ paddingTop: "5em" }}>
        <p>
          I’m a food lover, number cruncher, and meticulous budgeter. I love
          science and art, and the way they come together when I cook. I love to
          create, problem solve, and learn new things. Making great food is my
          passion, my purpose, and my favorite thing to share with others. Want
          to learn with me?
        </p>
      </StyledParagraph>
        <Image src={aboutImg} />
    </Content>
  );
}

export default About;
