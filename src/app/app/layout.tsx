import StudentLayout from "@/layouts/StudentLayout";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute allowedRoles={["student"]}>
      <StudentLayout>
        {children}
      </StudentLayout>
    </ProtectedRoute>
  );
}
