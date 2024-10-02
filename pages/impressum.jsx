import React from "react";
import Wrapper from "../layout/wrapper";
import SEO from "../components/seo";
import HeaderTwo from "../layout/headers/headertwo";
import FooterFive from "../layout/footers/footerfive";

const impressum = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Impressum"} />
      <HeaderTwo></HeaderTwo>
      <section className="container mt-5">
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Impressum</h1>

        <div className="mb-4">
          <h2 className="text-2xl font-semibold mb-2">Details</h2>
          <p className="mb-2">
            <strong>BauIngenious Service</strong>
          </p>
          <p className="mb-2">
            Bozener Str. 33
            <br />
            41063 Mönchengladbach
          </p>
          <p className="mb-2">
            <strong>Steuernummer:</strong> 121/5004/6703
          </p>
        </div>
      </div>
      </section>
      <FooterFive></FooterFive>
    </Wrapper>
  );
};

export default impressum;
