$routes = @(
  @{ path = "about"; view = "About"; title = "About Numaway: Our Mission and Story" },
  @{ path = "services"; view = "Services"; title = "Study Abroad Services: Full Student Support" },
  @{ path = "contact"; view = "Contact"; title = "Contact Numaway: Email, WhatsApp and Office" },
  @{ path = "consultation"; view = "Consultation"; title = "Book Free Consultation" },
  @{ path = "countries"; view = "Countries"; title = "Study Destinations" },
  @{ path = "universities"; view = "Universities"; title = "Partner Universities" },
  @{ path = "courses"; view = "Courses"; title = "Find Your Course" },
  @{ path = "exams"; view = "Exams"; title = "English & Admission Exams" },
  @{ path = "accommodation"; view = "Accommodation"; title = "Student Accommodation" },
  @{ path = "faq"; view = "FAQ"; title = "Frequently Asked Questions" }
)

foreach ($route in $routes) {
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
