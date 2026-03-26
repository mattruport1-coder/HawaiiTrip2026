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
    note: "Start here and load the vans.",
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
  },
  {
    day: "Friday",
    title: "Island Loop Tour + Fireworks",
    time: "8:30 AM depart • 7:45 PM fireworks",
    vibe: "A full clockwise island adventure day ending back in Waikiki.",
    bullets: [
      "Start at Surfjack Hotel",
      "Drive north and circle Oʻahu clockwise",
      "Stops include Dole, Matsumoto's, Turtle Beach, Waimea Bay, Waimea Falls, Kualoa Ranch, and scenic lookouts",
      "Return to Waikiki for fireworks",
    ],
  },
  {
    day: "Saturday",
    title: "Graduation + Magic Island Beach Party",
    time: "9:00 AM graduation • 2:00–6:30 PM beach party",
    vibe: "Celebrate in the morning, then shift into beach mode.",
    bullets: [
      "Morning commencement at UH Mānoa",
      "Midday reset at Surfjack",
      "Afternoon beach party at Magic Island",
    ],
  },
  {
    day: "Sunday",
    title: "Snorkel + Brewery Day",
    time: "7:30 AM depart • 5:30 PM brewery meetup",
    vibe: "Best flow of the trip: boat morning, chill afternoon, fun night.",
    bullets: [
      "Morning snorkel cruise from Ko Olina Marina",
      "Afternoon recharge in Waikiki",
      "Evening brewery crawl in Kakaʻako",
    ],
  },
  {
    day: "Monday",
    title: "Flex Day + Optional Luau",
    time: "Open daytime • luau around 5:00 PM",
    vibe: "Choose your own adventure with one optional evening plan.",
    bullets: [
      "Beach, Pearl Harbor, or Kualoa Ranch",
      "Optional luau group dinner",
      "Everyone else free for Waikiki dinner or exploring",
    ],
  },
  {
    day: "Tuesday",
    title: "Departure Day",
    time: "Travel home",
    vibe: "Victory lap.",
    bullets: ["Pack up", "Airport runs", "One last coffee before wheels up"],
  },
];

const styles = {
  page: {
    background: "linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e') center/cover",
    minHeight: "100vh",
    color: "#0f172a",
    fontFamily: "Arial, Helvetica, sans-serif",
  } as React.CSSProperties,
  container: {
    maxWidth: "1180px",
    margin: "0 auto",
    padding: "0 24px",
  } as React.CSSProperties,
  hero: {
    padding: "56px 0 44px",
    borderBottom: "1px solid #e2e8f0",
    background: "rgba(255,255,255,0.75)",
  } as React.CSSProperties,
  heroGrid: {
    display: "grid",
    gridTemplateColumns: "1.3fr 0.9fr",
    gap: "28px",
  } as React.CSSProperties,
  pills: {
    display: "flex",
    flexWrap: "wrap",
    gap: "10px",
    marginBottom: "18px",
  } as React.CSSProperties,
  pill: {
    borderRadius: "999px",
    background: "rgba(255,255,255,0.75)",
    padding: "8px 14px",
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "#075985",
  } as React.CSSProperties,
  h1: {
    fontSize: "54px",
    lineHeight: 1.05,
    margin: "0 0 16px",
  } as React.CSSProperties,
  lead: {
    fontSize: "19px",
    lineHeight: 1.7,
    color: "#475569",
    maxWidth: "760px",
  } as React.CSSProperties,
  buttonRow: {
    display: "flex",
    flexWrap: "wrap",
    gap: "12px",
    marginTop: "26px",
  } as React.CSSProperties,
  buttonDark: {
    display: "inline-block",
    background: "#0f172a",
    color: "#fff",
    padding: "14px 18px",
    borderRadius: "16px",
    textDecoration: "none",
    fontWeight: 700,
  } as React.CSSProperties,
  buttonLight: {
    display: "inline-block",
    background: "#fff",
    color: "#334155",
    padding: "14px 18px",
    borderRadius: "16px",
    textDecoration: "none",
    fontWeight: 700,
    border: "1px solid #cbd5e1",
  } as React.CSSProperties,
  sideCard: {
    background: "#020617",
    color: "#fff",
    borderRadius: "28px",
    padding: "24px",
    boxShadow: "0 20px 40px rgba(15,23,42,0.18)",
  } as React.CSSProperties,
  statsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "12px",
    marginTop: "18px",
  } as React.CSSProperties,
  statBox: {
    background: "rgba(255,255,255,0.1)",
    borderRadius: "18px",
    padding: "14px",
  } as React.CSSProperties,
  section: {
    padding: "52px 0",
  } as React.CSSProperties,
  sectionKicker: {
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase" as const,
    color: "#0369a1",
    marginBottom: "8px",
  } as React.CSSProperties,
  h2: {
    fontSize: "42px",
    margin: "0 0 10px",
  } as React.CSSProperties,
  subtitle: {
    fontSize: "15px",
    lineHeight: 1.8,
    color: "#64748b",
    maxWidth: "760px",
  } as React.CSSProperties,
  dayCard: {
    display: "grid",
    gridTemplateColumns: "180px 1fr",
    gap: "22px",
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: "26px",
    padding: "24px",
    marginTop: "16px",
    boxShadow: "0 3px 10px rgba(15,23,42,0.03)",
  } as React.CSSProperties,
  dayLabel: {
    fontSize: "12px",
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase" as const,
    color: "#0369a1",
  } as React.CSSProperties,
  muted: {
    fontSize: "14px",
    color: "#64748b",
    marginTop: "10px",
  } as React.CSSProperties,
  h3: {
    fontSize: "30px",
    margin: 0,
  } as React.CSSProperties,
  bulletsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "10px",
    marginTop: "16px",
  } as React.CSSProperties,
  bulletCard: {
    background: "#f8fafc",
    borderRadius: "16px",
    padding: "14px",
    fontSize: "14px",
    lineHeight: 1.6,
    color: "#334155",
  } as React.CSSProperties,
  darkSection: {
    background: "#020617",
    color: "#fff",
    padding: "52px 0",
    borderTop: "1px solid #0f172a",
    borderBottom: "1px solid #0f172a",
  } as React.CSSProperties,
  routeGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: "14px",
    marginTop: "22px",
  } as React.CSSProperties,
  routeCard: {
    display: "block",
    textDecoration: "none",
    color: "#fff",
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "24px",
    padding: "18px",
  } as React.CSSProperties,
  splitGrid: {
    display: "grid",
    gridTemplateColumns: "1.05fr 0.95fr",
    gap: "28px",
  } as React.CSSProperties,
  quickGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: "12px",
    marginTop: "18px",
  } as React.CSSProperties,
  quickLink: {
    display: "block",
    textDecoration: "none",
    background: "#fff",
    color: "#0f172a",
    border: "1px solid #e2e8f0",
    borderRadius: "16px",
    padding: "15px 16px",
    fontWeight: 600,
    boxShadow: "0 3px 10px rgba(15,23,42,0.03)",
  } as React.CSSProperties,
  whiteCard: {
    background: "#fff",
    border: "1px solid #e2e8f0",
    borderRadius: "22px",
    padding: "22px",
    boxShadow: "0 3px 10px rgba(15,23,42,0.03)",
  } as React.CSSProperties,
  attendanceGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: "16px",
    marginTop: "20px",
  } as React.CSSProperties,
  tagWrap: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginTop: "16px",
  } as React.CSSProperties,
  blueTag: {
    borderRadius: "999px",
    padding: "8px 12px",
    fontSize: "14px",
    background: "#e0f2fe",
    color: "#0c4a6e",
  } as React.CSSProperties,
  goldTag: {
    borderRadius: "999px",
    padding: "8px 12px",
    fontSize: "14px",
    background: "#fef3c7",
    color: "#92400e",
  } as React.CSSProperties,
  greenTag: {
    borderRadius: "999px",
    padding: "8px 12px",
    fontSize: "14px",
    background: "#dcfce7",
    color: "#166534",
  } as React.CSSProperties,
};

function Tag({
  children,
  style,
}: {
  children: React.ReactNode;
  style: React.CSSProperties;
}) {
  return <span style={style}>{children}</span>;
}

export default function Page() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.container}>
          <div style={styles.heroGrid}>
            <div>
              <div style={styles.pills}>
                <span style={styles.pill}>Matt&apos;s Hawaii Trip</span>
                <span style={styles.pill}>Surfjack HQ</span>
                <span style={styles.pill}>2 Vans</span>
              </div>
              <h1 style={styles.h1}>
                Hawaii trip HQ, now with maps, names, and a polished UI.
              </h1>
              <p style={styles.lead}>
                This is the group&apos;s single source of truth: the itinerary,
                live map links, Friday island route, and who&apos;s attending
                each major event.
              </p>
              <div style={styles.buttonRow}>
                <a href="#itinerary" style={styles.buttonDark}>
                  View itinerary
                </a>
                <a href="#friday-route" style={styles.buttonLight}>
                  Open Friday route
                </a>
              </div>
            </div>

            <div style={styles.sideCard}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
                <div>
                  <div style={{ ...styles.sectionKicker, color: "#7dd3fc", marginBottom: 6 }}>
                    Home Base
                  </div>
                  <h2 style={{ margin: 0, fontSize: 28 }}>The Surfjack Hotel &amp; Swim Club</h2>
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
                    height: "fit-content",
                  }}
                >
                  <div style={{ fontSize: 30, fontWeight: 800 }}>4.5★</div>
                  <div style={{ fontSize: 12, color: "#cbd5e1" }}>Hotel rating</div>
                </div>
              </div>

              <div style={styles.statsRow}>
                <div style={styles.statBox}>
                  <div style={{ fontSize: 28, fontWeight: 800 }}>2</div>
                  <div style={{ fontSize: 14, color: "#cbd5e1" }}>15-passenger vans</div>
                </div>
                <div style={styles.statBox}>
                  <div style={{ fontSize: 28, fontWeight: 800 }}>18</div>
                  <div style={{ fontSize: 14, color: "#cbd5e1" }}>Snorkel crew</div>
                </div>
                <div style={styles.statBox}>
                  <div style={{ fontSize: 28, fontWeight: 800 }}>20</div>
                  <div style={{ fontSize: 14, color: "#cbd5e1" }}>Brewery crew</div>
                </div>
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

      <section id="itinerary" style={styles.section}>
        <div style={styles.container}>
          <div style={styles.sectionKicker}>Itinerary</div>
          <h2 style={styles.h2}>Day-by-day plan</h2>
          <p style={styles.subtitle}>
            Built to be skimmed on a phone but still detailed enough to keep the
            whole group aligned.
          </p>

          {days.map((item) => (
            <div key={item.day} style={styles.dayCard}>
              <div>
                <div style={styles.dayLabel}>{item.day}</div>
                <div style={styles.muted}>{item.time}</div>
              </div>
              <div>
                <h3 style={styles.h3}>{item.title}</h3>
                <p style={{ ...styles.lead, fontSize: 17, margin: "10px 0 0", maxWidth: "100%" }}>
                  {item.vibe}
                </p>
                <div style={styles.bulletsGrid}>
                  {item.bullets.map((bullet) => (
                    <div key={bullet} style={styles.bulletCard}>
                      {bullet}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="friday-route" style={styles.darkSection}>
        <div style={styles.container}>
          <div style={{ ...styles.sectionKicker, color: "#7dd3fc" }}>Friday Route</div>
          <h2 style={{ ...styles.h2, color: "#fff" }}>Clockwise island loop</h2>
          <p style={{ ...styles.subtitle, color: "#94a3b8" }}>
            Start at Surfjack, head north, keep circling clockwise, and finish
            back in Waikiki for the 7:45 PM fireworks.
          </p>

          <div style={styles.routeGrid}>
            {fridayStops.map((stop, index) => (
              <a
                key={stop.name}
                href={stop.href}
                target="_blank"
                rel="noreferrer"
                style={styles.routeCard}
              >
                <div style={{ fontSize: 12, fontWeight: 700, color: "#7dd3fc", letterSpacing: "0.14em", textTransform: "uppercase" }}>
                  Stop {index + 1}
                </div>
                <div style={{ fontSize: 23, fontWeight: 700, marginTop: 10 }}>
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

      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.splitGrid}>
            <div>
              <div style={styles.sectionKicker}>Map Links &amp; Recs</div>
              <h2 style={styles.h2}>Open the right place fast</h2>
              <div style={styles.quickGrid}>
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    style={styles.quickLink}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div style={{ display: "grid", gap: 16 }}>
              <div style={styles.whiteCard}>
                <h3 style={{ ...styles.h3, fontSize: 28 }}>Transport plan</h3>
                <ul style={{ lineHeight: 1.8, color: "#475569", paddingLeft: 20, marginTop: 12 }}>
                  <li>Use the vans as the default plan instead of juggling rideshares.</li>
                  <li>Friday and Sunday are both-vans days.</li>
                  <li>Saturday beach party and Monday luau can use staggered departures depending on attendance.</li>
                </ul>
              </div>

              <div style={styles.whiteCard}>
                <h3 style={{ ...styles.h3, fontSize: 28 }}>Recommended brewery route</h3>
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

      <section style={{ ...styles.section, background: "rgba(255,255,255,0.8)" }}>
        <div style={styles.container}>
          <div style={styles.sectionKicker}>Attendance</div>
          <h2 style={styles.h2}>Who&apos;s attending what</h2>

          <div style={styles.attendanceGrid}>
            <div style={styles.whiteCard}>
              <h3 style={{ ...styles.h3, fontSize: 28 }}>Snorkel Crew ({snorkel.length})</h3>
              <div style={styles.tagWrap}>
                {snorkel.map((name) => (
                  <Tag key={name} style={styles.blueTag}>
                    {name}
                  </Tag>
                ))}
              </div>
            </div>

            <div style={styles.whiteCard}>
              <h3 style={{ ...styles.h3, fontSize: 28 }}>Brewery Crew ({brewery.length})</h3>
              <div style={styles.tagWrap}>
                {brewery.map((name) => (
                  <Tag key={name} style={styles.goldTag}>
                    {name}
                  </Tag>
                ))}
              </div>
            </div>

            <div style={styles.whiteCard}>
              <h3 style={{ ...styles.h3, fontSize: 28 }}>Luau Crew ({luau.length})</h3>
              <div style={styles.tagWrap}>
                {luau.map((name) => (
                  <Tag key={name} style={styles.greenTag}>
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
