import { z } from 'zod';

export const contactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: 'Please enter your full name (at least 2 characters).' })
    .max(100, { message: 'Name must be under 100 characters.' }),
  businessEmail: z
    .string()
    .email({ message: 'Please enter a valid email address.' }),
  companyName: z
    .string()
    .max(100, { message: 'Company name must be under 100 characters.' })
    .optional(),
  phone: z
    .string()
    .max(25, { message: 'Phone number is too long.' })
    .optional(),
  serviceOfInterest: z
    .string()
    .min(1, { message: 'Please select the primary service of interest.' }),
  budget: z
    .string()
    .optional(),
  timeline: z
    .string()
    .optional(),
  projectDescription: z
    .string()
    .min(15, { message: 'Please provide a brief description of your project (at least 15 characters).' })
    .max(2000, { message: 'Description exceeds maximum limit of 2,000 characters.' }),
  privacyConsent: z
    .boolean()
    .refine((val) => val === true, {
      message: 'You must agree to the privacy policy to submit.',
    }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
