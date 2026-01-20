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
  const [selectedFiles, setSelectedFiles] = useState([]);
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

  const handleFileSelect = (files) => {
    setSelectedFiles(files);
    // Auto-detect file type and navigate to appropriate tool
    if (files.length > 0) {
      const file = files[0];
      const extension = file.name.split('.').pop().toLowerCase();
      
      // Navigate based on file type
      const routeMap = {
        'pdf': '/pdf-to-word',
        'docx': '/word-to-pdf',
        'doc': '/word-to-pdf',
        'jpg': '/jpg-to-pdf',
        'jpeg': '/jpg-to-pdf',
        'png': '/png-to-pdf',
        'xlsx': '/excel-to-pdf',
        'xls': '/excel-to-pdf',
      };
      
      const route = routeMap[extension] || '/converter';
      navigate(route, { state: { files } });
    }
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
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center space-y-4"
              >
                <p className="text-sm text-gray-500" data-testid="hero-subtext">
                  No signup required • Secure & Private • Free Forever
                </p>
                <Link
                  to="/converter"
                  className="inline-flex items-center text-sm text-red-600 hover:text-red-700 font-medium transition-colors"
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
              <p className="text-base text-gray-600">Quick access to our most used converters</p>
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
                className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 transition-colors"
                data-testid="view-all-tools-link"
              >
                View All Tools
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 md:py-24 bg-slate-50" data-testid="features-section">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
                Why Choose ConvertDocs?
              </h2>
              <p className="text-base text-slate-600">Everything you need for document conversion</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-white p-8 rounded-3xl border border-slate-100"
                  data-testid={`feature-${feature.title.toLowerCase().replace(/ /g, '-')}`}
                >
                  <div className="p-3 rounded-xl bg-cyan-50 inline-block mb-4">
                    <feature.icon className="w-6 h-6 text-primary" strokeWidth={2} />
                  </div>
                  <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
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
                    className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
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
                      <span className="text-xs px-3 py-1 rounded-full bg-cyan-50 text-primary font-medium">
                        {post.category}
                      </span>
                      <h3 className="font-semibold text-slate-900 mt-4 mb-2">{post.title}</h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">{post.excerpt}</p>
                      <Link
                        to={`/blog/${post.slug}`}
                        className="text-sm text-primary hover:text-primary/80 font-medium transition-colors"
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
        <section className="py-16 md:py-24 bg-slate-50" data-testid="trust-section">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-white p-12 rounded-3xl border border-slate-100">
              <Shield className="w-12 h-12 text-primary mx-auto mb-6" strokeWidth={1.5} />
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
                Your Privacy is Protected
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-2">
                Files are automatically deleted after processing
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                We never store or share your documents
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}