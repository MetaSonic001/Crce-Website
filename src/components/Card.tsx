'use client'
import React from 'react'

interface CardProps {
  className?: string
  children: React.ReactNode
}

export const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={`rounded-lg border border-gray-200 bg-white shadow-md ${className}`}
    >
      {children}
    </div>
  )
}

interface CardContentProps {
  className?: string
  children: React.ReactNode
}

export const CardContent = ({ className, children }: CardContentProps) => {
  return <div className={`p-6 ${className}`}>{children}</div>
}
