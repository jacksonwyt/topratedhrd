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

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission - Opens user's email client
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form Data for mailto:', formData);

    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `Name: ${formData.name}
Email: ${formData.email}

Message:
${formData.message}`
    );

    const mailtoLink = `mailto:${contactEmail}?subject=${subject}&body=${body}`;

    // Open the user's default email client
    window.location.href = mailtoLink;

    // Optionally clear the form after attempting to open mail client
    // setFormData({ name: '', email: '', subject: '', message: '' });

    // Note: We can't reliably track if the email was actually sent from the client.
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
                    className="bg-white border-gray-300 text-black placeholder:text-gray-500 focus:border-gray-500 focus:ring-gray-500" /* White bg, black text, adjusted focus */
                  />
                </div>

                {/* Submit Button - Removed disabled state and sending text */}
                <div>
                  <Button
                    type="submit"
                    className="w-full sm:w-auto bg-white text-black hover:bg-gray-200 focus:ring-gray-500" /* White bg, black text */
                  >
                    Send Message
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