import Layout from '@/components/Layout';
import Hero from '@/components/Hero';
import About from '@/components/About';
import SelectedWorks from '@/components/SelectedWorks';
import Contact from '@/components/Contact';
import SectionDivider from '@/components/SectionDivider';

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
        <div className="relative">
          <SectionDivider />
          <About />
        </div>
        <div className="relative">
          <SectionDivider />
          <SelectedWorks />
        </div>
        <div className="relative">
          <SectionDivider />
          <Contact />
        </div>
      </Layout>
    </>
  );
}
