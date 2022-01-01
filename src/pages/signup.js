import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Create from "../components/account/create";

const PreStyle = styled.div`
  margin: auto;
  margin-bottom: 1rem;
  text-align: center;
  padding-left: 2rem;
  padding-right: 2rem;
  max-witdh: 36rem;

  @media only screen and (min-width: 768px) {
    font-size: 16px;
    width: 36rem;
  }
`;

const SignupPage = () => (
  <Layout>
    <SEO
      title="Sage AF - Signup Page"
      description="Sign up here for some free homemade essentials. All options are free of charged & will be shipped free to your provided address."
    />
    <PreStyle>
      <h2>Want to try us out?</h2>
      <p>Sage.af is looking for perspective users to give free gifts to. We would like you to sign up and in 1 week you will get to assemble your own gift pack totally free. We only ask you let us know how it was.</p>
      <Create/>
    </PreStyle>
  </Layout>
)

export default SignupPage
