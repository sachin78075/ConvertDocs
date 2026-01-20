import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FileText, File, Image, ScanSearch, Combine, 
  Minimize2, RotateCw, Shield, Zap, Globe, CheckCircle2, Sparkles
} from 'lucide-react';
import { ToolCard } from '../components/ToolCard';
import { DropZone } from '../components/DropZone';
import { useState, useEffect } from 'react';
import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function HomePage() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const [conversionType, setConversionType] = useState('');
  const [converting, setConverting] = useState(false);
  const [convertedFile, setConvertedFile] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await axios.get(`${API}/blog`);
      setBlogPosts(response.data.slice(0, 3));
    } catch (error) {
      console.error('Failed to fetch blog posts:', error);
    }
  };

  const getConversionOptions = (extension) => {
    const options = {
      'pdf': [
        { label: 'PDF to Word', value: 'pdf-to-word', endpoint: '/convert/pdf-to-word', icon: FileText, format: 'docx' },
        { label: 'PDF to JPG', value: 'pdf-to-jpg', endpoint: '/convert/pdf-to-image', icon: Image, format: 'jpg' },
        { label: 'Compress PDF', value: 'compress-pdf', endpoint: '/convert/compress-pdf', icon: Minimize2, format: 'pdf' },
      ],
      'docx': [
        { label: 'Word to PDF', value: 'word-to-pdf', endpoint: '/convert/word-to-pdf', icon: FileText, format: 'pdf' },
      ],
      'doc': [
        { label: 'Word to PDF', value: 'word-to-pdf', endpoint: '/convert/word-to-pdf', icon: FileText, format: 'pdf' },
      ],
      'jpg': [
        { label: 'JPG to PDF', value: 'jpg-to-pdf', endpoint: '/convert/image-to-pdf', icon: FileText, format: 'pdf' },
      ],
      'jpeg': [
        { label: 'JPEG to PDF', value: 'jpeg-to-pdf', endpoint: '/convert/image-to-pdf', icon: FileText, format: 'pdf' },
      ],
      'png': [
        { label: 'PNG to PDF', value: 'png-to-pdf', endpoint: '/convert/image-to-pdf', icon: FileText, format: 'pdf' },
        { label: 'PNG to JPG', value: 'png-to-jpg', endpoint: '/convert/image-format', icon: Image, format: 'jpg' },
      ],
      'webp': [
        { label: 'WEBP to JPG', value: 'webp-to-jpg', endpoint: '/convert/image-format', icon: Image, format: 'jpg' },
        { label: 'WEBP to PNG', value: 'webp-to-png', endpoint: '/convert/image-format', icon: Image, format: 'png' },
      ],
      'xlsx': [
        { label: 'Excel to PDF', value: 'excel-to-pdf', endpoint: '/convert/excel-to-pdf', icon: FileText, format: 'pdf' },
      ],
      'xls': [
        { label: 'Excel to PDF', value: 'excel-to-pdf', endpoint: '/convert/excel-to-pdf', icon: FileText, format: 'pdf' },
      ],
    };
    
    return options[extension] || [];
  };

  const handleFileSelect = (files) => {
    if (files.length > 0) {
      setSelectedFile(files[0]);
      setConversionType('');
      setConvertedFile(null);
      setError(null);
    }
  };

  const handleConvert = async () => {
    if (!selectedFile || !conversionType) {
      setError('Please select a conversion type');
      return;
    }

    setConverting(true);
    setError(null);

    try {
      const extension = selectedFile.name.split('.').pop().toLowerCase();
      const options = getConversionOptions(extension);
      const selectedOption = options.find(opt => opt.value === conversionType);

      if (!selectedOption) {
        throw new Error('Invalid conversion type');
      }

      const formData = new FormData();
      formData.append('file', selectedFile);
      
      // Add output format for image conversions
      if (selectedOption.endpoint === '/convert/image-format') {
        formData.append('output_format', selectedOption.format);
      }

      const response = await axios.post(`${API}${selectedOption.endpoint}`, formData, {
        responseType: 'blob',
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      setConvertedFile({
        url,
        filename: `converted_${selectedFile.name.split('.')[0]}.${selectedOption.format}`
      });
    } catch (err) {
      setError(err.response?.data?.detail || 'Conversion failed. Please try again.');
    } finally {
      setConverting(false);
    }
  };

  const handleDownload = () => {
    if (convertedFile) {
      const link = document.createElement('a');
      link.href = convertedFile.url;
      link.download = convertedFile.filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const resetConverter = () => {
    setSelectedFile(null);
    setConversionType('');
    setConvertedFile(null);
    setError(null);
  };

  const popularTools = [
    {
      icon: FileText,
      title: 'PDF to Word',
      description: 'Convert PDF documents to editable Word files',
      path: '/pdf-to-word',
      category: 'PDF',
    },
    {
      icon: File,
      title: 'Word to PDF',
      description: 'Convert Word documents to PDF format',
      path: '/word-to-pdf',
      category: 'PDF',
    },
    {
      icon: Image,
      title: 'JPG to PDF',
      description: 'Convert images to PDF documents',
      path: '/jpg-to-pdf',
      category: 'Image',
    },
    {
      icon: ScanSearch,
      title: 'OCR PDF',
      description: 'Extract text from scanned documents',
      path: '/image-to-text-ocr',
      category: 'OCR',
    },
    {
      icon: FileText,
      title: 'Excel to PDF',
      description: 'Convert spreadsheets to PDF format',
      path: '/excel-to-pdf',
      category: 'PDF',
    },
    {
      icon: Combine,
      title: 'Merge PDF',
      description: 'Combine multiple PDFs into one',
      path: '/merge-pdf',
      category: 'PDF Tools',
    },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Fast Conversion',
      description: 'Process your files in seconds',
    },
    {
      icon: Shield,
      title: 'Secure Processing',
      description: 'Files deleted after conversion',
    },
    {
      icon: ScanSearch,
      title: 'OCR Supported',
      description: 'Extract text from images',
    },
    {
      icon: Globe,
      title: 'Works Everywhere',
      description: 'Access from any device',
    },
    {
      icon: CheckCircle2,
      title: 'No Registration',
      description: 'Start converting immediately',
    },
    {
      icon: File,
      title: 'Multiple Formats',
      description: '25+ conversion types',
    },
  ];

  return (
    <>
      <Helmet>
        <title>ConvertDocs – Free Online Document Converter | PDF, Word, OCR & More</title>
        <meta
          name="description"
          content="ConvertDocs is a free online document converter with OCR support. Convert PDF, Word, Excel, images and more instantly. No signup required."
        />
        <meta property="og:title" content="ConvertDocs – Free Online Document Converter" />
        <meta property="og:description" content="Convert any document online – fast, free & secure" />
        <meta property="og:type" content="website" />
      </Helmet>

      <main className="min-h-screen">
        {/* Hero Section with Dropzone */}
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white" data-testid="hero-section">
          {/* Premium decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-red-500/10 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-yellow-500/10 to-transparent rounded-full blur-3xl" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-600 to-yellow-500 text-white text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span>Premium Document Conversion</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900">
                  ConvertDocs – Online <br className="hidden sm:block" />
                  <span className="text-gradient">Document Converter</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Convert PDF, Word, Excel, Images & More Instantly
                </p>
              </motion.div>

              {/* Homepage Dropzone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="max-w-4xl mx-auto"
              >
                <DropZone 
                  onFileSelect={handleFileSelect}
                  accept={{
                    'application/pdf': ['.pdf'],
                    'application/msword': ['.doc'],
                    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
                    'application/vnd.ms-excel': ['.xls'],
                    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'],
                    'image/*': ['.jpg', '.jpeg', '.png', '.webp']
                  }}
                  toolName="homepage"
                />

                {/* Conversion Options - Show after file upload */}
                {selectedFile && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-8 bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200"
                  >
                    {/* File Info */}
                    <div className="flex items-center gap-4 pb-6 border-b border-gray-200">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800">
                        <File className="w-8 h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-900 text-lg">{selectedFile.name}</p>
                        <p className="text-sm text-gray-700">{selectedFile.type.toUpperCase()} • {(selectedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                      </div>
                      <button
                        onClick={resetConverter}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        data-testid="reset-button"
                      >
                        <svg className="w-5 h-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    {!convertedFile ? (
                      <>
                        {/* Conversion Type Selector */}
                        <div className="mt-6">
                          <label className="block text-lg font-semibold text-gray-900 mb-4">
                            Choose Conversion Type:
                          </label>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {getConversionOptions(selectedFile.name.split('.').pop().toLowerCase()).map((option, index) => (
                              <motion.button
                                key={option.value}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                onClick={() => setConversionType(option.value)}
                                className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all duration-300 text-left group ${
                                  conversionType === option.value
                                    ? 'border-red-500 bg-red-50 shadow-lg'
                                    : 'border-gray-200 hover:border-yellow-500 hover:shadow-md'
                                }`}
                                data-testid={`conversion-option-${option.value}`}
                              >
                                <div className={`p-3 rounded-xl transition-all duration-300 ${
                                  conversionType === option.value
                                    ? 'bg-gradient-to-br from-red-600 to-yellow-600'
                                    : 'bg-gradient-to-br from-gray-900 to-gray-800 group-hover:from-red-600 group-hover:to-yellow-600'
                                }`}>
                                  <option.icon className="w-5 h-5 text-white" strokeWidth={2} />
                                </div>
                                <div className="flex-1">
                                  <p className={`font-semibold transition-colors ${
                                    conversionType === option.value ? 'text-red-600' : 'text-gray-900 group-hover:text-red-600'
                                  }`}>
                                    {option.label}
                                  </p>
                                </div>
                                {conversionType === option.value && (
                                  <CheckCircle2 className="w-6 h-6 text-red-600" />
                                )}
                              </motion.button>
                            ))}
                          </div>
                        </div>

                        {/* Error Message */}
                        {error && (
                          <div className="mt-4 p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-start gap-3">
                            <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-sm text-red-700 font-medium">{error}</p>
                          </div>
                        )}

                        {/* Convert Button */}
                        <div className="mt-6">
                          <button
                            onClick={handleConvert}
                            disabled={!conversionType || converting}
                            className="w-full h-14 px-8 rounded-full font-semibold text-lg bg-gradient-to-r from-red-600 to-yellow-500 text-white shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-3"
                            data-testid="convert-now-button"
                          >
                            {converting ? (
                              <>
                                <svg className="animate-spin h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Converting...
                              </>
                            ) : (
                              <>
                                <Zap className="w-6 h-6" />
                                Convert Now
                              </>
                            )}
                          </button>
                        </div>
                      </>
                    ) : (
                      /* Download Section */
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="mt-6 text-center"
                      >
                        <div className="inline-flex p-4 rounded-full bg-green-100 mb-4">
                          <CheckCircle2 className="w-12 h-12 text-green-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Conversion Complete!</h3>
                        <p className="text-gray-700 mb-6">Your file is ready to download</p>
                        
                        <div className="flex gap-4 justify-center">
                          <button
                            onClick={handleDownload}
                            className="inline-flex items-center gap-3 h-14 px-8 rounded-full font-semibold text-lg bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]"
                            data-testid="download-button"
                          >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download File
                          </button>
                          <button
                            onClick={resetConverter}
                            className="h-14 px-8 rounded-full font-semibold text-lg bg-white text-gray-900 border-2 border-gray-200 hover:bg-gray-50 transition-all"
                            data-testid="convert-another-button"
                          >
                            Convert Another
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center space-y-4"
              >
                <p className="text-sm text-gray-700 font-medium" data-testid="hero-subtext">
                  No signup required • Secure & Private • Free Forever
                </p>
                <Link
                  to="/converter"
                  className="inline-flex items-center text-sm text-red-600 hover:text-red-700 font-semibold transition-colors"
                >
                  Or browse all 25+ tools →
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Popular Tools Section */}
        <section className="py-16 md:py-24 bg-white" data-testid="popular-tools-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                <span className="text-gradient">Popular</span> Tools
              </h2>
              <p className="text-base text-gray-800">Quick access to our most used converters</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularTools.map((tool, index) => (
                <motion.div
                  key={tool.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <ToolCard {...tool} />
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/converter"
                className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-red-600 to-yellow-500 text-white font-medium shadow-lg hover:shadow-xl transition-all hover:scale-105"
                data-testid="view-all-tools-link"
              >
                View All Tools
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24 bg-gray-50" data-testid="features-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">
                Why Choose <span className="text-gradient">ConvertDocs</span>?
              </h2>
              <p className="text-base text-gray-800">Everything you need for document conversion</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border-2 border-gray-200 hover:border-yellow-500 transition-all duration-300 shadow-md hover:shadow-xl"
                  data-testid={`feature-${feature.title.toLowerCase().replace(/ /g, '-')}`}
                >
                  <div className="p-3 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 inline-block mb-4\">
                    <feature.icon className="w-6 h-6 text-white" strokeWidth={2} />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-800 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Preview Section */}
        {blogPosts.length > 0 && (
          <section className="py-16 md:py-24 bg-white" data-testid="blog-preview-section">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                  Latest from Our Blog
                </h2>
                <p className="text-base text-slate-600">Tips, guides, and insights</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-yellow-500 hover:shadow-xl transition-all duration-300"
                    data-testid={`blog-preview-${post.slug}`}
                  >
                    {post.image_url && (
                      <img
                        src={post.image_url}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                    )}
                    <div className="p-6">
                      <span className="text-xs px-3 py-1 rounded-full bg-yellow-100 text-gray-900 font-medium border border-yellow-300">
                        {post.category}
                      </span>
                      <h3 className="font-semibold text-gray-900 mt-4 mb-2">{post.title}</h3>
                      <p className="text-sm text-gray-800 leading-relaxed mb-4">{post.excerpt}</p>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-sm text-red-600 hover:text-red-700 font-medium transition-colors"
                        data-testid={`blog-read-more-${post.slug}`}
                      >
                        Read More →
                      </Link>
                    </div>
                  </motion.article>
                ))}
              </div>

              <div className="text-center mt-12">
                <Link
                  to="/blog"
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 transition-colors"
                  data-testid="view-all-blog-link"
                >
                  View All Posts
                  <span>→</span>
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Trust Section */}
        <section className="py-16 md:py-24 bg-gray-50" data-testid="trust-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white p-12 rounded-3xl border-2 border-gray-200 shadow-xl relative overflow-hidden">
              {/* Premium corner accents */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-red-500/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-yellow-500/20 to-transparent" />
              
              <div className="relative z-10">
                <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-red-600 to-yellow-500 mb-6">
                  <Shield className="w-12 h-12 text-white" strokeWidth={1.5} />
                </div>
                <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                  Your Privacy is <span className="text-gradient">Protected</span>
                </h2>
                <p className="text-base text-gray-800 leading-relaxed mb-2">
                  Files are automatically deleted after processing
                </p>
                <p className="text-base text-gray-800 leading-relaxed">
                  We never store or share your documents
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}