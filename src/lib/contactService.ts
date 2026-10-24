import type { ContactFormValues } from './validation';

export interface SubmissionResult {
  success: boolean;
  status: 'sent' | 'unconfigured' | 'error';
  message: string;
}

/**
 * Handles contact form transmission.
 * Connects to a configured backend, CRM, or email provider (e.g., Formspree, Resend, Zapier, custom API).
 * By default, safely detects whether VITE_CONTACT_API_ENDPOINT is defined in the environment.
 */
export async function submitContactForm(data: ContactFormValues): Promise<SubmissionResult> {
  const endpoint = import.meta.env.VITE_CONTACT_API_ENDPOINT;

  if (!endpoint) {
    // Honest status reporting: Form validated, but endpoint not wired up yet
    return {
      success: true,
      status: 'unconfigured',
      message: 'Your inquiry has passed all validation checks! In this preview deployment, VITE_CONTACT_API_ENDPOINT is not yet configured, so data was not transmitted to a backend. You can connect Formspree, Resend, or your custom API in .env to receive live inquiries.'
    };
  }

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        ...data,
        submittedAt: new Date().toISOString(),
        source: 'AceSutra Web Contact Form'
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      return {
        success: false,
        status: 'error',
        message: `Submission failed (${response.status}): ${errorText || 'Please try again or email us directly.'}`
      };
    }

    return {
      success: true,
      status: 'sent',
      message: 'Thank you! Your message has been received. Our team will review your project details and reach out within 1 business day.'
    };
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Network error occurred.';
    return {
      success: false,
      status: 'error',
      message: `Could not send message: ${message}. Please check your connection or contact us directly via email.`
    };
  }
}
