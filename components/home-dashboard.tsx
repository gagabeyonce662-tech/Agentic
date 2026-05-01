"use client"

import { useMemo, useState } from "react"
import { dashboardContent } from "@/content/dashboard"

type RangeKey = (typeof dashboardContent.topBar.ranges)[number]
type MetricKey = Lowercase<(typeof dashboardContent.topBar.metrics)[number]>

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] tracking-widest text-black/45 bg-black/[0.04]">
      {children}
    </span>
  )
}

export function HomeDashboard() {
  const [range, setRange] = useState<RangeKey>("Last 30 Days")
  const [metric, setMetric] = useState<MetricKey>("booked")

  const cards = dashboardContent.statCards[metric]
  const chartSeries = dashboardContent.chart.series[metric]

  const rangeMultiplier = useMemo(() => (range === "Last 7 Days" ? 0.25 : 1), [range])

  return (
    <section id={dashboardContent.section.id} className="py-24 px-6 md:px-12 lg:px-20 border-t border-black/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10">
          <Badge>{dashboardContent.section.tag}</Badge>
          <h2 className="mt-4 text-4xl md:text-5xl font-light tracking-tight leading-[1.05]">
            {dashboardContent.section.heading}
          </h2>
          <p className="mt-4 text-sm text-black/50 max-w-3xl leading-relaxed">{dashboardContent.section.description}</p>
        </div>

        <div className="rounded-2xl border border-black/[0.07] bg-white/90 shadow-[0_8px_24px_-4px_rgba(44,47,49,0.05)] overflow-hidden">
          <div className="px-6 py-5 border-b border-black/[0.06] flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h3 className="text-xl font-light text-black/90">{dashboardContent.topBar.title}</h3>
              <p className="text-sm text-black/45 mt-1">{dashboardContent.topBar.subtitle}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center rounded-full bg-black/[0.04] p-1">
                {dashboardContent.topBar.ranges.map((item) => (
                  <button
                    key={item}
                    onClick={() => setRange(item)}
                    className={`px-3 py-1.5 rounded-full text-xs transition-colors ${
                      range === item ? "bg-white border border-black/[0.08] text-black/80" : "text-black/45"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="flex items-center rounded-full bg-black/[0.04] p-1">
                {dashboardContent.topBar.metrics.map((item) => {
                  const value = item.toLowerCase() as MetricKey
                  return (
                    <button
                      key={item}
                      onClick={() => setMetric(value)}
                      className={`px-3 py-1.5 rounded-full text-xs transition-colors ${
                        metric === value ? "bg-white border border-black/[0.08] text-black/80" : "text-black/45"
                      }`}
                    >
                      {item}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="p-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {cards.map((card) => (
              <div key={card.label} className="rounded-xl border border-black/[0.06] bg-[#fcfcfb] p-4">
                <p className="text-[11px] tracking-widest uppercase text-black/45">{card.label}</p>
                <p className="text-3xl font-light mt-2 text-black/85">{card.value}</p>
                <p className="text-xs mt-1 text-emerald-600">{card.delta}</p>
              </div>
            ))}
          </div>

          <div className="px-6 pb-6 grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 rounded-xl border border-black/[0.06] p-5">
              <div className="mb-5">
                <h4 className="text-base font-medium text-black/85">{dashboardContent.chart.title}</h4>
                <p className="text-xs text-black/45 mt-1">{dashboardContent.chart.subtitle}</p>
              </div>

              <div className="h-72 w-full">
                <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 700 300">
                  <defs>
                    <linearGradient id="cxPrimary" x1="0%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#702ae1" stopOpacity="0.28" />
                      <stop offset="100%" stopColor="#702ae1" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient id="cxSecondary" x1="0%" x2="0%" y1="0%" y2="100%">
                      <stop offset="0%" stopColor="#b28cff" stopOpacity="0.22" />
                      <stop offset="100%" stopColor="#b28cff" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path d={chartSeries.secondaryPath} fill="url(#cxSecondary)" stroke="#b28cff" strokeWidth="2" />
                  <path d={chartSeries.primaryPath} fill="url(#cxPrimary)" stroke="#702ae1" strokeWidth="3" />
                </svg>
              </div>

              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#702ae1]" />
                    <span className="text-xs text-black/55">{chartSeries.primaryLabel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-sm bg-[#b28cff]" />
                    <span className="text-xs text-black/55">{chartSeries.secondaryLabel}</span>
                  </div>
                </div>
                <span className="text-xs text-black/40">
                  Forecast: {(120 * rangeMultiplier).toFixed(0)}% pacing
                </span>
              </div>

              <div className="mt-2 grid grid-cols-7 gap-2">
                {dashboardContent.chart.labels.map((label) => (
                  <span key={label} className="text-[10px] font-medium uppercase text-black/35 text-center">
                    {label}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-black/[0.06] p-5">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm tracking-widest uppercase text-black/65">{dashboardContent.activity.title}</h4>
                <button className="text-xs text-[#702ae1] hover:underline">View all</button>
              </div>
              <div className="space-y-4">
                {dashboardContent.activity.rows.map((row) => (
                  <div key={`${row.account}-${row.time}`} className="pb-3 border-b border-black/[0.05] last:border-0">
                    <p className="text-xs font-semibold text-black/85">{row.account}</p>
                    <p className="text-[11px] text-black/45 mt-1">{row.event}</p>
                    <div className="flex items-center justify-between mt-2">
                      <span className={`text-[10px] font-semibold ${row.status === "Completed" ? "text-emerald-600" : "text-[#702ae1]"}`}>
                        {row.status}
                      </span>
                      <span className="text-[10px] text-black/35">{row.time}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <button className="px-5 py-2.5 bg-[#111] text-white text-xs tracking-widest rounded-xl hover:bg-[#333] transition-colors">
            {dashboardContent.section.primaryCta}
          </button>
          <button className="px-5 py-2.5 border border-black/10 text-black/60 text-xs tracking-widest rounded-xl hover:border-black/25 hover:text-black hover:bg-black/[0.04] transition-colors">
            {dashboardContent.section.secondaryCta}
          </button>
        </div>
      </div>
    </section>
  )
}
