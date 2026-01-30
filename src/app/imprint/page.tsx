"use client";

export default function ImprintPage() {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto p-8 sm:p-12 space-y-10">
        {/* Header */}
        <header className="text-center mb-16">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Imprint
          </h1>
          <p className="text-gray-600 mt-4">
            Information in accordance with § 5 German Telemedia Act (TMG) and § 18
            para. 1 German State Media Treaty (MStV)
          </p>
        </header>

        {/* Company */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Company</h2>
          <p className="text-gray-700">
            InsurBe GmbH <br />
            Großgörschener Straße 15 <br />
            06686 Lützen <br />
            Germany
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Contact</h2>
          <p className="text-gray-700">
            Email:{" "}
            <a
              href="mailto:enquiries@insurbe.com"
              className="text-purple-600 font-semibold hover:underline"
            >
              enquiries@insurbe.com
            </a>
          </p>
        </section>

        {/* Authorized Managing Director */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Authorized Managing Director
          </h2>
          <p className="text-gray-700">
            Marvin Fürst <br />
            <span className="text-gray-600">
              (Responsible Managing Director for insurance mediation activities)
            </span>
          </p>
        </section>

        {/* Commercial Register */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Commercial Register Entry
          </h2>
          <p className="text-gray-700">
            Registered at: Stendal Local Court <br />
            Commercial Register No.: HRB 35151
          </p>
        </section>

        {/* Supervisory Authority */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Supervisory Authority
          </h2>
          <p className="text-gray-700">
            Industry and Commerce Chamber Halle-Dessau (IHK Halle-Dessau) <br />
            Franckestraße 5 <br />
            06110 Halle (Saale) <br />
            Saxony-Anhalt <br />
            Germany
          </p>
        </section>

        {/* VAT */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            VAT Identification Number
          </h2>
          <p className="text-gray-700">
            VAT ID No.: <em>DE[VAT number to be added]</em> <br />
            <span className="text-gray-600">
              (in accordance with § 27a of the German VAT Act)
            </span>
          </p>
        </section>

        {/* Professional Information */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Professional Information (Insurance Intermediation)
          </h2>

          <p className="text-gray-700 mb-4">
            <strong>Professional Status:</strong> <br />
            Insurance broker with permission pursuant to Section 34d paragraph 1
            of the German Trade Regulation Act (GewO)
          </p>

          <p className="text-gray-700 mb-4">
            <strong>Intermediary Register:</strong> <br />
            Register:{" "}
            <a
              href="https://www.vermittlerregister.info"
              target="_blank"
              className="text-purple-600 font-semibold hover:underline"
            >
              www.vermittlerregister.info
            </a>
            <br />
            Registration Number: D-6ATG-SW8HB-44
          </p>

          <p className="text-gray-700">
            <strong>Register Authority:</strong> <br />
            Industry and Commerce Chamber Halle-Dessau <br />
            Franckestraße 5 <br />
            06110 Halle (Saale) <br />
            Germany
          </p>
        </section>

        {/* Professional Regulations */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Professional Regulations
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Section 34d of the German Trade Regulation Act (GewO)</li>
            <li>Sections 59–68 of the German Insurance Contract Act (VVG)</li>
            <li>
              Ordinance on Insurance Mediation and Consulting (VersVermV)
            </li>
          </ul>
          <p className="text-gray-600 mt-3">
            Regulations available at{" "}
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
          <h2 className="text-xl font-bold text-gray-900 mb-2">Ombudsman</h2>
          <p className="text-gray-700 mb-4">
            Insurance Ombudsman e.V. <br />
            P.O. Box 08 06 32 <br />
            10006 Berlin <br />
            Germany <br />
            Phone: +49 (0)1802 22 44 24 <br />
            Website:{" "}
            <a
              href="https://www.versicherungsombudsmann.de"
              target="_blank"
              className="text-purple-600 font-semibold hover:underline"
            >
              www.versicherungsombudsmann.de
            </a>
          </p>

          <p className="text-gray-700">
            Ombudsman for Private Health and Long-Term Care Insurance <br />
            Website:{" "}
            <a
              href="https://www.pkv-ombudsmann.de"
              target="_blank"
              className="text-purple-600 font-semibold hover:underline"
            >
              www.pkv-ombudsmann.de
            </a>
          </p>
        </section>

        {/* Online Dispute Resolution */}
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Online Dispute Resolution
          </h2>
          <p className="text-gray-700">
            The European Commission provides a platform for online dispute
            resolution (ODR):{" "}
            <a
              href="http://ec.europa.eu/consumers/odr/"
              target="_blank"
              className="text-purple-600 font-semibold hover:underline"
            >
              http://ec.europa.eu/consumers/odr/
            </a>
          </p>
        </section>
      </div>
    </section>
  );
}
