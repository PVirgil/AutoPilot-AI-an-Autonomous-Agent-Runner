import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function AutoPilotAI() {
  const [taskGoal, setTaskGoal] = useState("");
  const [taskOutput, setTaskOutput] = useState("");
  const [status, setStatus] = useState("Idle");

  const handleRun = async () => {
    setStatus("Running...");
    const res = await fetch("/api/agent-runner", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ goal: taskGoal }),
    });
    const data = await res.json();
    setTaskOutput(data.output);
    setStatus("Complete");
  };

  return (
    <div className="p-6 grid gap-6">
      <h1 className="text-2xl font-bold">AutoPilot AI – Autonomous Agent Runner</h1>
      <Card>
        <CardContent className="grid gap-4 p-4">
          <Textarea
            placeholder="Describe the task goal (e.g., 'Summarize today's news from BBC')"
            value={taskGoal}
            onChange={(e) => setTaskGoal(e.target.value)}
          />
          <Button onClick={handleRun}>Start Agent</Button>
          <p className="text-sm text-gray-500">Status: {status}</p>
        </CardContent>
      </Card>

      {taskOutput && (
        <Card>
          <CardContent className="p-4">
            <h2 className="font-semibold">Agent Output:</h2>
            <pre className="whitespace-pre-wrap text-sm bg-gray-100 p-2 rounded">{taskOutput}</pre>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

