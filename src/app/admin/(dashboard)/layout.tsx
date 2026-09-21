import AdminLayout from "@/layouts/AdminLayout";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute allowedRoles={["counsellor", "admin", "super_admin"]}>
      <AdminLayout>
        {children}
      </AdminLayout>
    </ProtectedRoute>
  );
}
