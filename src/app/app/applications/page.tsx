import { Metadata } from "next";
import View from "@/views/app/Applications";

export const metadata: Metadata = {
  title: "My Applications | NUMAWAY",
};

export default function Page() {
  return <View />;
}
