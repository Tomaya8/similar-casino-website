import { ChevronRight, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "general",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to a backend
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "general", message: "" });
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* SEO structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Us — SimilarCasino",
            description: "Get in touch with SimilarCasino for inquiries, partnerships, or press",
            url: "https://www.similarcasino.com/contact",
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "Customer Support",
              email: "contact@similarcasino.com",
            },
          }),
        }}
      />

      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-1.5 text-xs text-primary-foreground/60 font-sans mb-6">
              <Link to="/" className="hover:text-primary-foreground transition-colors">
                Home
              </Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-primary-foreground">Contact</span>
            </nav>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent font-sans mb-2">
                Get in Touch
              </p>
              <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground leading-tight max-w-2xl">
                Contact SimilarCasino
              </h1>
              <p className="mt-4 text-primary-foreground/80 font-sans text-base">
                Have a question or inquiry? We'd love to hear from you. Get in touch with our team.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info and Form */}
        <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                {/* General Support */}
                <div className="bg-secondary border border-border rounded-lg p-6">
                  <div className="flex items-start gap-3 mb-2">
                    <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground font-serif">General Inquiries</h3>
                      <p className="text-sm text-muted-foreground font-sans mt-1">
                        Questions about our reviews, site, or general feedback
                      </p>
                      <a
                        href="mailto:contact@similarcasino.com"
                        className="text-primary hover:underline text-sm font-sans mt-2 block"
                      >
                        contact@similarcasino.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Business & Partnerships */}
                <div className="bg-secondary border border-border rounded-lg p-6">
                  <div className="flex items-start gap-3 mb-2">
                    <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground font-serif">Business Inquiries</h3>
                      <p className="text-sm text-muted-foreground font-sans mt-1">
                        Partnerships, sponsorships, and business opportunities
                      </p>
                      <a
                        href="mailto:partnerships@similarcasino.com"
                        className="text-primary hover:underline text-sm font-sans mt-2 block"
                      >
                        partnerships@similarcasino.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Press */}
                <div className="bg-secondary border border-border rounded-lg p-6">
                  <div className="flex items-start gap-3 mb-2">
                    <Mail className="w-5 h-5 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground font-serif">Press & Media</h3>
                      <p className="text-sm text-muted-foreground font-sans mt-1">
                        Media inquiries, interviews, and press requests
                      </p>
                      <a
                        href="mailto:press@similarcasino.com"
                        className="text-primary hover:underline text-sm font-sans mt-2 block"
                      >
                        press@similarcasino.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <p className="text-sm font-sans text-amber-900">
                    <strong>Response Time:</strong> We typically respond to emails within 48 hours during business days. Thank you for your patience!
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground font-sans mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-secondary border border-border rounded-lg font-sans text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground font-sans mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2.5 bg-secondary border border-border rounded-lg font-sans text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-foreground font-sans mb-1.5">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 bg-secondary border border-border rounded-lg font-sans text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="review">Casino Review Request</option>
                    <option value="correction">Report Inaccuracy</option>
                    <option value="partnership">Business Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground font-sans mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2.5 bg-secondary border border-border rounded-lg font-sans text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors font-sans text-sm"
                >
                  Send Message
                </button>

                <p className="text-xs text-muted-foreground font-sans">
                  By submitting this form, you agree to our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                </p>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
