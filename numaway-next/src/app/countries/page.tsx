import { Metadata } from "next";
import View from "@/views/Countries";

export const metadata: Metadata = {
  title: "Study Destinations | NUMAWAY",
};

export default function Page() {
  return <View />;
}
