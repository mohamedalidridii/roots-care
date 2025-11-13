"use client";
import "./sample-project.css";
import Footer from "@/components/Footer/Footer";
import Copy from "@/components/Copy/Copy";

const Page = () => {
  return (
    <div className="sample-project-page">
      <section className="project-header">
        <Copy delay={0.75}>
          <p className="lg">Après shampoing</p>
          <h1>Solide Naturel</h1>
        </Copy>
      </section>

      <section className="project-banner-img">
        <div className="project-banner-img-wrapper">
          <img src="/project/sample-project-1.jpg" alt="" />
        </div>
      </section>

      <section className="project-details">
        <Copy animateOnScroll={true}>
          <div className="details">
            <p>Concept</p>
            <h4>
	  Complétez votre routine avec l&apos;après-shampoing solide Roots, spécialement formulé pour les cheveux gras.
	  Enrichi en huile de jojoba, il démêle sans alourdir et agit pour réguler l&apos;excès de sébum. Économique et pratique sous sa forme cubique, il laisse vos cheveux légers, brillants et frais, le tout enveloppé d&apos;un agréable parfum de verveine.
	  </h4>
          </div>

          <div className="details">
            <p>Forme</p>
            <h3>Cube de 15 mm - 12 unités par boîte</h3>
          </div>

          <div className="details">
            <p>Actifs</p>
            <h3>Huile de jojoba</h3>
          </div>

          <div className="details">
            <p></p>
            <h3>Sans sulfates, sans parabènes, sans silicones</h3>
          </div>

          <div className="details">
            <p>Laboratoir</p>
            <h3>Roots Care Cubes</h3>
          </div>
        </Copy>
      </section>

      <section className="project-images">
        <div className="project-images-container">
          <div className="project-img">
            <div className="project-img-wrapper">
              <img src="/project/sample-project-2.jpg" alt="" />
            </div>
          </div>

          <div className="project-img">
            <div className="project-img-wrapper">
              <img src="/project/sample-project-3.jpg" alt="" />
            </div>
          </div>

          <div className="project-img">
            <div className="project-img-wrapper">
              <img src="/project/sample-project-4.jpg" alt="" />
            </div>
          </div>

          <div className="project-img">
            <div className="project-img-wrapper">
              <img src="/project/sample-project-5.jpg" alt="" />
            </div>
          </div>

          <div className="project-img">
            <div className="project-img-wrapper">
              <img src="/project/sample-project-6.jpg" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className="project-details">
        <Copy animateOnScroll={true}>
          <div className="details">
            <p>Couleur</p>
            <h3>Vert</h3>
          </div>

          <div className="details">
            <p>Style</p>
            <h3>Cube solide zéro déchet</h3>
          </div>

          <div className="details">
            <p>Matière active</p>
            <h3>Huile de Noisette, Huile de pépins de Raisains, Hydrolat d’Ortie</h3>
          </div>

          <div className="details">
            <p>Fragrance</p>
            <h3>Verveine fraîche</h3>
          </div>

          <div className="details">
            <p>Usage</p>
            <h3>Cheveux gras – purifiant & régulateur</h3>
          </div>
        </Copy>
      </section>

      <section className="next-project">
        <Copy animateOnScroll={true}>
          <p style={{ marginBottom: "1rem" }}>02 - 05</p>
          <h2>Next</h2>
        </Copy>

        <div className="next-project-img">
          <div className="next-project-img-wrapper">
            <img src="/project/next-project.jpg" alt="" />
          </div>
        </div>

        <Copy animateOnScroll={true}>
          <h3>Stoneface</h3>
        </Copy>
      </section>

      <Footer />
    </div>
  );
};

export default Page;
