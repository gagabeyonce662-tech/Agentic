export const dashboardContent = {
  section: {
    id: "dashboard-proof",
    tag: "LIVE DASHBOARD PROOF",
    heading: "See how agencies track calls to booked appointments.",
    description:
      "This is a live-style preview of client subaccount performance with qualification, booking, and efficiency metrics.",
    primaryCta: "START NOW",
    secondaryCta: "TRY LIVE DEMO",
  },
  topBar: {
    title: "Client Subaccount Overview",
    subtitle: "Real-time performance view across your active client accounts.",
    ranges: ["Last 7 Days", "Last 30 Days"] as const,
    metrics: ["Calls", "Qualified", "Booked"] as const,
  },
  statCards: {
    calls: [
      { label: "Connected Calls", value: "42,860", delta: "+3.1%" },
      { label: "Avg Call Duration", value: "01:48", delta: "+0:12" },
      { label: "Show-Up Rate", value: "78.4%", delta: "+1.5%" },
      { label: "Cost / Booking", value: "$12.90", delta: "-$1.20" },
    ],
    qualified: [
      { label: "Qualified Leads", value: "17,540", delta: "+4.7%" },
      { label: "Qualification Rate", value: "40.9%", delta: "+2.2%" },
      { label: "Objection Recovery", value: "26.3%", delta: "+1.8%" },
      { label: "Cost / Qualified Lead", value: "$8.35", delta: "-$0.76" },
    ],
    booked: [
      { label: "Appointments Booked", value: "15,284", delta: "+5.4%" },
      { label: "Booking Rate", value: "35.6%", delta: "+2.9%" },
      { label: "Reschedule Recovery", value: "18.7%", delta: "+1.1%" },
      { label: "No-Show Reduction", value: "12.4%", delta: "+0.9%" },
    ],
  },
  chart: {
    title: "Call Funnel Analytics",
    subtitle: "Connected, qualified, and booked trends over time.",
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    series: {
      calls: {
        primaryLabel: "Connected Calls",
        secondaryLabel: "Dropped Calls",
        primaryPath: "M0,250 C100,220 200,260 300,180 C400,120 500,150 600,80 L700,100 L700,300 L0,300 Z",
        secondaryPath: "M0,280 C100,260 200,290 300,250 C400,210 500,240 600,200 L700,220 L700,300 L0,300 Z",
      },
      qualified: {
        primaryLabel: "Qualified Calls",
        secondaryLabel: "Unqualified Calls",
        primaryPath: "M0,265 C100,235 200,250 300,195 C400,155 500,170 600,110 L700,128 L700,300 L0,300 Z",
        secondaryPath: "M0,286 C100,272 200,286 300,258 C400,230 500,248 600,214 L700,230 L700,300 L0,300 Z",
      },
      booked: {
        primaryLabel: "Booked Appointments",
        secondaryLabel: "Not Booked",
        primaryPath: "M0,275 C100,252 200,262 300,220 C400,180 500,192 600,145 L700,160 L700,300 L0,300 Z",
        secondaryPath: "M0,292 C100,282 200,288 300,270 C400,250 500,262 600,235 L700,246 L700,300 L0,300 Z",
      },
    },
  },
  activity: {
    title: "Recent Activity",
    rows: [
      { account: "Dental North", event: "Appointment booked - Duration 12:45", status: "Completed", time: "2 mins ago" },
      { account: "FitFlex Gyms", event: "Reschedule request - Priority high", status: "Pending", time: "15 mins ago" },
      { account: "Prime Insurance", event: "Lead qualified - Score 84", status: "Completed", time: "21 mins ago" },
    ],
  },
} as const
