
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

const PrivacyPage = () => (
  <Layout>
    <SEO
      title="Sage AF - Your Privacy Matters"
      description="We do not sell, trade, or rent your personal information to others; read our whole privacy policy to know just how much you matter to us."
    />
    <PreStyle>
      <br/>
			<h2>Your Privacy Matters</h2>
<p>
This Privacy Policy explains how Sage AF collects, uses, and shares information about you when you visit our website.

</p>
<p>
  Sort answer is we don't want to profit off of you, and don't want your personal information. You can keep it.
</p>


<h3>What information do we collect?</h3>

<p>
We do not collect any personal information from our users. Personal information is defined as any information that can be used to identify an individual, such as name, address, email address, phone number, or date of birth.
</p>

<h3>How do we share your information?</h3>


<p>
We do not share your information with any third parties.
</p>


<h3>Data Retention Policy</h3>

<p>
At Sage af, we respect your privacy and are committed to protecting your personal information. That is why we do not collect any personal data from our users.
</p>
<p>
This means that we do not have any data to retain, and therefore, we do not have a data retention policy.
</p>



<h2>Security</h2>
<p>
We take appropriate security measures to protect your information from unauthorized access, use, or disclosure. However, no security measure is perfect, and we cannot guarantee that your information will never be accessed, used, or disclosed in a breach of our security.
</p>

<h2>Your choices</h2>
<p>
You have the right to opt out of receiving promotional emails or other communications from us. You can also request that we delete any information we have collected about you. To do so, please contact us at [email address].
</p>

<h2>Changes to this Privacy Policy</h2>
<p>
We may update this Privacy Policy from time to time. If we make any significant changes, we will post a notice on our website.
</p>

<h2>Contact us</h2>
<p>
If you have any questions about this Privacy Policy, please contact us at [email address].
</p>

<h2>Effective Date</h2>
<p>
This Privacy Policy is effective as of October 31st 2023.
</p>



		</PreStyle>
  </Layout>
)

export default PrivacyPage
