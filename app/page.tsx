import React from "react";

const snorkel = [
  "Cynthia",
  "Ruby Ruport",
  "Lindsay Ruport",
  "Chuck",
  "Marisa",
  "Ana",
  "Emily",
  "Molly",
  "Carly",
  "Daisy",
  "Eddy",
  "Stephanie",
  "Gavin",
  "Cohen",
  "Rex",
  "Andrea",
  "Matt",
  "Joe",
];

const brewery = [
  "Ruby Ruport",
  "Lindsay Ruport",
  "Marisa",
  "Meggan",
  "JD",
  "Ana",
  "Emily",
  "Molly",
  "Carly",
  "Daisy",
  "Eddy",
  "Stephanie",
  "Gavin",
  "Cohen",
  "Rex",
  "Andrea",
  "Matt",
  "Joe",
  "John",
  "Margie",
];

const luau = [
  "Cynthia",
  "Ruby Ruport",
  "Blythe",
  "Chuck",
  "Marisa",
  "Meggan",
  "JD",
];

const fridayStops = [
  {
    name: "Surfjack Hotel & Swim Club",
    note: "Start here, load the vans, and begin the clockwise island loop.",
    href: "https://maps.google.com/?q=The+Surfjack+Hotel+%26+Swim+Club+Honolulu",
  },
  {
    name: "Dole Plantation",
    note: "First major stop heading north.",
    href: "https://maps.google.com/?q=Dole+Plantation+Wahiawa+HI",
  },
  {
    name: "Matsumoto's Shave Ice",
    note: "Classic North Shore stop in Haleʻiwa.",
    href: "https://maps.google.com/?q=Matsumoto's+Shave+Ice+Haleiwa+HI",
  },
  {
    name: "Laniakea Beach",
    note: "Turtle beach stop.",
    href: "https://maps.google.com/?q=Laniakea+Beach+Haleiwa+HI",
  },
  {
    name: "Waimea Bay",
    note: "North Shore swim and scenic stop.",
    href: "https://maps.google.com/?q=Waimea+Bay+Beach+Park+Haleiwa+HI",
  },
  {
    name: "Waimea Valley / Falls",
    note: "Waterfall and garden walk option.",
    href: "https://maps.google.com/?q=Waimea+Valley+Haleiwa+HI",
  },
  {
    name: "Kualoa Ranch",
    note: "Windward side iconic scenic stop.",
    href: "https://maps.google.com/?q=Kualoa+Ranch+Kaneohe+HI",
  },
  {
    name: "Waikiki Fireworks",
    note: "Finish the day back in Waikiki at 7:45 PM.",
    href: "https://maps.google.com/?q=Hilton+Hawaiian+Village+Waikiki+Fireworks",
  },
];

const days = [
  {
    day: "Thursday",
    title: "Arrival Day",
    time: "Arrivals throughout the day",
    vibe: "Settle in, grab a drink, and ease into island mode.",
    bullets: [
      "Check in at The Surfjack Hotel & Swim Club",
      "Use the two 15-passenger vans for group movement once everyone arrives",
      "Casual welcome hang in Waikiki",
    ],
    logistics: [
      "Main rally point: Surfjack",
      "Loose meetup around 6:00–7:00 PM",
      "Low-pressure first night",
    ],
    meetLink: "https://maps.google.com/?q=The+Surfjack+Hotel+%26+Swim+Club+Honolulu",
    meetText: "Open Surfjack",
  },
  {
    day: "Friday",
    title: "Island Loop Tour + Fireworks",
    time: "Leave Surfjack: 8:30 AM • Fireworks: 7:45 PM",
    vibe: "A full clockwise island adventure day ending back in Waikiki.",
    bullets: [
      "Start at Surfjack Hotel",
      "Drive north and circle Oʻahu clockwise",
      "Stops include Dole, Matsumoto's, Turtle Beach, Waimea Bay, Waimea Falls, Kualoa Ranch, and scenic lookouts",
      "Return to Waikiki for fireworks",
    ],
    logistics: [
      "Be downstairs and ready by 8:20 AM",
      "Both vans roll at 8:30 AM",
      "Bring water, swimsuit, towel, sunscreen, and a change of clothes",
    ],
    meetLink: "https://maps.google.com/?q=The+Surfjack+Hotel+%26+Swim+Club+Honolulu",
    meetText: "Meet at Surfjack",
  },
  {
    day: "Saturday",
    title: "Graduation + Magic Island Beach Party",
    time: "Graduation: 9:00 AM • Beach party: 2:00–6:30 PM",
    vibe: "Celebrate in the morning, then shift into beach mode.",
    bullets: [
      "Morning commencement at UH Mānoa",
      "Midday reset at Surfjack",
      "Afternoon beach party at Magic Island",
    ],
    logistics: [
      "Leave early for graduation parking and traffic",
      "Beach crew target arrival: 2:00 PM",
      "Bring towels, drinks, snacks, and a speaker",
    ],
    meetLink: "https://maps.google.com/?q=Magic+Island+Honolulu",
    meetText: "Open Magic Island",
  },
  {
    day: "Sunday",
    title: "Snorkel + Brewery Day",
    time: "Leave Surfjack: 7:30 AM • Brewery meetup: 5:30 PM",
    vibe: "Best flow of the trip: boat morning, chill afternoon, fun night.",
    bullets: [
      "Morning snorkel cruise from Ko Olina Marina",
      "Afternoon recharge in Waikiki",
      "Evening brewery crawl in Kakaʻako",
    ],
    logistics: [
      "Both vans leave at 7:30 AM for Ko Olina",
      "Wear swimsuit or have it ready",
      "Brewery meetup starts at 5:30 PM",
    ],
    meetLink: "https://maps.google.com/?q=Ko+Olina+Marina",
    meetText: "Open Ko Olina Marina",
  },
  {
    day: "Monday",
    title: "Flex Day + Optional Luau",
    time: "Open daytime • Luau around 5:00 PM",
    vibe: "Choose your own adventure with one optional evening plan.",
    bullets: [
      "Beach, Pearl Harbor, or Kualoa Ranch",
      "Optional luau group dinner",
      "Everyone else free for Waikiki dinner or exploring",
    ],
    logistics: [
      "Flexible daytime, no heavy coordination",
      "Luau group should leave with buffer time",
      "Everyone else keeps it easy",
    ],
    meetLink: "https://maps.google.com/?q=Paradise+Cove+Luau+Kapolei",
    meetText: "Open Luau",
  },
  {
    day: "Tuesday",
    title: "Departure Day",
    time: "Travel home",
    vibe: "Victory lap.",
    bullets: [
      "Pack up",
      "Airport runs",
      "One last coffee before wheels up",
    ],
    logistics: [
      "Keep airport departure times in mind",
      "Use the vans efficiently for airport runs",
      "Final room sweep before leaving",
    ],
    meetLink: "https://maps.google.com/?q=Daniel+K.+Inouye+International+Airport",
    meetText: "Open HNL Airport",
  },
];

const quickLinks = [
  { label: "Surfjack Hotel", href: "https://surfjack.com/" },
  { label: "Magic Island", href: "https://maps.google.com/?q=Magic+Island+Honolulu" },
  { label: "UH Mānoa", href: "https://maps.google.com/?q=University+of+Hawaii+at+Manoa" },
  { label: "Ko Olina Marina", href: "https://maps.google.com/?q=Ko+Olina+Marina" },
  { label: "Paradise Cove Luau", href: "https://maps.google.com/?q=Paradise+Cove+Luau+Kapolei" },
  { label: "Honolulu Beerworks", href: "https://maps.google.com/?q=Honolulu+Beerworks" },
  { label: "Aloha Beer Co.", href: "https://maps.google.com/?q=Aloha+Beer+Company+Honolulu" },
  { label: "Waikiki Brewing Kakaʻako", href: "https://maps.google.com/?q=Waikiki+Brewing+Company+Kakaako" },
];

function Tag({
  children,
  background,
  color,
}: {
  children: React.ReactNode;
  background: string;
  color: string;
}) {
  return (
    <span
      style={{
        borderRadius: 999,
        padding: "8px 12px",
        fontSize: 14,
        background,
        color,
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
}

export default function Page() {
  return (
    <main
      style={{
        background: "linear-gradient(180deg, #e0f2fe 0%, #ffffff 24%, #fff7ed 100%)",
        minHeight: "100vh",
        color: "#0f172a",
        fontFamily:
          'Inter, Arial, Helvetica, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      }}
    >
      <section
        style={{
          padding: "64px 0 52px",
          borderBottom: "1px solid #e2e8f0",
          background:
            "linear-gradient(rgba(255,255,255,0.82), rgba(255,255,255,0.88)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80') center/cover",
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.3fr 0.9fr",
              gap: 28,
              alignItems: "end",
            }}
          >
            <div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 18 }}>
                {["Matt's Hawaii Trip", "Surfjack HQ", "2 Vans"].map((pill) => (
                  <span
                    key={pill}
                    style={{
                      borderRadius: 999,
                      background: "rgba(255,255,255,0.76)",
                      padding: "8px 14px",
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "#075985",
                      boxShadow: "0 2px 10px rgba(15,23,42,0.04)",
                    }}
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <h1
                style={{
                  fontSize: 62,
                  lineHeight: 1.02,
                  margin: "0 0 16px",
                  letterSpacing: "-0.04em",
                  maxWidth: 760,
                }}
              >
                Hawaii Trip HQ
              </h1>

              <p
                style={{
                  fontSize: 20,
                  lineHeight: 1.7,
                  color: "#334155",
                  maxWidth: 760,
                  margin: 0,
                }}
              >
                Your single source of truth for the trip: itinerary, live map
                links, Friday island route, attendance, and real logistics that
                keep the group moving.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 26 }}>
                <a
                  href="#itinerary"
                  style={{
                    display: "inline-block",
                    background: "#0f172a",
                    color: "#fff",
                    padding: "14px 18px",
                    borderRadius: 16,
                    textDecoration: "none",
                    fontWeight: 700,
                  }}
                >
                  View itinerary
                </a>
                <a
                  href="#friday-route"
                  style={{
                    display: "inline-block",
                    background: "#fff",
                    color: "#334155",
                    padding: "14px 18px",
                    borderRadius: 16,
                    textDecoration: "none",
                    fontWeight: 700,
                    border: "1px solid #cbd5e1",
                  }}
                >
                  Open Friday route
                </a>
              </div>

              <div
                style={{
                  background: "rgba(255,255,255,0.85)",
                  border: "1px solid #dbeafe",
                  borderRadius: 24,
                  padding: 22,
                  marginTop: 26,
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#0369a1",
                    marginBottom: 8,
                  }}
                >
                  Trip Rules
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12 }}>
                  {[
                    "Be ready at van times.",
                    "Miss the van = Uber 😂",
                    "Anchor events matter. Everything else is flexible.",
                  ].map((rule) => (
                    <div
                      key={rule}
                      style={{
                        background: "#f8fafc",
                        borderRadius: 16,
                        padding: "14px 16px",
                        fontSize: 15,
                        lineHeight: 1.6,
                        color: "#334155",
                      }}
                    >
                      {rule}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              style={{
                background: "rgba(2,6,23,0.96)",
                color: "#fff",
                borderRadius: 28,
                padding: 24,
                boxShadow: "0 20px 40px rgba(15,23,42,0.18)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#7dd3fc",
                      marginBottom: 6,
                    }}
                  >
                    Home Base
                  </div>
                  <h2 style={{ margin: 0, fontSize: 32, lineHeight: 1.08 }}>
                    The Surfjack Hotel &amp; Swim Club
                  </h2>
                  <p style={{ color: "#cbd5e1", marginTop: 10, marginBottom: 0 }}>
                    412 Lewers St, Honolulu, HI
                  </p>
                </div>

                <div
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    borderRadius: 18,
                    padding: "14px 16px",
                    textAlign: "center",
                    minWidth: 88,
                  }}
                >
                  <div style={{ fontSize: 30, fontWeight: 800 }}>4.5★</div>
                  <div style={{ fontSize: 12, color: "#cbd5e1" }}>Hotel rating</div>
                </div>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 12,
                  marginTop: 18,
                }}
              >
                {[
                  ["2", "15-passenger vans"],
                  ["18", "Snorkel crew"],
                  ["20", "Brewery crew"],
                ].map(([num, label]) => (
                  <div
                    key={label}
                    style={{
                      background: "rgba(255,255,255,0.1)",
                      borderRadius: 18,
                      padding: 14,
                    }}
                  >
                    <div style={{ fontSize: 28, fontWeight: 800 }}>{num}</div>
                    <div style={{ fontSize: 14, color: "#cbd5e1" }}>{label}</div>
                  </div>
                ))}
              </div>

              <a
                href="https://surfjack.com/"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-block",
                  marginTop: 18,
                  background: "#fff",
                  color: "#0f172a",
                  padding: "14px 18px",
                  borderRadius: 16,
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                Open hotel website
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="itinerary" style={{ padding: "56px 0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#0369a1",
              marginBottom: 8,
            }}
          >
            Itinerary
          </div>
          <h2 style={{ fontSize: 50, lineHeight: 1.04, margin: "0 0 10px", letterSpacing: "-0.03em" }}>
            Day-by-day plan
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#64748b", maxWidth: 760, margin: 0 }}>
            Built to be easy to scan and detailed enough to keep the whole group aligned.
          </p>

          {days.map((item) => (
            <div
              key={item.day}
              style={{
                display: "grid",
                gridTemplateColumns: "170px 1fr",
                gap: 22,
                background: "#fff",
                border: "1px solid #e2e8f0",
                borderRadius: 26,
                padding: 24,
                marginTop: 16,
                boxShadow: "0 3px 10px rgba(15,23,42,0.03)",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "#0369a1",
                  }}
                >
                  {item.day}
                </div>
                <div style={{ fontSize: 15, color: "#64748b", marginTop: 10, lineHeight: 1.45 }}>
                  {item.time}
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: 34, lineHeight: 1.08, margin: 0, letterSpacing: "-0.03em" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: 17, lineHeight: 1.7, color: "#334155", marginTop: 10 }}>
                  {item.vibe}
                </p>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                    gap: 10,
                    marginTop: 16,
                  }}
                >
                  {item.bullets.map((bullet) => (
                    <div
                      key={bullet}
                      style={{
                        background: "#f8fafc",
                        borderRadius: 16,
                        padding: 14,
                        fontSize: 14,
                        lineHeight: 1.6,
                        color: "#334155",
                      }}
                    >
                      {bullet}
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    marginTop: 16,
                    background: "#fefce8",
                    border: "1px solid #fde68a",
                    borderRadius: 18,
                    padding: 16,
                  }}
                >
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 700,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "#a16207",
                    }}
                  >
                    Logistics
                  </div>

                  <ul
                    style={{
                      margin: "10px 0 0 18px",
                      padding: 0,
                      lineHeight: 1.8,
                      color: "#475569",
                      fontSize: 14,
                    }}
                  >
                    {item.logistics.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <a
                    href={item.meetLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-block",
                      marginTop: 14,
                      background: "#0f172a",
                      color: "#fff",
                      padding: "12px 15px",
                      borderRadius: 14,
                      textDecoration: "none",
                      fontWeight: 700,
                      fontSize: 14,
                    }}
                  >
                    {item.meetText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="friday-route"
        style={{
          background: "#020617",
          color: "#fff",
          padding: "56px 0",
          borderTop: "1px solid #0f172a",
          borderBottom: "1px solid #0f172a",
        }}
      >
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#7dd3fc",
              marginBottom: 8,
            }}
          >
            Friday Route
          </div>
          <h2 style={{ fontSize: 50, lineHeight: 1.04, margin: "0 0 10px", letterSpacing: "-0.03em" }}>
            Clockwise island loop
          </h2>
          <p style={{ fontSize: 15, lineHeight: 1.8, color: "#94a3b8", maxWidth: 760, margin: 0 }}>
            Start at Surfjack, head north, keep circling clockwise, and finish back in Waikiki for the 7:45 PM fireworks.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
              gap: 14,
              marginTop: 22,
            }}
          >
            {fridayStops.map((stop, index) => (
              <a
                key={stop.name}
                href={stop.href}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "block",
                  textDecoration: "none",
                  color: "#fff",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: 24,
                  padding: 18,
                }}
              >
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "#7dd3fc",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                  }}
                >
                  Stop {index + 1}
                </div>
                <div style={{ fontSize: 23, fontWeight: 700, marginTop: 10, lineHeight: 1.15 }}>
                  {stop.name}
                </div>
                <div style={{ fontSize: 14, lineHeight: 1.7, color: "#cbd5e1", marginTop: 10 }}>
                  {stop.note}
                </div>
                <div style={{ marginTop: 16, fontWeight: 700 }}>Open map →</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "56px 0" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 28 }}>
            <div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "#0369a1",
                  marginBottom: 8,
                }}
              >
                Map Links & Recs
              </div>
              <h2 style={{ fontSize: 50, lineHeight: 1.04, margin: "0 0 10px", letterSpacing: "-0.03em" }}>
                Open the right place fast
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
                  gap: 12,
                  marginTop: 18,
                }}
              >
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "block",
                      textDecoration: "none",
                      background: "#fff",
                      color: "#0f172a",
                      border: "1px solid #e2e8f0",
                      borderRadius: 16,
                      padding: "15px 16px",
                      fontWeight: 600,
                    }}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gap: 16 }}>
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 22,
                  padding: 22,
                }}
              >
                <h3 style={{ fontSize: 30, lineHeight: 1.08, margin: 0 }}>Transport plan</h3>
                <ul style={{ lineHeight: 1.8, color: "#475569", paddingLeft: 20, marginTop: 12 }}>
                  <li>Use the vans as the default plan instead of juggling rideshares.</li>
                  <li>Friday and Sunday are both-vans days.</li>
                  <li>Saturday beach party and Monday luau can use staggered departures if needed.</li>
                </ul>
              </div>

              <div
                style={{
                  background: "#fff",
                  border: "1px solid #e2e8f0",
                  borderRadius: 22,
                  padding: 22,
                }}
              >
                <h3 style={{ fontSize: 30, lineHeight: 1.08, margin: 0 }}>Recommended brewery route</h3>
                <ul style={{ lineHeight: 1.8, color: "#475569", paddingLeft: 20, marginTop: 12 }}>
                  <li>Honolulu Beerworks</li>
                  <li>Aloha Beer Co.</li>
                  <li>Waikiki Brewing Company – Kakaʻako</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "56px 0", background: "rgba(255,255,255,0.8)" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "#0369a1",
              marginBottom: 8,
            }}
          >
            Attendance
          </div>
          <h2 style={{ fontSize: 50, lineHeight: 1.04, margin: "0 0 10px", letterSpacing: "-0.03em" }}>
            Who&apos;s attending what
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
              gap: 16,
              marginTop: 20,
            }}
          >
            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 22, padding: 22 }}>
              <h3 style={{ fontSize: 30, lineHeight: 1.08, margin: 0 }}>
                Snorkel Crew ({snorkel.length})
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                {snorkel.map((name) => (
                  <Tag key={name} background="#e0f2fe" color="#0c4a6e">
                    {name}
                  </Tag>
                ))}
              </div>
            </div>

            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 22, padding: 22 }}>
              <h3 style={{ fontSize: 30, lineHeight: 1.08, margin: 0 }}>
                Brewery Crew ({brewery.length})
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                {brewery.map((name) => (
                  <Tag key={name} background="#fef3c7" color="#92400e">
                    {name}
                  </Tag>
                ))}
              </div>
            </div>

            <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 22, padding: 22 }}>
              <h3 style={{ fontSize: 30, lineHeight: 1.08, margin: 0 }}>
                Luau Crew ({luau.length})
              </h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 16 }}>
                {luau.map((name) => (
                  <Tag key={name} background="#dcfce7" color="#166534">
                    {name}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
