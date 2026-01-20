import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Mail, User, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      await axios.post(`${API}/contact`, formData);
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | ConvertDocs</title>
        <meta
          name="description"
          content="Get in touch with ConvertDocs. We're here to help with your document conversion needs."
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
              Contact Us
            </h1>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Have a question or need help? Send us a message and we'll get back to you soon.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100"
          >
            {success ? (
              <div className="text-center py-12" data-testid="success-message">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold text-slate-900 mb-4">Message Sent!</h2>
                <p className="text-slate-600 mb-8">
                  Thank you for contacting us. We'll get back to you as soon as possible.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-full font-medium transition-all"
                  data-testid="send-another-button"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full h-11 pl-12 pr-4 rounded-lg border-slate-200 focus:border-cyan-500 focus:ring-cyan-500/20 bg-white"
                      placeholder="Your name"
                      data-testid="contact-name-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full h-11 pl-12 pr-4 rounded-lg border-slate-200 focus:border-cyan-500 focus:ring-cyan-500/20 bg-white"
                      placeholder="your.email@example.com"
                      data-testid="contact-email-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-slate-900 mb-2">
                    Subject
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full h-11 pl-12 pr-4 rounded-lg border-slate-200 focus:border-cyan-500 focus:ring-cyan-500/20 bg-white"
                      placeholder="What's this about?"
                      data-testid="contact-subject-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-4 py-3 rounded-lg border-slate-200 focus:border-cyan-500 focus:ring-cyan-500/20 bg-white resize-none"
                    placeholder="Tell us more..."
                    data-testid="contact-message-input"
                  />
                </div>

                {error && (
                  <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3" data-testid="error-message">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-full font-medium shadow-lg shadow-cyan-900/20 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  data-testid="submit-button"
                >
                  {submitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-slate-600">
              You can also reach us at{' '}
              <a href="mailto:support@convertdocs.com" className="text-primary hover:text-primary/80 font-medium">
                support@convertdocs.com
              </a>
            </p>
          </motion.div>
        </div>
      </main>
    </>
  );
}