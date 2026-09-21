import {
  Body,
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

interface ConsultationNotificationProps {
  fullName: string;
  email: string;
  phone?: string;
  userType?: string;
  studyLevel?: string;
  destination?: string;
  source?: string;
}

export const ConsultationNotification = ({
  fullName,
  email,
  phone,
  userType,
  studyLevel,
  destination,
  source = "Consultation Form",
}: ConsultationNotificationProps) => (
  <Html>
    <Head />
    <Preview>New Consultation Request from {fullName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Lead: {source}</Heading>
        <Text style={text}>
          A new consultation request has been submitted on NUMAWAY.
        </Text>
        <Section style={details}>
          <Text style={detailItem}><strong>Name:</strong> {fullName}</Text>
          <Text style={detailItem}><strong>Email:</strong> {email}</Text>
          {phone && <Text style={detailItem}><strong>Phone:</strong> {phone}</Text>}
          {userType && <Text style={detailItem}><strong>Type:</strong> {userType}</Text>}
          {studyLevel && <Text style={detailItem}><strong>Study Level:</strong> {studyLevel}</Text>}
          {destination && <Text style={detailItem}><strong>Destination:</strong> {destination}</Text>}
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          This is an automated notification from your NUMAWAY website.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default ConsultationNotification;

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

const details = {
  padding: "24px",
  backgroundColor: "#f6f9fc",
  borderRadius: "8px",
  marginBottom: "24px",
};

const detailItem = {
  color: "#425466",
  fontSize: "15px",
  lineHeight: "24px",
  margin: "0 0 10px",
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
