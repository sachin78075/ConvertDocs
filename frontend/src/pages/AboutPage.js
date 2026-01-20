import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Shield, Zap, Globe } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About Us | ConvertDocs</title>
        <meta
          name="description"
          content="Learn about ConvertDocs - a free online document conversion platform trusted by users worldwide."
        />
      </Helmet>

      <main className="min-h-screen bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              About ConvertDocs
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Your trusted partner for fast, free, and secure document conversion
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 space-y-8 mb-12"
          >
            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Our Mission</h2>
              <p className="text-slate-600 leading-relaxed">
                ConvertDocs was created with a simple mission: to provide fast, secure, and accessible document
                conversion tools for everyone. We believe that converting files shouldn't require expensive software,
                complicated installations, or privacy concerns.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">What We Offer</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                ConvertDocs provides a comprehensive suite of document conversion tools, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-600">
                <li>PDF conversions (to/from Word, Excel, PowerPoint, images)</li>
                <li>Image format conversions (JPG, PNG, WEBP, TIFF, BMP)</li>
                <li>OCR text extraction from images and scanned documents</li>
                <li>PDF tools (merge, split, compress, rotate)</li>
                <li>Support for 25+ file formats</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Why Choose Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-50 mb-4">
                    <Zap className="w-6 h-6 text-primary" strokeWidth={2} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Lightning Fast</h3>
                  <p className="text-sm text-slate-600">Convert files in seconds with our optimized engines</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-50 mb-4">
                    <Shield className="w-6 h-6 text-primary" strokeWidth={2} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">100% Secure</h3>
                  <p className="text-sm text-slate-600">Files auto-deleted after 1 hour for your privacy</p>
                </div>
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-50 mb-4">
                    <Globe className="w-6 h-6 text-primary" strokeWidth={2} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">Always Free</h3>
                  <p className="text-sm text-slate-600">No hidden fees, no signup required</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Our Commitment</h2>
              <p className="text-slate-600 leading-relaxed">
                We are committed to maintaining the highest standards of privacy and security. Your documents are
                processed securely and deleted immediately after conversion. We never store, analyze, or share your
                files with third parties.
              </p>
            </section>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-slate-600 mb-6">
              Have questions or feedback? We'd love to hear from you!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-full font-medium shadow-lg shadow-cyan-900/20 transition-all hover:scale-[1.02]"
              data-testid="contact-us-button"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </main>
    </>
  );
}