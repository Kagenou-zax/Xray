import React, { useState, useRef } from 'react';
import { usePhotos } from '../context/PhotoContext';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  productId?: string;
  className?: string;
  priority?: boolean;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  productId,
  className = '',
  priority = false,
  ...props
}) => {
  const { getPhoto, uploadPhoto } = usePhotos();
  const [hasError, setHasError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Read current active photo from PhotoContext or fallback to src
  const activeSrc = productId ? getPhoto(productId, src) : src;

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    try {
      const serverFilename = src.startsWith('/') ? src.slice(1) : src;
      const targetId = productId || alt.toLowerCase().replace(/\s+/g, '-');
      await uploadPhoto(targetId, file, serverFilename);
      setHasError(false);
    } catch (err) {
      console.error('Photo upload error:', err);
    }
  };

  const handleHolderClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div
      onClick={handleHolderClick}
      className={`relative overflow-hidden cursor-pointer ${className}`}
      role="button"
      tabIndex={0}
      title="Click if you ever want to update this photo"
    >
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFileSelect}
      />

      {/* Main Image or fallback */}
      {hasError || !activeSrc ? (
        <div className="w-full h-full bg-[#e8dfd5]/40 border border-[#2a1a12]/15 flex items-center justify-center p-3 text-center" />
      ) : (
        <img
          src={activeSrc}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => setHasError(true)}
          className="w-full h-full object-cover object-center"
          {...props}
        />
      )}
    </div>
  );
};
