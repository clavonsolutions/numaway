import { Metadata } from "next";
import View from "@/views/admin/Messages";

export const metadata: Metadata = {
  title: "Admin Messages | NUMAWAY",
};

export default function Page() {
  return <View />;
}
