import PageHead from "@/components/PageHead";
import { NAP } from "@/lib/nap";
import { MessageCircle, Clock } from "lucide-react";

const ICON_STROKE = 1.75;

const Maintenance = (): JSX.Element => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PageHead
        title="Scheduled Maintenance"
        description="Numaway is temporarily offline for scheduled maintenance. We'll be back shortly. Thank you for your patience."
        canonical="/maintenance"
        noIndex={true}
      />
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-lg mx-auto">
          <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Clock className="w-10 h-10 text-primary" strokeWidth={ICON_STROKE} />
          </div>
          <h1 className="text-3xl font-display font-bold mb-3">We're upgrading the platform</h1>
          <p className="text-muted-foreground mb-6">
            Numaway is temporarily offline for scheduled maintenance. We'll be back shortly.
            Thank you for your patience.
          </p>
          <p className="text-sm text-muted-foreground mb-8">
            For urgent queries, reach us on WhatsApp while we're back online.
          </p>
          <a
            href={NAP.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-display font-semibold hover:bg-primary/90 transition-colors"
          >
            <MessageCircle className="w-4 h-4" strokeWidth={ICON_STROKE} />
            WhatsApp Support
          </a>
        </div>
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground border-t border-border">
        <p>{NAP.businessName}. {NAP.address.city}, {NAP.address.country}.</p>
      </footer>
    </div>
  );
};

export default Maintenance;
