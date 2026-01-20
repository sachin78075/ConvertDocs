import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | ConvertDocs</title>
        <meta name="description" content="Read ConvertDocs terms and conditions for using our document conversion services." />
      </Helmet>

      <main className="min-h-screen bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
              Terms & Conditions
            </h1>

            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 space-y-8 text-slate-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using ConvertDocs, you accept and agree to be bound by these Terms & Conditions.
                  If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Use of Services</h2>
                <p>
                  ConvertDocs provides online document conversion services. You may use these services for lawful
                  purposes only. You agree not to upload files that contain illegal content, malware, or violate
                  third-party rights.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. File Processing</h2>
                <p>
                  All files uploaded to ConvertDocs are processed automatically and deleted within 1 hour. We do not
                  guarantee the accuracy or quality of converted files, though we strive for the best results.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibent text-slate-900 mb-4">4. Intellectual Property</h2>
                <p>
                  You retain all rights to the files you upload. ConvertDocs does not claim ownership of your content.
                  Our service, including software, design, and branding, remains the property of ConvertDocs.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Limitation of Liability</h2>
                <p>
                  ConvertDocs is provided "as is" without warranties of any kind. We are not liable for any damages
                  arising from the use of our services, including data loss or conversion errors.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Service Availability</h2>
                <p>
                  We strive to maintain 24/7 availability but do not guarantee uninterrupted service. Maintenance,
                  updates, or technical issues may temporarily affect access.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these terms at any time. Continued use of ConvertDocs after changes
                  constitutes acceptance of the updated terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Contact</h2>
                <p>
                  For questions about these terms, contact us at{' '}
                  <a href="mailto:legal@convertdocs.com" className="text-primary hover:text-primary/80">
                    legal@convertdocs.com
                  </a>
                </p>
              </section>

              <p className="text-sm text-slate-500 pt-8 border-t border-slate-200">
                Last updated: December 2025
              </p>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}