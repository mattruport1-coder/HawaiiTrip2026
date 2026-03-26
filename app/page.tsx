const snorkel = [
  "Cynthia", "Ruby Ruport", "Lindsay Ruport", "Chuck", "Marisa", "Ana",
  "Emily", "Molly", "Carly", "Daisy", "Eddy", "Stephanie",
  "Gavin", "Cohen", "Rex", "Andrea", "Matt", "Joe"
];

const brewery = [
  "Ruby Ruport", "Lindsay Ruport", "Marisa", "Meggan", "JD", "Ana",
  "Emily", "Molly", "Carly", "Daisy", "Eddy", "Stephanie",
  "Gavin", "Cohen", "Rex", "Andrea", "Matt", "Joe", "John", "Margie"
];

const luau = [
  "Cynthia", "Ruby Ruport", "Blythe", "Chuck", "Marisa", "Meggan", "JD"
];

export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #e0f2fe 0%, #ffffff 24%, #fff7ed 100%)",
        color: "#0f172a",
        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      <section
        style={{
          padding: "56px 24px",
          background: "rgba(255,255,255,0.85)",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 16 }}>
            <span style={{ background: "#e0f2fe", padding: "8px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700 }}>Matt&apos;s Hawaii Trip</span>
            <span style={{ background: "#e0f2fe", padding: "8px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700 }}>Surfjack HQ</span>
            <span style={{ background: "#e0f2fe", padding: "8px 12px", borderRadius: 999, fontSize: 12, fontWeight: 700 }}>2 Vans</span>
          </div>

          <h1 style={{ fontSize: 56, margin: "0 0 12px" }}>Hawaii Trip HQ</h1>
          <p style={{ fontSize: 20, lineHeight: 1.6, maxWidth: 760, margin: 0, color: "#475569" }}>
            Itinerary, logistics, maps, and attendance for the trip.
          </p>

          <div style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="#itinerary"
              style={{
                background: "#0f172a",
                color: "#fff",
                padding: "12px 16px",
                borderRadius: 14,
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              View itinerary
            </a>
            <a
              href="https://surfjack.com/"
              target="_blank"
              rel="noreferrer"
              style={{
                background: "#fff",
                color: "#0f172a",
                padding: "12px 16px",
                borderRadius: 14,
                textDecoration: "none",
                fontWeight: 700,
                border: "1px solid #cbd5e1",
              }}
            >
              Open Surfjack
            </a>
          </div>
        </div>
      </section>

      <section id="itinerary" style={{ padding: "40px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 36, marginBottom: 20 }}>Itinerary</h2>

          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 20, padding: 20, marginBottom: 16 }}>
            <h3>Friday — Island Loop Tour + Fireworks</h3>
            <p>Leave Surfjack at 8:30 AM. Clockwise island loop: Dole Plantation, Matsumoto&apos;s, Turtle Beach, Waimea Bay, Waimea Falls, Kualoa Ranch, scenic stops, then Waikiki fireworks at 7:45 PM.</p>
            <a href="https://maps.google.com/?q=The+Surfjack+Hotel+%26+Swim+Club+Honolulu" target="_blank" rel="noreferrer">Meet at Surfjack</a>
          </div>

          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 20, padding: 20, marginBottom: 16 }}>
            <h3>Saturday — Graduation + Magic Island Beach Party</h3>
            <p>Graduation at 9:00 AM, then beach party at Magic Island from 2:00–6:30 PM.</p>
            <a href="https://maps.google.com/?q=Magic+Island+Honolulu" target="_blank" rel="noreferrer">Open Magic Island</a>
          </div>

          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 20, padding: 20, marginBottom: 16 }}>
            <h3>Sunday — Snorkel + Brewery Day</h3>
            <p>Leave Surfjack at 7:30 AM for Ko Olina Marina. Brewery meetup at 5:30 PM in Kakaʻako.</p>
            <a href="https://maps.google.com/?q=Ko+Olina+Marina" target="_blank" rel="noreferrer">Open Ko Olina Marina</a>
          </div>

          <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 20, padding: 20 }}>
            <h3>Monday — Flex Day + Optional Luau</h3>
            <p>Beach, Pearl Harbor, or Kualoa Ranch by day. Optional luau in the evening.</p>
            <a href="https://maps.google.com/?q=Paradise+Cove+Luau+Kapolei" target="_blank" rel="noreferrer">Open Luau</a>
          </div>
        </div>
      </section>

      <section style={{ padding: "40px 24px", background: "#020617", color: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <h2 style={{ fontSize: 36, marginBottom: 20 }}>Attendance</h2>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
            <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 20, padding: 20 }}>
              <h3>Snorkel Crew ({snorkel.length})</h3>
              <p>{snorkel.join(", ")}</p>
            </div>

            <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 20, padding: 20 }}>
              <h3>Brewery Crew ({brewery.length})</h3>
              <p>{brewery.join(", ")}</p>
            </div>

            <div style={{ background: "rgba(255,255,255,0.06)", borderRadius: 20, padding: 20 }}>
              <h3>Luau Crew ({luau.length})</h3>
              <p>{luau.join(", ")}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
