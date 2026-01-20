import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function DisclaimerPage() {
  return (
    <>
      <Helmet>
        <title>Disclaimer | ConvertDocs</title>
        <meta name="description" content="Read ConvertDocs disclaimer regarding our document conversion services." />
      </Helmet>

      <main className="min-h-screen bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
              Disclaimer
            </h1>

            <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100 space-y-8 text-slate-600 leading-relaxed">
              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">General Information</h2>
                <p>
                  The information and services provided by ConvertDocs are for general informational purposes only.
                  We make no representations or warranties about the accuracy, reliability, or completeness of our
                  conversion services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">No Warranty</h2>
                <p>
                  ConvertDocs is provided "as is" and "as available" without any warranties, express or implied.
                  We do not guarantee that the service will be error-free, secure, or always available.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Conversion Accuracy</h2>
                <p>
                  While we strive for accurate conversions, we cannot guarantee perfect results for all file types.
                  Complex formatting, special characters, or unusual file structures may affect conversion quality.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Data Security</h2>
                <p>
                  Although we implement security measures, no internet transmission is 100% secure. You upload files
                  at your own risk. For highly sensitive documents, we recommend using additional encryption.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the content,
                  privacy policies, or practices of external sites.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Limitation of Liability</h2>
                <p>
                  ConvertDocs and its operators shall not be liable for any direct, indirect, incidental, or
                  consequential damages arising from the use of our services, including but not limited to data loss,
                  business interruption, or conversion errors.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">User Responsibility</h2>
                <p>
                  Users are responsible for backing up their original files before conversion. We recommend verifying
                  converted files meet your requirements before deleting originals.
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