import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Login = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="pt-20 min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-display font-bold mb-2">Welcome Back</h1>
          <p className="text-muted-foreground">Sign in to your NUMAWAY account</p>
        </div>
        <form className="space-y-4">
          <input type="email" placeholder="Email Address" className="w-full p-4 rounded-xl border border-border bg-background" />
          <input type="password" placeholder="Password" className="w-full p-4 rounded-xl border border-border bg-background" />
          <Button variant="hero" className="w-full" size="lg">Sign In</Button>
        </form>
        <p className="text-center mt-6 text-muted-foreground">Don't have an account? <a href="/register" className="text-secondary font-medium">Sign up</a></p>
      </div>
    </main>
    <Footer />
  </div>
);

export default Login;
