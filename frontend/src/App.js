import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

// Pages
import HomePage from './pages/HomePage';
import ConverterPage from './pages/ConverterPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import ContactPage from './pages/ContactPage';
import SupportPage from './pages/SupportPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import DisclaimerPage from './pages/DisclaimerPage';
import CookiePolicyPage from './pages/CookiePolicyPage';
import AboutPage from './pages/AboutPage';

// Tool Pages
import PdfToWordPage, {
  WordToPdfPage,
  JpgToPdfPage,
  PngToPdfPage,
  PdfToJpgPage,
  ImageToTextPage,
  MergePdfPage,
  CompressPdfPage,
  RotatePdfPage,
  ExcelToPdfPage,
  WebpToJpgPage,
  WebpToPngPage,
  PngToJpgPage,
} from './pages/ToolPages';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <div className="flex-1">
            <Routes>
              {/* Main Pages */}
              <Route path="/" element={<HomePage />} />
              <Route path="/converter" element={<ConverterPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:slug" element={<BlogPostPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/support" element={<SupportPage />} />

              {/* Legal Pages */}
              <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/disclaimer" element={<DisclaimerPage />} />
              <Route path="/cookie-policy" element={<CookiePolicyPage />} />
              <Route path="/about" element={<AboutPage />} />

              {/* Document Conversion Tools */}
              <Route path="/pdf-to-word" element={<PdfToWordPage />} />
              <Route path="/word-to-pdf" element={<WordToPdfPage />} />
              <Route path="/excel-to-pdf" element={<ExcelToPdfPage />} />
              <Route path="/pdf-to-excel" element={<PdfToWordPage />} />
              <Route path="/ppt-to-pdf" element={<WordToPdfPage />} />
              <Route path="/pdf-to-ppt" element={<PdfToWordPage />} />

              {/* Image Conversion Tools */}
              <Route path="/jpg-to-pdf" element={<JpgToPdfPage />} />
              <Route path="/png-to-pdf" element={<PngToPdfPage />} />
              <Route path="/pdf-to-jpg" element={<PdfToJpgPage />} />
              <Route path="/webp-to-jpg" element={<WebpToJpgPage />} />
              <Route path="/webp-to-png" element={<WebpToPngPage />} />
              <Route path="/png-to-jpg" element={<PngToJpgPage />} />

              {/* OCR Tools */}
              <Route path="/image-to-text-ocr" element={<ImageToTextPage />} />
              <Route path="/scanned-pdf-to-word" element={<ImageToTextPage />} />
              <Route path="/scanned-pdf-searchable" element={<ImageToTextPage />} />

              {/* PDF Tools */}
              <Route path="/merge-pdf" element={<MergePdfPage />} />
              <Route path="/split-pdf" element={<PdfToWordPage />} />
              <Route path="/compress-pdf" element={<CompressPdfPage />} />
              <Route path="/rotate-pdf" element={<RotatePdfPage />} />
            </Routes>
          </div>
          <Footer />
          <Toaster />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
