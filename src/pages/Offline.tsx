import PageHead from "@/components/PageHead";
import { WifiOff, RefreshCw } from "lucide-react";

const ICON_STROKE = 1.75;

const Offline = (): JSX.Element => {
  const handleRetry = (): void => {
    window.location.reload();
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PageHead
        title="You're Offline"
        description="It looks like you've lost your internet connection. Please check your connection and try again."
        canonical="/offline"
        noIndex={true}
      />
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-lg mx-auto">
          <div className="w-20 h-20 bg-muted rounded-2xl flex items-center justify-center mx-auto mb-6">
            <WifiOff className="w-10 h-10 text-muted-foreground" strokeWidth={ICON_STROKE} />
          </div>
          <h1 className="text-3xl font-display font-bold mb-3">You're offline</h1>
          <p className="text-muted-foreground mb-8">
            It looks like you've lost your internet connection. Please check your connection
            and try again. Any pages you've visited recently may still be available.
          </p>
          <button
            onClick={handleRetry}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-display font-semibold hover:bg-primary/90 transition-colors"
          >
            <RefreshCw className="w-4 h-4" strokeWidth={ICON_STROKE} />
            Try again
          </button>
        </div>
      </main>
    </div>
  );
};

export default Offline;
