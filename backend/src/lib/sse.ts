import { Request, Response } from "express";

type SSEClient = {
  id: string;
  res: Response;
};

const clients: SSEClient[] = [];

export function addSSEClient(req: Request, res: Response): void {
  const clientId = Date.now().toString();

  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    Connection: "keep-alive",
    "Access-Control-Allow-Origin": process.env.FRONTEND_URL || "*",
  });

  res.write(`data: ${JSON.stringify({ type: "connected", clientId })}\n\n`);

  const client: SSEClient = { id: clientId, res };
  clients.push(client);

  req.on("close", () => {
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
