"use client";

import { SectionHeader } from "@/components/ui/section-header";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

export default function Contact() {
  return (
    <div className="container py-12">
      <SectionHeader
        title="Contact Us"
        description="Get in touch with us for any questions about our gravity-powered energy solutions."
      />
      
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}