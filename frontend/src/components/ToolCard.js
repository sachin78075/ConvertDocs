import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const ToolCard = ({ icon: Icon, title, description, path, category }) => {
  return (
    <Link to={path} data-testid={`tool-card-${path.replace('/', '')}`}>
      <motion.div
        className="premium-card group relative bg-white p-6 rounded-2xl border-2 border-gray-200 hover:border-yellow-500 transition-all duration-300 flex flex-col items-start gap-4 h-full shadow-md hover:shadow-xl"
        whileHover={{ y: -4 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Premium corner accent */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-yellow-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-tr-2xl" />
        
        <div className="p-3 rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 group-hover:from-red-600 group-hover:to-yellow-600 transition-all duration-300">
          <Icon className="w-6 h-6 text-white" strokeWidth={2} />
        </div>
        
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>

        {category && (
          <span className="text-xs px-3 py-1 rounded-full bg-yellow-100 text-gray-900 font-medium border border-yellow-300">
            {category}
          </span>
        )}
      </motion.div>
    </Link>
  );
};