"use client";
import "./CTACard.css";
import Button from "../Button/Button";
import { MdArticle } from "react-icons/md";
import Copy from "../Copy/Copy";

const CTACard = () => {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta-copy">
          <div className="cta-col">
            <Copy animateOnScroll={true}>
              <p className="sm"></p>
            </Copy>
          </div>

          <div className="cta-col">
            <Copy animateOnScroll={true}>
              <p className="lg">
               n&apos;hésitez pas a nous contacter	
	      </p>
            </Copy>

            <Button
              animateOnScroll={true}
              delay={0.25}
              variant="dark"
              href="/contact"
            >
             Reservez maintenant!  
            </Button>
          </div>
        </div>

        <div className="cta-card">
          <div className="cta-card-copy">
            <div className="cta-card-col">
              <Copy animateOnScroll={true}>
                <h3>L&apos;Art de la Révolution Minimaliste</h3>
              </Copy>
            </div>

            <div className="cta-card-col">
              <Copy animateOnScroll={true}>
                <p>
                	Nous ne fabriquons pas de simples savons, nous distillons un futur.
	  		Notre histoire commence par un désordre créatif,
	  		celui d'oser rêver d'une salle de bain zéro déchet.
	  	</p>

                <p>
                	Notre touche secrète ? Un équilibre parfait entre l'audace artisanale et l'expertise en galénique.
	  		Rejoignez la communauté Roots et transformez votre douche quotidienne en un acte puissant,
	  		pour vous et pour la planète.
	  	</p>
              </Copy>

              <Button
                animateOnScroll={true}
                delay={0.25}
                variant="light"
                icon={MdArticle}
                href="/studio"
              >
                Qui somme nous ?
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTACard;
