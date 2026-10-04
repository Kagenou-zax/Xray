import React, { createContext, useContext, useState, useEffect } from 'react';

interface PhotoContextType {
  getPhoto: (productId: string, defaultSrc?: string) => string;
  uploadPhoto: (productId: string, file: File, serverFilename?: string) => Promise<string>;
  resetPhoto: (productId: string) => void;
  isManagerOpen: boolean;
  setIsManagerOpen: (open: boolean) => void;
  photos: Record<string, string>;
}

const PhotoContext = createContext<PhotoContextType | undefined>(undefined);

const STORAGE_KEY = 'solecrafts_user_photos_v1';

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [photos, setPhotos] = useState<Record<string, string>>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [isManagerOpen, setIsManagerOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(photos));
    } catch (e) {
      console.warn('Could not save photos to localStorage', e);
    }
  }, [photos]);

  const getPhoto = (productId: string, defaultSrc: string = ''): string => {
    return photos[productId] || defaultSrc;
  };

  const uploadPhoto = async (
    productId: string,
    file: File,
    serverFilename?: string
  ): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64Data = reader.result as string;
        // Update state immediately so UI refreshes with zero lag
        setPhotos((prev) => ({
          ...prev,
          [productId]: base64Data,
        }));

        // Send to backend endpoint to also save on server disk
        const filename =
          serverFilename ||
          `${productId}.${file.name.split('.').pop() || 'jpeg'}`;

        try {
          await fetch('/api/upload-photo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ filename, base64Data }),
          });
        } catch (err) {
          console.warn('Backend disk save failed, using client storage', err);
        }

        resolve(base64Data);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const resetPhoto = (productId: string) => {
    setPhotos((prev) => {
      const next = { ...prev };
      delete next[productId];
      return next;
    });
  };

  return (
    <PhotoContext.Provider
      value={{
        getPhoto,
        uploadPhoto,
        resetPhoto,
        isManagerOpen,
        setIsManagerOpen,
        photos,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhotos = () => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('usePhotos must be used within a PhotoProvider');
  }
  return context;
};
