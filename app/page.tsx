const snorkel = [
  "Cynthia",
  "Ruby",
  "Lindsay",
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
  "Ruby",
  "Lindsay",
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
  "Ruby",
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
    note: "Finish the day back in Waikiki for the 7:45 PM fireworks.",
    href: "https://maps.google.com/?q=Hilton+Hawaiian+Village+Waikiki+Fireworks",
  },
];

const breweryLinks = [
  {
    label: "Honolulu Beerworks",
    href: "https://maps.google.com/?q=Honolulu+Beerworks",
  },
  {
    label: "Aloha Beer Co.",
    href: "https://maps.google.com/?q=Aloha+Beer+Company+Honolulu",
  },
  {
    label: "Waikiki Brewing Company – Kakaʻako",
    href: "https://maps.google.com/?q=Waikiki+Brewing+Company+Kakaako",
  },
];

export default function Page() {
  return (
    <main className="page">
      <style>{`
        :root{
          --navy:#0f172a;
          --slate:#475569;
          --muted:#64748b;
          --line:#e2e8f0;
          --card:#ffffff;
          --sky:#e0f2fe;
          --teal:#0f766e;
          --gold:#f59e0b;
          --sand:#fff7ed;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          margin: 0;
          color: var(--navy);
          font-family: Inter, Arial, Helvetica, sans-serif;
          background:
            radial-gradient(circle at top left, rgba(34,197,94,.10), transparent 24%),
            radial-gradient(circle at top right, rgba(249,115,22,.14), transparent 20%),
            linear-gradient(180deg, #dff4ff 0%, #ffffff 28%, #fff7ed 100%);
        }

        a {
          color: inherit;
        }

        .page {
          min-height: 100vh;
        }

        .container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .hero {
          padding: 72px 0 56px;
          border-bottom: 1px solid var(--line);
          background:
            linear-gradient(rgba(255,255,255,.78), rgba(255,255,255,.88)),
            linear-gradient(135deg, #dbeafe 0%, #fef3c7 35%, #fde68a 50%, #fbcfe8 100%);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.25fr .85fr;
          gap: 28px;
          align-items: end;
        }

        .pills {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 18px;
        }

        .pill {
          display: inline-block;
          padding: 8px 14px;
          border-radius: 999px;
          background: rgba(255,255,255,.8);
          color: #075985;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .12em;
          text-transform: uppercase;
          box-shadow: 0 6px 20px rgba(15,23,42,.05);
        }

        h1 {
          margin: 0 0 14px;
          font-size: 66px;
          line-height: 1.02;
          letter-spacing: -.04em;
          max-width: 760px;
        }

        .lead {
          margin: 0;
          max-width: 760px;
          font-size: 20px;
          line-height: 1.7;
          color: #334155;
        }

        .button-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 26px;
        }

        .btn,
        .btn-light,
        .btn-teal {
          display: inline-block;
          text-decoration: none;
          border-radius: 16px;
          padding: 14px 18px;
          font-weight: 700;
          transition: transform .15s ease, box-shadow .15s ease, opacity .15s ease;
        }

        .btn:hover,
        .btn-light:hover,
        .btn-teal:hover,
        .link-card:hover,
        .stop-card:hover,
        .day-card:hover,
        .calendar-card:hover {
          transform: translateY(-2px);
        }

        .btn {
          background: var(--navy);
          color: white;
          box-shadow: 0 10px 24px rgba(15,23,42,.14);
        }

        .btn-light {
          background: white;
          color: var(--navy);
          border: 1px solid #cbd5e1;
        }

        .btn-teal {
          background: var(--teal);
          color: white;
          box-shadow: 0 10px 24px rgba(15,118,110,.18);
        }

        .hero-card {
          background: rgba(15,23,42,.96);
          color: white;
          border-radius: 30px;
          padding: 24px;
          box-shadow: 0 24px 48px rgba(15,23,42,.18);
        }

        .hero-card h2 {
          margin: 0;
          font-size: 30px;
          line-height: 1.08;
          color: white;
        }

        .hero-top {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: flex-start;
        }

        .kicker {
          margin-bottom: 8px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: #0369a1;
        }

        .hero-card .kicker {
          color: #7dd3fc;
        }

        .rating-box {
          min-width: 90px;
          padding: 14px 16px;
          border-radius: 18px;
          text-align: center;
          background: rgba(255,255,255,.10);
        }

        .rating-box strong {
          display: block;
          font-size: 30px;
        }

        .hero-subtext {
          color: #cbd5e1;
          margin-top: 10px;
          margin-bottom: 0;
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 18px;
        }

        .stat {
          padding: 14px;
          border-radius: 18px;
          background: rgba(255,255,255,.10);
        }

        .stat strong {
          display: block;
          font-size: 28px;
        }

        .stat span {
          color: #cbd5e1;
          font-size: 14px;
        }

        .rules {
          margin-top: 28px;
          padding: 22px;
          border-radius: 24px;
          border: 1px solid #dbeafe;
          background: rgba(255,255,255,.85);
          box-shadow: 0 8px 24px rgba(15,23,42,.04);
        }

        .rules-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-top: 12px;
        }

        .rule {
          background: #f8fafc;
          border-radius: 16px;
          padding: 14px 16px;
          line-height: 1.6;
          color: #334155;
          font-size: 15px;
        }

        .section {
          padding: 56px 0;
        }

        .section h2 {
          margin: 0 0 10px;
          font-size: 48px;
          line-height: 1.04;
          letter-spacing: -.03em;
        }

        .subtitle {
          margin: 0;
          max-width: 760px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.8;
        }

        .calendar-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-top: 20px;
        }

        .calendar-card {
          background: white;
          border: 1px solid var(--line);
          border-radius: 24px;
          padding: 20px;
          box-shadow: 0 6px 18px rgba(15,23,42,.04);
        }

        .calendar-day {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: #0369a1;
          margin-bottom: 10px;
        }

        .calendar-card h3 {
          margin: 0 0 10px;
          font-size: 24px;
          line-height: 1.15;
        }

        .calendar-card ul {
          margin: 0;
          padding-left: 18px;
          color: #475569;
          line-height: 1.8;
          font-size: 14px;
        }

        .highlight-yellow {
          background: linear-gradient(180deg, #fef9c3 0%, #ffffff 100%);
        }

        .highlight-green {
          background: linear-gradient(180deg, #dcfce7 0%, #ffffff 100%);
        }

        .day-card {
          margin-top: 16px;
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 22px;
          background: white;
          border: 1px solid var(--line);
          border-radius: 28px;
          padding: 24px;
          box-shadow: 0 6px 18px rgba(15,23,42,.04);
        }

        .day-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .16em;
          text-transform: uppercase;
          color: #0369a1;
        }

        .day-time {
          margin-top: 10px;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.45;
        }

        .day-card h3 {
          margin: 0;
          font-size: 34px;
          line-height: 1.08;
          letter-spacing: -.03em;
        }

        .vibe {
          margin-top: 10px;
          color: #334155;
          font-size: 17px;
          line-height: 1.7;
        }

        .bullet-grid {
          margin-top: 16px;
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 10px;
        }

        .bullet {
          background: #f8fafc;
          border-radius: 16px;
          padding: 14px;
          font-size: 14px;
          line-height: 1.6;
          color: #334155;
        }

        .logistics {
          margin-top: 16px;
          background: #fefce8;
          border: 1px solid #fde68a;
          border-radius: 18px;
          padding: 16px;
        }

        .logistics .kicker {
          color: #a16207;
          margin-bottom: 8px;
        }

        .logistics ul {
          margin: 8px 0 0 18px;
          padding: 0;
          color: #475569;
          font-size: 14px;
          line-height: 1.8;
        }

        .logistics-links {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-top: 14px;
        }

        .route-section {
          background:
            linear-gradient(180deg, rgba(2,6,23,.98), rgba(15,23,42,.98));
          color: white;
          padding: 56px 0;
          border-top: 1px solid #0f172a;
          border-bottom: 1px solid #0f172a;
        }

        .route-section .kicker { color: #7dd3fc; }
        .route-section h2 { color: white; }
        .route-section .subtitle { color: #94a3b8; }

        .route-grid {
          display: grid;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 14px;
          margin-top: 22px;
        }

        .stop-card {
          display: block;
          text-decoration: none;
          color: white;
          background: rgba(255,255,255,.05);
          border: 1px solid rgba(255,255,255,.1);
          border-radius: 24px;
          padding: 18px;
        }

        .stop-num {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: #7dd3fc;
        }

        .stop-card h3 {
          margin: 10px 0 0;
          font-size: 23px;
          line-height: 1.15;
          color: white;
        }

        .stop-card p {
          margin: 10px 0 0;
          font-size: 14px;
          line-height: 1.7;
          color: #cbd5e1;
        }

        .stop-card span {
          display: inline-block;
          margin-top: 16px;
          font-weight: 700;
          color: white;
        }

        .split-grid {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          gap: 28px;
        }

        .link-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
          margin-top: 18px;
        }

        .link-card {
          display: block;
          text-decoration: none;
          background: white;
          color: var(--navy);
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 16px;
          font-weight: 600;
          box-shadow: 0 6px 18px rgba(15,23,42,.04);
        }

        .stack {
          display: grid;
          gap: 16px;
        }

        .info-card {
          background: white;
          border: 1px solid var(--line);
          border-radius: 24px;
          padding: 22px;
          box-shadow: 0 6px 18px rgba(15,23,42,.04);
        }

        .info-card h3 {
          margin: 0;
          font-size: 30px;
          line-height: 1.08;
        }

        .info-card ul {
          margin: 12px 0 0 20px;
          padding: 0;
          line-height: 1.8;
          color: #475569;
        }

        .attendance-wrap {
          background: rgba(255,255,255,.70);
        }

        .attendance-grid {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 16px;
          margin-top: 20px;
        }

        .attendance-card {
          background: white;
          border: 1px solid var(--line);
          border-radius: 24px;
          padding: 22px;
          box-shadow: 0 6px 18px rgba(15,23,42,.04);
        }

        .attendance-card h3 {
          margin: 0;
          font-size: 30px;
          line-height: 1.08;
        }

        .tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 16px;
        }

        .tag {
          display: inline-block;
          border-radius: 999px;
          padding: 8px 12px;
          font-size: 14px;
        }

        .tag-blue { background: #e0f2fe; color: #0c4a6e; }
        .tag-gold { background: #fef3c7; color: #92400e; }
        .tag-green { background: #dcfce7; color: #166534; }

        .footer-note {
          margin-top: 18px;
          color: var(--muted);
          font-size: 14px;
        }

        @media (max-width: 980px) {
          h1 { font-size: 48px; }
          .hero-grid,
          .split-grid,
          .day-card,
          .route-grid,
          .attendance-grid,
          .rules-grid,
          .bullet-grid,
          .link-grid,
          .calendar-grid {
            grid-template-columns: 1fr;
          }
          .stats {
            grid-template-columns: 1fr 1fr;
          }
          .hero-top {
            flex-direction: column;
          }
          .section h2 {
            font-size: 38px;
          }
          .day-card h3,
          .info-card h3,
          .attendance-card h3 {
            font-size: 28px;
          }
        }

        @media (max-width: 640px) {
          .container { padding: 0 18px; }
          .hero { padding: 44px 0 34px; }
          h1 { font-size: 40px; }
          .lead { font-size: 18px; }
          .section,
          .route-section {
            padding: 38px 0;
          }
          .day-card,
          .hero-card,
          .attendance-card,
          .info-card,
          .rules,
          .calendar-card {
            padding: 18px;
          }
        }
      `}</style>

      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <div className="pills">
                <span className="pill">Cohen&apos;s Hawaii Grad Trip</span>
                <span className="pill">Surfjack HQ</span>
                <span className="pill">2 Vans</span>
              </div>

              <h1>Hawaii Grad Trip HQ</h1>

              <p className="lead">
                Your beachy, practical, one-stop trip page for plans, maps,
                meetup times, attendance, and everything people actually need.
              </p>

              <div className="button-row">
                <a href="#calendar" className="btn">
                  Trip at a glance
                </a>
                <a href="#itinerary" className="btn-light">
                  Full itinerary
                </a>
              </div>

              <div className="rules">
                <div className="kicker">Trip Rules</div>
                <div className="rules-grid">
                  <div className="rule">Be ready at van times.</div>
                  <div className="rule">Miss the van = Uber 😂</div>
                  <div className="rule">
                    Anchor events matter. Everything else is flexible.
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-top">
                <div>
                  <div className="kicker">Home Base</div>
                  <h2>The Surfjack Hotel &amp; Swim Club</h2>
                  <p className="hero-subtext">412 Lewers St, Honolulu, HI</p>
                </div>

                <div className="rating-box">
                  <strong>4.5★</strong>
                  <div style={{ fontSize: 12, color: "#cbd5e1" }}>Hotel vibe</div>
                </div>
              </div>

              <div className="stats">
                <div className="stat">
                  <strong>2</strong>
                  <span>15-passenger vans</span>
                </div>
                <div className="stat">
                  <strong>18</strong>
                  <span>Snorkel crew</span>
                </div>
                <div className="stat">
                  <strong>20</strong>
                  <span>Brewery crew</span>
                </div>
              </div>

              <div className="button-row">
                <a
                  href="https://surfjack.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-light"
                >
                  Open hotel website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="calendar" className="section">
        <div className="container">
          <div className="kicker">Trip at a Glance</div>
          <h2>Quick calendar view</h2>
          <p className="subtitle">
            A simple visual overview of the trip before the full itinerary and logistics below.
          </p>

          <div className="calendar-grid">
            <div className="calendar-card">
              <div className="calendar-day">Thursday · May 14</div>
              <h3>Arrival Day</h3>
              <ul>
                <li>Flight arrival</li>
                <li>Explore Waikiki</li>
                <li>Hotel check-in</li>
                <li>Cocktail hour</li>
                <li>Poolside catered dinner</li>
                <li>Bar hop Waikiki</li>
              </ul>
            </div>

            <div className="calendar-card">
              <div className="calendar-day">Friday · May 15</div>
              <h3>Island Tour + Fireworks</h3>
              <ul>
                <li>Early birds</li>
                <li>Depart for island tour ~9:00 AM</li>
                <li>Return ~4:00 PM</li>
                <li>Free time</li>
                <li>7:45 PM Waikiki fireworks</li>
                <li>Dinner nearby / late crew</li>
              </ul>
            </div>

            <div className="calendar-card highlight-yellow">
              <div className="calendar-day">Saturday · May 16</div>
              <h3>Graduation + Beach Party</h3>
              <ul>
                <li>Early breakfast</li>
                <li>Leave 7:30 AM for graduation</li>
                <li>9:00 AM commencement</li>
                <li>Return to hotel</li>
                <li>Leave for beach at 2:00 PM</li>
                <li>Grad party on the beach</li>
              </ul>
            </div>

            <div className="calendar-card highlight-green">
              <div className="calendar-day">Sunday · May 17</div>
              <h3>Snorkel + Brewery Day</h3>
              <ul>
                <li>Leave Surfjack at 9:45 AM</li>
                <li>Arrive before 10:15 AM</li>
                <li>Three Tiki Sailing snorkel cruise</li>
                <li>Free time after</li>
                <li>Dinner / optional brewery night</li>
              </ul>
            </div>

            <div className="calendar-card">
              <div className="calendar-day">Monday · May 18</div>
              <h3>Flex Day + Luau</h3>
              <ul>
                <li>Free time / beach / excursion</li>
                <li>Optional luau planning</li>
                <li>Browse and book an excursion</li>
                <li>Easy group dinner or luau</li>
              </ul>
            </div>

            <div className="calendar-card">
              <div className="calendar-day">Tuesday · May 19</div>
              <h3>Departure Day</h3>
              <ul>
                <li>Hugs & kisses</li>
                <li>Airport runs</li>
                <li>Depart for flights</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="itinerary" className="section">
        <div className="container">
          <div className="kicker">Itinerary</div>
          <h2>Day-by-day plan</h2>
          <p className="subtitle">
            Clean enough to skim on a phone, detailed enough to keep the whole
            group aligned.
          </p>

          <div className="day-card">
            <div>
              <div className="day-label">Thursday</div>
              <div className="day-time">Arrivals throughout the day</div>
            </div>
            <div>
              <h3>Arrival Day</h3>
              <div className="vibe">
                Settle in, grab a drink, and ease into island mode.
              </div>

              <div className="bullet-grid">
                <div className="bullet">Check in at The Surfjack Hotel &amp; Swim Club</div>
                <div className="bullet">Use the vans once everyone is in place</div>
                <div className="bullet">Casual Waikiki hang</div>
                <div className="bullet">No heavy structure tonight</div>
              </div>

              <div className="logistics">
                <div className="kicker">Logistics</div>
                <ul>
                  <li>Main rally point: Surfjack</li>
                  <li>Loose meetup around 6:00–7:00 PM</li>
                  <li>Light first night, keep it easy</li>
                </ul>
                <div className="logistics-links">
                  <a
                    href="https://maps.google.com/?q=The+Surfjack+Hotel+%26+Swim+Club+Honolulu"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Open Surfjack
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="day-card">
            <div>
              <div className="day-label">Friday</div>
              <div className="day-time">
                Leave Surfjack: 8:30 AM • Fireworks: 7:45 PM
              </div>
            </div>
            <div>
              <h3>Island Loop Tour + Fireworks</h3>
              <div className="vibe">
                A full clockwise island adventure day ending back in Waikiki.
              </div>

              <div className="bullet-grid">
                <div className="bullet">Start at Surfjack Hotel</div>
                <div className="bullet">Drive north and circle Oʻahu clockwise</div>
                <div className="bullet">
                  Stops include Dole, Matsumoto&apos;s, Turtle Beach, Waimea Bay,
                  Waimea Falls, Kualoa Ranch, and scenic lookouts
                </div>
                <div className="bullet">Return to Waikiki for fireworks</div>
              </div>

              <div className="logistics">
                <div className="kicker">Logistics</div>
                <ul>
                  <li>Be downstairs and ready by 8:20 AM</li>
                  <li>Both vans roll at 8:30 AM</li>
                  <li>Bring water, sunscreen, towel, and a change of clothes</li>
                </ul>
                <div className="logistics-links">
                  <a
                    href="https://maps.google.com/?q=The+Surfjack+Hotel+%26+Swim+Club+Honolulu"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Meet at Surfjack
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="day-card">
            <div>
              <div className="day-label">Saturday</div>
              <div className="day-time">
                Graduation: 9:00 AM • Beach party: 2:00–6:30 PM
              </div>
            </div>
            <div>
              <h3>Graduation + Magic Island Beach Party</h3>
              <div className="vibe">
                Celebrate in the morning, then shift fully into beach mode.
              </div>

              <div className="bullet-grid">
                <div className="bullet">Morning commencement at UH Mānoa</div>
                <div className="bullet">Midday reset at Surfjack</div>
                <div className="bullet">Afternoon beach party at Magic Island</div>
                <div className="bullet">Main social hang of the trip</div>
              </div>

              <div className="logistics">
                <div className="kicker">Logistics</div>
                <ul>
                  <li>Leave early for graduation parking and traffic</li>
                  <li>Beach crew target arrival: 2:00 PM</li>
                  <li>Bring towels, drinks, snacks, and a speaker</li>
                </ul>
                <div className="logistics-links">
                  <a
                    href="https://maps.google.com/?q=University+of+Hawaii+at+Manoa"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-light"
                  >
                    Open UH Mānoa
                  </a>
                  <a
                    href="https://maps.google.com/?q=Magic+Island+Honolulu"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Open Magic Island
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="day-card">
            <div>
              <div className="day-label">Sunday</div>
              <div className="day-time">
                Leave Surfjack: 9:45 AM • Arrive before 10:15 AM • Brewery meetup: 5:30 PM
              </div>
            </div>
            <div>
              <h3>Snorkel + Brewery Day</h3>
              <div className="vibe">
                Real booking locked in: morning sail + snorkel, chill reset, then brewery night.
              </div>

              <div className="bullet-grid">
                <div className="bullet">Booked with Three Tiki Sailing</div>
                <div className="bullet">Depart Surfjack at 9:45 AM</div>
                <div className="bullet">Arrive before 10:15 AM at the harbor</div>
                <div className="bullet">Everyone attending needs to complete the waiver</div>
              </div>

              <div className="logistics">
                <div className="kicker">Logistics</div>
                <ul>
                  <li>Both vans leave Surfjack at 9:45 AM sharp</li>
                  <li>Wear swimsuit or have it ready</li>
                  <li>Bring towel, sunscreen, and anything you need for the boat</li>
                  <li>Everyone must complete the waiver before arrival</li>
                </ul>
                <div className="logistics-links">
                  <a
                    href="https://threetikisailing.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-light"
                  >
                    Three Tiki Sailing
                  </a>
                  <a
                    href="https://maps.app.goo.gl/ySWmAFFtH2nVoNSh9"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Open snorkel location
                  </a>
                  <a
                    href="https://fareharbor.com/waivers?shortname=threetikisailing&bookingUuid=64dcc2d8-9ca0-4691-80ff-67b8c334d569&source=email-booking-confirmation"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-teal"
                  >
                    Complete waiver
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="day-card">
            <div>
              <div className="day-label">Monday</div>
              <div className="day-time">Open daytime • Optional luau in the evening</div>
            </div>
            <div>
              <h3>Flex Day + Optional Luau</h3>
              <div className="vibe">
                Choose-your-own-adventure day, with luau still open until you book one.
              </div>

              <div className="bullet-grid">
                <div className="bullet">Beach, Pearl Harbor, or Kualoa Ranch</div>
                <div className="bullet">Optional luau for interested group</div>
                <div className="bullet">Everyone else free for Waikiki dinner or exploring</div>
                <div className="bullet">No hard daytime structure</div>
              </div>

              <div className="logistics">
                <div className="kicker">Logistics</div>
                <ul>
                  <li>Flexible daytime, no heavy coordination</li>
                  <li>Use TripAdvisor as the placeholder luau planning link for now</li>
                  <li>Once booked, swap in the final luau location and time</li>
                </ul>
                <div className="logistics-links">
                  <a
                    href="https://www.tripadvisor.com/Attraction_Products-g60982-t11924-zfg11872-a_contentId.125154035963+14162497346-Honolulu_Oahu_Hawaii.html"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Browse luau options
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="day-card">
            <div>
              <div className="day-label">Tuesday</div>
              <div className="day-time">Travel home</div>
            </div>
            <div>
              <h3>Departure Day</h3>
              <div className="vibe">Victory lap.</div>

              <div className="bullet-grid">
                <div className="bullet">Pack up</div>
                <div className="bullet">Airport runs</div>
                <div className="bullet">One last coffee before wheels up</div>
                <div className="bullet">Final room sweep before leaving</div>
              </div>

              <div className="logistics">
                <div className="kicker">Logistics</div>
                <ul>
                  <li>Keep airport departure times in mind</li>
                  <li>Use vans efficiently for airport runs</li>
                  <li>Do one last check before leaving the hotel</li>
                </ul>
                <div className="logistics-links">
                  <a
                    href="https://maps.google.com/?q=Daniel+K.+Inouye+International+Airport"
                    target="_blank"
                    rel="noreferrer"
                    className="btn"
                  >
                    Open HNL Airport
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="friday-route" className="route-section">
        <div className="container">
          <div className="kicker">Friday Route</div>
          <h2>Clockwise island loop</h2>
          <p className="subtitle">
            Start at Surfjack, head north, keep circling clockwise, and finish
            back in Waikiki for fireworks.
          </p>

          <div className="route-grid">
            {fridayStops.map((stop, index) => (
              <a
                key={stop.name}
                href={stop.href}
                target="_blank"
                rel="noreferrer"
                className="stop-card"
              >
                <div className="stop-num">Stop {index + 1}</div>
                <h3>{stop.name}</h3>
                <p>{stop.note}</p>
                <span>Open map →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split-grid">
            <div>
              <div className="kicker">Essential Links</div>
              <h2>Quick opens</h2>
              <p className="subtitle">
                Fast links for places people will actually need during the trip.
              </p>

              <div className="link-grid">
                <a className="link-card" href="https://surfjack.com/" target="_blank" rel="noreferrer">
                  Surfjack Hotel
                </a>
                <a className="link-card" href="https://maps.google.com/?q=Magic+Island+Honolulu" target="_blank" rel="noreferrer">
                  Magic Island
                </a>
                <a className="link-card" href="https://maps.google.com/?q=University+of+Hawaii+at+Manoa" target="_blank" rel="noreferrer">
                  UH Mānoa
                </a>
                <a className="link-card" href="https://threetikisailing.com/" target="_blank" rel="noreferrer">
                  Three Tiki Sailing
                </a>
                <a className="link-card" href="https://maps.app.goo.gl/ySWmAFFtH2nVoNSh9" target="_blank" rel="noreferrer">
                  Snorkel Location
                </a>
                <a className="link-card" href="https://fareharbor.com/waivers?shortname=threetikisailing&bookingUuid=64dcc2d8-9ca0-4691-80ff-67b8c334d569&source=email-booking-confirmation" target="_blank" rel="noreferrer">
                  Snorkel Waiver
                </a>
                <a className="link-card" href="https://maps.google.com/?q=Honolulu+Beerworks" target="_blank" rel="noreferrer">
                  Honolulu Beerworks
                </a>
                <a className="link-card" href="https://www.tripadvisor.com/Attraction_Products-g60982-t11924-zfg11872-a_contentId.125154035963+14162497346-Honolulu_Oahu_Hawaii.html" target="_blank" rel="noreferrer">
                  Luau Options
                </a>
              </div>
            </div>

            <div className="stack">
              <div className="info-card">
                <h3>Transport plan</h3>
                <ul>
                  <li>Use the vans as the default plan instead of juggling rideshares.</li>
                  <li>Friday and Sunday are both-vans days.</li>
                  <li>Sunday snorkel departure is locked: leave Surfjack at 9:45 AM.</li>
                  <li>Saturday beach party and Monday luau can use staggered departures if needed.</li>
                </ul>
              </div>

              <div className="info-card">
                <h3>Recommended brewery route</h3>
                <ul>
                  {breweryLinks.map((place) => (
                    <li key={place.label}>
                      <a href={place.href} target="_blank" rel="noreferrer">
                        {place.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="info-card">
                <h3>Recommended restaurants</h3>
                <ul>
                  <li>
                    <a href="https://paiafishmarket.com/menu/" target="_blank" rel="noreferrer">
                      Paia Fish Market
                    </a>{" "}
                    — casual, fresh seafood, great for groups
                  </li>
                  <li>
                    <a href="https://www.marugameudon.com/?olonwp=JjBtp_vMLk25gkYh_bnoiQ" target="_blank" rel="noreferrer">
                      Marugame Udon
                    </a>{" "}
                    — iconic, affordable, always solid
                  </li>
                  <li>
                    <a href="https://www.dukeslanehawaii.com/" target="_blank" rel="noreferrer">
                      Duke&apos;s Lane Market & Eatery
                    </a>{" "}
                    — central, easy, flexible for groups
                  </li>
                  <li>
                    <a href="https://kfoodus.com/" target="_blank" rel="noreferrer">
                      K Food
                    </a>{" "}
                    — casual Korean option
                  </li>
                  <li>
                    <a href="https://waikikifoodhall.com/" target="_blank" rel="noreferrer">
                      Waikiki Food Hall
                    </a>{" "}
                    — great when everyone wants something different
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="kicker">Optional Adventures</div>
          <h2>Explore More</h2>
          <p className="subtitle">
            Extra options for flex time, low-key exploring, and anyone who wants to do a little more.
          </p>

          <div className="link-grid">
            <a
              className="link-card"
              href="https://www.tripadvisor.com/Attraction_Review-g60982-d104662-Reviews-Pearl_Harbor_National_Memorial-Honolulu_Oahu_Hawaii.html"
              target="_blank"
              rel="noreferrer"
            >
              Pearl Harbor
            </a>

            <a
              className="link-card"
              href="https://www.tripadvisor.com/Attraction_Review-g60982-d107673-Reviews-Diamond_Head_State_Monument-Honolulu_Oahu_Hawaii.html"
              target="_blank"
              rel="noreferrer"
            >
              Hike Diamond Head
            </a>

            <a
              className="link-card"
              href="https://www.tripadvisor.com/Attraction_Review-g60982-d561035-Reviews-Manoa_Falls-Honolulu_Oahu_Hawaii.html"
              target="_blank"
              rel="noreferrer"
            >
              Hike Manoa Falls
            </a>

            <a
              className="link-card"
              href="https://www.tripadvisor.com/Attraction_Review-g60982-d131980-Reviews-Iolani_Palace-Honolulu_Oahu_Hawaii.html"
              target="_blank"
              rel="noreferrer"
            >
              Iolani Palace
            </a>

            <a
              className="link-card"
              href="https://www.tripadvisor.com/AttractionProductReview-g29222-d23961237-Kualoa_Ranch_Jurassic_Adventure_Tour-Oahu_Hawaii.html"
              target="_blank"
              rel="noreferrer"
            >
              Kualoa Ranch Jurassic Tour
            </a>

            <a
              className="link-card"
              href="https://www.tripadvisor.com/Attraction_Review-g60982-d131986-Reviews-Bishop_Museum-Honolulu_Oahu_Hawaii.html"
              target="_blank"
              rel="noreferrer"
            >
              Bishop Museum
            </a>

            <a
              className="link-card"
              href="https://www.tripadvisor.com/Attraction_Review-g60653-d107578-Reviews-Honolulu_Botanical_Gardens-Kaneohe_Oahu_Hawaii.html"
              target="_blank"
              rel="noreferrer"
            >
              Honolulu Botanical Gardens
            </a>

            <a
              className="link-card"
              href="https://www.tripadvisor.com/Attraction_Review-g60659-d105817-Reviews-Dole_Plantation-Wahiawa_Oahu_Hawaii.html"
              target="_blank"
              rel="noreferrer"
            >
              Dole Plantation
            </a>

            <a
              className="link-card"
              href="https://www.tripadvisor.com/Attraction_Review-g29222-d207512-Reviews-North_Shore-Oahu_Hawaii.html"
              target="_blank"
              rel="noreferrer"
            >
              North Shore
            </a>

            <a
              className="link-card"
              href="https://www.tripadvisor.com/Attraction_Review-g60647-d146822-Reviews-Waimea_Bay-Haleiwa_Oahu_Hawaii.html"
              target="_blank"
              rel="noreferrer"
            >
              Waimea Bay
            </a>

            <a
              className="link-card"
              href="https://www.tripadvisor.com/Attraction_Review-g60982-d254540-Reviews-Waikiki_Beach-Honolulu_Oahu_Hawaii.html"
              target="_blank"
              rel="noreferrer"
            >
              Waikiki Beach
            </a>
          </div>
        </div>
      </section>

      <section className="section attendance-wrap">
        <div className="container">
          <div className="kicker">Attendance</div>
          <h2>Who&apos;s attending what</h2>
          <p className="subtitle">
            Quick view of the main activity groups based on the form responses.
          </p>

          <div className="attendance-grid">
            <div className="attendance-card">
              <h3>Snorkel Crew ({snorkel.length})</h3>
              <div className="tags">
                {snorkel.map((name) => (
                  <span key={name} className="tag tag-blue">
                    {name}
                  </span>
                ))}
              </div>
            </div>

            <div className="attendance-card">
              <h3>Brewery Crew ({brewery.length})</h3>
              <div className="tags">
                {brewery.map((name) => (
                  <span key={name} className="tag tag-gold">
                    {name}
                  </span>
                ))}
              </div>
            </div>

            <div className="attendance-card">
              <h3>Luau Crew ({luau.length})</h3>
              <div className="tags">
                {luau.map((name) => (
                  <span key={name} className="tag tag-green">
                    {name}
                  </span>
                ))}
              </div>
              <p className="footer-note">
                Luau still unbooked — using TripAdvisor as the planning link for now.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
