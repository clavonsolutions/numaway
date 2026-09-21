import { Metadata } from "next";
import View from "@/views/admin/Reports";

export const metadata: Metadata = {
  title: "Admin Reports | NUMAWAY",
};

export default function Page() {
  return <View />;
}
