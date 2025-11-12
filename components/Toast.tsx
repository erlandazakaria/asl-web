'use client';

import { useEffect } from 'react';
import { useToast } from '@/contexts/Toast';

export default function Toast() {
  const { toast, closeToast } = useToast();

  useEffect(() => {
    if (toast.isOpen) {
      const timer = setTimeout(() => {
        closeToast();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast.isOpen, closeToast]);

  if (!toast.isOpen) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-slide-up">
      <div className="bg-white rounded-lg shadow-lg border-l-4 border-asl-blue p-4 min-w-[300px] max-w-md">
        <div className="flex items-start">
          <div className="flex-1">
            <p className="text-gray-800 font-medium">{toast.message}</p>
          </div>
          <button
            onClick={closeToast}
            className="ml-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
