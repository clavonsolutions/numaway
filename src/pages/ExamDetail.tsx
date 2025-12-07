import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getExamBySlug } from "@/data/exams";
import { Button } from "@/components/ui/button";
import { Clock, CreditCard, Calendar, CheckCircle } from "lucide-react";

const ExamDetail = () => {
  const { slug } = useParams();
  const exam = getExamBySlug(slug || "");
  if (!exam) return <div className="min-h-screen flex items-center justify-center">Exam not found</div>;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-24 bg-gradient-hero text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-display font-bold mb-4">{exam.name}</h1>
            <p className="text-xl text-primary-foreground/70">{exam.fullName}</p>
          </div>
        </section>
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-10">
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">Overview</h2>
                  <p className="text-muted-foreground">{exam.description}</p>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-card p-4 rounded-lg shadow-soft text-center"><CreditCard className="w-6 h-6 text-secondary mx-auto mb-2" /><div className="font-bold">{exam.fees}</div><div className="text-sm text-muted-foreground">Test Fee</div></div>
                  <div className="bg-card p-4 rounded-lg shadow-soft text-center"><Calendar className="w-6 h-6 text-secondary mx-auto mb-2" /><div className="font-bold">{exam.validity}</div><div className="text-sm text-muted-foreground">Validity</div></div>
                  <div className="bg-card p-4 rounded-lg shadow-soft text-center"><Clock className="w-6 h-6 text-secondary mx-auto mb-2" /><div className="font-bold">{exam.scoring}</div><div className="text-sm text-muted-foreground">Score Range</div></div>
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">Test Sections</h2>
                  <div className="space-y-3">{exam.sections.map((s, i) => <div key={i} className="p-4 bg-card rounded-lg shadow-soft"><div className="flex justify-between mb-1"><span className="font-semibold">{s.name}</span><span className="text-muted-foreground text-sm">{s.duration}</span></div><p className="text-sm text-muted-foreground">{s.description}</p></div>)}</div>
                </div>
                <div>
                  <h2 className="text-2xl font-display font-bold mb-4">Preparation Tips</h2>
                  <div className="space-y-2">{exam.preparationTips.map((t, i) => <div key={i} className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-secondary mt-0.5" /><span>{t}</span></div>)}</div>
                </div>
              </div>
              <div>
                <div className="bg-card p-6 rounded-2xl shadow-card sticky top-24">
                  <h3 className="font-display font-bold mb-4">Ready to Register?</h3>
                  <p className="text-muted-foreground text-sm mb-6">We can help you register and prepare for {exam.name}.</p>
                  <Button variant="hero" className="w-full mb-3" asChild><a href="/consultation">Get Help Registering</a></Button>
                  <Button variant="outline" className="w-full" asChild><a href="/services/test-prep">Test Prep Services</a></Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ExamDetail;
