import { Metadata } from "next";
import View from "@/views/admin/Dashboard";

export const metadata: Metadata = {
  title: "Admin Dashboard | NUMAWAY",
};

export default function Page() {
  return <View />;
}
