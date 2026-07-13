import { useState } from "react";

function Chat() {
  const [messages, setMessages] = useState([
    {
      sender: "Flincho AI",
      text: "Hello! How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages([
      ...messages,
      { sender: "You", text: input },
      {
        sender: "Flincho AI",
        text: "AI integration coming soon...",
      },
    ]);

    setInput("");
  };

  return (
    <div
      style={{
        background: "#0f172a",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1>💬 Flincho AI Chat</h1>

      <div
        style={{
          background: "#1e293b",
          padding: "20px",
          borderRadius: "10px",
          minHeight: "400px",
          marginBottom: "20px",
        }}
      >
        {messages.map((msg, index) => (
          <p key={index}>
            <strong>{msg.sender}:</strong> {msg.text}
          </p>
        ))}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type your message..."
        style={{
          width: "70%",
          padding: "12px",
          borderRadius: "8px",
        }}
      />

      <button
        onClick={sendMessage}
        style={{
          marginLeft: "10px",
          padding: "12px 20px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Send
      </button>
    </div>
  );
}

export default Chat;