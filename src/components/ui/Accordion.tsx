import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  className = '',
}) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={`space-y-3 ${className}`}>
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        const headingId = `faq-heading-${item.id}`;
        const contentId = `faq-content-${item.id}`;

        return (
          <div
            key={item.id}
            className={`border rounded-xl transition-colors duration-200 ${
              isOpen
                ? 'bg-charcoal-800/80 border-brand-orange/40 shadow-sm'
                : 'bg-charcoal-800/40 border-subtleBorder hover:border-subtleBorderHover'
            }`}
          >
            <button
              type="button"
              id={headingId}
              aria-expanded={isOpen}
              aria-controls={contentId}
              onClick={() => toggle(item.id)}
              className="w-full py-4 sm:py-5 px-5 sm:px-6 flex items-center justify-between text-left group gap-4 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded-xl"
            >
              <span className="font-semibold text-base sm:text-lg text-white group-hover:text-brand-orange transition-colors duration-200">
                {item.question}
              </span>
              <span
                className={`p-1.5 rounded-full bg-charcoal-700/60 border border-subtleBorder text-mutedGray group-hover:text-white transition-transform duration-200 flex-shrink-0 ${
                  isOpen ? 'rotate-180 text-brand-orange' : ''
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  id={contentId}
                  role="region"
                  aria-labelledby={headingId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-mutedGray leading-relaxed border-t border-subtleBorder/50 mt-1">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};
