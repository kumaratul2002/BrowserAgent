import "dotenv/config";

export const env = {
    linkedinEmail: process.env.LINKEDIN_EMAIL,
    linkedinPassword: process.env.LINKEDIN_PASSWORD,
    linkedinNote: process.env.LINKEDIN_NOTE,
    gmailEmail: process.env.GMAIL_EMAIL,
    gmailPassword: process.env.GMAIL_PASSWORD,
    emailRecipient: process.env.EMAIL_RECIPIENT,
    emailSubject: process.env.EMAIL_SUBJECT,
    emailMessage: process.env.EMAIL_MESSAGE,
    
    // Portfolio Contact Form credentials
    contactName: process.env.CONTACT_NAME || "John Doe",
    contactEmail: process.env.CONTACT_EMAIL || "john.doe@example.com", 
    contactMessage: process.env.CONTACT_MESSAGE || "Hi Atul! I came across your portfolio and I'm impressed with your work. I'd love to connect and discuss potential collaboration opportunities. Best regards!"
};
