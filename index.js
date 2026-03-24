import Landing3D from '../components/Landing3D';
import Section from '../components/Section';

export default function Home() {
  return (
    <>
      <Landing3D />
      <div style={{ position:'relative', zIndex:1 }}>
        <Section id="products" title="Our Products">
          Explore the cutting-edge autonomous drones, AI-driven systems, and next-gen technology ATLAS is pioneering.
        </Section>
        <Section id="tech" title="Technology">
          High-precision, AI-powered, fully autonomous solutions built for the future. Every system is engineered for performance and scalability.
        </Section>
        <Section id="about" title="About ATLAS">
          Founded with a vision bigger than conventional tech companies, ATLAS Technology is redefining what's possible in aerospace, robotics, and AI-driven innovation.
        </Section>
        <Section id="contact" title="Contact Us">
          Let’s shape the future together. Reach out to discuss partnerships, investments, or collaborations.
          <br />
          <a href="mailto:info@atlas-tech.com" style={{ display:'inline-block', marginTop:'1em', padding:'1em 2em', background:'#00ffcc', color:'#0a0a0a', borderRadius:'6px', fontWeight:'bold', textDecoration:'none' }}>Email Us</a>
        </Section>
      </div>
    </>
  );
}