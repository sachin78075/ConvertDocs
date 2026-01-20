import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | ConvertDocs</title>
        <meta name="description" content="Read ConvertDocs privacy policy. Learn how we protect your data and privacy." />
      </Helmet>

      <main className="min-h-screen bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
              Privacy Policy
            </h1>

            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 space-y-8 text-slate-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Information We Collect</h2>
                <p>
                  ConvertDocs is designed with privacy in mind. We collect minimal information necessary to provide our
                  document conversion services. This includes temporary file data during the conversion process.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. How We Use Your Information</h2>
                <p>
                  Files uploaded to ConvertDocs are processed immediately and automatically deleted from our servers
                  within 1 hour. We do not store, analyze, or share your documents with any third parties.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Data Security</h2>
                <p>
                  We implement industry-standard security measures to protect your files during the conversion process.
                  All file transfers are secured, and files are stored temporarily in isolated storage containers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Cookies</h2>
                <p>
                  ConvertDocs uses essential cookies only to maintain basic functionality. We do not use tracking cookies
                  or share cookie data with third-party advertisers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Third-Party Services</h2>
                <p>
                  We may use third-party services for analytics and infrastructure. These services are bound by their own
                  privacy policies and do not have access to your uploaded files.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Your Rights</h2>
                <p>
                  You have the right to access, correct, or delete any personal information. Since we don't store your
                  files or require accounts, there is no persistent personal data to manage.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">7. Changes to This Policy</h2>
                <p>
                  We may update this privacy policy from time to time. Any changes will be posted on this page with an
                  updated revision date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Contact Us</h2>
                <p>
                  If you have questions about this privacy policy, please contact us at{' '}
                  <a href="mailto:privacy@convertdocs.com" className="text-primary hover:text-primary/80">
                    privacy@convertdocs.com
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