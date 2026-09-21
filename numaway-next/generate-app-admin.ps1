$adminRoutes = @(
  @{ path = "admin"; view = "admin/Dashboard"; title = "Admin Dashboard" },
  @{ path = "admin/applications"; view = "admin/Applications"; title = "Admin Applications" },
  @{ path = "admin/consultations"; view = "admin/Consultations"; title = "Admin Consultations" },
  @{ path = "admin/students"; view = "admin/Students"; title = "Admin Students" },
  @{ path = "admin/leads"; view = "admin/Leads"; title = "Admin Leads" },
  @{ path = "admin/messages"; view = "admin/Messages"; title = "Admin Messages" },
  @{ path = "admin/reports"; view = "admin/Reports"; title = "Admin Reports" },
  @{ path = "admin/settings"; view = "admin/Settings"; title = "Admin Settings" },
  @{ path = "admin/tasks"; view = "admin/Tasks"; title = "Admin Tasks" }
)

$appRoutes = @(
  @{ path = "app"; view = "app/Dashboard"; title = "Student Dashboard" },
  @{ path = "app/applications"; view = "app/Applications"; title = "My Applications" },
  @{ path = "app/documents"; view = "app/Documents"; title = "My Documents" },
  @{ path = "app/profile"; view = "app/Profile"; title = "My Profile" },
  @{ path = "app/sage"; view = "app/Sage"; title = "Sage AI" }
)

foreach ($route in ($adminRoutes + $appRoutes)) {
  $dir = "src\app\" + $route.path
  New-Item -ItemType Directory -Force $dir | Out-Null
  
  $content = @"
import { Metadata } from `"next`";
import View from `"@/views/$($route.view)`";

export const metadata: Metadata = {
  title: `"$($route.title) | NUMAWAY`",
};

export default function Page() {
  return <View />;
}
"@
  Set-Content -Path "$dir\page.tsx" -Value $content -Encoding UTF8
}
