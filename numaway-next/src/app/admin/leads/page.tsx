import { Metadata } from "next";
import View from "@/views/admin/Leads";

export const metadata: Metadata = {
  title: "Admin Leads | NUMAWAY",
};

export default function Page() {
  return <View />;
}
