import Link from "next/link";
import React from "react";

const ServiceDetailsArea = ({ item }) => {
  return (
    <>
      <section
        className="page-title-area"
        style={{ background: "url(https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-title-wrapper">
                <p className="">Bauingenious – Ihr Partner für Badsanierung in Mönchengladbach</p>
                {/* <h1 className="page-title mb-10">{item.serviceTitle}</h1> */}
              </div>
            </div>
          </div>
        </div>
        <div className="breadcrumb-wrapper">
          <div className="container">
            <div className="breadcrumb-menu">
              <nav
                aria-label="Breadcrumbs"
                className="breadcrumb-trail breadcrumbs"
              >
                <ul className="trail-items">
                  <li className="trail-item trail-begin">
                    <Link href="/">
                      <a>
                        <span>Home</span>
                      </a>
                    </Link>
                  </li>
                  <li className="trail-item trail-end">
                    <span>Service</span>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section className="service-details pt-60 pb-60">
        <div className="container">
          <div className="row wow fadeInUp" data-wow-delay=".3s">
            <div className="col-lg-12 col-md-12">
              <div className="service-details-main mb-60">
                <div className="service-image">
                  <img src="/assets/img/service/service-img1.jpg" alt="" />
                </div>
                {/* <h3 className="mb-15">{item.serviceTitle}</h3> */}
                <p className="mb-15">
                  Ein ausgeklügeltes Konzept, geschultes Personal und innovative
                  Produkte – mit dieser Kombination hat es die Bauingenious 
                  GmbH aus Mönchengladbach geschafft, den regionalen Markt der
                  Badsanierung zu revolutionieren. Bereits zahlreiche zufriedene
                  Kunden haben sich für die Zusammenarbeit mit uns entschieden
                  und so ihr persönliches Traumbad erhalten.
                </p>
                <p className="mb-45">
                  Sie wünschen sich ein barrierefreies Bad und bodenmontierte
                  Duschen oder andere Leistungen im Bereich Badsanierung? Wir
                  sind Ihr zuverlässiger Partner im Raum Mönchengladbach und
                  Umgebung. Von der ersten Planung bis hin zur erfolgreichen
                  Ausführung stehen wir mit Ihnen in ständigem und engem
                  Kontakt. Lassen Sie sich professionell beraten und profitieren
                  Sie von einem unkomplizierten und reibungslosen Ablauf für
                  Ihre Badsanierung.
                </p>

                <section className="max-w-5xl mx-auto p-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Badsanierung vom Profi-Bauingenieur
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Wir beginnen bei der{" "}
                    <span className="font-semibold">Badsanierung</span> mit der
                    Erstellung eines Aufmaßes durch unseren technischen
                    Außendienst oder einen{" "}
                    <span className="font-semibold">Bauingenious-Ingenieur</span>.
                    Dieses Aufmaß dient als Grundlage für die Planung Ihres
                    neuen Badezimmers. Daneben nehmen wir Ihre Wünsche
                    hinsichtlich:
                  </p>

                  <ul className="space-y-4 mb-6">
                    <li className="border-b border-gray-300 pb-2">
                      Wand- und Bodenfliesen
                    </li>
                    <li className="border-b border-gray-300 pb-2">
                      Fugenfarbe
                    </li>
                    <li className="border-b border-gray-300 pb-2">
                      Silikonfarbe
                    </li>
                    <li className="border-b border-gray-300 pb-2">
                      WC-Element
                    </li>
                    <li className="border-b border-gray-300 pb-2">Badewanne</li>
                    <li className="border-b border-gray-300 pb-2">
                      Feininstallationen
                    </li>
                  </ul>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Weitere Vorstellungen prüfen wir auf eine realistische sowie
                    wirtschaftliche Umsetzung.
                  </p>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Es folgt eine Kalkulation auf Basis Ihrer Wünsche, dem
                    Aufmaß und den verbundenen Leistungen aller Gewerke, die wir
                    für Sie koordinieren. Das{" "}
                    <span className="font-semibold">Angebot</span> gestalten wir
                    so <span className="font-semibold">transparent</span>, dass
                    es Ihnen möglich ist, die Preisermittlung problemlos
                    nachzuvollziehen. Das ist uns wichtig. Parallel dazu
                    erhalten Sie eine digitale{" "}
                    <span className="font-semibold">3-D-Planung</span> Ihres
                    zukünftigen barrierefreien Bades.
                  </p>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Vor Durchführung der Sanierungsarbeiten erstellen wir einen
                    detaillierten Bauablaufplan nach der{" "}
                    <span className="font-semibold">
                      Lean Construction-Methode
                    </span>
                    . Auf diese Weise ist genau festgelegt, welche Arbeiten an
                    welchem Tag stattfinden sollen. Ebenso wird ersichtlich, wie
                    sich die Schnittstellen zwischen{" "}
                    <span className="font-semibold">
                      Maurer, Fliesenleger und Klempner
                    </span>{" "}
                    auf den Gesamtterminplan auswirken. Der so gemeinsam
                    vereinbarte Zeitplan ist Vertragsbestandteil und dient Ihnen
                    und uns nicht nur als{" "}
                    <span className="font-semibold">Orientierung</span>, sondern
                    sorgt gleichzeitig für einen{" "}
                    <span className="font-semibold">
                      optimierten Bauprozess
                    </span>
                    .
                  </p>
                </section>
                <section className="max-w-4xl mx-auto p-8">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                    Barrierefreies Bad aus einer Hand
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Wir planen und sanieren Ihr Badezimmer nach Ihren
                    individuellen Bedürfnissen, Ideen und Wünschen. Dabei
                    bringen wir insbesondere bei der{" "}
                    <span className="font-semibold">
                      barrierefreien Badgestaltung
                    </span>{" "}
                    jede Menge Expertise ein. Gerade im Alter und bei der
                    vorausschauenden Badplanung bietet Ihnen ein barrierefreies
                    Bad zahlreiche Vorteile. Es sorgt für{" "}
                    <span className="font-semibold">
                      mehr Sicherheit und Komfort
                    </span>{" "}
                    und ist auch mit einem Rollator oder Rollstuhl problemlos
                    zugänglich. Sie möchten Ihr Bad barrierefrei gestalten bzw.
                    professionell sanieren lassen? Dann wenden Sie sich an unser
                    erfahrenes Team.
                  </p>

                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Erteilen Sie uns Ihren Auftrag, haben Sie nur einen{" "}
                    <a href="#" className="text-blue-600 underline">
                      Ansprechpartner
                    </a>
                    . Wir sorgen für die einwandfreie Erledigung der Bauarbeiten
                    aller Branchen und liefern Ihnen eine{" "}
                    <span className="font-semibold">
                      Komplettlösung aus einer Hand
                    </span>
                    .{" "}
                    <a href="#" className="text-blue-600 underline">
                      Kontaktieren
                    </a>{" "}
                    Sie unser Ingenieurbüro und Ihrer{" "}
                    <span className="font-semibold">Badsanierung</span> steht
                    nichts mehr im Weg.
                  </p>
                </section>
                <div className="service-sub-image">
                  <img src="/assets/img/service/service-sub1.jpg" alt="" />
                  <img src="/assets/img/service/service-sub2.jpg" alt="" />
                </div>
              
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetailsArea;
