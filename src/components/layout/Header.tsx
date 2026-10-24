import React, { useState, useRef, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, ArrowRight, TrendingUp, Globe, Palette, Code, Smartphone, Cpu, Server } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from './Container';
import { AceSutraLogo } from './AceSutraLogo';
import { Button } from '../ui/Button';
import { MobileNavigation } from './MobileNavigation';
import { navigationLinks } from '../../data/navigation';
import { useScrollPosition } from '../../hooks/useScrollPosition';

const iconMap: Record<string, React.ReactNode> = {
  '/services/digital-marketing': <TrendingUp className="w-4 h-4 text-cyan-400" />,
  '/services/web-development': <Globe className="w-4 h-4 text-cyan-400" />,
  '/services/branding-design': <Palette className="w-4 h-4 text-cyan-400" />,
  '/services/software-development': <Code className="w-4 h-4 text-cyan-400" />,
  '/services/mobile-app-development': <Smartphone className="w-4 h-4 text-cyan-400" />,
  '/services/ai-automation': <Cpu className="w-4 h-4 text-cyan-400" />,
  '/services/cloud-solutions': <Server className="w-4 h-4 text-cyan-400" />,
};

export const Header: React.FC = () => {
  const { isScrolled } = useScrollPosition();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [location.pathname]);

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesDropdownOpen(false);
    }, 150);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-charcoal-900/90 backdrop-blur-md border-b border-subtleBorder py-3.5 shadow-lg shadow-black/20'
            : 'bg-transparent py-5 border-b border-transparent'
        }`}
      >
        <Container>
          <div className="flex items-center justify-between">
            {/* AceSutra Logo */}
            <AceSutraLogo size="md" />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigationLinks.map((link) => {
                if (link.children) {
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button
                        type="button"
                        onClick={() => setServicesDropdownOpen((prev) => !prev)}
                        onFocus={handleMouseEnter}
                        aria-expanded={servicesDropdownOpen}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                          location.pathname.startsWith('/services') || servicesDropdownOpen
                            ? 'text-cyan-400 bg-charcoal-800/50'
                            : 'text-warmWhite/90 hover:text-white hover:bg-charcoal-800/40'
                        }`}
                      >
                        <span>{link.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${
                            servicesDropdownOpen ? 'rotate-180 text-cyan-400' : 'text-mutedGray'
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {servicesDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.98 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 mt-1 w-[460px] p-3 rounded-2xl bg-charcoal-800/98 backdrop-blur-xl border border-subtleBorder shadow-2xl shadow-black/60 z-50"
                          >
                            <div className="px-3 py-2 border-b border-subtleBorder/60 mb-2 flex items-center justify-between">
                              <span className="text-xs uppercase font-bold tracking-wider text-mutedGray">
                                Core Capabilities
                              </span>
                              <NavLink
                                to="/#services"
                                onClick={() => setServicesDropdownOpen(false)}
                                className="text-xs text-cyan-400 hover:underline font-medium"
                              >
                                View All &rarr;
                              </NavLink>
                            </div>

                            <div className="grid grid-cols-1 gap-1">
                              {link.children.map((child) => (
                                <NavLink
                                  key={child.href}
                                  to={child.href}
                                  onClick={() => setServicesDropdownOpen(false)}
                                  className={({ isActive }) =>
                                    `group flex items-start gap-3 p-2.5 rounded-xl transition-all duration-150 ${
                                      isActive
                                        ? 'bg-charcoal-700/80 border border-brand-cyan/30'
                                        : 'hover:bg-charcoal-700/60 border border-transparent'
                                    }`
                                  }
                                >
                                  <div className="mt-0.5 p-2 rounded-lg bg-charcoal-900 border border-subtleBorder group-hover:border-brand-cyan/40 transition-colors">
                                    {iconMap[child.href] || <Code className="w-4 h-4 text-cyan-400" />}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                                        {child.label}
                                      </span>
                                      {child.badge && (
                                        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-brand-cyan/10 text-cyan-400 border border-brand-cyan/25">
                                          {child.badge}
                                        </span>
                                      )}
                                    </div>
                                    {child.description && (
                                      <p className="text-xs text-mutedGray mt-0.5 line-clamp-1">
                                        {child.description}
                                      </p>
                                    )}
                                  </div>
                                </NavLink>
                              ))}
                            </div>
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
                    className={({ isActive }) =>
                      `px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? 'text-cyan-400 bg-charcoal-800/40 font-semibold'
                          : 'text-warmWhite/90 hover:text-white hover:bg-charcoal-800/40'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                );
              })}
            </nav>

            {/* Header Right Actions */}
            <div className="flex items-center gap-3">
              <Button
                to="/contact"
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex"
                rightIcon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Let's Talk
              </Button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                aria-label="Open mobile navigation"
                className="lg:hidden p-2 rounded-lg text-mutedGray hover:text-white bg-charcoal-800/80 border border-subtleBorder focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
