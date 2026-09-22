"use client";

import { AnimatePresence, motion } from "motion/react";
import { IconCheck, IconX } from "@tabler/icons-react";
import { ease } from "@/components/motion/reveal";

export default function SuccessModal({ open, onClose }) {
  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-50 bg-oak-deep/70 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease }}
        >
          <motion.div
            className="bg-paper w-full max-w-md p-8 text-center relative"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.55, ease }}
          >
            <button type="button" onClick={onClose} title="Close" className="absolute top-4 right-4 text-stone hover:text-oak-deep">
              <IconX size={22} />
            </button>
            <div className="w-16 h-16 mx-auto mb-5 border border-oak flex items-center justify-center">
              <IconCheck size={32} className="text-oak" />
            </div>
            <h2 className="text-3xl text-oak-deep mb-3">We have your note.</h2>
            <p className="text-stone leading-relaxed">
              The sales desk will call you back. If the matter is urgent, use Call or WhatsApp from the same page.
            </p>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
