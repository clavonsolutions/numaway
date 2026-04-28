import config from "../../content/legal.config.json";

export const NAP = {
  businessName: config.canonical_business_name,
  email: config.canonical_email,
  phone: config.canonical_phone,
  whatsapp: config.canonical_whatsapp,
  whatsappNumberOnly: config.canonical_whatsapp_number_only,
  whatsappUrl: `https://wa.me/${config.canonical_whatsapp_number_only}`,
  mailtoUrl: `mailto:${config.canonical_email}`,
  address: config.canonical_postal_address,
  addressOneLiner: `${config.canonical_postal_address.street}, ${config.canonical_postal_address.city}, ${config.canonical_postal_address.postal_code} ${config.canonical_postal_address.lga}, ${config.canonical_postal_address.country}`,
  effectiveDate: config.effective_date,
  lastReviewed: config.last_reviewed_date,
  nextReview: config.next_review_due_date,
  jurisdiction: config.jurisdiction,
  domain: config.domain,
  canonicalUrl: config.canonical_url,
  complaintResolutionDays: config.complaint_resolution_timeline_days,
  refundCoolingOffDays: config.refund_cooling_off_days,
} as const;
