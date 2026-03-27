import { useState, useRef } from "react";
import "./Raffle.css";

interface RaffleEntry {
  name: string;
  tickets: number;
}

export default function Raffle() {
  const [entries, setEntries] = useState<RaffleEntry[]>([]);
  const [winners, setWinners] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string>("");
  const [error, setError] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    setWinners([]);
    setError("");

    const reader = new FileReader();
    reader.onload = (event) => {
      const text = event.target?.result as string;
      const lines = text.split("\n").filter((line) => line.trim() !== "");

      try {
        const parsed: RaffleEntry[] = [];
        // Skip header row (index 0)
        for (let i = 1; i < lines.length; i++) {
          const cols = lines[i].split(",");
          if (cols.length < 3) continue;

          const name = cols[1].trim();
          const ticketPart = cols[2].trim().split(" ");
          const tickets = parseInt(ticketPart[0], 10);

          if (name && !isNaN(tickets) && tickets > 0) {
            parsed.push({ name, tickets });
          }
        }

        if (parsed.length === 0) {
          setError("No valid entries found in CSV. Expected format: column 1 = any, column 2 = name, column 3 = \"N x $amount\"");
          setEntries([]);
        } else {
          setEntries(parsed);
        }
      } catch {
        setError("Failed to parse CSV file.");
        setEntries([]);
      }
    };
    reader.readAsText(file);
  };

  const drawWinners = () => {
    if (entries.length === 0) return;

    // Build weighted list
    const pool: string[] = [];
    for (const entry of entries) {
      for (let i = 0; i < entry.tickets; i++) {
        pool.push(entry.name);
      }
    }

    // Shuffle
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    // Pick up to 4 unique winners
    const selected: string[] = [];
    for (const name of pool) {
      if (!selected.includes(name)) {
        selected.push(name);
      }
      if (selected.length === 4) break;
    }

    setWinners(selected);
  };

  const reset = () => {
    setEntries([]);
    setWinners([]);
    setFileName("");
    setError("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const totalTickets = entries.reduce((sum, e) => sum + e.tickets, 0);

  return (
    <div className="raffle-page">
      <div className="gradient-bg gradient-bg-1" />

      <section className="raffle-container">
        <h1 style={{ color: "rgb(114, 135, 255)" }}>Raffle Draw</h1>
        <p className="raffle-description">
          Upload a CSV file to draw 4 winners. Each person's tickets are weighted — the more tickets, the higher the chance of winning.
        </p>

        <div className="upload-area">
          <input
            ref={fileInputRef}
            type="file"
            accept=".csv"
            onChange={handleFileUpload}
            id="csv-upload"
            className="file-input"
          />
          <label htmlFor="csv-upload" className="upload-label">
            {fileName ? fileName : "Choose a CSV file"}
          </label>
        </div>

        {error && <p className="raffle-error">{error}</p>}

        {entries.length > 0 && (
          <div className="raffle-info">
            <p>{entries.length} participants — {totalTickets} total tickets</p>

            <div className="entries-table">
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Tickets</th>
                  </tr>
                </thead>
                <tbody>
                  {entries.map((entry, i) => (
                    <tr key={i}>
                      <td>{entry.name}</td>
                      <td>{entry.tickets}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="raffle-actions">
              <button className="draw-button" onClick={drawWinners}>
                Draw 4 Winners
              </button>
              <button className="reset-button" onClick={reset}>
                Reset
              </button>
            </div>
          </div>
        )}

        {winners.length > 0 && (
          <div className="winners-section">
            <h2 style={{ color: "rgb(114, 135, 255)" }}>Winners</h2>
            <div className="winners-list">
              {winners.map((winner, i) => (
                <div key={i} className="winner-card">
                  <span className="winner-number">#{i + 1}</span>
                  <span className="winner-name">{winner}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
