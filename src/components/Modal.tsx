/* eslint-disable react/jsx-no-leaked-render */
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

export default function Modal({ open, onClose, children, title }: ModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal Card */}
          <motion.div
            className="relative bg-white rounded-2xl shadow-xl p-4 w-full max-w-lg z-10 max-h-[90vh] overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
              {title ? (
                <h2 className="text-lg font-semibold">{title}</h2>
              ) : (
                <div></div>
              )}
              <button
                onClick={onClose}
                className="p-2 hover:bg-gray-100 rounded-full border border-[#c28a32]"
              >
                <X size={20} color="black" />
              </button>
            </div>

            {/* Content */}
            <div>{children}</div>

            {/* Custom injected content will render here */}
            {/* The form from ContactUs uses the children prop */}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
