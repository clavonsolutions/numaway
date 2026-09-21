import { Metadata } from "next";
import View from "@/views/admin/Applications";

export const metadata: Metadata = {
  title: "Admin Applications | NUMAWAY",
};

export default function Page() {
  return <View />;
}
