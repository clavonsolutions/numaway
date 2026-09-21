import { Metadata } from "next";
import View from "@/views/admin/Tasks";

export const metadata: Metadata = {
  title: "Admin Tasks | NUMAWAY",
};

export default function Page() {
  return <View />;
}
