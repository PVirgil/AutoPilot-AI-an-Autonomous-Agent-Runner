# AutoPilot AI – an Autonomous Agent Runner

## Overview
**AutoPilot AI** is a lightweight React-based interface for running autonomous agents.  
It allows users to **define a task goal** (e.g., “Summarize today’s news from BBC”) and execute it through a backend API endpoint (`/api/agent-runner`).  
The interface provides **real-time status updates** and displays the **agent’s output** in a clean and structured format.

---

## Features
- 📝 **Task Goal Input**: Enter natural-language goals for the agent to execute.
- ⚡ **Agent Execution**: Connects to `/api/agent-runner` for processing goals.
- 📊 **Status Updates**: Displays agent state (`Idle`, `Running...`, `Complete`).
- 🖥️ **Output Viewer**: Renders agent responses with clean formatting.
- 🎨 **UI Components**: Built using [shadcn/ui](https://ui.shadcn.com/) with TailwindCSS styling.

---

## Tech Stack
- **Frontend Framework**: [React](https://reactjs.org/) with Next.js
- **Styling**: [TailwindCSS](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/)
- **Backend API**: Expects `/api/agent-runner` to handle goal execution and return JSON output.

---

## File Structure
```
components/
└── AutoPilotAI.js       # Main React component (UI + logic)

pages/api/
└── agent-runner.js      # Example backend endpoint (to be implemented separately)
```

---

## How It Works
1. **User Input**  
   - User types a task goal into the text area (e.g., `"Summarize Ethereum L2 updates"`).
2. **Task Execution**  
   - When "Start Agent" is clicked, the app sends a POST request to `/api/agent-runner` with the goal.
3. **Agent Processing**  
   - The backend executes the agent logic (e.g., retrieval, summarization, reasoning).
4. **Result Display**  
   - The response (`output`) is displayed inside a formatted results card.

---

## Example Workflow
1. Input:
   ```
   Summarize today’s news from BBC
   ```
2. Status changes to:
   ```
   Running...
   ```
3. Output:
   ```
   - Headline: Global Markets Rally  
   - Headline: New Climate Agreement Signed  
   - Headline: AI Ethics in Spotlight
   ```
4. Status updates to:
   ```
   Complete
   ```

---

## Installation & Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-org/autopilot-ai.git
   cd autopilot-ai
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Backend Integration
The component expects an API endpoint `/api/agent-runner` with the following contract:

### Request
```json
{
  "goal": "Summarize today's news from BBC"
}
```

### Response
```json
{
  "output": "Summarized news: ..."
}
```

You can implement this using any LLM backend (e.g., OpenAI, LangChain, custom agent runners).

---

## Customization
- **Task Goal Placeholder**: Change the placeholder text in the `<Textarea>`.
- **UI Styling**: Modify TailwindCSS classes to match your branding.
- **Agent Logic**: Extend `/api/agent-runner` for more complex multi-step reasoning.

---

## Roadmap
- [ ] Add loading spinner instead of plain text status.  
- [ ] Support multi-agent workflows.  
- [ ] Add persistent task history.  
- [ ] Integrate with vector memory (e.g., Pinecone, Weaviate).  
