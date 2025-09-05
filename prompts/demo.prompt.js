import { env } from "../configs/env.js";

export const PORTFOLIO_CONTACT_PROMPT = `
Automate visiting Atul Kumar's portfolio website and filling out the "Get in Touch" contact form.

GLOBAL RULES:
- Take a screenshot BEFORE and AFTER every action
- Always call get_advanced_page_structure before interacting with elements
- After each important action, use wait_and_verify
- If an element is not found, take a screenshot, analyze, try alternative selectors, then retry
- Fill contact form with provided details: Name: ${env.contactName}, Email: ${env.contactEmail}, Message: ${env.contactMessage}

STEP 1: Open Atul Kumar's Portfolio Website
- Navigate to https://portfolio-atul-kumar-nitkkr.vercel.app/
- Wait for page to fully load; take screenshot
- Look for page elements to confirm successful loading

STEP 2: Locate the "Get in Touch" Section
- Scroll down to find the "Get in Touch" or "Contact" section
- Take screenshot when contact section is visible
- Call get_advanced_page_structure to analyze available form elements
- Look for contact form fields (name, email, message)

STEP 3: Fill Out Contact Form
- Locate the Name field and fill with: ${env.contactName}
- Locate the Email field and fill with: ${env.contactEmail} (inputType: "email")
- Locate the Message/Description field and fill with: ${env.contactMessage}
- Take screenshot after filling all fields to verify content

STEP 4: Submit the Form
- Locate and click the Submit/Send button
- Wait for form submission confirmation or success message
- Take screenshot of confirmation/success state
- If there's an error, take screenshot and retry once

STEP 5: Robust Selectors for Contact Form (try in this order):

Name field selectors:
- input[name="name"]
- input[placeholder*="name" i]
- input[aria-label*="name" i]
- input[id*="name"]
- input[type="text"]:first-of-type
- [role="textbox"][aria-label*="name" i]

Email field selectors:
- input[type="email"]
- input[name="email"]
- input[placeholder*="email" i]
- input[aria-label*="email" i]
- input[id*="email"]
- [role="textbox"][aria-label*="email" i]

Message/Description field selectors:
- textarea[name="message"]
- textarea[placeholder*="message" i]
- textarea[aria-label*="message" i]
- textarea[id*="message"]
- input[name="description"]
- textarea
- [role="textbox"][aria-label*="message" i]

Submit button selectors:
- button[type="submit"]
- input[type="submit"]
- button[aria-label*="Send" i]
- button[aria-label*="Submit" i]
- [role="button"][aria-label*="Send" i]
- [role="button"][aria-label*="Submit" i]
- .submit-btn
- .send-btn

STEP 6: Error Recovery
- If form fields are not found: scroll up/down to locate contact section
- If form validation errors appear: take screenshot, check required fields
- If submission fails: wait 5 seconds and retry once
- If page doesn't load: refresh once and retry
- Between retries: use wait_and_verify with longer timeout (10+ seconds)

STEP 7: Verification and Completion
- Confirm form submission was successful (look for success message or redirect)
- Take final screenshot showing completed form submission
- If success message appears, capture it in screenshot
- Report success/failure status of form submission

ADDITIONAL INSTRUCTIONS:
- Be patient with page loading as it's a portfolio website
- Look for visual cues like "Contact Me", "Get in Touch", "Reach Out" sections
- The form might be in a modal/popup, so check for overlay elements
- Some portfolio sites have animated elements, wait for animations to complete
- If contact form is not immediately visible, try scrolling or looking for navigation links

ERROR HANDLING:
- If contact section is not found after scrolling: take screenshot and report
- If form fields don't accept input: try clicking first, then typing
- If submission button is disabled: check if all required fields are filled
- Provide detailed error description if form submission fails
`;  
