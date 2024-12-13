import { SectionHeader } from "@/components/ui/section-header";

export default function Privacy() {
  return (
    <div className="container py-12">
      <SectionHeader
        title="Privacy Policy"
        description="Last updated: April 12, 2024"
      />
      
      <div className="prose prose-gray max-w-none mt-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <h3 className="text-xl font-medium mb-2">1.1 Personal Information</h3>
          <p className="mb-4">We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name and contact information</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company details (if applicable)</li>
          </ul>

          <h3 className="text-xl font-medium mb-2">1.2 Usage Information</h3>
          <p className="mb-4">We automatically collect certain information about your device, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Operating system</li>
            <li>Pages visited</li>
            <li>Time and date of visits</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p className="mb-4">We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and maintain our services</li>
            <li>Process your requests and transactions</li>
            <li>Send you technical notices and support messages</li>
            <li>Communicate with you about products, services, and events</li>
            <li>Improve our website and customer service</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Data Protection</h2>
          <p className="mb-4">We implement appropriate technical and organizational measures to maintain the security of your personal information, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Encryption of data in transit and at rest</li>
            <li>Regular security assessments</li>
            <li>Access controls and authentication</li>
            <li>Employee training on data protection</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Your Rights</h2>
          <p className="mb-4">Under GDPR and other applicable laws, you have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Contact Us</h2>
          <p className="mb-4">For any privacy-related questions or concerns, please contact us at:</p>
          <ul className="list-none mb-4">
            <li>Email: virspark369@gmail.com</li>
            <li>Phone: +91 8697319384</li>
            <li>Address: 123 Energy Street, Sustainable City, India</li>
          </ul>
        </section>
      </div>
    </div>
  );
}