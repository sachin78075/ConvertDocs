import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';
const API = `${BACKEND_URL}/api`;

const samplePosts = [
  {
    title: 'How to Convert PDF to Word Without Losing Formatting',
    slug: 'convert-pdf-to-word-without-losing-formatting',
    excerpt: 'Learn the best practices for converting PDF documents to Word while maintaining your original formatting and layout.',
    content: `<p>Converting PDF files to Word documents is one of the most common tasks for professionals, students, and businesses. However, many people struggle with maintaining the original formatting during the conversion process.</p>
    
    <h2>Why Formatting Matters</h2>
    <p>When you convert a PDF to Word, you want to preserve headings, fonts, images, tables, and overall layout. Poor conversion can result in hours of manual reformatting work.</p>
    
    <h2>Best Practices for PDF to Word Conversion</h2>
    <ol>
      <li><strong>Use High-Quality Source Files:</strong> Start with a well-formatted PDF for best results.</li>
      <li><strong>Check for Text-Based PDFs:</strong> Scanned PDFs may require OCR processing first.</li>
      <li><strong>Review After Conversion:</strong> Always check the converted document for any formatting issues.</li>
      <li><strong>Use Reliable Conversion Tools:</strong> Choose tools that maintain formatting integrity.</li>
    </ol>
    
    <h2>Using ConvertDocs</h2>
    <p>ConvertDocs uses advanced conversion algorithms to maintain your document's formatting. Simply upload your PDF, and our tool will preserve headers, footers, images, and text styling.</p>
    
    <p>Try our free PDF to Word converter today and experience hassle-free document conversion!</p>`,
    category: 'PDF Tips',
    image_url: 'https://images.pexels.com/photos/19238352/pexels-photo-19238352.jpeg',
  },
  {
    title: '5 Ways to Reduce PDF File Size Without Losing Quality',
    slug: 'reduce-pdf-file-size-without-losing-quality',
    excerpt: 'Discover effective methods to compress your PDF files while maintaining document quality for easier sharing and storage.',
    content: `<p>Large PDF files can be problematic when trying to email documents or upload them to websites. Here are five proven methods to reduce PDF file size without compromising quality.</p>
    
    <h2>1. Image Compression</h2>
    <p>Images are often the largest components of PDF files. Compressing images while maintaining acceptable quality can significantly reduce file size.</p>
    
    <h2>2. Remove Unnecessary Elements</h2>
    <p>Delete unused bookmarks, annotations, or embedded fonts that aren't essential to your document.</p>
    
    <h2>3. Optimize for Web</h2>
    <p>Use PDF optimization tools that prepare your document for web viewing, reducing file size while keeping readability.</p>
    
    <h2>4. Reduce Resolution</h2>
    <p>If your PDF is intended for screen viewing only, you can safely reduce image resolution to 150 DPI instead of print-quality 300 DPI.</p>
    
    <h2>5. Use Professional Compression Tools</h2>
    <p>Tools like ConvertDocs offer smart compression that analyzes your document and applies optimal compression settings automatically.</p>
    
    <p>With ConvertDocs Compress PDF tool, you can reduce file size by up to 70% while maintaining visual quality. Try it free today!</p>`,
    category: 'PDF Tips',
    image_url: 'https://images.pexels.com/photos/7693736/pexels-photo-7693736.jpeg',
  },
  {
    title: 'Understanding OCR: How Text Extraction from Images Works',
    slug: 'understanding-ocr-text-extraction-from-images',
    excerpt: 'Learn how Optical Character Recognition (OCR) technology extracts text from images and scanned documents.',
    content: `<p>Optical Character Recognition (OCR) is a technology that converts different types of documents, such as scanned paper documents, PDF files, or images captured by a camera, into editable and searchable data.</p>
    
    <h2>How OCR Works</h2>
    <p>OCR technology analyzes the structure of a document image, breaks it down into elements like text blocks, lines, and characters, then compares these patterns against known character shapes.</p>
    
    <h2>Steps in OCR Processing</h2>
    <ol>
      <li><strong>Image Preprocessing:</strong> The software adjusts brightness, contrast, and removes noise.</li>
      <li><strong>Text Detection:</strong> The system identifies areas containing text.</li>
      <li><strong>Character Recognition:</strong> Individual characters are identified and converted to machine-readable text.</li>
      <li><strong>Post-Processing:</strong> The system applies language rules to improve accuracy.</li>
    </ol>
    
    <h2>Benefits of OCR</h2>
    <ul>
      <li>Make scanned documents searchable</li>
      <li>Extract text from images</li>
      <li>Digitize paper archives</li>
      <li>Enable text editing from screenshots</li>
    </ul>
    
    <h2>Using OCR with ConvertDocs</h2>
    <p>ConvertDocs offers powerful OCR capabilities with support for multiple languages. Simply upload your image or scanned PDF, and our OCR engine will extract the text accurately.</p>
    
    <p>Try our Image to Text OCR tool for free and unlock the text hidden in your images!</p>`,
    category: 'OCR Guides',
    image_url: 'https://images.pexels.com/photos/5483248/pexels-photo-5483248.jpeg',
  },
  {
    title: 'PDF vs Word: When to Use Each Format',
    slug: 'pdf-vs-word-when-to-use-each-format',
    excerpt: 'Understand the key differences between PDF and Word formats and learn which one to use for different purposes.',
    content: `<p>Choosing between PDF and Word formats can impact how your documents are shared, edited, and preserved. Each format has unique advantages.</p>
    
    <h2>When to Use PDF</h2>
    <ul>
      <li><strong>Final Documents:</strong> Contracts, invoices, reports that shouldn't be edited</li>
      <li><strong>Cross-Platform Sharing:</strong> PDFs look the same on any device</li>
      <li><strong>Print-Ready Files:</strong> PDFs preserve exact formatting for printing</li>
      <li><strong>Forms and Applications:</strong> Interactive PDFs with fillable fields</li>
    </ul>
    
    <h2>When to Use Word</h2>
    <ul>
      <li><strong>Collaborative Editing:</strong> Multiple people need to make changes</li>
      <li><strong>Draft Documents:</strong> Content that will undergo revisions</li>
      <li><strong>Template Creation:</strong> Documents that will be reused and customized</li>
      <li><strong>Comments and Track Changes:</strong> Editorial workflows require Word features</li>
    </ul>
    
    <h2>Converting Between Formats</h2>
    <p>Sometimes you need both formats. Start with Word for creation and collaboration, then convert to PDF for final distribution. Or convert PDF to Word when you need to edit a document you received.</p>
    
    <p>ConvertDocs makes it easy to convert between PDF and Word formats in seconds. Choose the format that fits your needs and convert whenever necessary!</p>`,
    category: 'File Conversion',
    image_url: 'https://images.pexels.com/photos/18655049/pexels-photo-18655049.jpeg',
  },
  {
    title: 'How to Merge Multiple PDFs Into One Document',
    slug: 'how-to-merge-multiple-pdfs-into-one-document',
    excerpt: 'Step-by-step guide to combining multiple PDF files into a single document for easier management and sharing.',
    content: `<p>Combining multiple PDF files into one document is a common need for professionals organizing reports, students compiling assignments, or anyone managing digital documents.</p>
    
    <h2>Why Merge PDFs?</h2>
    <ul>
      <li>Create comprehensive reports from multiple sections</li>
      <li>Combine related documents for easier sharing</li>
      <li>Reduce the number of files to manage</li>
      <li>Create portfolios or collections</li>
    </ul>
    
    <h2>Step-by-Step Guide</h2>
    <ol>
      <li><strong>Organize Your Files:</strong> Decide the order of your PDFs before merging</li>
      <li><strong>Check File Sizes:</strong> Ensure your files aren't too large for the merging tool</li>
      <li><strong>Upload in Order:</strong> Add files in the sequence you want them to appear</li>
      <li><strong>Preview and Confirm:</strong> Some tools let you preview before finalizing</li>
      <li><strong>Download Your Merged PDF:</strong> Save the combined document</li>
    </ol>
    
    <h2>Best Practices</h2>
    <p>When merging PDFs, consider adding page numbers or creating a table of contents for long documents. Also, check that all pages are oriented correctly before merging.</p>
    
    <h2>Using ConvertDocs Merge PDF</h2>
    <p>ConvertDocs makes PDF merging simple. Upload up to 10 files, they'll be combined in order, and you'll get one seamless PDF document. No software installation required!</p>
    
    <p>Try our free Merge PDF tool today and simplify your document management!</p>`,
    category: 'How-To',
    image_url: 'https://images.pexels.com/photos/7693736/pexels-photo-7693736.jpeg',
  },
];

async function seedBlogPosts() {
  console.log('Seeding blog posts...');
  
  for (const post of samplePosts) {
    try {
      await axios.post(`${API}/blog`, post);
      console.log(`✓ Created: ${post.title}`);
    } catch (error) {
      if (error.response) {
        console.error(`✗ Failed to create "${post.title}":`, error.response.data);
      } else {
        console.error(`✗ Failed to create "${post.title}":`, error.message);
      }
    }
  }
  
  console.log('Blog seeding completed!');
}

seedBlogPosts();
