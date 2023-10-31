
import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';

/**
 * This page will detail that we will not use their personal information, and it will self destruct in idono, like 30 days.
 */
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

const TermsPage = () => (
  <Layout>
    <SEO
      title="Sage AF - Terms of Service"
      description=""
    />
    <PreStyle>
      <br/>

<h1>Terms of Service</h1>

Welcome to the sage af website! 

<p>
  These Terms of Service govern your use of our site, by using the website, you agree to be bound by these Terms of Service. If you do not agree to these Terms of Service, please do not use the website.
</p>

<h2>Scope of Service</h2>
<p>
The website provides users with access to a variety of tarot-related resources, including tarot readings, tarot card meanings, and tarot spreads. The website also offers a variety of other resources, such as articles, blog posts, and videos about tarot and other spiritual topics.
</p>

<h2>Eligibility</h2>
<p>
To use the website, you must be at least 18 years old. Or a free willed spirit who is capable of critical thinking. The only danger a Tarot deck poses is freeing you from your previous beliefs.
</p>

<h2>Prohibited Conduct</h2>

<p>
When using the website, you agree not to: <br/>

Violate any laws or regulations. <br/>
Infringe on the intellectual property rights of others. <br/>
Transmit any harmful or malicious code. <br/>
Engage in any activity that could disrupt or damage the website. <br/>
Harass, abuse, or threaten other users. <br/>
Disclose personal information about other users without their consent. <br/>
Impersonate any person or entity. <br/>
Use the website for any illegal or unauthorized purpose. <br/>
</p>

<h2>Disclaimer of Warranties</h2>

<p>
  The website and all services offered on the website are provided on an "as is" and "as available" basis. We make no warranties, express or implied, as to the operation of the website or the accuracy, completeness, or timeliness of any information provided on the website.
</p>

<h2>Limitation of Liability</h2>

<p>
To the fullest extent permitted by law, we shall not be liable for any direct, indirect, incidental, special, or consequential damages arising out of your use of the website or any services offered on the website.
</p>

<h2>Governing Law</h2>

<p>
These Terms of Service shall be governed by and construed in accordance with the laws of the Commonwealth of Massachusetts.
</p>

<h2>Entire Agreement</h2>

<p>
These Terms of Service constitute the entire agreement between you and us with respect to your use of the website and any services offered on the website.
</p>

<h2>Severability</h2>

<p>
If any provision of these Terms of Service is held to be invalid or unenforceable, such provision shall be struck from these Terms of Service and the remaining provisions shall remain in full force and effect.
</p>

<h3>Changes to Terms of Service</h3>

<p>
We reserve the right to change these Terms of Service at any time. Any changes to these Terms of Service will be posted on the website. Your continued use of the website following the posting of any changes to these Terms of Service shall constitute your acceptance of such changes.
</p>

<h2>Contact Us</h2>

<p>
If you have any questions about these Terms of Service, please contact us at [email address].
</p>

<h2>Additional Terms and Consent</h2>

<p>
By using the website, you agree to these Terms of Service and our Privacy Policy.
</p>

<h2>Privacy Policy</h2>

<p>
We do not collector store any personal information or any data from our users. No Data Collected means No Data Collected, we are a READ ONLY service. 
Please read our Privacy Policy for more information.
</p>


<h2>Code of Conduct</h2>

<p>
We do not tolerate harassment of any kind. Please read our Code of Conduct for more information.

</p>






</PreStyle>
  </Layout>
)

export default TermsPage