import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { AceSutraLogo } from './AceSutraLogo';
import { Button } from '../ui/Button';
import { navigationLinks } from '../../data/navigation';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({ isOpen, onClose }) => {
  const [expandedServices, setExpandedServices] = useState(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm lg:hidden"
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 z-50 w-full max-w-sm bg-charcoal-900 border-l border-subtleBorder shadow-2xl p-6 flex flex-col justify-between overflow-y-auto lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile Navigation Menu"
          >
            <div>
              {/* Top Bar */}
              <div className="flex items-center justify-between pb-6 border-b border-subtleBorder">
                <AceSutraLogo size="sm" />
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close menu"
                  className="p-2 rounded-lg text-mutedGray hover:text-white bg-charcoal-800 border border-subtleBorder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="mt-6 space-y-1">
                {navigationLinks.map((link) => {
                  if (link.children) {
                    return (
                      <div key={link.label} className="py-2">
                        <button
                          type="button"
                          onClick={() => setExpandedServices(!expandedServices)}
                          className="w-full flex items-center justify-between py-2 text-base font-semibold text-white hover:text-cyan-400 transition-colors"
                          aria-expanded={expandedServices}
                        >
                          <span>{link.label}</span>
                          <ChevronDown
                            className={`w-4 h-4 text-mutedGray transition-transform duration-200 ${
                              expandedServices ? 'rotate-180 text-cyan-400' : ''
                            }`}
                          />
                        </button>

                        <AnimatePresence>
                          {expandedServices && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden pl-3 mt-1 space-y-1 border-l-2 border-brand-cyan/40"
                            >
                              {link.children.map((child) => (
                                <NavLink
                                  key={child.href}
                                  to={child.href}
                                  onClick={onClose}
                                  className={({ isActive }) =>
                                    `block py-2 text-sm transition-colors ${
                                      isActive
                                        ? 'text-cyan-400 font-semibold'
                                        : 'text-mutedGray hover:text-white'
                                    }`
                                  }
                                >
                                  {child.label}
                                </NavLink>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <NavLink
                      key={link.href}
                      to={link.href}
                      onClick={onClose}
                      className={({ isActive }) =>
                        `block py-3 text-base font-medium transition-colors ${
                          isActive
                            ? 'text-cyan-400 font-semibold'
                            : 'text-warmWhite/90 hover:text-white'
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-6 border-t border-subtleBorder space-y-4">
              <Button
                to="/contact"
                variant="primary"
                size="lg"
                className="w-full justify-center"
                onClick={onClose}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Let's Talk
              </Button>

              <div className="text-center text-xs text-mutedGray">
                <span>Where Strategy Meets Creativity & Tech.</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
