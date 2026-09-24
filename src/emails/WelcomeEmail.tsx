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

interface WelcomeEmailProps {
  userName?: string;
}

export const WelcomeEmail = ({ userName }: WelcomeEmailProps = {}) => (
  <Html>
    <Head />
    <Preview>Confirm your email address - NUMAWAY</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Welcome to NUMAWAY Education!</Heading>
        <Text style={text}>
          Hi {userName ? userName : "there"},
        </Text>
        <Text style={text}>
          Thank you for signing up. We are excited to have you on board. Log in to get started on your study abroad journey.
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href="https://numaway.com/login">
            Log In
          </Button>
        </Section>
        <Text style={text}>
          If you didn&apos;t request this, you can safely ignore this email.
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          NUMAWAY Education • Empowering your global journey
        </Text>
      </Container>
    </Body>
  </Html>
);

export default WelcomeEmail;

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
