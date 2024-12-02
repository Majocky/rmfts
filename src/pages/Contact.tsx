import React from 'react';
import { ContactForm } from '../components/contact/ContactForm';
import { ContactInfo } from '../components/contact/ContactInfo';
import { contactInfo } from '../data/contact';

export function Contact() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-indigo-600">
        <div className="absolute inset-0">
          <img
            className="h-full w-full object-cover opacity-20"
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
            alt="Contact us"
          />
          <div className="absolute inset-0 bg-indigo-600 mix-blend-multiply" />
        </div>
        <div className="relative mx-auto max-w-7xl py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Contact Us
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-indigo-100">
            Have questions? We're here to help. Reach out to us through any of the channels below
            or fill out our contact form.
          </p>
        </div>
      </div>

      {/* Contact section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-3">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                  Get in Touch
                </h2>
                <p className="mt-4 text-base text-gray-600">
                  Our admissions team is ready to answer your questions and help you begin your
                  journey with us.
                </p>
                <div className="mt-8">
                  <ContactInfo info={contactInfo} />
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white lg:col-span-2">
                <div className="px-6 py-8 sm:px-10">
                  <h3 className="text-lg font-medium text-gray-900">Send us a Message</h3>
                  <div className="mt-6">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map section */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="relative h-96 overflow-hidden rounded-lg">
            <iframe
              title="Campus Location"
              className="absolute inset-0 h-full w-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.9!3d40.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA!5e0!3m2!1sen!2sus!4v1"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}