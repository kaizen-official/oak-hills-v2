"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { IconX } from "@tabler/icons-react";
import EnquiryForm from "./enquiry-form";
import SuccessModal from "./success-modal";
import { ease } from "@/components/motion/reveal";

export default function EnquiryModal({ open, onClose, intent = "visit" }) {
  const [thanks, setThanks] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open || thanks ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open, thanks]);

  const closeAll = () => {
    setThanks(false);
    onClose();
  };

  if (thanks) {
    return <SuccessModal open onClose={closeAll} />;
  }

  return (
    <AnimatePresence>
      {open ? <ModalPanel onClose={onClose} intent={intent} onSuccess={() => { onClose(); setThanks(true); }} /> : null}
    </AnimatePresence>
  );
}

function ModalPanel({ onClose, intent, onSuccess }) {
  return (
    <motion.div
      className="fixed inset-0 z-50 bg-oak-deep/70 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease }}
    >
      <motion.div
        className="bg-paper w-full max-w-md p-6 relative"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{ duration: 0.55, ease }}
      >
        <button type="button" onClick={onClose} title="Close" className="absolute top-4 right-4 text-stone hover:text-oak-deep">
          <IconX size={22} />
        </button>
        <h2 className="text-2xl text-oak-deep mb-1">Talk to Oak Hills</h2>
        <p className="text-stone mb-6">One form. The desk will call you back.</p>
        <EnquiryForm defaultIntent={intent} compact onSuccess={onSuccess} />
      </motion.div>
    </motion.div>
  );
}
