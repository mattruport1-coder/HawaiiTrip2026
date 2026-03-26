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

const isBrowser = typeof window !== "undefined";

function useIsMobile() {
  const [mobile, setMobile] = React.useState(false);

  React.useEffect(() => {
    const check = () => setMobile(window.innerWidth < 900);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return mobile;
}

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
  const isMobile = useIsMobile();

  const styles = {
    page: {
      background: "linear-gradient(180deg, #e0f2fe 0%, #ffffff 24%, #fff7ed 100%)",
      minHeight: "100vh",
      color: "#0f172a",
      fontFamily:
        'Inter, Arial, Helvetica, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    } as React.CSSProperties,

    container: {
      maxWidth: 1180,
      margin: "0 auto",
      padding: isMobile ? "0 18px" : "0 24px",
    } as React.CSSProperties,

    hero: {
      padding: isMobile ? "28px 0 24px" : "64px 0 52px",
      borderBottom: "1px solid #e2e8f0",
      background:
        "linear-gradient(rgba(255,255,255,0.82), rgba(255,255,255,0.88)), url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80') center/cover",
    } as React.CSSProperties,

    heroGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.3fr 0.9fr",
      gap: isMobile ? 20 : 28,
      alignItems: "end",
    } as React.CSSProperties,

    pills: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      marginBottom: 18,
    } as React.CSSProperties,

    pill: {
      borderRadius: 999,
      background: "rgba(255,255,255,0.76)",
      padding: "8px 14px",
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.12em",
      textTransform: "uppercase" as const,
      color: "#075985",
      boxShadow: "0 2px 10px rgba(15,23,42,0.04)",
    } as React.CSSProperties,

    h1: {
      fontSize: isMobile ? 42 : 62,
      lineHeight: 1.02,
      margin: "0 0 16px",
      letterSpacing: "-0.04em",
      maxWidth: 760,
    } as React.CSSProperties,

    lead: {
      fontSize: isMobile ? 18 : 20,
      lineHeight: 1.7,
      color: "#334155",
      maxWidth: 760,
      margin: 0,
    } as React.CSSProperties,

    buttonRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: 12,
      marginTop: 26,
    } as React.CSSProperties,

    buttonDark: {
      display: "inline-block",
      background: "#0f172a",
      color: "#fff",
      padding: "14px 18px",
      borderRadius: 16,
      textDecoration: "none",
      fontWeight: 700,
      boxShadow: "0 12px 24px rgba(15,23,42,0.12)",
    } as React.CSSProperties,

    buttonLight: {
      display: "inline-block",
      background: "#fff",
      color: "#334155",
      padding: "14px 18px",
      borderRadius: 16,
      textDecoration: "none",
      fontWeight: 700,
      border: "1px solid #cbd5e1",
    } as React.CSSProperties,

    sideCard: {
      background: "rgba(2,6,23,0.96)",
      color: "#fff",
      borderRadius: 28,
      padding: isMobile ? 20 : 24,
      boxShadow: "0 20px 40px rgba(15,23,42,0.18)",
    } as React.CSSProperties,

    sideTop: {
      display: "flex",
      justifyContent: "space-between",
      gap: 12,
      alignItems: "flex-start",
      flexDirection: isMobile ? "column" : "row",
    } as React.CSSProperties,

    statsRow: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr 1fr" : "repeat(3, 1fr)",
      gap: 12,
      marginTop: 18,
    } as React.CSSProperties,

    statBox: {
      background: "rgba(255,255,255,0.1)",
      borderRadius: 18,
      padding: 14,
    } as React.CSSProperties,

    section: {
      padding: isMobile ? "34px 0" : "56px 0",
    } as React.CSSProperties,

    kicker: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.16em",
      textTransform: "uppercase" as const,
      color: "#0369a1",
      marginBottom: 8,
    } as React.CSSProperties,

    h2: {
      fontSize: isMobile ? 38 : 50,
      lineHeight: 1.04,
      margin: "0 0 10px",
      letterSpacing: "-0.03em",
    } as React.CSSProperties,

    subtitle: {
      fontSize: 15,
      lineHeight: 1.8,
      color: "#64748b",
      maxWidth: 760,
      margin: 0,
    } as React.CSSProperties,

    tripRules: {
      background: "rgba(255,255,255,0.85)",
      border: "1px solid #dbeafe",
      borderRadius: 24,
      padding: isMobile ? 18 : 22,
      marginTop: 26,
      boxShadow: "0 3px 10px rgba(15,23,42,0.03)",
    } as React.CSSProperties,

    rulesGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
      gap: 12,
      marginTop: 14,
    } as React.CSSProperties,

    ruleCard: {
      background: "#f8fafc",
      borderRadius: 16,
      padding: "14px 16px",
      fontSize: 15,
      lineHeight: 1.6,
      color: "#334155",
    } as React.CSSProperties,

    dayCard: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "170px 1fr",
      gap: isMobile ? 14 : 22,
      background: "#fff",
      border: "1px solid #e2e8f0",
      borderRadius: 26,
      padding: isMobile ? 18 : 24,
      marginTop: 16,
      boxShadow: "0 3px 10px rgba(15,23,42,0.03)",
    } as React.CSSProperties,

    dayLabel: {
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: "0.16em",
      textTransform: "uppercase" as const,
      color: "#0369a1",
    } as React.CSSProperties,

    muted: {
      fontSize: 15,
      color: "#64748b",
      marginTop: 10,
      lineHeight: 1.45,
    } as React.CSSProperties,

    h3: {
      fontSize: isMobile ? 32 : 34,
      lineHeight: 1.08,
      margin: 0,
      letterSpacing: "-0.03em",
    } as React.CSSProperties,

    bulletsGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))",
      gap: 10,
      marginTop: 16,
    } as React.CSSProperties,

    bulletCard: {
      background: "#f8fafc",
      borderRadius: 16,
      padding: 14,
      fontSize: 14,
      lineHeight: 1.6,
      color: "#334155",
    } as React.CSSProperties,

    logisticsBox: {
      marginTop: 16,
      background: "#fefce8",
      border: "1px solid #fde68a",
      borderRadius: 18,
      padding: 16,
    } as React.CSSProperties,

    logisticsList: {
      margin: "10px 0 0 18px",
      padding: 0,
      lineHeight: 1.8,
      color: "#475569",
      fontSize: 14,
    } as React.CSSProperties,

    meetButton: {
      display: "inline-block",
      marginTop: 14,
      background: "#0f172a",
      color: "#fff",
      padding: "12px 15px",
      borderRadius: 14,
      textDecoration: "none",
      fontWeight: 700,
      fontSize: 14,
    } as React.CSSProperties,

    darkSection: {
      background: "#020617",
      color: "#fff",
      padding: isMobile ? "36px 0" : "56px 0",
      borderTop: "1px solid #0f172a",
      borderBottom: "1px solid #0f172a",
    } as React.CSSProperties,

    routeGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(4, minmax(0, 1fr))",
      gap: 14,
      marginTop: 22,
    } as React.CSSProperties,

    routeCard: {
      display: "block",
      textDecoration: "none",
      color: "#fff",
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: 24,
      padding: 18,
    } as React.CSSProperties,

    splitGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "1.05fr 0.95fr",
      gap: 28,
    } as React.CSSProperties,

    quickGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(2, minmax(0, 1fr))",
      gap: 12,
      marginTop: 18,
    } as React.CSSProperties,

    quickLink: {
      display: "block",
      textDecoration: "none",
      background: "#fff",
      color: "#0f172a",
      border: "1px solid #e2e8f0",
      borderRadius: 16,
      padding: "15px 16px",
      fontWeight: 600,
      boxShadow: "0 3px 10px rgba(15,23,42,0.03)",
    } as React.CSSProperties,

    whiteCard: {
      background: "#fff",
      border: "1px solid #e2e8f0",
      borderRadius: 22,
      padding: 22,
      boxShadow: "0 3px 10px rgba(15,23,42,0.03)",
    } as React.CSSProperties,

    attendanceGrid: {
      display: "grid",
      gridTemplateColumns: isMobile ? "1fr" : "repeat(3, minmax(0, 1fr))",
      gap: 16,
      marginTop: 20,
    } as React.CSSProperties,

    tagWrap: {
      display: "flex",
      flexWrap: "wrap",
      gap: 8,
      marginTop: 16,
    } as React.CSSProperties,
  };

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

              <h1 style={styles.h1}>Hawaii Trip HQ</h1>

              <p style={styles.lead}>
                Your single source of truth for the trip: itinerary, live map
                links, Friday island route, attendance, and real logistics that
                keep the group moving.
              </p>

              <div style={styles.buttonRow}>
                <a href="#itinerary" style={styles.buttonDark}>
                  View itinerary
                </a>
                <a href="#friday-route" style={styles.buttonLight}>
                  Open Friday route
                </a>
              </div>

              <div style={styles.tripRules}>
                <div style={styles.kicker}>Trip Rules</div>
                <div style={styles.rulesGrid}>
                  <div style={styles.ruleCard}>Be ready at van times.</div>
                  <div style={styles.ruleCard}>Miss the van = Uber 😂</div>
                  <div style={styles.ruleCard}>
                    Anchor events matter. Everything else is flexible.
                  </div>
                </div>
              </div>
            </div>

            <div style={styles.sideCard}>
              <div style={styles.sideTop}>
                <div>
                  <div style={{ ...styles.kicker, color: "#7dd3fc", marginBottom: 6 }}>
                    Home Base
                  </div>
                  <h2 style={{ margin: 0, fontSize: isMobile ? 30 : 32, lineHeight: 1.08 }}>
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
          <div style={styles.kicker}>Itinerary</div>
          <h2 style={styles.h2}>Day-by-day plan</h2>
          <p style={styles.subtitle}>
            Built to be easy on phones and detailed enough to keep the whole
            group aligned.
          </p>

          {days.map((item) => (
            <div key={item.day} style={styles.dayCard}>
              <div>
                <div style={styles.dayLabel}>{item.day}</div>
                <div style={styles.muted}>{item.time}</div>
              </div>

              <div>
                <h3 style={styles.h3}>{item.title}</h3>
                <p
                  style={{
                    ...styles.lead,
                    fontSize: 17,
                    marginTop: 10,
                    maxWidth: "100%",
                  }}
                >
                  {item.vibe}
                </p>

                <div style={styles.bulletsGrid}>
                  {item.bullets.map((bullet) => (
                    <div key={bullet} style={styles.bulletCard}>
                      {bullet}
                    </div>
                  ))}
                </div>

                <div style={styles.logisticsBox}>
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

                  <ul style={styles.logisticsList}>
                    {item.logistics.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  <a
                    href={item.meetLink}
                    target="_blank"
                    rel="noreferrer"
                    style={styles.meetButton}
                  >
                    {item.meetText}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="friday-route" style={styles.darkSection}>
        <div style={styles.container}>
          <div style={{ ...styles.kicker, color: "#7dd3fc" }}>Friday Route</div>
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

                <div
                  style={{
                    fontSize: 23,
                    fontWeight: 700,
                    marginTop: 10,
                    lineHeight: 1.15,
                  }}
                >
                  {stop.name}
                </div>

                <div
                  style={{
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "#cbd5e1",
                    marginTop: 10,
                  }}
                >
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
              <div style={styles.kicker}>Map Links &amp; Recs</div>
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
                <h3 style={{ ...styles.h3, fontSize: 30 }}>Transport plan</h3>
                <ul
                  style={{
                    lineHeight: 1.8,
                    color: "#475569",
                    paddingLeft: 20,
                    marginTop: 12,
                  }}
                >
                  <li>Use the vans as the default plan instead of juggling rideshares.</li>
                  <li>Friday and Sunday are both-vans days.</li>
                  <li>Saturday beach party and Monday luau can use staggered departures if needed.</li>
                </ul>
              </div>

              <div style={styles.whiteCard}>
                <h3 style={{ ...styles.h3, fontSize: 30 }}>Recommended brewery route</h3>
                <ul
                  style={{
                    lineHeight: 1.8,
                    color: "#475569",
                    paddingLeft: 20,
                    marginTop: 12,
                  }}
                >
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
          <div style={styles.kicker}>Attendance</div>
          <h2 style={styles.h2}>Who&apos;s attending what</h2>

          <div style={styles.attendanceGrid}>
            <div style={styles.whiteCard}>
              <h3 style={{ ...styles.h3, fontSize: 30 }}>
                Snorkel Crew ({snorkel.length})
              </h3>
              <div style={styles.tagWrap}>
                {snorkel.map((name) => (
                  <Tag
                    key={name}
                    background="#e0f2fe"
                    color="#0c4a6e"
                  >
                    {name}
                  </Tag>
                ))}
              </div>
            </div>

            <div style={styles.whiteCard}>
              <h3 style={{ ...styles.h3, fontSize: 30 }}>
                Brewery Crew ({brewery.length})
              </h3>
              <div style={styles.tagWrap}>
                {brewery.map((name) => (
                  <Tag
                    key={name}
                    background="#fef3c7"
                    color="#92400e"
                  >
                    {name}
                  </Tag>
                ))}
              </div>
            </div>

            <div style={styles.whiteCard}>
              <h3 style={{ ...styles.h3, fontSize: 30 }}>
                Luau Crew ({luau.length})
              </h3>
              <div style={styles.tagWrap}>
                {luau.map((name) => (
                  <Tag
                    key={name}
                    background="#dcfce7"
                    color="#166534"
                  >
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
