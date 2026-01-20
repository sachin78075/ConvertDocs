import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { HelpCircle, FileQuestion, Shield, Trash2 } from 'lucide-react';
import { useState } from 'react';

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: 'Is ConvertDocs really free?',
      answer: 'Yes! ConvertDocs is completely free to use. All conversion tools are available without any signup or payment required.',
      icon: HelpCircle,
    },
    {
      question: 'What file size limits do you have?',
      answer: 'Currently, we support files up to 100MB per upload. For larger files, please split them into smaller parts or compress them first.',
      icon: FileQuestion,
    },
    {
      question: 'How secure is my data?',
      answer: 'Your privacy is our priority. All uploaded files are automatically deleted from our servers within 1 hour of processing. We never store, share, or access your documents.',
      icon: Shield,
    },
    {
      question: 'Do I need to create an account?',
      answer: 'No account needed! ConvertDocs is designed for instant access. Simply select your tool, upload your file, and convert.',
      icon: HelpCircle,
    },
    {
      question: 'What happens to my files after conversion?',
      answer: 'All files are automatically deleted from our servers after 1 hour. We recommend downloading your converted file immediately.',
      icon: Trash2,
    },
    {
      question: 'Which file formats do you support?',
      answer: 'We support PDF, Word (DOC/DOCX), Excel (XLS/XLSX), PowerPoint (PPT/PPTX), images (JPG, PNG, WEBP, TIFF, BMP), text files, HTML, CSV, EPUB, and RTF.',
      icon: FileQuestion,
    },
    {
      question: 'Does OCR work for all languages?',
      answer: 'Our OCR engine supports multiple languages including English, Spanish, French, German, Chinese, Japanese, and many more. The accuracy may vary based on image quality.',
      icon: HelpCircle,
    },
    {
      question: 'Can I convert multiple files at once?',
      answer: 'Some tools like Merge PDF support multiple file uploads. For individual conversions, you can process files one at a time.',
      icon: FileQuestion,
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <Helmet>
        <title>Support & FAQ | ConvertDocs</title>
        <meta
          name="description"
          content="Get help with ConvertDocs. Find answers to common questions about file conversion, security, and supported formats."
        />
      </Helmet>

      <main className="min-h-screen bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              Support & FAQ
            </h1>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Find answers to common questions and get help with ConvertDocs
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden"
                data-testid={`faq-item-${index}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
                  data-testid={`faq-question-${index}`}
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div className="p-2 rounded-lg bg-cyan-50">
                      <faq.icon className="w-5 h-5 text-primary" strokeWidth={2} />
                    </div>
                    <span className="font-semibold text-slate-900">{faq.question}</span>
                  </div>
                  <svg
                    className={`w-5 h-5 text-slate-400 transition-transform ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5" data-testid={`faq-answer-${index}`}>
                    <p className="text-slate-600 leading-relaxed pl-13">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-white rounded-3xl p-8 md:p-12 border border-slate-100 text-center"
          >
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Still Need Help?</h2>
            <p className="text-slate-600 mb-6">
              Can't find what you're looking for? Contact our support team and we'll be happy to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-full font-medium shadow-lg shadow-cyan-900/20 transition-all hover:scale-[1.02]"
              data-testid="contact-support-button"
            >
              Contact Support
            </a>
          </motion.div>
        </div>
      </main>
    </>
  );
}