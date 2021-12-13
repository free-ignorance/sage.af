import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Form from '../components/form';



const PreStyle = styled.div`
	border: 1rem solid #DFD8CA;
	padding: 2rem;
  a {
    text-decoration: none;
    color: #105652;
  }

	p lable {
		text-align: justify;
  	text-justify: inter-word;
		text-indent: 2rem;
	}
`;

const StandOutFont = styled.h2`
  color: #B91646;
  font-family: 'Amatic SC';
  font-weight: 700;
  font-size: 2rem;
`;

const SignupPage = () => (
  <Layout>
    <SEO title='Sage AF - Signup Page' />
    <PreStyle>
      <br/>
			<p>Would you like a gift?</p>
      <Form/>
      <p>You can view our <Link to='/privacy'>privacy statement</Link>.</p>

    </PreStyle>
  </Layout>
)

export default SignupPage
