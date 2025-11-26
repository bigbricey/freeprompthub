import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | FreePromptHub",
  description: "Privacy policy for FreePromptHub.com - Learn how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Header />
      <main className="py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-400">
            Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </p>

          <div className="prose prose-slate mt-8 max-w-none dark:prose-invert">
            <h2>1. Introduction</h2>
            <p>
              Welcome to FreePromptHub (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We are committed to protecting
              your privacy and personal information. This Privacy Policy explains how we collect,
              use, disclose, and safeguard your information when you visit our website
              FreePromptHub.com.
            </p>

            <h2>2. Information We Collect</h2>
            <h3>Information You Provide</h3>
            <p>We may collect information that you voluntarily provide, including:</p>
            <ul>
              <li>Email address (when subscribing to our newsletter)</li>
              <li>Any prompts or content you submit to the site</li>
              <li>Feedback or correspondence you send to us</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>Device and browser information</li>
              <li>IP address</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>

            <h2>3. How We Use Your Information</h2>
            <p>We use the collected information to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Send newsletters and promotional communications (with your consent)</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Analyze usage patterns to improve user experience</li>
              <li>Protect against fraudulent or unauthorized activity</li>
            </ul>

            <h2>4. Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to collect information about your
              browsing activities. You can control cookies through your browser settings. Note
              that disabling cookies may affect some features of our website.
            </p>

            <h2>5. Third-Party Services</h2>
            <p>We may use third-party services that collect information, including:</p>
            <ul>
              <li>Analytics providers (e.g., Google Analytics)</li>
              <li>Advertising partners</li>
              <li>Email service providers</li>
            </ul>
            <p>
              These third parties have their own privacy policies governing the use of your
              information.
            </p>

            <h2>6. Affiliate Disclosure</h2>
            <p>
              FreePromptHub participates in affiliate marketing programs. This means we may earn
              commissions on qualifying purchases made through links on our website. This does
              not affect the price you pay. We only recommend products and services we believe
              provide value to our users.
            </p>

            <h2>7. Data Security</h2>
            <p>
              We implement appropriate technical and organizational security measures to protect
              your personal information. However, no method of transmission over the Internet or
              electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>8. Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Withdraw consent where applicable</li>
            </ul>

            <h2>9. Children&apos;s Privacy</h2>
            <p>
              Our website is not intended for children under 13 years of age. We do not
              knowingly collect personal information from children under 13.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any
              changes by posting the new policy on this page and updating the &quot;Last updated&quot;
              date.
            </p>

            <h2>11. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <p>
              Email: privacy@freepromphub.com
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
