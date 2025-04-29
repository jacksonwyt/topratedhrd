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
    // Apply theme: white background, black text
    <div className="bg-white text-black min-h-screen">
      {/* Page Header Section - Kept White Background */}
      <section className="py-20 md:py-24 lg:py-28 bg-white">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-black">
            Contact Us
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-600">
            Schedule a free in home consultation.
          </p>
        </div>
      </section>

      {/* Main Content Section - Changed to White Background */}
      <section className="py-1 pb-16 md:pb-24 bg-white">
        <div className="container mx-auto max-w-4xl px-4 space-y-12">

          {/* Contact Form Section - Updated Container to Black Background */}
          <div>
            <div className="bg-black p-6 md:p-8 mt-12 rounded-lg border border-gray-700 shadow-lg"> {/* Black background */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field - Label text lighter */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">Name</Label> {/* Lighter text */}
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="bg-white border-gray-300 text-black placeholder:text-gray-500 focus:border-gray-500 focus:ring-gray-500" /* White bg, black text, adjusted focus */
                  />
                </div>

                {/* Email Field - Label text lighter */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Email</Label> {/* Lighter text */}
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="bg-white border-gray-300 text-black placeholder:text-gray-500 focus:border-gray-500 focus:ring-gray-500" /* White bg, black text, adjusted focus */
                  />
                </div>

                {/* Subject Field - Label text lighter */}
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-300">Subject</Label> {/* Lighter text */}
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What's this about?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="bg-white border-gray-300 text-black placeholder:text-gray-500 focus:border-gray-500 focus:ring-gray-500" /* White bg, black text, adjusted focus */
                  />
                </div>

                {/* Message Field - Label text lighter */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300">Message</Label> {/* Lighter text */}
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Enter your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    disabled={isSubmitting}
                    className="bg-white border-gray-300 text-black placeholder:text-gray-500 focus:border-gray-500 focus:ring-gray-500" /* White bg, black text, adjusted focus */
                  />
                </div>

                {/* Submission Feedback - Adjusted Colors for Black BG */}
                {submitStatus === 'success' && (
                  <p className="text-sm text-green-400">Message sent successfully! We&apos;ll get back to you soon.</p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-sm text-red-400">Something went wrong. Please try again later or contact us via email/phone.</p>
                )}

                {/* Submit Button - White BG, Black Text */}
                <div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 focus:ring-gray-500 disabled:opacity-50" /* White bg, black text */
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Details Section - Black BG, Updated Text/Icon Colors */}
          <div className="bg-black p-6 md:p-8 rounded-lg shadow-lg border border-gray-700"> {/* Black background */}
             <h2 className="text-3xl font-semibold tracking-tight mb-6 flex items-center text-white"> {/* White text */}
               <Phone className="h-6 w-6 mr-3 text-white" /> {/* White icon */}
               Other Ways to Reach Us
             </h2>
             <div className="space-y-4 text-gray-400"> {/* Lighter base text */}
               <p className="flex items-start">
                 <Mail className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-gray-400" /> {/* Lighter icon */}
                 <span>Email: <a href={`mailto:${contactEmail}`} className="text-white hover:text-gray-300 hover:underline">{contactEmail}</a></span> {/* White link */}
               </p>
               <p className="flex items-start">
                 <Phone className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-gray-400" /> {/* Lighter icon */}
                 <span>Phone: <a href={contactPhoneLink} className="text-white hover:text-gray-300 hover:underline">{contactPhone}</a></span> {/* White link */}
               </p>
               <p className="flex items-start">
                  <MapPin className="h-5 w-5 mr-3 mt-1 flex-shrink-0 text-gray-400" /> {/* Lighter icon */}
                  <span>Address: {contactAddress}</span>
               </p>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
}