import { Metadata } from "next";
import View from "@/views/app/Documents";

export const metadata: Metadata = {
  title: "My Documents | NUMAWAY",
};

export default function Page() {
  return <View />;
}
