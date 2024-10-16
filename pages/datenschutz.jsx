import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/seo";
import FooterFive from "../layout/footers/footerfive";
import HeaderTwo from "../layout/headers/headertwo";

const datenschutz = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Datenschutz"} />
      <HeaderTwo></HeaderTwo>
      <section className="container mt-8">
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">
            Datenschutz auf einen Blick
          </h1>

          <h2 className="text-2xl font-semibold mb-4">Allgemeine Hinweise</h2>
          <p className="mb-4">
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was
            mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website
            besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
            persönlich identifiziert werden können. Ausführliche Informationen
            zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
            aufgeführten Datenschutzerklärung.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Datenerfassung auf unserer Website
          </h2>

          <h3 className="text-xl font-semibold mb-2">
            Wer ist verantwortlich für die Datenerfassung auf dieser Website?
          </h3>
          <p className="mb-4">
            Die Datenverarbeitung auf dieser Website erfolgt durch den
            Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
            dieser Website entnehmen.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Wie erfassen wir Ihre Daten?
          </h3>
          <p className="mb-4">
            Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
            mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in
            ein Kontaktformular eingeben.
          </p>
          <p className="mb-4">
            Andere Daten werden automatisch beim Besuch der Website durch unsere
            IT-Systeme erfasst. Das sind vor allem technische Daten (z. B.
            Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die
            Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere
            Website betreten.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Wofür nutzen wir Ihre Daten?
          </h3>
          <p className="mb-4">
            Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
            der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
            Nutzerverhaltens verwendet werden.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Welche Rechte haben Sie bezüglich Ihrer Daten?
          </h3>
          <p className="mb-4">
            Sie haben jederzeit das Recht unentgeltlich Auskunft über Herkunft,
            Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
            erhalten. Sie haben außerdem ein Recht, die Berichtigung, Sperrung
            oder Löschung dieser Daten zu verlangen. Hierzu sowie zu weiteren
            Fragen zum Thema Datenschutz können Sie sich jederzeit unter der im
            Impressum angegebenen Adresse an uns wenden. Des Weiteren steht
            Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
          </p>
          <p className="mb-4">
            Außerdem haben Sie das Recht, unter bestimmten Umständen die
            Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
            verlangen. Details hierzu entnehmen Sie der Datenschutzerklärung
            unter „Recht auf Einschränkung der Verarbeitung“.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Analyse-Tools und Tools von Drittanbietern
          </h3>
          <p className="mb-4">
            Beim Besuch unserer Website kann Ihr Surf-Verhalten statistisch
            ausgewertet werden. Das geschieht vor allem mit Cookies und mit
            sogenannten Analyseprogrammen. Die Analyse Ihres Surf-Verhaltens
            erfolgt in der Regel anonym; das Surf-Verhalten kann nicht zu Ihnen
            zurückverfolgt werden.
          </p>
          <p className="mb-4">
            Sie können dieser Analyse widersprechen oder sie durch die
            Nichtbenutzung bestimmter Tools verhindern. Detaillierte
            Informationen zu diesen Tools und über Ihre
            Widerspruchsmöglichkeiten finden Sie in der folgenden
            Datenschutzerklärung.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Allgemeine Hinweise und Pflichtinformationen
          </h2>

          <h3 className="text-xl font-semibold mb-2">Datenschutz</h3>
          <p className="mb-4">
            Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
            Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
            vertraulich und entsprechend der gesetzlichen
            Datenschutzvorschriften sowie dieser Datenschutzerklärung. Wenn Sie
            diese Website benutzen, werden verschiedene personenbezogene Daten
            erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich
            identifiziert werden können. Die vorliegende Datenschutzerklärung
            erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie
            erläutert auch, wie und zu welchem Zweck das geschieht. Wir weisen
            darauf hin, dass die Datenübertragung im Internet (z. B. bei der
            Kommunikation per E-Mail) Sicherheitslücken aufweisen kann. Ein
            lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
            möglich.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Hinweis zur verantwortlichen Stelle
          </h3>
          <p className="mb-4">
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser
            Website ist:
          </p>
          <p className="mb-4">
            Bauingenious GmbH
            <br />
            Telefon: +49 1577 142 6549 
            <br />
            E-Mail:{" "}
            <a href="mailto:info@Bauingenious.de" className="text-blue-500">
              info@Bauingenious.de
            </a>
          </p>
          <p className="mb-4">
            Verantwortliche Stelle ist die natürliche oder juristische Person,
            die allein oder gemeinsam mit anderen über die Zwecke und Mittel der
            Verarbeitung von personenbezogenen Daten (z. B. Namen,
            E-Mail-Adressen o. Ä.) entscheidet.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Widerruf Ihrer Einwilligung zur Datenverarbeitung
          </h3>
          <p className="mb-4">
            Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
            Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
            jederzeit widerrufen. Dazu reicht eine formlose Mitteilung per
            E-Mail an uns. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
            Datenverarbeitung bleibt vom Widerruf unberührt.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie
            gegen Direktwerbung (Art. 21 DSGVO)
          </h3>
          <p className="mb-4">
            Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e
            oder f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen,
            die sich aus Ihrer besonderen Situation ergeben, gegen die
            Verarbeitung Ihrer personenbezogenen Daten Widerspruch einzulegen;
            dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling.
            Die jeweilige Rechtsgrundlage, auf denen eine Verarbeitung beruht,
            entnehmen Sie dieser Datenschutzerklärung. Wenn Sie Widerspruch
            einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht
            mehr verarbeiten, es sei denn, wir können zwingende schutzwürdige
            Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte
            und Freiheiten überwiegen oder die Verarbeitung dient der
            Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
            (Widerspruch nach Art. 21 Abs. 1 DSGVO).
          </p>
          <p className="mb-4">
            Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu
            betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die
            Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke
            derartiger Werbung einzulegen; dies gilt auch für das Profiling,
            soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie
            widersprechen, werden Ihre personenbezogenen Daten anschließend
            nicht mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach
            Art. 21 Abs. 2 DSGVO).
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Beschwerderecht bei der zuständigen Aufsichtsbehörde
          </h3>
          <p className="mb-4">
            Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
            Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
            Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
            oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
            besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
            gerichtlicher Rechtsbehelfe. Eine Liste der Datenschutzbeauftragten
            sowie deren Kontaktdaten können folgendem Link entnommen werden:{" "}
            <a
              href="https://www.bfdi.bund.de/DE/Service/Anschriften/anschriften_table.html"
              className="text-blue-500"
            >
              Deutschland
            </a>{" "}
            und{" "}
            <a
              href="https://www.dsb.gv.at/ueber-die-website/kontakt.html"
              className="text-blue-500"
            >
              Österreich
            </a>
            .
          </p>

          <h3 className="text-xl font-semibold mb-2">
            Recht auf Datenübertragbarkeit
          </h3>
          <p className="mb-4">
            Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
            oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich
            oder an einen Dritten in einem gängigen, maschinenlesbaren Format
            aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten
            an einen anderen Verantwortlichen verlangen, erfolgt dies nur,
            soweit es technisch machbar ist.
          </p>

          <h3 className="text-xl font-semibold mb-2">
            SSL- bzw. TLS-Verschlüsselung
          </h3>
          <p className="mb-4">
            Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
            Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
            oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL-
            bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen
            Sie daran, dass die Adresszeile des Browsers von „http://“ auf
            „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
          </p>
        </div>
      </section>
      <FooterFive></FooterFive>
    </Wrapper>
  );
};

export default datenschutz;
