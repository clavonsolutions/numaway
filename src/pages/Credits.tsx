import PageHead from "@/components/PageHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Breadcrumbs from "@/components/Breadcrumbs";
import attribution from "../../content/images/attribution.json";

interface AttributionEntry {
  localPath: string;
  srcsetVariants?: string[];
  pexelsId: number;
  pexelsUrl: string;
  description: string;
  licence: string;
  downloadedAt: string;
  usedOn: string[];
}

const Credits = (): JSX.Element => {
  const images = attribution.images as AttributionEntry[];

  return (
    <div className="min-h-screen bg-background">
      <PageHead
        title="Image Credits: Numaway"
        description="Attribution for all photography used on the Numaway website. All images are sourced from Pexels under the Pexels License."
        canonical="/credits"
      />

      <Header />
      <main className="pt-20">
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="container-default text-center">
            <Breadcrumbs
              items={[{ label: "Image Credits" }]}
              className="mb-6 justify-center text-primary-foreground/70"
            />
            <h1 className="text-3xl lg:text-4xl font-display font-bold mb-3">
              Image Credits
            </h1>
            <p className="text-primary-foreground/70">
              All photography on this site is sourced from Pexels under the Pexels License.
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container-prose">
            <p className="text-muted-foreground mb-10">
              The{" "}
              <a
                href="https://www.pexels.com/license/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary underline underline-offset-2"
              >
                Pexels License
              </a>{" "}
              permits free commercial use. Attribution is not legally required, but we credit every
              photographer as a matter of good practice and respect for their work.
            </p>

            <div className="space-y-4">
              {images.map((img) => (
                <div
                  key={img.pexelsId}
                  className="flex flex-col sm:flex-row sm:items-start gap-4 p-5 rounded-xl border border-border bg-card"
                >
                  <img
                    src={`/${img.localPath.replace("public/", "")}`}
                    alt={img.description}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    loading="lazy"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground mb-1">{img.description}</p>
                    <p className="text-sm text-muted-foreground mb-2">
                      Used on: {img.usedOn.join(", ")}
                    </p>
                    <div className="flex flex-wrap gap-2 text-xs">
                      <a
                        href={img.pexelsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-1 bg-secondary/10 text-secondary rounded-full hover:bg-secondary/20 transition-colors"
                      >
                        View on Pexels #{img.pexelsId}
                      </a>
                      <span className="inline-flex items-center px-2.5 py-1 bg-muted text-muted-foreground rounded-full">
                        {img.licence}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Credits;
