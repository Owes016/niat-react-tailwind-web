
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsSection from '@/components/StatsSection';
import CoursesSection from '@/components/CoursesSection';
import ProgramsSection from '@/components/ProgramsSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import HeadlinesSection from '@/components/HeadlinesSection';
import FaqSection from '@/components/FaqSection';
import MentorshipSection from '@/components/MentorshipSection';
import CollaborationsSection from '@/components/CollaborationsSection';
import HighlightsSection from '@/components/HighlightsSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <MentorshipSection />
        <CollaborationsSection />
        <StatsSection />
        <CoursesSection />
        <HighlightsSection />
        <ProgramsSection />
        <HeadlinesSection />
        <FaqSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
