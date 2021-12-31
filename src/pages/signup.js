import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Create from "../components/account/create";

const PreStyle = styled.div`
  padding-right: 1rem;
  padding-left: 1rem;
`;

const SignupPage = () => (
  <Layout>
    <SEO
    title="Sage AF - Signup Page"
    description="Sign up here for some free homemade essentials. All options are free of charged & will be shipped free to your provided address. "
    meta={[]}
    />
    <PreStyle>
      <h2>Want to try us out?</h2>
      <p>Sage.af is looking for perspective users to give free gifts to. We would like you to sign up and in 1 week you will get to assemble your own gift pack totall free. We only ask you let us know how it was.</p>
      <Create/>
    </PreStyle>
  </Layout>
)

export default SignupPage
