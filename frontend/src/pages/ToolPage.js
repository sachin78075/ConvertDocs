import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { DropZone } from '../components/DropZone';
import { motion } from 'framer-motion';
import { Download, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function ToolPage({ 
  toolName, 
  title, 
  description, 
  steps, 
  endpoint, 
  accept, 
  maxFiles = 1,
  formFields = [] 
}) {
  const [files, setFiles] = useState([]);
  const [converting, setConverting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [downloadUrl, setDownloadUrl] = useState(null);
  const [formData, setFormData] = useState({});

  const handleFileSelect = (selectedFiles) => {
    setFiles(selectedFiles);
    setError(null);
    setSuccess(false);
    setDownloadUrl(null);
  };

  const handleFormChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleConvert = async () => {
    if (files.length === 0) {
      setError('Please select a file first');
      return;
    }

    setConverting(true);
    setError(null);
    setSuccess(false);

    try {
      const formDataObj = new FormData();
      
      if (maxFiles === 1) {
        formDataObj.append('file', files[0]);
      } else {
        files.forEach((file) => {
          formDataObj.append('files', file);
        });
      }

      // Add additional form fields
      Object.keys(formData).forEach(key => {
        formDataObj.append(key, formData[key]);
      });

      const response = await axios.post(`${API}${endpoint}`, formDataObj, {
        responseType: 'blob',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Create download URL
      const url = window.URL.createObjectURL(new Blob([response.data]));
      setDownloadUrl(url);
      setSuccess(true);
    } catch (err) {
      setError(err.response?.data?.detail || 'Conversion failed. Please try again.');
    } finally {
      setConverting(false);
    }
  };

  const handleDownload = () => {
    if (downloadUrl) {
      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = `converted_${Date.now()}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const resetTool = () => {
    setFiles([]);
    setSuccess(false);
    setError(null);
    setDownloadUrl(null);
    setFormData({});
  };

  return (
    <>
      <Helmet>
        <title>{title} | ConvertDocs</title>
        <meta name="description" content={description} />
      </Helmet>

      <main className="min-h-screen bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              {title}
            </h1>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>

          {/* Tool Interface */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 mb-12"
          >
            <DropZone onFileSelect={handleFileSelect} accept={accept} maxFiles={maxFiles} toolName={toolName} />

            {files.length > 0 && (
              <div className="mt-6 space-y-4">
                <div className="p-4 bg-slate-50 rounded-xl">
                  <p className="text-sm font-medium text-slate-900 mb-2">Selected Files:</p>
                  <ul className="space-y-1">
                    {files.map((file, index) => (
                      <li key={index} className="text-sm text-slate-600">
                        {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Additional Form Fields */}
                {formFields.map((field) => (
                  <div key={field.name}>
                    <label className="block text-sm font-medium text-slate-900 mb-2">
                      {field.label}
                    </label>
                    {field.type === 'select' ? (
                      <select
                        value={formData[field.name] || field.default || ''}
                        onChange={(e) => handleFormChange(field.name, e.target.value)}
                        className="w-full h-11 rounded-lg border-slate-200 focus:border-cyan-500 focus:ring-cyan-500/20 bg-white"
                        data-testid={`form-field-${field.name}`}
                      >
                        {field.options.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    ) : (
                      <input
                        type={field.type}
                        value={formData[field.name] || field.default || ''}
                        onChange={(e) => handleFormChange(field.name, e.target.value)}
                        className="w-full h-11 rounded-lg border-slate-200 focus:border-cyan-500 focus:ring-cyan-500/20 bg-white"
                        data-testid={`form-field-${field.name}`}
                      />
                    )}
                  </div>
                ))}

                {error && (
                  <div className="p-4 bg-red-50 border border-red-100 rounded-xl flex items-start gap-3" data-testid="error-message">
                    <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                )}

                {success && (
                  <div className="p-4 bg-green-50 border border-green-100 rounded-xl flex items-start gap-3" data-testid="success-message">
                    <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-green-700">Conversion successful!</p>
                  </div>
                )}

                <div className="flex gap-4">
                  {!success ? (
                    <button
                      onClick={handleConvert}
                      disabled={converting}
                      className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 h-11 px-8 rounded-full font-medium shadow-lg shadow-cyan-900/20 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      data-testid="convert-button"
                    >
                      {converting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Converting...
                        </>
                      ) : (
                        'Convert Now'
                      )}
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={handleDownload}
                        className="flex-1 bg-green-600 text-white hover:bg-green-700 h-11 px-8 rounded-full font-medium shadow-lg transition-all hover:scale-[1.02] flex items-center justify-center gap-2"
                        data-testid="download-button"
                      >
                        <Download className="w-5 h-5" />
                        Download
                      </button>
                      <button
                        onClick={resetTool}
                        className="h-11 px-6 rounded-full font-medium bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 transition-all"
                        data-testid="convert-another-button"
                      >
                        Convert Another
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}
          </motion.div>

          {/* How to Use */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-slate-100"
          >
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">How to Use</h2>
            <ol className="space-y-4">
              {steps.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </span>
                  <p className="text-slate-600 leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </main>
    </>
  );
}