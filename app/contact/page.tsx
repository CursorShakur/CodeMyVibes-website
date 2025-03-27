"use client";

import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, MessageSquare } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-16 mt-16">
          <div className="space-y-6 text-center max-w-3xl mx-auto mb-8">
            <p className="text-sm">Get In Touch</p>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              Let's{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                Vibe
              </span>{" "}
              and Create
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Whether you have a project in mind, a question about vibe coding, or just want to say hello, 
              I'd love to hear from you. Drop me a message below and I'll get back to you soon!
            </p>
          </div>
        </section>
        
        {/* Contact Form Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  <p className="text-gray-600 mb-8">
                    Feel free to reach out through any of these channels. I'm always open to discussing new projects, 
                    creative ideas, or opportunities to be part of your vision.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-600">shakur@codemyvibes.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Phone className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-600">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <MapPin className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-gray-600">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="font-medium mb-4">Connect on Social</h3>
                  <div className="flex gap-4">
                    <a href="#" className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-sm hover:shadow-md transition-all">
                      <Linkedin className="w-5 h-5 text-blue-600" />
                      <span className="sr-only">LinkedIn Profile</span>
                    </a>
                    <a href="#" className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-sm hover:shadow-md transition-all">
                      <Github className="w-5 h-5 dark:text-gray-200" />
                      <span className="sr-only">GitHub Profile</span>
                    </a>
                    <a href="#" className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-sm hover:shadow-md transition-all">
                      <Twitter className="w-5 h-5 text-blue-400" />
                      <span className="sr-only">Twitter Profile</span>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="bg-purple-100 dark:bg-purple-900/30 p-4 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                      <MessageSquare className="w-10 h-10 text-purple-600 dark:text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 dark:text-white">Message Received!</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Thanks for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="inline-flex items-center gap-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 px-4 py-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors dark:text-white"
                    >
                      Send Another Message <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="text-2xl font-bold mb-6 dark:text-white">Send a Message</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-2 focus:ring-purple-300 dark:focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-2 focus:ring-purple-300 dark:focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-2 focus:ring-purple-300 dark:focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors"
                        placeholder="Project Inquiry"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white rounded-md focus:ring-2 focus:ring-purple-300 dark:focus:ring-purple-500 focus:border-purple-500 outline-none transition-colors resize-none"
                        placeholder="Tell me about your project or question..."
                      ></textarea>
                    </div>
                    
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-3 rounded-md font-medium shadow-md hover:shadow-lg transition-all w-full justify-center ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center dark:text-white">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-lg mb-2 dark:text-white">What services do you offer?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I specialize in web development with a focus on creating intuitive, visually appealing interfaces. 
                  My services include frontend development, creative coding experiments, and helping businesses bring 
                  their digital products to life with a unique vibe.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-lg mb-2 dark:text-white">What is vibe coding?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Vibe coding is an intuitive approach to programming that embraces creativity and feel over rigid structure. 
                  It's about using your intuition and artistic sensibilities to guide coding decisions, resulting in 
                  digital experiences that resonate on an emotional level.
                </p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                <h3 className="font-bold text-lg mb-2 dark:text-white">How quickly do you respond to inquiries?</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  I typically respond to all inquiries within 24-48 hours during business days. For urgent matters, 
                  please indicate this in your message subject and I'll do my best to prioritize your request.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
