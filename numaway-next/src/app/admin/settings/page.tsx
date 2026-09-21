import { Metadata } from "next";
import View from "@/views/admin/Settings";

export const metadata: Metadata = {
  title: "Admin Settings | NUMAWAY",
};

export default function Page() {
  return <View />;
}
