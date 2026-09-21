import { Metadata } from "next";
import View from "@/views/app/Dashboard";

export const metadata: Metadata = {
  title: "Student Dashboard | NUMAWAY",
};

export default function Page() {
  return <View />;
}
