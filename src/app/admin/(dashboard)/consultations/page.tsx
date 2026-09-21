import { Metadata } from "next";
import View from "@/views/admin/Consultations";

export const metadata: Metadata = {
  title: "Admin Consultations | NUMAWAY",
};

export default function Page() {
  return <View />;
}
