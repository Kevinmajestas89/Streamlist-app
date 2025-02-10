"use client"

import { useState, useEffect } from "react"
import type { Event } from "@/types"

export default function Events() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("events") || "[]")
    setEvents(storedEvents)
  }, [])

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Event Log</h1>
      <ul className="space-y-4">
        {events.map((event, index) => (
          <li key={index} className="bg-white shadow rounded-lg p-4">
            <p className="font-semibold">{event.type}</p>
            <p className="text-sm text-gray-600">{new Date(event.timestamp).toLocaleString()}</p>
            {event.data && (
              <pre className="mt-2 text-sm bg-gray-100 p-2 rounded">{JSON.stringify(event.data, null, 2)}</pre>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

