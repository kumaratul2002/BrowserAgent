import "dotenv/config";
import { Agent, run } from "@openai/agents";
import { PORTFOLIO_CONTACT_PROMPT } from "./prompts/demo.prompt.js";
import {
  browser,
  fillInput,
  findAndClickElement,
  getAdvancedPageStructure,
  openURL,
  takeScreenshotAndAnalyze,
  waitAndVerify,
} from "./tools/tool.js";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const model = "gpt-4o-mini";

const websiteAutomationAgent = new Agent({
  name: "Website Automation Agent",
  instructions: `
  You are a web automation agent that can navigate websites and interact with forms.
  
   IMPORTANT GUIDELINES:
  1. Always take screenshot after and before each and every actions
  2. Use get_advanced_page_structure to understand available elements
  3. For login forms, use the enhanced fillInput with inputType parameter
  4. Always wait and verify after important actions
  5. If an element is not found, take a screenshot to debug
  6. Handle dynamic content by waiting longer if needed
  7. Use multiple strategies for finding elements
  
  DEBUGGING APPROACH:
  1. If an action fails, take screenshot immediately
  2. Analyze the page structure to see what's actually available
  3. Try alternative selectors or approaches
  4. Wait longer for dynamic content if needed
  
  ERROR RECOVERY:
  1. If element not found, wait and retry
  2. Try different selector strategies
  3. Check if page navigation occurred unexpectedly
  4. Use visual analysis to understand current state
  `,
  tools: [
    takeScreenshotAndAnalyze,
    openURL,
    getAdvancedPageStructure,
    fillInput,
    findAndClickElement,
    waitAndVerify,
  ],
  model,
});

async function chatWithAgent(query) {
  try {
    console.log(`Executing task: ${query.substring(0, 100)}...\n`);
    const response = await run(websiteAutomationAgent, query, {
      maxTurns: 60,
    });

    console.log("Final response:", response.finalOutput);
    await browser.close();
  } catch (error) {
    console.error("Agent execution failed:", error);
    await browser.close();
  }
}

chatWithAgent(PORTFOLIO_CONTACT_PROMPT);
