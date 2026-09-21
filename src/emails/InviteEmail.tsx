import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const InviteEmail = () => (
  <Html>
    <Head />
    <Preview>You have been invited to join NUMAWAY</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>You're Invited!</Heading>
        <Text style={text}>
          You have been invited to join the NUMAWAY platform as a member of our team or as a partner.
        </Text>
        <Text style={text}>
          Click the button below to accept the invitation and set up your account.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href="{{ .ConfirmationURL }}">
            Accept Invitation
          </Button>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          NUMAWAY Education • Empowering your global journey
        </Text>
      </Container>
    </Body>
  </Html>
);

export default InviteEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "40px 20px",
  borderRadius: "8px",
  marginTop: "40px",
  marginBottom: "40px",
  maxWidth: "600px",
};

const h1 = {
  color: "#0a2540",
  fontSize: "24px",
  fontWeight: "600",
  lineHeight: "40px",
  margin: "0 0 20px",
};

const text = {
  color: "#425466",
  fontSize: "16px",
  lineHeight: "24px",
  margin: "0 0 20px",
};

const btnContainer = {
  textAlign: "center" as const,
  margin: "24px 0",
};

const button = {
  backgroundColor: "#0F284B",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "inline-block",
  padding: "12px 24px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
