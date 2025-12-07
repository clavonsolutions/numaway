import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Register = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20 min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display font-bold mb-2">Create Account</h1>
          <p className="text-muted-foreground">Start your study abroad journey with NUMAWAY</p>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="p-4 rounded-xl border border-border bg-background" />
            <input type="text" placeholder="Last Name" className="p-4 rounded-xl border border-border bg-background" />
          </div>
          <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl border border-border bg-background" />
          <input type="tel" placeholder="Phone Number" className="w-full p-4 rounded-xl border border-border bg-background" />
          <input type="password" placeholder="Password" className="w-full p-4 rounded-xl border border-border bg-background" />
          <Button variant="hero" className="w-full" size="lg">Create Account</Button>
        </form>
        <p className="text-center mt-6 text-muted-foreground">Already have an account? <a href="/login" className="text-secondary font-medium">Sign in</a></p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Register;
