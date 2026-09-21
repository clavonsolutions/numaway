import { Metadata } from "next";
import View from "@/views/admin/Students";

export const metadata: Metadata = {
  title: "Admin Students | NUMAWAY",
};

export default function Page() {
  return <View />;
}
