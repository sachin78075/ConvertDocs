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
          ? 'border-primary bg-cyan-50 scale-[1.02]'
          : 'border-slate-200 hover:border-primary bg-white hover:bg-slate-50'
      }`}
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      data-testid={`dropzone-${toolName?.toLowerCase().replace(/ /g, '-') || 'default'}`}
    >
      <input {...getInputProps()} data-testid="file-input" />
      
      <div className="p-12 flex flex-col items-center justify-center gap-6 min-h-[280px]">
        <motion.div
          className={`p-6 rounded-2xl transition-colors duration-300 ${
            isDragActive ? 'bg-primary/10' : 'bg-slate-100 group-hover:bg-primary/5'
          }`}
          animate={isDragActive ? { scale: [1, 1.1, 1] } : {}}
          transition={{ duration: 0.3 }}
        >
          {isDragActive ? (
            <FileIcon className="w-12 h-12 text-primary" strokeWidth={1.5} />
          ) : (
            <Upload className="w-12 h-12 text-slate-400 group-hover:text-primary transition-colors" strokeWidth={1.5} />
          )}
        </motion.div>

        <div className="text-center space-y-2">
          <p className="text-lg font-semibold text-slate-900">
            {isDragActive ? 'Drop your file here' : 'Drag & drop your file here'}
          </p>
          <p className="text-sm text-slate-500">or click to browse</p>
        </div>

        {maxFiles > 1 && (
          <p className="text-xs text-slate-400">You can upload up to {maxFiles} files</p>
        )}
      </div>
    </motion.div>
  );
};