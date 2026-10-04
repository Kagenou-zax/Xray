import React from 'react';
import { usePhotos } from '../context/PhotoContext';
import { BUSINESS_INFO } from '../data/footwear';
import { X, Upload, CheckCircle2, RotateCcw } from 'lucide-react';

export const PhotoManagerModal: React.FC = () => {
  const { isManagerOpen, setIsManagerOpen, getPhoto, uploadPhoto, resetPhoto } = usePhotos();

  if (!isManagerOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-[#fcf9f5] border border-[#2a1a12]/20 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#2a1a12]/10 bg-white sticky top-0 z-10">
          <div>
            <h2 className="text-xl font-serif font-bold text-[#2a1a12]">
              Input Your Real Footwear Photos
            </h2>
            <p className="text-xs text-[#2a1a12]/70 mt-0.5">
              Click any box below to choose your camera photo. It will appear across the entire site with zero filters.
            </p>
          </div>
          <button
            onClick={() => setIsManagerOpen(false)}
            className="p-2 text-[#2a1a12]/60 hover:text-[#2a1a12] hover:bg-[#e8dfd5]/40 rounded-full transition-colors cursor-pointer"
            aria-label="Close photo manager"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 4 Photo Upload Slots */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {BUSINESS_INFO.products.map((product, idx) => {
            const currentPhoto = getPhoto(product.id, product.image);
            const serverFilename = product.image.startsWith('/')
              ? product.image.slice(1)
              : product.image;

            return (
              <div
                key={product.id}
                className="bg-white border border-[#2a1a12]/15 rounded-xl p-4 flex flex-col justify-between hover:border-[#e8742a] transition-all shadow-xs"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[11px] font-bold text-[#e8742a] uppercase tracking-wider">
                    Slot {idx + 1}
                  </span>
                  <span className="text-xs font-semibold text-[#2a1a12]">
                    {product.name}
                  </span>
                </div>

                {/* Upload click box */}
                <label className="relative aspect-4/3 w-full bg-[#f6efe6] border-2 border-dashed border-[#2a1a12]/20 hover:border-[#e8742a] rounded-lg overflow-hidden flex flex-col items-center justify-center cursor-pointer group transition-all">
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        uploadPhoto(product.id, file, serverFilename);
                      }
                    }}
                  />

                  {currentPhoto ? (
                    <>
                      <img
                        src={currentPhoto}
                        alt={product.name}
                        className="w-full h-full object-cover object-center group-hover:scale-102 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-2 text-center">
                        <Upload className="w-6 h-6 mb-1 text-white" />
                        <span className="text-xs font-medium">Click to choose another photo</span>
                      </div>
                      <div className="absolute top-2 right-2 bg-emerald-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shadow-sm">
                        <CheckCircle2 className="w-3 h-3" /> Photo Attached
                      </div>
                    </>
                  ) : (
                    <div className="text-center p-4">
                      <div className="w-10 h-10 rounded-full bg-[#e8dfd5] text-[#2a1a12]/70 flex items-center justify-center mx-auto mb-2 group-hover:bg-[#e8742a] group-hover:text-white transition-colors">
                        <Upload className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-bold text-[#2a1a12] block">
                        Click to select photo
                      </span>
                      <span className="text-[10px] text-[#2a1a12]/60 mt-0.5 block">
                        Choose photo from your phone or PC
                      </span>
                    </div>
                  )}
                </label>

                {/* Action buttons */}
                <div className="mt-3 flex items-center justify-between text-xs pt-2 border-t border-[#2a1a12]/10">
                  <label className="text-[#e8742a] hover:text-[#d0621d] font-semibold cursor-pointer flex items-center gap-1">
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          uploadPhoto(product.id, file, serverFilename);
                        }
                      }}
                    />
                    <Upload className="w-3.5 h-3.5" />
                    <span>Upload photo</span>
                  </label>

                  <button
                    onClick={() => resetPhoto(product.id)}
                    className="text-[#2a1a12]/50 hover:text-red-600 transition-colors flex items-center gap-1 cursor-pointer"
                    title="Reset photo"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Reset</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#f6efe6] border-t border-[#2a1a12]/10 flex items-center justify-between sticky bottom-0 z-10">
          <p className="text-xs text-[#2a1a12]/70">
            Photos are saved directly to the app server without filters or compression.
          </p>
          <button
            onClick={() => setIsManagerOpen(false)}
            className="px-5 py-2 bg-[#2a1a12] text-white hover:bg-[#e8742a] font-medium text-xs rounded-full transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
