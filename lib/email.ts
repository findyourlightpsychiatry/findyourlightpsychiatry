import { Resend } from 'resend';

// Initialize Resend client
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

interface ContactFormData {
  name: string;
  dob: string;
  email: string;
  phone?: string;
  insurance?: string;
  appointmentType: string;
  contactMethod: string;
  message?: string;
  submittedAt: string;
}

/**
 * Format email template for practice notification
 */
function formatPracticeEmail(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #059669; color: white; padding: 20px; border-radius: 8px 8px 0 0; }
          .content { background-color: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #059669; }
          .value { margin-top: 5px; padding: 8px; background-color: white; border-radius: 4px; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>New Appointment Request</h2>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${escapeHtml(data.name)}</div>
            </div>
            <div class="field">
              <div class="label">Date of Birth:</div>
              <div class="value">${escapeHtml(data.dob)}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value">${escapeHtml(data.email)}</div>
            </div>
            ${data.phone ? `
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${escapeHtml(data.phone)}</div>
            </div>
            ` : ''}
            ${data.insurance ? `
            <div class="field">
              <div class="label">Insurance:</div>
              <div class="value">${escapeHtml(data.insurance)}</div>
            </div>
            ` : ''}
            <div class="field">
              <div class="label">Appointment Type:</div>
              <div class="value">${escapeHtml(data.appointmentType)}</div>
            </div>
            <div class="field">
              <div class="label">Preferred Contact Method:</div>
              <div class="value">${escapeHtml(data.contactMethod)}</div>
            </div>
            ${data.message ? `
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${escapeHtml(data.message)}</div>
            </div>
            ` : ''}
            <div class="footer">
              <p>Submitted at: ${new Date(data.submittedAt).toLocaleString()}</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

/**
 * Format confirmation email for patient
 */
function formatConfirmationEmail(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background-color: #059669; color: white; padding: 20px; border-radius: 8px 8px 0 0; text-align: center; }
          .content { background-color: #f9fafb; padding: 20px; border-radius: 0 0 8px 8px; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #6b7280; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2>Find Your Light Psychiatry PLLC</h2>
          </div>
          <div class="content">
            <p>Dear ${escapeHtml(data.name)},</p>
            <p>Thank you for contacting Find Your Light Psychiatry. We have received your appointment request and will review it shortly.</p>
            <p>Our team will contact you via ${escapeHtml(data.contactMethod)} within 1-2 business days to schedule your appointment.</p>
            <p>If you have any urgent questions, please call us directly.</p>
            <p>We look forward to helping you on your journey to wellness.</p>
            <p>Best regards,<br>The Find Your Light Psychiatry Team</p>
          </div>
          <div class="footer">
            <p>This is an automated confirmation. Please do not reply to this email.</p>
          </div>
        </div>
      </body>
    </html>
  `;
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

/**
 * Get the from email address from environment variables
 * Supports both RESEND_FROM (combined format: "Name <email>") and separate RESEND_FROM_EMAIL/RESEND_FROM_NAME
 */
function getFromEmail(): string {
  // First try RESEND_FROM (combined format)
  if (process.env.RESEND_FROM) {
    return process.env.RESEND_FROM;
  }
  
  // Fall back to separate variables
  const fromEmail = process.env.RESEND_FROM_EMAIL || 'noreply@findyourlightpsychiatry.org';
  const fromName = process.env.RESEND_FROM_NAME || 'Find Your Light Psychiatry';
  return `${fromName} <${fromEmail}>`;
}

/**
 * Get the contact email address where practice notifications should be sent
 */
function getContactEmail(): string {
  const contactEmail = process.env.CONTACT_EMAIL;
  if (!contactEmail) {
    throw new Error('CONTACT_EMAIL environment variable is required. Please set it in your .env.local file.');
  }
  return contactEmail;
}

/**
 * Send email to practice about new contact form submission
 */
export async function sendPracticeEmail(data: ContactFormData): Promise<boolean> {
  if (!resend) {
    throw new Error('Resend API key not configured. Please set RESEND_API_KEY environment variable.');
  }

  const practiceEmail = getContactEmail();
  const fromEmail = getFromEmail();

  try {
    const result = await resend.emails.send({
      from: fromEmail,
      to: practiceEmail,
      replyTo: data.email,
      subject: `New Appointment Request from ${escapeHtml(data.name)}`,
      html: formatPracticeEmail(data),
    });

    if (result.error) {
      throw new Error(result.error.message || 'Failed to send email');
    }

    return true;
  } catch (error) {
    throw error;
  }
}

/**
 * Send confirmation email to patient
 */
export async function sendConfirmationEmail(data: ContactFormData): Promise<boolean> {
  if (!resend) {
    // Don't throw error for confirmation email - it's optional
    return false;
  }

  const fromEmail = getFromEmail();

  try {
    const result = await resend.emails.send({
      from: fromEmail,
      to: data.email,
      subject: 'Appointment Request Received - Find Your Light Psychiatry',
      html: formatConfirmationEmail(data),
    });

    if (result.error) {
      // Log but don't throw - confirmation email is optional
      return false;
    }

    return true;
  } catch {
    // Log but don't throw - confirmation email is optional
    return false;
  }
}

