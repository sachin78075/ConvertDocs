import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { 
  FileText, File, Image, ScanSearch, Combine, Scissors, 
  Minimize2, RotateCw, FileImage, Sheet, Presentation, Code
} from 'lucide-react';
import { ToolCard } from '../components/ToolCard';

export default function ConverterPage() {
  const documentTools = [
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
      icon: Sheet,
      title: 'Excel to PDF',
      description: 'Convert spreadsheets to PDF format',
      path: '/excel-to-pdf',
      category: 'PDF',
    },
    {
      icon: FileText,
      title: 'PDF to Excel',
      description: 'Extract tables from PDF to Excel',
      path: '/pdf-to-excel',
      category: 'PDF',
    },
    {
      icon: Presentation,
      title: 'PPT to PDF',
      description: 'Convert PowerPoint to PDF',
      path: '/ppt-to-pdf',
      category: 'PDF',
    },
    {
      icon: FileText,
      title: 'PDF to PPT',
      description: 'Convert PDF to PowerPoint',
      path: '/pdf-to-ppt',
      category: 'PDF',
    },
  ];

  const imageTools = [
    {
      icon: Image,
      title: 'JPG to PDF',
      description: 'Convert JPG images to PDF documents',
      path: '/jpg-to-pdf',
      category: 'Image',
    },
    {
      icon: Image,
      title: 'PNG to PDF',
      description: 'Convert PNG images to PDF documents',
      path: '/png-to-pdf',
      category: 'Image',
    },
    {
      icon: FileImage,
      title: 'PDF to JPG',
      description: 'Convert PDF pages to JPG images',
      path: '/pdf-to-jpg',
      category: 'Image',
    },
    {
      icon: Image,
      title: 'WEBP to JPG',
      description: 'Convert WEBP to JPG format',
      path: '/webp-to-jpg',
      category: 'Image',
    },
    {
      icon: Image,
      title: 'WEBP to PNG',
      description: 'Convert WEBP to PNG format',
      path: '/webp-to-png',
      category: 'Image',
    },
    {
      icon: Image,
      title: 'PNG to JPG',
      description: 'Convert PNG to JPG format',
      path: '/png-to-jpg',
      category: 'Image',
    },
  ];

  const ocrTools = [
    {
      icon: ScanSearch,
      title: 'Image to Text (OCR)',
      description: 'Extract text from images using OCR',
      path: '/image-to-text-ocr',
      category: 'OCR',
    },
    {
      icon: ScanSearch,
      title: 'Scanned PDF to Word',
      description: 'Convert scanned PDFs to editable Word',
      path: '/scanned-pdf-to-word',
      category: 'OCR',
    },
    {
      icon: ScanSearch,
      title: 'Scanned PDF to Searchable PDF',
      description: 'Make scanned PDFs searchable',
      path: '/scanned-pdf-searchable',
      category: 'OCR',
    },
  ];

  const pdfTools = [
    {
      icon: Combine,
      title: 'Merge PDF',
      description: 'Combine multiple PDFs into one',
      path: '/merge-pdf',
      category: 'PDF Tools',
    },
    {
      icon: Scissors,
      title: 'Split PDF',
      description: 'Split PDF into separate pages',
      path: '/split-pdf',
      category: 'PDF Tools',
    },
    {
      icon: Minimize2,
      title: 'Compress PDF',
      description: 'Reduce PDF file size',
      path: '/compress-pdf',
      category: 'PDF Tools',
    },
    {
      icon: RotateCw,
      title: 'Rotate PDF',
      description: 'Rotate PDF pages',
      path: '/rotate-pdf',
      category: 'PDF Tools',
    },
  ];

  const toolCategories = [
    { title: 'Document Conversions', tools: documentTools },
    { title: 'Image Conversions', tools: imageTools },
    { title: 'OCR Tools', tools: ocrTools },
    { title: 'PDF Tools', tools: pdfTools },
  ];

  return (
    <>
      <Helmet>
        <title>Document Converter – All Tools | ConvertDocs</title>
        <meta
          name="description"
          content="Browse all document conversion tools. Convert PDF, Word, Excel, images and more. Free online converter with OCR support."
        />
      </Helmet>

      <main className="min-h-screen bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
              All Conversion Tools
            </h1>
            <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Choose from our complete collection of document and image conversion tools
            </p>
          </motion.div>

          <div className="space-y-16">
            {toolCategories.map((category, categoryIndex) => (
              <section key={category.title} data-testid={`category-${category.title.toLowerCase().replace(/ /g, '-')}`}>
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                  className="text-2xl font-semibold text-slate-900 mb-8"
                >
                  {category.title}
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {category.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={tool.path}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (toolIndex * 0.05) }}
                    >
                      <ToolCard {...tool} />
                    </motion.div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}