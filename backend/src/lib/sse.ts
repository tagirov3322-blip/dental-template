import { Request, Response } from "express";

type SSEClient = {
  id: string;
  res: Response;
};

const clients: SSEClient[] = [];

export function addSSEClient(req: Request, res: Response): void {
  const clientId = Date.now().toString();

  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
  res.setHeader("X-Accel-Buffering", "no");
  res.flushHeaders();

  res.write(`data: ${JSON.stringify({ type: "connected", clientId })}\n\n`);

  const client: SSEClient = { id: clientId, res };
  clients.push(client);

  // Heartbeat каждые 30 сек чтобы соединение не рвалось
  const heartbeat = setInterval(() => {
    res.write(": heartbeat\n\n");
  }, 30000);

  req.on("close", () => {
    clearInterval(heartbeat);
    const index = clients.findIndex((c) => c.id === clientId);
    if (index !== -1) clients.splice(index, 1);
  });
}

export function broadcast(event: string, data: unknown): void {
  const message = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
  clients.forEach((client) => {
    client.res.write(message);
  });
}
