import { Metadata } from "next";
import View from "@/views/app/Profile";

export const metadata: Metadata = {
  title: "My Profile | NUMAWAY",
};

export default function Page() {
  return <View />;
}
