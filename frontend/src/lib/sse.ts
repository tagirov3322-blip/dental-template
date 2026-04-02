const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000/api";
const SSE_URL = API_URL.replace(/\/api$/, "") + "/api/events";

const listeners: Set<() => void> = new Set();
let es: EventSource | null = null;

function notifyAll() {
  listeners.forEach((cb) => cb());
}

function connect() {
  if (typeof window === "undefined") return;

  // Закрываем старое соединение если есть
  if (es) {
    es.close();
    es = null;
  }

  es = new EventSource(SSE_URL);

  es.onopen = () => {
    console.log("[SSE] connected");
  };

  es.onerror = () => {
    // EventSource автоматически reconnectится
    // Но если совсем мёртвый — переподключим через 3 сек
    if (es?.readyState === EventSource.CLOSED) {
      console.log("[SSE] closed, reconnecting in 3s...");
      es = null;
      setTimeout(connect, 3000);
    }
  };

  // Слушаем все события
  es.addEventListener("new_booking", () => { console.log("[SSE] new_booking"); notifyAll(); });
  es.addEventListener("booking_updated", () => { console.log("[SSE] booking_updated"); notifyAll(); });
  es.addEventListener("booking_deleted", () => { console.log("[SSE] booking_deleted"); notifyAll(); });
}

// Подключаемся при первом вызове
let connected = false;

export function onSSE(callback: () => void): () => void {
  listeners.add(callback);

  if (!connected) {
    connected = true;
    connect();
  }

  return () => {
    listeners.delete(callback);
  };
}
