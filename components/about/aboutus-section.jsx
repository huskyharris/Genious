import Link from 'next/link';
import React from 'react';

const AboutUsSection = () => {
    return (
        <section className="about-area pt-120 pb-90">
            <div className="container">
                <div className="row align-items-center wow fadeInUp" data-wow-delay=".3s">
                    <div className="col-lg-6">
                        <div className="about-thumb mb-30">
                            <img src="https://images.pexels.com/photos/6444967/pexels-photo-6444967.jpeg" alt=""/>
                            <div className="about-thumb-meta">
                               
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content mb-30">
                            <div className="section-title">
                                <span className="section-subtitle">über uns</span>
                                <h2 className="section-main-title mb-20">Unser Unternehmen - Wofür wir stehen, was uns leitet
                                </h2>
                            </div>
                            <p className="mb-30">Bauingenious hat sich darauf konzentriert und spezialisiert, Sie mit Dienst – und Werkleistungen rund um die energetische Sanierung Ihrer Immobilie zu versorgen. Dabei spielen wirtschaftliche Aspekte und die Beachtung der zusätzlich Technischen Vertragsbedingungen eine vertiefte Rolle.

Bei der Kostenermittlung für derartige Sanierungsvorhaben, orientieren wir uns nicht auf Kennzahlen, sondern wir kalkulieren nach Einheitspreisen und bilden auf Verlangen auch Pauschalen. Innovative Strategien und moderne Prozesse die wir einsetzen, wie zum Beispiel die Werkzeuge des „Lean Construction Managements“, bilden den Erfolg unserer Arbeit. Für die Verantwortung der Erreichung dieses Erfolges, stehen unsere Mitarbeiter, welche gemeinsam für die Umsetzung unserer Strategien sorgen. Von der Arbeitsvorbereitung des Projektes bis hin zur Umsetzung, wir ziehen gemeinsam mit allen beteiligten an einem Strang.

Nach Auftragserteilung konzentrieren wir uns auf Leistungen welche den Nachhaltigkeitsaspekt Ihrer Immobilie fördert, um somit ein Maximum an Effizienz zu erreichen. Unsere Mitunternehmer suchen wir mit großer Sorgfalt aus. Ein wichtiges Kriterium bei der Auswahl ist es, das auch unsere Fachpartner sich als Ziel gesetzt haben, Verschwendung innerhalb der Projektabwicklung zu vermeiden. Unser Ergebnis ist es den ökologischen, ökonomischen uns sozialen Zielen gerecht zu werden.

Wir streben nach einem partnerschaftlichen und verantwortungsvollen Verhältnis zwischen Auftraggeber und Auftragnehmer. Unsere Zielgruppen sind Wohnungsgenossenschaften und Privatkunden, welche sich gemeinsam mit uns auf den Weg Richtung Verbesserung machen wollen.</p>
                          
                            <div className="about-btn">
                                <Link href="/contact"><a className="fill-btn">Kontakt<i className="fal fa-angle-right"></i></a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;