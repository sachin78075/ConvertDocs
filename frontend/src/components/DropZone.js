import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, FileIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export const DropZone = ({ onFileSelect, accept, maxFiles = 1, toolName }) => {
  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles?.length > 0) {
        onFileSelect(acceptedFiles);
      }
    },
    [onFileSelect]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept,
    maxFiles,
  });

  return (
    <motion.div
      {...getRootProps()}
      className={`relative group cursor-pointer rounded-3xl border-2 border-dashed transition-all duration-300 ${
        isDragActive
          ? 'border-red-500 bg-red-50 scale-[1.02] shadow-xl shadow-red-500/20'
          : 'border-gray-300 hover:border-yellow-500 bg-white hover:bg-yellow-50/50 shadow-lg'
      }`}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      data-testid={`dropzone-${toolName?.toLowerCase().replace(/ /g, '-') || 'default'}`}
    >
      <input {...getInputProps()} data-testid="file-input" />
      
      <div className="p-12 flex flex-col items-center justify-center gap-6 min-h-[280px] relative">
        {/* Premium accent line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-premium-gradient rounded-full" />
        
        <motion.div
          className={`p-6 rounded-2xl transition-all duration-300 ${
            isDragActive 
              ? 'bg-gradient-to-br from-red-500 to-yellow-500' 
              : 'bg-gradient-to-br from-gray-900 to-gray-800 group-hover:from-red-600 group-hover:to-yellow-600'
          }`}
          animate={isDragActive ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          {isDragActive ? (
            <FileIcon className="w-12 h-12 text-white" strokeWidth={1.5} />
          ) : (
            <Upload className="w-12 h-12 text-white transition-colors" strokeWidth={1.5} />
          )}
        </motion.div>

        <div className="text-center space-y-2">
          <p className="text-lg font-semibold text-gray-900">
            {isDragActive ? 'Drop your file here' : 'Drag & drop your file here'}
          </p>
          <p className="text-sm text-gray-600">or click to browse</p>
          
          {maxFiles > 1 && (
            <p className="text-xs text-gray-500 mt-4">You can upload up to {maxFiles} files</p>
          )}
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500" />
          <div className="w-2 h-2 rounded-full bg-yellow-500" />
          <div className="w-2 h-2 rounded-full bg-gray-900" />
        </div>
      </div>
    </motion.div>
  );
};