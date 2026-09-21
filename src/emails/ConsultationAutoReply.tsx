import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ConsultationAutoReplyProps {
  fullName: string;
}

export const ConsultationAutoReply = ({
  fullName,
}: ConsultationAutoReplyProps) => (
  <Html>
    <Head />
    <Preview>We've received your NUMAWAY consultation request!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Hi {fullName},</Heading>
        <Text style={text}>
          Thank you for reaching out to NUMAWAY Education! We have successfully received your consultation request.
        </Text>
        <Text style={text}>
          One of our expert advisors will review your details and get back to you within 24-48 hours with personalized guidance for your study abroad journey.
        </Text>
        <Text style={text}>
          If you have any immediate questions, feel free to reply directly to this email at connect@numaway.com.
        </Text>
        <Hr style={hr} />
        <Text style={footer}>
          NUMAWAY Education • Empowering your global journey
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ConsultationAutoReply;

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

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
