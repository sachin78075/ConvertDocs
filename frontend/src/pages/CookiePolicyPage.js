import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function CookiePolicyPage() {
  return (
    <>
      <Helmet>
        <title>Cookie Policy | ConvertDocs</title>
        <meta name="description" content="Learn about how ConvertDocs uses cookies on our website." />
      </Helmet>

      <main className="min-h-screen bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
              Cookie Policy
            </h1>

            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 space-y-8 text-slate-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">What Are Cookies?</h2>
                <p>
                  Cookies are small text files stored on your device when you visit websites. They help websites
                  remember your preferences and improve your browsing experience.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">How We Use Cookies</h2>
                <p>
                  ConvertDocs uses essential cookies only to maintain basic functionality. We do not use tracking
                  cookies or third-party advertising cookies.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Types of Cookies We Use</h2>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Essential Cookies:</strong> Required for the website to function properly, including
                    session management during file conversion.
                  </li>
                  <li>
                    <strong>Functional Cookies:</strong> Remember your preferences and settings for a better user
                    experience.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Managing Cookies</h2>
                <p>
                  You can control and manage cookies through your browser settings. However, disabling essential
                  cookies may affect the functionality of ConvertDocs.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Third-Party Cookies</h2>
                <p>
                  We do not use third-party cookies for advertising or tracking. Any external services we use are
                  strictly for infrastructure and do not track user behavior.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Updates to This Policy</h2>
                <p>
                  We may update this cookie policy from time to time. Any changes will be posted on this page.
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