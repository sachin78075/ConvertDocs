import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const ToolCard = ({ icon: Icon, title, description, path, category }) => {
  return (
    <Link to={path} data-testid={`tool-card-${path.replace('/', '')}`}>
      <motion.div
        className="group relative bg-white p-6 rounded-2xl border border-slate-100 hover:border-cyan-100 hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 flex flex-col items-start gap-4 h-full"
        whileHover={{ y: -4 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-3 rounded-xl bg-cyan-50 group-hover:bg-primary transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" strokeWidth={2} />
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">{description}</p>
        </div>

        {category && (
          <span className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-600">
            {category}
          </span>
        )}
      </motion.div>
    </Link>
  );
};