import { ArrowLeft, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact | CodeMyVibes",
  description: "Get in touch with CodeMyVibes - Let's discuss your project ideas",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <main className="container mx-auto px-4 py-12">
        {/* Page Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-2">
            <Link 
              href="/" 
              className="text-sm flex items-center gap-1 text-gray-500 hover:text-purple-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg text-gray-700 max-w-2xl">
            Have a question or want to discuss a project? I'd love to hear from you. 
            Fill out the form below or reach out directly through one of my contact channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your name"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email address"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="What's this about?"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell me about your project or question"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-purple-700 text-white px-6 py-3 rounded-md font-medium shadow-md hover:shadow-lg transition-all"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col justify-between">
            <div className="space-y-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <p className="text-gray-600">hello@codemyvibes.com</p>
                    <p className="text-xs text-gray-500 mt-1">For general inquiries and project discussions</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-xs text-gray-500 mt-1">Monday - Friday, 9AM - 5PM ET</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Location</h3>
                    <p className="text-gray-600">New York, NY</p>
                    <p className="text-xs text-gray-500 mt-1">Serving clients worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg mt-8 hidden md:block">
              <h3 className="font-bold mb-2">Response Time</h3>
              <p className="text-gray-600 text-sm">
                I typically respond to all inquiries within 24-48 hours during business days.
                For urgent matters, please indicate in the subject line.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
