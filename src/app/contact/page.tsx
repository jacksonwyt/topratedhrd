// /Users/tywestbrook/topratedhrd/src/app/contact/page.tsx
'use client'; // Required for useState and event handlers

import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
// Re-import Shadcn/ui components
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const contactEmail = 'info@topratedhrd.com'; // From OVERVIEWOLD.md
  const contactPhone = '(888) 311-8899'; // From OVERVIEWOLD.md
  const contactPhoneLink = 'tel:8883118899';
  const contactAddress = '5160 Mercury Point, Unit B - 2, San Diego, CA 92111'; // From ROADMAP.md

  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null); // 'success', 'error', or null

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    console.log('Form Data Submitted:', formData);

    // --- TODO: Replace this with your actual form submission logic ---
    try {
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
      console.log('Form submitted successfully (simulated)');
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
    // --- End of submission logic placeholder ---
  };

  return (
    <div className="bg-background text-foreground">
      {/* Page Header Section */}
      <section className="py-20 md:py-28 lg:py-32">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">
            Contact Us
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground">
            Get in touch, we&apos;re here to help connect.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 space-y-12">

          {/* Contact Form Section */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight mb-6 flex items-center">
              <Mail className="h-6 w-6 mr-3 text-primary" />
              Send Us a Message
            </h2>
            <div className="bg-card p-6 md:p-8 rounded-lg border border-border shadow-sm">
              {/* --- Revert to Shadcn UI Form --- */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="Subject of your message"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    disabled={isSubmitting}
                  />
                </div>

                {/* Submission Feedback */}
                {submitStatus === 'success' && (
                  <p className="text-sm text-green-600 dark:text-green-500">Message sent successfully! We&apos;ll get back to you soon.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-sm text-red-600 dark:text-red-500">Something went wrong. Please try again later or contact us via email/phone.</p>
                )}

                {/* Submit Button */}
                <div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
              {/* --- End Shadcn UI Form --- */}
            </div>
          </div>

          {/* Contact Details Section */}
          <div>
             <h2 className="text-3xl font-semibold tracking-tight mb-6 flex items-center">
               <Phone className="h-6 w-6 mr-3 text-primary" />
               Other Ways to Reach Us
             </h2>
             <div className="space-y-4 text-muted-foreground">
               <p className="flex items-start">
                 <Mail className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-primary/80" />
                 <span>Email: <a href={`mailto:${contactEmail}`} className="text-primary hover:underline">{contactEmail}</a></span>
               </p>
               <p className="flex items-start">
                 <Phone className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-primary/80" />
                 <span>Phone: <a href={contactPhoneLink} className="text-primary hover:underline">{contactPhone}</a></span>
               </p>
               <p className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-primary/80" />
                  <span>Address: {contactAddress}</span>
                  {/* TODO: Add map embed later? */}
               </p>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
}