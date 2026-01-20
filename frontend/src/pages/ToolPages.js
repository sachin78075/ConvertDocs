import ToolPage from './ToolPage';
import { FileText } from 'lucide-react';

export default function PdfToWordPage() {
  return (
    <ToolPage
      toolName="PDF to Word"
      title="PDF to Word Converter"
      description="Convert PDF documents to editable Word (.docx) files instantly. Maintain formatting and layout."
      steps={[
        'Upload your PDF file using the dropzone above',
        'Click Convert Now and wait for processing',
        'Download your converted Word document',
      ]}
      endpoint="/convert/pdf-to-word"
      accept={{ 'application/pdf': ['.pdf'] }}
    />
  );
}

export function WordToPdfPage() {
  return (
    <ToolPage
      toolName="Word to PDF"
      title="Word to PDF Converter"
      description="Convert Word documents (.docx, .doc) to PDF format. Perfect for sharing and archiving."
      steps={[
        'Upload your Word document',
        'Click Convert Now to start the conversion',
        'Download your PDF file',
      ]}
      endpoint="/convert/word-to-pdf"
      accept={{ 'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'], 'application/msword': ['.doc'] }}
    />
  );
}

export function JpgToPdfPage() {
  return (
    <ToolPage
      toolName="JPG to PDF"
      title="JPG to PDF Converter"
      description="Convert JPG/JPEG images to PDF documents. Combine multiple images into one PDF."
      steps={[
        'Upload your JPG/JPEG image',
        'Click Convert Now',
        'Download your PDF file',
      ]}
      endpoint="/convert/image-to-pdf"
      accept={{ 'image/jpeg': ['.jpg', '.jpeg'] }}
    />
  );
}

export function PngToPdfPage() {
  return (
    <ToolPage
      toolName="PNG to PDF"
      title="PNG to PDF Converter"
      description="Convert PNG images to PDF documents quickly and easily."
      steps={[
        'Upload your PNG image',
        'Click Convert Now',
        'Download your PDF file',
      ]}
      endpoint="/convert/image-to-pdf"
      accept={{ 'image/png': ['.png'] }}
    />
  );
}

export function PdfToJpgPage() {
  return (
    <ToolPage
      toolName="PDF to JPG"
      title="PDF to JPG Converter"
      description="Convert PDF pages to JPG images. Extract the first page as an image."
      steps={[
        'Upload your PDF file',
        'Click Convert Now',
        'Download your JPG image',
      ]}
      endpoint="/convert/pdf-to-image"
      accept={{ 'application/pdf': ['.pdf'] }}
    />
  );
}

export function ImageToTextPage() {
  return (
    <ToolPage
      toolName="Image to Text OCR"
      title="Image to Text (OCR)"
      description="Extract text from images using advanced OCR technology. Supports multiple languages."
      steps={[
        'Upload an image containing text',
        'Click Convert Now to extract text',
        'View and copy the extracted text',
      ]}
      endpoint="/convert/image-to-text"
      accept={{ 'image/*': ['.jpg', '.jpeg', '.png', '.tiff', '.bmp'] }}
    />
  );
}

export function MergePdfPage() {
  return (
    <ToolPage
      toolName="Merge PDF"
      title="Merge PDF Files"
      description="Combine multiple PDF files into a single document. Upload up to 10 files."
      steps={[
        'Upload multiple PDF files',
        'Files will be merged in the order uploaded',
        'Click Convert Now and download your merged PDF',
      ]}
      endpoint="/convert/merge-pdf"
      accept={{ 'application/pdf': ['.pdf'] }}
      maxFiles={10}
    />
  );
}

export function CompressPdfPage() {
  return (
    <ToolPage
      toolName="Compress PDF"
      title="Compress PDF File"
      description="Reduce PDF file size while maintaining quality. Perfect for email attachments."
      steps={[
        'Upload your PDF file',
        'Click Convert Now to compress',
        'Download your compressed PDF',
      ]}
      endpoint="/convert/compress-pdf"
      accept={{ 'application/pdf': ['.pdf'] }}
    />
  );
}

export function RotatePdfPage() {
  return (
    <ToolPage
      toolName="Rotate PDF"
      title="Rotate PDF Pages"
      description="Rotate all pages in your PDF document by 90, 180, or 270 degrees."
      steps={[
        'Upload your PDF file',
        'Select rotation angle',
        'Click Convert Now and download rotated PDF',
      ]}
      endpoint="/convert/rotate-pdf"
      accept={{ 'application/pdf': ['.pdf'] }}
      formFields={[
        {
          name: 'rotation',
          label: 'Rotation Angle',
          type: 'select',
          default: '90',
          options: [
            { value: '90', label: '90° Clockwise' },
            { value: '180', label: '180°' },
            { value: '270', label: '270° Clockwise (90° Counter)' },
          ],
        },
      ]}
    />
  );
}

export function ExcelToPdfPage() {
  return (
    <ToolPage
      toolName="Excel to PDF"
      title="Excel to PDF Converter"
      description="Convert Excel spreadsheets (.xlsx, .xls) to PDF format."
      steps={[
        'Upload your Excel file',
        'Click Convert Now',
        'Download your PDF document',
      ]}
      endpoint="/convert/excel-to-pdf"
      accept={{ 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx'], 'application/vnd.ms-excel': ['.xls'] }}
    />
  );
}

export function WebpToJpgPage() {
  return (
    <ToolPage
      toolName="WEBP to JPG"
      title="WEBP to JPG Converter"
      description="Convert WEBP images to JPG format for wider compatibility."
      steps={[
        'Upload your WEBP image',
        'Click Convert Now',
        'Download your JPG image',
      ]}
      endpoint="/convert/image-format"
      accept={{ 'image/webp': ['.webp'] }}
      formFields={[
        {
          name: 'output_format',
          type: 'hidden',
          default: 'jpg',
        },
      ]}
    />
  );
}

export function WebpToPngPage() {
  return (
    <ToolPage
      toolName="WEBP to PNG"
      title="WEBP to PNG Converter"
      description="Convert WEBP images to PNG format with transparency support."
      steps={[
        'Upload your WEBP image',
        'Click Convert Now',
        'Download your PNG image',
      ]}
      endpoint="/convert/image-format"
      accept={{ 'image/webp': ['.webp'] }}
      formFields={[
        {
          name: 'output_format',
          type: 'hidden',
          default: 'png',
        },
      ]}
    />
  );
}

export function PngToJpgPage() {
  return (
    <ToolPage
      toolName="PNG to JPG"
      title="PNG to JPG Converter"
      description="Convert PNG images to JPG format to reduce file size."
      steps={[
        'Upload your PNG image',
        'Click Convert Now',
        'Download your JPG image',
      ]}
      endpoint="/convert/image-format"
      accept={{ 'image/png': ['.png'] }}
      formFields={[
        {
          name: 'output_format',
          type: 'hidden',
          default: 'jpg',
        },
      ]}
    />
  );
}