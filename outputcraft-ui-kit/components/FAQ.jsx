'use client'
import { useState } from 'react'

function PlusIcon() {
  return (
    <svg viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="6" y1="0" x2="6" y2="12" />
      <line x1="0" y1="6" x2="12" y2="6" />
    </svg>
  )
}

export default function FAQAccordion({ items = [] }) {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="oc-faq-list">
      {items.map((item, i) => (
        <div key={i} className={`oc-faq-item${openIndex === i ? ' open' : ''}`}>
          <button className="oc-faq-q" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
            <span className="oc-faq-q-text">{item.q}</span>
            <span className="oc-faq-icon"><PlusIcon /></span>
          </button>
          <div className="oc-faq-a">
            <p>{item.a}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
