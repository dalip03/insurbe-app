"use client";

export default function ImprintPage() {
  return (
    <section className="min-h-screen  py-20 px-4">
      <div className="max-w-4xl mx-auto p-8 sm:p-12 space-y-8">

        <header>
          <header className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Imprint
          </h1>
        </header>
          <p className="text-gray-600">
            Information according to § 5 TMG and § 18 para. 1 MStV
          </p>
        </header>

        {/* Company Info */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Company
          </h2>
          <p className="text-gray-700">
            Vetter Consulting GmbH<br />
            Hermann-Hollerith-Straße 1<br />
            68163 Mannheim
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Contact
          </h2>
          <p className="text-gray-700">
            Phone: +49 621 49 09 24 46<br />
            Email:{" "}
            <a
              href="mailto:info@vetter-consulting.de"
              className="text-purple-600 font-semibold hover:underline"
            >
              info@vetter-consulting.de
            </a>
          </p>
        </section>

        {/* Managing Director */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Authorized Managing Director
          </h2>
          <p className="text-gray-700">Tobias Vetter</p>
        </section>

        {/* Commercial Register */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Commercial Register Entry
          </h2>
          <p className="text-gray-700">
            Mannheim Local Court: HRB 744884
          </p>
        </section>

        {/* Supervisory Authority */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Supervisory Authority
          </h2>
          <p className="text-gray-700">
            Rhine-Neckar Chamber of Industry and Commerce<br />
            L1, 2<br />
            68161 Mannheim
          </p>
        </section>

        {/* VAT */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            VAT Identification Number
          </h2>
          <p className="text-gray-700">
            VAT ID No.: DE356381946
          </p>
        </section>

        {/* Professional Information */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Professional Information
          </h2>
          <p className="text-gray-700 mb-3">
            Permission pursuant to Section 34d Paragraph 1 of the German Trade Regulation Act (insurance broker)
          </p>
          <p className="text-gray-700">
            Intermediary Register:{" "}
            <a
              href="https://www.vermittlerregister.info"
              target="_blank"
              className="text-purple-600 font-semibold hover:underline"
            >
              www.vermittlerregister.info
            </a>
            <br />
            Registration No.: D-NNQN-4HJA8-10
          </p>
        </section>

        {/* Professional Regulations */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Professional Regulations
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Section 34d of the Trade Regulation Act (GewO)</li>
            <li>Sections 59–68 of the Insurance Contract Act (VVG)</li>
            <li>
              Section 48b of the Insurance Supervision Act (VAG) – Ordinance on Insurance Mediation and Consulting (VersVermV)
            </li>
          </ul>
          <p className="text-gray-600 mt-3">
            Available at{" "}
            <a
              href="https://www.gesetze-im-internet.de"
              target="_blank"
              className="text-purple-600 font-semibold hover:underline"
            >
              www.gesetze-im-internet.de
            </a>
          </p>
        </section>

        {/* Ombudsman */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Ombudsman
          </h2>
          <p className="text-gray-700 mb-4">
            Insurance Ombudsman e.V.<br />
            P.O. Box 08 06 32, 10006 Berlin<br />
            Tel: 01802 22 44 24<br />
            Internet:{" "}
            <a
              href="https://www.versicherungsombudsmann.de"
              target="_blank"
              className="text-purple-600 font-semibold hover:underline"
            >
              www.versicherungsombudsmann.de
            </a>
          </p>

          <p className="text-gray-700">
            Ombudsman for Private Health and Long-Term Care Insurance<br />
            Internet:{" "}
            <a
              href="https://www.pkv-ombudsmann.de"
              target="_blank"
              className="text-purple-600 font-semibold hover:underline"
            >
              www.pkv-ombudsmann.de
            </a>
          </p>
        </section>

        {/* ODR */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Online Dispute Resolution
          </h2>
          <p className="text-gray-700">
            The EU Commission provides a platform for online dispute resolution (ODR):{" "}
            <a
              href="http://ec.europa.eu/consumers/odr/"
              target="_blank"
              className="text-purple-600 font-semibold hover:underline"
            >
              http://ec.europa.eu/consumers/odr/
            </a>
          </p>
        </section>

        {/* Liability */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Liability for Links
          </h2>
          <p className="text-gray-700">
            Our website contains links to external websites. We assume no liability
            for the content of external links. The operators of the linked pages_toggle are solely responsible for their content.
          </p>
        </section>

      </div>
    </section>
  );
}
