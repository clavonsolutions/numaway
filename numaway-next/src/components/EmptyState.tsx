import { Button } from "@/components/ui/button";
import {
  Search,
  Filter,
  FileText,
  FolderOpen,
  MessageSquare,
  Users,
  Sparkles,
  CalendarCheck,
  UserCircle,
  type LucideIcon,
} from "lucide-react";
import Link from "next/link";

const ICON_STROKE = 1.75;

type EmptyStateVariant =
  | "search"
  | "filter"
  | "applications"
  | "documents"
  | "messages"
  | "leads"
  | "sage-history"
  | "consultations"
  | "profile";

interface EmptyStateCTA {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface EmptyStateProps {
  variant: EmptyStateVariant;
  title?: string;
  description?: string;
  cta?: EmptyStateCTA;
  className?: string;
}

interface VariantConfig {
  icon: LucideIcon;
  title: string;
  description: string;
}

const VARIANT_CONFIG: Record<EmptyStateVariant, VariantConfig> = {
  search: {
    icon: Search,
    title: "No results found",
    description: "Try different keywords or remove some filters to see more results.",
  },
  filter: {
    icon: Filter,
    title: "No matches for your filters",
    description: "Clear or adjust your filters to see more options.",
  },
  applications: {
    icon: FileText,
    title: "No applications yet",
    description: "Start your study abroad journey by browsing universities and booking a free consultation.",
  },
  documents: {
    icon: FolderOpen,
    title: "No documents uploaded",
    description: "Upload your transcripts, English test results, and other documents to get started.",
  },
  messages: {
    icon: MessageSquare,
    title: "No messages yet",
    description: "Your conversations with your counsellor will appear here.",
  },
  leads: {
    icon: Users,
    title: "No leads found",
    description: "Student enquiries and referrals will appear here as they come in.",
  },
  "sage-history": {
    icon: Sparkles,
    title: "Start a conversation with Sage",
    description: "Ask Sage anything about studying abroad, universities, visa requirements, or scholarships.",
  },
  consultations: {
    icon: CalendarCheck,
    title: "No consultations scheduled",
    description: "Book a free consultation with one of our expert counsellors to get started.",
  },
  profile: {
    icon: UserCircle,
    title: "Profile not set up",
    description: "Complete your profile so we can match you with the right universities and courses.",
  },
};

const EmptyState = ({
  variant,
  title,
  description,
  cta,
  className = "",
}: EmptyStateProps): JSX.Element => {
  const config = VARIANT_CONFIG[variant];
  const Icon = config.icon;

  return (
    <div className={`flex flex-col items-center justify-center py-16 px-6 text-center ${className}`}>
      <div className="w-16 h-16 bg-muted rounded-2xl flex items-center justify-center mb-5">
        <Icon className="w-8 h-8 text-muted-foreground" strokeWidth={ICON_STROKE} />
      </div>
      <h3 className="text-lg font-display font-semibold mb-2">
        {title ?? config.title}
      </h3>
      <p className="text-sm text-muted-foreground max-w-sm mb-6">
        {description ?? config.description}
      </p>
      {cta && (
        cta.href ? (
          <Button variant="outline" asChild>
            <Link href={cta.href}>{cta.label}</Link>
          </Button>
        ) : (
          <Button variant="outline" onClick={cta.onClick}>
            {cta.label}
          </Button>
        )
      )}
    </div>
  );
};

export default EmptyState;
export type { EmptyStateVariant, EmptyStateProps };
