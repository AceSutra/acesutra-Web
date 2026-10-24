import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Link } from 'react-router-dom';
import { Send, CheckCircle2, AlertCircle, Info, Sparkles } from 'lucide-react';
import { contactFormSchema, type ContactFormValues } from '../../lib/validation';
import { submitContactForm, type SubmissionResult } from '../../lib/contactService';
import { Button } from '../ui/Button';

export const ContactForm: React.FC = () => {
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionResult | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: '',
      businessEmail: '',
      companyName: '',
      phone: '',
      serviceOfInterest: '',
      budget: '',
      timeline: '',
      projectDescription: '',
      privacyConsent: false,
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    setSubmissionStatus(null);

    try {
      const result = await submitContactForm(values);
      setSubmissionStatus(result);
      if (result.success && result.status === 'sent') {
        reset();
      }
    } catch {
      setSubmissionStatus({
        success: false,
        status: 'error',
        message: 'An unexpected error occurred. Please contact us via email at contact@acesutra.com',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-charcoal-800/90 border border-subtleBorder rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-brand-cyan/10 blur-3xl rounded-full pointer-events-none" />

      {submissionStatus && (
        <div
          role="status"
          aria-live="polite"
          className={`mb-8 p-5 rounded-2xl border transition-all ${
            submissionStatus.status === 'sent'
              ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-200'
              : submissionStatus.status === 'unconfigured'
              ? 'bg-amber-950/40 border-amber-500/40 text-amber-200'
              : 'bg-rose-950/40 border-rose-500/40 text-rose-200'
          }`}
        >
          <div className="flex items-start gap-3.5">
            {submissionStatus.status === 'sent' ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 flex-shrink-0" />
            ) : submissionStatus.status === 'unconfigured' ? (
              <Info className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" />
            )}

            <div className="text-sm leading-relaxed">
              <p className="font-semibold mb-1">
                {submissionStatus.status === 'sent'
                  ? 'Inquiry Dispatched Successfully'
                  : submissionStatus.status === 'unconfigured'
                  ? 'Form Validated Successfully (Preview Environment)'
                  : 'Submission Notice'}
              </p>
              <p className="opacity-90">{submissionStatus.message}</p>

              {submissionStatus.status === 'unconfigured' && (
                <div className="mt-3 pt-3 border-t border-amber-500/20 text-xs text-amber-300">
                  Tip: Set <code className="bg-charcoal-900 px-1.5 py-0.5 rounded text-white font-mono">VITE_CONTACT_API_ENDPOINT</code> in your deployment environment variables or <code className="bg-charcoal-900 px-1.5 py-0.5 rounded text-white font-mono">.env</code> to deliver messages directly to your CRM or inbox.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative" noValidate>
        {/* Full Name & Business Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold uppercase tracking-wider text-mutedGray mb-2">
              Full Name <span className="text-cyan-400">*</span>
            </label>
            <input
              id="fullName"
              type="text"
              autoComplete="name"
              placeholder="e.g. Alex Morgan"
              {...register('fullName')}
              className={`w-full px-4 py-3 rounded-xl bg-charcoal-900 border text-white placeholder-mutedGray/50 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-colors text-sm ${
                errors.fullName ? 'border-rose-500 focus:ring-rose-500' : 'border-subtleBorder focus:border-brand-cyan'
              }`}
              aria-invalid={errors.fullName ? 'true' : 'false'}
              aria-describedby={errors.fullName ? 'fullName-error' : undefined}
            />
            {errors.fullName && (
              <p id="fullName-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.fullName.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="businessEmail" className="block text-xs font-semibold uppercase tracking-wider text-mutedGray mb-2">
              Business Email <span className="text-cyan-400">*</span>
            </label>
            <input
              id="businessEmail"
              type="email"
              autoComplete="email"
              placeholder="alex@company.com"
              {...register('businessEmail')}
              className={`w-full px-4 py-3 rounded-xl bg-charcoal-900 border text-white placeholder-mutedGray/50 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-colors text-sm ${
                errors.businessEmail ? 'border-rose-500 focus:ring-rose-500' : 'border-subtleBorder focus:border-brand-cyan'
              }`}
              aria-invalid={errors.businessEmail ? 'true' : 'false'}
              aria-describedby={errors.businessEmail ? 'email-error' : undefined}
            />
            {errors.businessEmail && (
              <p id="email-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
                <AlertCircle className="w-3.5 h-3.5" />
                {errors.businessEmail.message}
              </p>
            )}
          </div>
        </div>

        {/* Company Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="companyName" className="block text-xs font-semibold uppercase tracking-wider text-mutedGray mb-2">
              Company / Organization <span className="text-mutedGray/60 font-normal lowercase">(optional)</span>
            </label>
            <input
              id="companyName"
              type="text"
              autoComplete="organization"
              placeholder="e.g. Acme Corp"
              {...register('companyName')}
              className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-subtleBorder text-white placeholder-mutedGray/50 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-blue transition-colors text-sm"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-semibold uppercase tracking-wider text-mutedGray mb-2">
              Phone Number <span className="text-mutedGray/60 font-normal lowercase">(optional)</span>
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="+1 (555) 000-0000"
              {...register('phone')}
              className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-subtleBorder text-white placeholder-mutedGray/50 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-blue transition-colors text-sm"
            />
          </div>
        </div>

        {/* Service of Interest */}
        <div>
          <label htmlFor="serviceOfInterest" className="block text-xs font-semibold uppercase tracking-wider text-mutedGray mb-2">
            Primary Area of Need <span className="text-cyan-400">*</span>
          </label>
          <select
            id="serviceOfInterest"
            {...register('serviceOfInterest')}
            className={`w-full px-4 py-3 rounded-xl bg-charcoal-900 border text-white focus:outline-none focus:ring-2 focus:ring-brand-blue transition-colors text-sm ${
              errors.serviceOfInterest ? 'border-rose-500 focus:ring-rose-500' : 'border-subtleBorder focus:border-brand-cyan'
            }`}
            aria-invalid={errors.serviceOfInterest ? 'true' : 'false'}
            aria-describedby={errors.serviceOfInterest ? 'service-error' : undefined}
          >
            <option value="">Select a core service area...</option>
            <option value="Digital Marketing & Growth">Digital Marketing & Growth (SEO, Ads, Campaigns)</option>
            <option value="Website Design & Development">Website Design & Development (Corporate, Web, E-Commerce)</option>
            <option value="Branding & Creative Identity">Branding & Creative Identity (Logo, Brand Systems)</option>
            <option value="Custom Software & Web Apps">Custom Software & Web Apps (SaaS, Portals, APIs)</option>
            <option value="Mobile App Development">Mobile App Development (iOS & Android)</option>
            <option value="AI & Business Process Automation">AI & Business Automation (Workflows, LLM Pipelines)</option>
            <option value="Cloud Infrastructure & DevOps">Cloud Infrastructure & DevOps (Hosting, Maintenance)</option>
            <option value="Integrated Multi-Disciplinary">Integrated Strategy (Marketing + Web + Tech)</option>
          </select>
          {errors.serviceOfInterest && (
            <p id="service-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.serviceOfInterest.message}
            </p>
          )}
        </div>

        {/* Budget & Timeline */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label htmlFor="budget" className="block text-xs font-semibold uppercase tracking-wider text-mutedGray mb-2">
              Estimated Budget <span className="text-mutedGray/60 font-normal lowercase">(optional)</span>
            </label>
            <select
              id="budget"
              {...register('budget')}
              className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-subtleBorder text-white focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-blue transition-colors text-sm"
            >
              <option value="">Select budget range...</option>
              <option value="Under $5,000">Under $5,000</option>
              <option value="$5,000 - $15,000">$5,000 – $15,000</option>
              <option value="$15,000 - $35,000">$15,000 – $35,000</option>
              <option value="$35,000 - $75,000">$35,000 – $75,000</option>
              <option value="$75,000+">$75,000+</option>
              <option value="Undetermined">To be determined</option>
            </select>
          </div>

          <div>
            <label htmlFor="timeline" className="block text-xs font-semibold uppercase tracking-wider text-mutedGray mb-2">
              Desired Timeline <span className="text-mutedGray/60 font-normal lowercase">(optional)</span>
            </label>
            <select
              id="timeline"
              {...register('timeline')}
              className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-subtleBorder text-white focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-blue transition-colors text-sm"
            >
              <option value="">Select expected timeline...</option>
              <option value="Immediate (< 1 month)">Immediate (within 1 month)</option>
              <option value="1 - 3 months">1 – 3 months</option>
              <option value="3 - 6 months">3 – 6 months</option>
              <option value="Flexible">Flexible / exploratory</option>
            </select>
          </div>
        </div>

        {/* Project Description */}
        <div>
          <label htmlFor="projectDescription" className="block text-xs font-semibold uppercase tracking-wider text-mutedGray mb-2">
            Project Overview & Goals <span className="text-cyan-400">*</span>
          </label>
          <textarea
            id="projectDescription"
            rows={4}
            placeholder="Tell us about what you want to achieve, your primary business challenges, and any specific requirements or references..."
            {...register('projectDescription')}
            className={`w-full px-4 py-3 rounded-xl bg-charcoal-900 border text-white placeholder-mutedGray/50 focus:outline-none focus:ring-2 focus:ring-brand-blue transition-colors text-sm resize-y min-h-[120px] ${
              errors.projectDescription ? 'border-rose-500 focus:ring-rose-500' : 'border-subtleBorder focus:border-brand-cyan'
            }`}
            aria-invalid={errors.projectDescription ? 'true' : 'false'}
            aria-describedby={errors.projectDescription ? 'description-error' : undefined}
          />
          {errors.projectDescription && (
            <p id="description-error" className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.projectDescription.message}
            </p>
          )}
        </div>

        {/* Privacy Policy Consent */}
        <div>
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              {...register('privacyConsent')}
              className="mt-1 w-4 h-4 rounded border-subtleBorder bg-charcoal-900 text-cyan-400 focus:ring-brand-blue focus:ring-offset-charcoal-900"
            />
            <span className="text-xs text-mutedGray leading-relaxed group-hover:text-warmWhite transition-colors">
              I agree to the processing of this information in accordance with AceSutra's{' '}
              <Link to="/privacy-policy" className="text-cyan-400 underline hover:text-sky-300" target="_blank">
                Privacy Policy
              </Link>
              . We never sell or distribute your data.
            </span>
          </label>
          {errors.privacyConsent && (
            <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1">
              <AlertCircle className="w-3.5 h-3.5" />
              {errors.privacyConsent.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            isLoading={isSubmitting}
            className="w-full sm:w-auto px-8"
            rightIcon={<Send className="w-4 h-4" />}
          >
            Submit Project Inquiry
          </Button>
          <p className="text-xs text-mutedGray/70 mt-3 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Typical discovery response within 24 business hours. No spam, guaranteed.
          </p>
        </div>
      </form>
    </div>
  );
};
