import { Divider } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import React from "react";
import { StyledParagraph } from "./StyledComponents";

function Contact() {
  return (
      <>
    <Content id="aboutID">
      <Divider>
        <h1 style={{ color: "black", margin: "auto", width: "100%" }}>Contact</h1>
      </Divider>
      <h1 style={{ margin: "auto", width: "667px" }}> HI, I'M BETH...</h1>
      <StyledParagraph style={{ paddingTop: "5em" }}>
        <p>
          If you have a quick question about a specific recipe, the fastest way
          to get a response is to ask via the comment form at the bottom of the
          recipe page. Comments are moderated at least once per day and I’ll do
          my best to answer your question! :) Instagram, Facebook and Twitter
          are also usually checked daily, so those are also great options for a
          quick response. If you have a more complex question or want to share
          your story (I love hearing them!), you can email me using the contact
          form below. It may take a few days for me to get back to you. Media,
          advertising, and promotional inquiries can be submitted via the
          contact form below. Thanks and I look forward to hearing from you!
        </p>
      </StyledParagraph>
    </Content>
    <Content>
    </Content>
         <Footer style={{ textAlign: "center" }}>
      Ant Design ©2018 Created by Ant UED
    </Footer>
      </>
  );
     
}

export default Contact;
