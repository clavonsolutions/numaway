import { Metadata } from "next";
import View from "@/views/Courses";

export const metadata: Metadata = {
  title: "Find Your Course | NUMAWAY",
};

export default function Page() {
  return <View />;
}
