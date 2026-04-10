import { useState } from 'react';
import { MapPin, Phone, Mail, Globe, Send, Clock } from 'lucide-react';
import { contactInfo } from '../data/siteData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center animate-on-scroll">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-semibold mb-4">
            <Mail size={16} />
            Get In Touch
          </div>
          <h2 className="section-title text-gray-900">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="section-subtitle">
            Have questions? We&apos;d love to hear from you. Reach out to us anytime.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 animate-on-scroll">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 sm:p-8 text-white">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-1">Address</div>
                    <p className="text-blue-100 text-sm leading-relaxed">{contactInfo.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-1">Phone</div>
                    <a href={`tel:${contactInfo.phone}`} className="text-blue-100 text-sm hover:text-white transition-colors">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-1">Email</div>
                    <a href={`mailto:${contactInfo.email}`} className="text-blue-100 text-sm hover:text-white transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Globe size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-1">Website</div>
                    <span className="text-blue-100 text-sm">{contactInfo.website}</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <div className="font-semibold text-sm mb-1">Office Hours</div>
                    <p className="text-blue-100 text-sm">Mon - Sat: 8:00 AM - 5:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-48 sm:h-56 border border-gray-200">
              <iframe
                title="EAST Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.5!2d85.87!3d20.38!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDIyJzQ4LjAiTiA4NcKwNTInMTIuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="card p-6 sm:p-8 border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              {submitted && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-xl mb-6 text-sm">
                  Thank you! Your message has been sent successfully.
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20
                                 focus:border-primary outline-none transition-all text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20
                                 focus:border-primary outline-none transition-all text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20
                                 focus:border-primary outline-none transition-all text-sm"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">Subject *</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20
                                 focus:border-primary outline-none transition-all text-sm bg-white"
                    >
                      <option value="">Select subject</option>
                      <option value="admission">Admission Inquiry</option>
                      <option value="placement">Placement Details</option>
                      <option value="academic">Academic Query</option>
                      <option value="general">General Inquiry</option>
                      <option value="feedback">Feedback</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/20
                               focus:border-primary outline-none transition-all text-sm resize-none"
                    placeholder="Write your message here..."
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary w-full sm:w-auto justify-center"
                >
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
