'use client'

import React, { useState } from 'react'
import { ChevronRight, ChevronLeft, X } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import { motion, AnimatePresence } from 'framer-motion'
import getEvents from '@/app/api/events'
import { EventsResponse } from '@/app/api/events'

const EventCards = () => {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 4

  const {
    data: events,
    isLoading,
    isError,
  } = useQuery<EventsResponse>({
    queryKey: ['events'],
    staleTime: 6 * 60 * 60 * 1000, // 6 hour cache
    queryFn: getEvents,
  })

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const handleEventClick = (index: number) => {
    setSelectedEvent(index)
  }

  const closePopup = () => {
    setSelectedEvent(null)
  }

  if (isLoading) return <p className="py-10 text-center">Loading events...</p>
  if (isError || !events?.data)
    return <p className="py-10 text-center">Failed to load events.</p>
  if (events.data.length === 0)
    return <p className="py-10 text-center">No events available.</p>

  // Pagination calculations
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = events.data.slice(indexOfFirstItem, indexOfLastItem)
  const totalPages = Math.ceil(events.data.length / itemsPerPage)

  return (
    <div id="events" className="w-screen max-w-full bg-white px-4">
      {/* Title */}
      <div className="relative mt-10 mb-8 text-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 border-t border-gray-300"></div>
        </div>
        <h1 className="relative z-10 inline-block bg-white px-4 font-serif text-4xl text-gray-800">
          News and Events
        </h1>
      </div>

      <div className="container mx-auto">
        {/* Grid of event cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-10 sm:grid-cols-2"
          >
            {currentItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-40 overflow-hidden rounded-lg bg-white shadow-xs transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-md sm:h-80"
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_ASSET_URL}${item.image}`}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-fill"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent group-hover:bg-none" />
                <div className="absolute bottom-0 p-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleEventClick(indexOfFirstItem + index)}
                    className="mt-2 rounded-md bg-white/20 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/30 sm:text-sm"
                  >
                    View Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Pagination */}
        <motion.div className="mt-8 flex items-center justify-center gap-2">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </motion.button>

          {[...Array(totalPages)].map((_, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handlePageChange(index + 1)}
              className={`rounded-md px-3 py-2 text-sm font-medium transition-colors ${currentPage === index + 1
                ? 'bg-blue-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
                }`}
            >
              {index + 1}
            </motion.button>
          ))}

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="flex items-center rounded-md px-3 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 disabled:opacity-50"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </motion.button>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedEvent !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={closePopup}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative container w-full overflow-hidden rounded-xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-40 sm:h-full">
              <img
                src={`${process.env.NEXT_PUBLIC_ASSET_URL}${events.data[selectedEvent]?.image}`}
                alt={events.data[selectedEvent]?.title}
                className="h-full w-full object-fill"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            <div className="p-6 sm:p-8">
              <h3 className="text-sm font-bold text-gray-800 sm:text-3xl">
                {events.data[selectedEvent]?.title}
              </h3>
              <p className="mt-2 text-xs font-medium text-blue-600 sm:text-sm">
                {events.data[selectedEvent]?.date}
              </p>
              <div className="prose prose-sm sm:prose mt-2 text-left text-xs text-gray-700 sm:mt-4 sm:text-sm">
                {events.data[selectedEvent]?.description}
              </div>
            </div>
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 rounded-full bg-black/30 p-2 text-white transition-colors duration-200 hover:bg-black/50 focus:ring-2 focus:ring-white focus:outline-none"
            >
              <X className="h-5 w-5" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default EventCards
