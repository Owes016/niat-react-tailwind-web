
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

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <MentorshipSection />
        <StatsSection />
        <CoursesSection />
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
