// src/app/privacy/page.tsx

// No "use client" needed for a static page - prefer Server Components for SEO/Perf.

import React from 'react';

// IMPORTANT: Remember to update this date whenever the policy content changes.
const LAST_UPDATED_DATE = "April 22, 2025"; // Example Static Date

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-black text-white min-h-screen"> {/* Added text-white for global default if needed */}
      <div className="container mx-auto px-4 py-16">
        <h1
          className="text-4xl lg:text-5xl font-bold mb-8 text-center text-amber-200"
          // Removed inline style, text-amber-200 should handle color
        >
          Privacy Policy
        </h1>

        {/* Added background and text color for readability */}
        <div className="max-w-4xl mx-auto p-8 rounded-lg shadow-lg border border-gray-700 bg-white text-gray-800">

          <p className="text-sm text-gray-600 mb-6">
            <strong>Last Updated: {LAST_UPDATED_DATE}</strong>
          </p>

          <p className="mb-4">
            Top Rated Home Remodel & Design (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) operates the{' '}
            {/* TODO: Replace with your actual website URL */}
            <a href="https://www.topratedhrd.com" className="text-blue-600 hover:underline">
              https://www.topratedhrd.com
            </a>{' '}
            website (the &quot;Service&quot;). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
          </p>
          <p className="mb-6">
             We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.
          </p>

          <section className="mb-6 space-y-4">
            <h2 className="text-2xl font-semibold mb-3">Information Collection and Use</h2>
            <p>
              We collect several different types of information for various purposes to provide and improve our Service to you.
            </p>

            <h3 className="text-xl font-semibold mt-4 mb-2">Types of Data Collected</h3>

            <h4 className="text-lg font-semibold mt-3 mb-1">Personal Data</h4>
            <p>
              While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (&quot;Personal Data&quot;). Personally identifiable information may include, but is not limited to:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
              <li>Cookies and Usage Data</li>
            </ul>

            <h4 className="text-lg font-semibold mt-3 mb-1">Usage Data</h4>
            <p>
              We may also collect information on how the Service is accessed and used (&quot;Usage Data&quot;). This Usage Data may include information such as your computer&apos;s Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data.
            </p>

            <h4 className="text-lg font-semibold mt-3 mb-1">Tracking &amp; Cookies Data</h4>
            <p>
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with small amounts of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service.
            </p>
            <p>
              You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </p>
             {/* Optional: Add Examples of Cookies if specific ones are used */}

          </section>

          <section className="mb-6 space-y-4">
            <h2 className="text-2xl font-semibold mb-3">Use of Data</h2>
            <p>Top Rated Home Remodel & Design uses the collected data for various purposes:</p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>To provide and maintain the Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
              <li>To provide customer care and support</li>
              <li>To provide analysis or valuable information so that we can improve the Service</li>
              <li>To monitor the usage of the Service</li>
              <li>To detect, prevent and address technical issues</li>
              {/* TODO: Add any other specific uses relevant to your business */}
            </ul>
          </section>

          <section className="mb-6 space-y-4">
            <h2 className="text-2xl font-semibold mb-3">Transfer Of Data</h2>
            <p>
              Your information, including Personal Data, may be transferred to — and maintained on — computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction.
            </p>
            <p>
              If you are located outside the United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to the United States and process it there.
            </p>
            <p>
              Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer.
            </p>
            <p>
              Top Rated Home Remodel & Design will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information.
            </p>
             {/* TODO: Review transfer clause with legal counsel, especially for international users */}
          </section>

          <section className="mb-6 space-y-4">
            <h2 className="text-2xl font-semibold mb-3">Disclosure Of Data</h2>

            <h3 className="text-xl font-semibold mt-4 mb-2">Legal Requirements</h3>
            <p>
              Top Rated Home Remodel & Design may disclose your Personal Data in the good faith belief that such action is necessary to:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
              <li>To comply with a legal obligation</li>
              <li>To protect and defend the rights or property of Top Rated Home Remodel & Design</li>
              <li>To prevent or investigate possible wrongdoing in connection with the Service</li>
              <li>To protect the personal safety of users of the Service or the public</li>
              <li>To protect against legal liability</li>
            </ul>
            {/* TODO: Add other disclosure scenarios if applicable (e.g., business transfer, specific service providers) */}
          </section>

          <section className="mb-6 space-y-4">
            <h2 className="text-2xl font-semibold mb-3">Security Of Data</h2>
            <p>
              The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
            </p>
            {/* TODO: Consider adding specifics about security measures if appropriate and legally advisable */}
          </section>

          <section className="mb-6 space-y-4">
            <h2 className="text-2xl font-semibold mb-3">Service Providers</h2>
            <p>
              We may employ third party companies and individuals to facilitate our Service (&quot;Service Providers&quot;), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.
            </p>
            <p>
              These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>
             {/* TODO: Consider listing types of service providers (e.g., hosting, analytics, payment processors) */}
          </section>

          <section className="mb-6 space-y-4">
            <h2 className="text-2xl font-semibold mb-3">Links To Other Sites</h2>
            <p>
              Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party&apos;s site. We strongly advise you to review the Privacy Policy of every site you visit.
            </p>
            <p>
              We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
            </p>
          </section>

          <section className="mb-6 space-y-4">
            <h2 className="text-2xl font-semibold mb-3">Children&apos;s Privacy</h2>
            <p>
              Our Service does not address anyone under the age of 13 (&quot;Children&quot;). {/* Consider local regulations, e.g., 16 for GDPR */}
            </p>
            <p>
              We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers.
            </p>
          </section>

          <section className="mb-6 space-y-4">
            <h2 className="text-2xl font-semibold mb-3">Changes To This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </p>
            <p>
              We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the &quot;last updated&quot; date at the top of this Privacy Policy.
              {/* Ensure you have a mechanism to actually provide this notice if you promise it here */}
            </p>
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </p>
          </section>

          <section className="mb-6 space-y-4">
            <h2 className="text-2xl font-semibold mb-3">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc list-inside ml-4 space-y-1">
               {/* TODO: Provide ACTUAL contact information below */}
              <li>By email: <a href="mailto:privacy@topratedhrd.com" className="text-blue-600 hover:underline">privacy@topratedhrd.com</a></li>
              <li>By visiting this page on our website: <a href="/contact" className="text-blue-600 hover:underline">[Contact Page]</a></li>
              {/* Add other methods like phone or mail if applicable */}
            </ul>
          </section>
           {/* Ensure legal review of the entire policy content */}
        </div>
      </div>
    </main>
  );
}
