import AdminLayout from "@/layouts/AdminLayout";
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ProtectedRoute requireRole="admin">
      <AdminLayout />
      <div className="lg:pl-64 flex flex-col min-h-screen">
        <main className="flex-1 p-6 lg:p-8 mt-16 lg:mt-0">
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
