import { MicroBanner, Header, Footer } from "@/components/layout";
import {
  Hero,
  ProblemSection,
  ShiftSection,
  ConceptSection,
  MonthlyReports,
  Testimonials,
  TrustFeatures,
  // GlobalTour,
} from "@/components/home";

export default function Home() {
  return (
    <main className="min-h-screen">
      <MicroBanner />
      <Header />
      <Hero />
      <ProblemSection />
      <ShiftSection />
      <ConceptSection />
      <MonthlyReports />
      {/* <GlobalTour /> */}
      <Testimonials />
      <TrustFeatures />
      <Footer />
    </main>
  );
}
