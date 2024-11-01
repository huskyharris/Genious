import Link from "next/link";
import React from "react";

const Abdichtungs = ({ item }) => {
  return (
    <>
      <section
        className="page-title-area"
        style={{
          background:
            "url(https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="page-title-wrapper">
                <p className="">
                  Bauingenious – Ihr Partner für Abdichtungstechnik in
                  Mönchengladbach
                </p>
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
                    <span>Abdichtungstechnik</span>
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
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Bauingenious Abdichtungstechnik{" "}
                  </h3>
                  Im Verlauf einer komplexen Sanierungsmaßnahme entstehen vor
                  allem im Bereich der Abdichtungstechnik viele Problematiken,
                  welche eine elegante Lösung fordern. Unserer Erfahrung nach
                  handelt es sich bei solchen Fragestellungen zu 95 % um
                  Immobilien aus dem Jahre 1900 – 1990.{" "}
                  <strong>
                    Eigentümer stehen nun vor einem Problem und sollten sich auf
                    folgende Fragestellungen konzentrieren:
                  </strong>
                  <ul>
                    <br />
                    * Bleibt die Sanierungsmaßnahme im wirtschaftlichen Bereich?
                    <br />
                    * Bin ich gut genug Beraten?
                    <br />* Was möchte ich durch diese Sanierungsmaßnahme
                    bewirken?
                  </ul>
                </p>
                <p className="mb-45">
                  Zum einen gibt es Eigentümer die über den eigenen
                  Feuchteschaden Bescheid wissen doch Ratlos sind und zum
                  anderen gibt es jene welche es erst nach dem ersten schweren
                  Schaden aufmerksam werden. Speziell bei Erdberührten
                  Bauteilen, wo ein Lastfall der Stufe „“ (Drückendes
                  Sickerwasser), vorhanden ist, entwickelt sich die Sanierung zu
                  einer Ingenieurskunst.
                </p>

                <p className="mb-15">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Grundlagen – Bauingenious Abdichtungstechnik{" "}
                  </h3>
                  <strong>
                    Die Messungen mit dem Feuchtemessgeräten werden in Digits
                    angegeben
                  </strong>
                  <ul>
                    <br />
                    20-40 digits sehr trocken
                    <br />
                    40-60 digits normal trocken
                    <br />
                    60-80 digits halbtrocken
                    <br />
                    80-110 digits feucht
                    <br />
                    110-130 digits sehr feucht
                    <br />
                    ab 130 digits nass bzw. feuchtegesättigt
                  </ul>
                </p>
                <p className="mb-45">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Feuchtemessung{" "}
                  </h3>
                  Ein wichtiger Bestandteil unseres Gutachtens, was wir Ihnen
                  zum Angebot der Sanierung zur Verfügung stellen, ist unsere
                  Feuchtemessung. Die Messungen werden bei uns in der Regel mit
                  dem Trotec T650 Feuchtemesser mit Kugelsonde, der Trotec T600
                  Mikrowelle und dem T250 – IR- Thermohygrometer durchgeführt.
                </p>

                <p className="mb-15">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    Schadensursachen{" "}
                  </h3>
                  Schadensursachen Der Schaden soll in seinem Umfang beurteilt
                  werden, die Ursache wird definiert daraus resultiert unser
                  Bauingenious Sanierungskonzept. Ursache für den Feuchteschaden aller
                  erdberührten Außenwände ist eindringendes Kapillarwasser.
                  Hierunter ist in diesem Zusammenhang solche Feuchtigkeit zu
                  verstehen, die sich Poren- bzw. kapillarfüllend im Baustoff
                  oder Bauteil bewegt und die sich dabei entsprechend den
                  Schwerkraftgesetzen, aber auch durch Kapillarkräfte entgegen
                  diesen Gesetzmäßigkeiten ausbreitet. Solche Feuchtigkeit
                  dringt in der Regel durch Schäden in der Gebäudeaußenhaut ins
                  Gebäudeinnere oder steigt über erdberührte Bauteile aus dem
                  Erdreich in das Gebäude. In den betroffenen Kellern ist ein
                  wahrscheinlicher Defekt in- bzw. das Nichtvorhandensein der
                  vertikalen Außenabdichtung die Hauptursache für den
                  vorgefundenen Feuchteschaden. Das Schadensbild bedingt sich
                  durch Salze, die in Wasser gelöst das Mauerwerk durchwandern.
                  Diese Salze bleiben nach dem Phasenwechsel des Wassers
                  (Flüssig{"->"} Dampf) an der Oberfläche. Dort kristallisieren
                  sie unter Volumenvergrößerung aus und sorgen für die
                  sichtbaren Ausblühungen und Putzabsprengungen.{" "}
                </p>
                <p className="mb-45 ">
                  <img
                    style={{ width: "auto", height: "300px" }}
                    src="/assets/img/features/F3.webp"
                    alt=""
                  />
                  <br />
                  Die Skizze zeigt an den Innenseiten der Außenwände
                  Salzausblühungen sowie Putzabsprengungen. In diesen Bereichen
                  ist die Außenwand partiell nahe der Sättigungsgrenze
                  durchfeuchtet (110 {"->"}130 digits). Angedacht als Beispiel
                  soll nun der Bereich als Lagerraum genutzt werden, darauf
                  aufbauend nun unser Sanierungskonzept.
                </p>

                <p className="mb-15">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Bauingenious – Sanierungskonzept – Aussalzungen{" "}
                  </h3>
                  Gemäß der angedachten Nutzung als Lagerraum bietet es sich in
                  diesem Fall an, die Oberfläche der erdberührten Außenwände und
                  der angrenzenden Innenwände nachhaltig salzfrei und trocken zu
                  halten. Hierfür empfehlen wir den Auftrag eines
                  Entfeuchtungsputzes. Dieser lässt Feuchtigkeit aus dem Bauteil
                  verdunsten ohne die Salze aus dem Mauerwerk zu transportieren.
                  Zudem ist dieser Putz über die Mikroporenstruktur so
                  eingestellt, dass er:
                  <strong>
                    Wasser in flüssiger Form nicht in den Kellerraum dringen
                    lässt und trotzdem diffusionsoffen –also „atmungsaktiv“- und
                    nicht zuletzt durch den hohen pH- Wert als schimmelhemmend
                    einzustufen ist.
                  </strong>
                </p>
                <p className="mb-45 ">
                  <img
                    style={{ width: "auto", height: "300px" }}
                    src="/assets/img/features/F5.jpg"
                    alt=""
                  />
                  <br />
                  Die Systemskizze 1 zeigt den Aufbau der Bauingenious –
                  Sanierungsmaßnahme an den Außenwänden Diese Sanierung ist
                  keine Abdichtung, durch die dem Gewässer abwandten Lage wird
                  sie die Räume jedoch dauerhaft trocken und salzfrei halten!
                </p>

                <p className="mb-15">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  Bauingenious – Sanierungskonzept – Lastfall{" "}
                  </h3>{" "}
                  drückendes Sickerwasser Auch hier werden sich starke
                  Salzausblühungen und Putzabsprengungen zu erkennen geben. Die
                  betroffenen Außenwände der erdberührten Wände sind nass bzw.
                  feuchtegesättigt. (ab 130 digits). Wie besprochen bietet sich
                  als Sanierungskonzept an, die Wände mittels des Sperrputzes im
                  Bereich der Erdberührung gegen eindringende drückende Feuchte
                  abzusperren. Dies ist insofern nötig, als dass durch die Nähe
                  zu dem anliegenden Gewässer eventuell Wasser in flüssiger Form
                  in die Kellerräume eindringen könnte. Diese Sperrebene
                  verhindert, dass Feuchtigkeit aus den Fundamenten und der Wand
                  an Bauteilinnenseite gelangen kann, eine Prüfung auf 5m
                  negativen Wasserdruck liegt vor. Die Oberfläche der
                  Abdichtungsebene aus dem Sperrputz kann: Rein funktionell ohne
                  Nachbehandlung gelassen werden. Hier besteht jedoch die Gefahr
                  von Tauwasserbildung auf der Oberfläche; Mit einem
                  sorbtionsfähigem, „atmungsaktivem“ Oberputz– hier dem Redstone
                  Klimaputz versehen werden, der Feuchtigkeit aufnehmen,
                  zwischenspeichern und wieder in die Raumluft abgeben kann wo
                  sie weggelüftet wird. Ich empfehle auf jeden Fall diese
                  Option.
                </p>
                <p className="mb-45 ">
                  <img
                    style={{ width: "auto", height: "300px" }}
                    src="/assets/img/features/F6.jpg"
                    alt=""
                  />
                  <br />
                </p>

                <p className="mb-15">
                  
                  Zudem wird über die als Bohrlochinjektion ausgeführte
                  nachträgliche Horizontalsperre ein aufsteigen der Feuchtigkeit
                  unterbunden. Alle eingebundenen Zwischenwände werden mittels
                  einer vertikalen Kapillarsperre vor dem Einwandern von
                  Feuchtigkeit geschützt. Die Horizontalsperre ist in den
                  Toilettenräumen zur Straße hin oberhalb der Fliesen
                  einzubauen. Über der Sperre wird ein Entfeuchtungsputz
                  aufgebracht, um hier ein schnelles, salzfreies Austrocknen der
                  Wand zu generieren. Die Fliesen liegen hier teilweise hohl, es
                  ist davon auszugehen, dass sie auf Dauer durch den
                  „Sprengdruck“ der Salze komplett von der Wand abgelöst werden.
                  Hier zu sanieren würde bedingen, dass die Fliesen und der
                  Unterputz abgeschlagen werden würden, grundiert und mit
                  Sperrputz verputzt würde und hiernach die Wand erneut gefliest
                  werden würde. Teile der Kelleraußenwände sollten lediglich im
                  unteren Bereich bis auf eine Höhe von ca. 80 cm mit dem
                  Entfeuchtungsputz geputzt werden.
                </p>
                <p className="mb-45 ">
                  <img
                    style={{ width: "auto", height: "300px" }}
                    src="/assets/img/features/F4.webp"
                    alt=""
                  />
                </p>

                {/*  <div className="service-sub-image">
                  <img src="/assets/img/service/service-sub1.jpg" alt="" />
                  <img src="/assets/img/service/service-sub2.jpg" alt="" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Abdichtungs;
