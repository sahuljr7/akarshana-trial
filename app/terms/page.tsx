import { SectionHeader } from "@/components/ui/section-header";

export default function Terms() {
  return (
    <div className="container py-12">
      <SectionHeader
        title="Terms of Service"
        description="Last updated: April 12, 2024"
      />
      
      <div className="prose prose-gray max-w-none mt-8">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
          <p className="mb-4">By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only.</li>
            <li>This is the grant of a license, not a transfer of title.</li>
            <li>This license shall automatically terminate if you violate any of these restrictions.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Service Terms</h2>
          <h3 className="text-xl font-medium mb-2">3.1 Product Usage</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Products must be used in accordance with provided specifications</li>
            <li>Regular maintenance schedules must be followed</li>
            <li>Any modifications must be approved in writing</li>
          </ul>

          <h3 className="text-xl font-medium mb-2">3.2 Payment Terms</h3>
          <ul className="list-disc pl-6 mb-4">
            <li>Payment is due within 30 days of invoice</li>
            <li>Installation fees are non-refundable</li>
            <li>Maintenance contracts are billed annually</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Disclaimer</h2>
          <ul className="list-disc pl-6 mb-4">
            <li>The materials on Akarshana's website are provided on an 'as is' basis.</li>
            <li>Akarshana makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Limitations</h2>
          <p className="mb-4">In no event shall Akarshana or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Akarshana's website.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Governing Law</h2>
          <p className="mb-4">These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Contact Information</h2>
          <p className="mb-4">For any questions regarding these terms, please contact us at:</p>
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