import requests
import os

BACKEND_URL = os.environ.get('REACT_APP_BACKEND_URL', 'http://localhost:8001')
API = f\"{BACKEND_URL}/api\"

sample_posts = [
    {
        "title": "How to Convert PDF to Word Without Losing Formatting",
        "slug": "convert-pdf-to-word-without-losing-formatting",
        "excerpt": "Learn the best practices for converting PDF documents to Word while maintaining your original formatting and layout.",
        "content": "<p>Converting PDF files to Word documents is one of the most common tasks. This guide shows you how to do it right.</p>",
        "category": "PDF Tips",
        "image_url": "https://images.pexels.com/photos/19238352/pexels-photo-19238352.jpeg"
    },
    {
        "title": "5 Ways to Reduce PDF File Size Without Losing Quality",
        "slug": "reduce-pdf-file-size-without-losing-quality",
        "excerpt": "Discover effective methods to compress your PDF files while maintaining document quality for easier sharing and storage.",
        "content": "<p>Large PDF files can be problematic. Here are five proven methods to reduce PDF file size without compromising quality.</p>",
        "category": "PDF Tips",
        "image_url": "https://images.pexels.com/photos/7693736/pexels-photo-7693736.jpeg"
    },
    {
        "title": "Understanding OCR: How Text Extraction from Images Works",
        "slug": "understanding-ocr-text-extraction-from-images",
        "excerpt": "Learn how Optical Character Recognition (OCR) technology extracts text from images and scanned documents.",
        "content": "<p>OCR technology converts images and scanned documents into editable text. Here's how it works and why it matters.</p>",
        "category": "OCR Guides",
        "image_url": "https://images.pexels.com/photos/5483248/pexels-photo-5483248.jpeg"
    }
]

print("Seeding blog posts...")
for post in sample_posts:
    try:
        response = requests.post(f"{API}/blog", json=post)
        if response.status_code == 200:
            print(f"✓ Created: {post['title']}")
        else:
            print(f"✗ Failed: {post['title']} - {response.text}")
    except Exception as e:
        print(f"✗ Error creating {post['title']}: {str(e)}")

print("Blog seeding completed!")
