// /Users/tywestbrook/topratedhrd/src/app/privacy/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Top Rated Home Remodel & Design',
  // Add description if available later
};

export default function PrivacyPolicyPage() {
  return (
    <main className="flex-grow container mx-auto px-4 py-16">
      <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-center text-teal-400">Privacy Policy</h1>

      <div className="max-w-4xl mx-auto bg-gray-900 p-8 rounded-lg shadow-lg border border-gray-700 prose prose-invert prose-lg">
        {/* Placeholder for Privacy Policy Content */}
        <p className="text-gray-300 font-semibold text-lg mb-4">
          [Privacy Policy Content Required]
        </p>
        <p className="text-gray-400">
          The specific text for the website's privacy policy needs to be inserted here.
          Please provide the content that outlines how user data is collected, used, and protected.
        </p>
        {/* TODO: Insert actual privacy policy text when available */}
      </div>
    </main>
  );
}
