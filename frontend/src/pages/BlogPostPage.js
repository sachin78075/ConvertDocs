import { Helmet } from 'react-helmet-async';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPost();
  }, [slug]);

  const fetchPost = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API}/blog/${slug}`);
      setPost(response.data);
    } catch (error) {
      setError('Blog post not found');
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-slate-600 mb-4">{error || 'Post not found'}</p>
          <Link to="/blog" className="text-primary hover:text-primary/80 font-medium">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} | ConvertDocs Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <main className="min-h-screen bg-slate-50">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-primary transition-colors mb-8"
            data-testid="back-to-blog-link"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                <span className="flex items-center gap-1">
                  <Tag className="w-4 h-4" />
                  {post.category}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {formatDate(post.published_at)}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4">
                {post.title}
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">{post.excerpt}</p>
            </div>

            {post.image_url && (
              <img
                src={post.image_url}
                alt={post.title}
                className="w-full rounded-3xl mb-12 border border-slate-100"
              />
            )}

            <div
              className="prose prose-slate max-w-none"
              style={{
                fontSize: '16px',
                lineHeight: '1.75',
                color: '#475569'
              }}
              dangerouslySetInnerHTML={{ __html: post.content }}
              data-testid="blog-post-content"
            />

            <div className="mt-12 pt-8 border-t border-slate-200">
              <p className="text-sm text-slate-500">Written by {post.author}</p>
            </div>
          </motion.div>
        </article>
      </main>
    </>
  );
}