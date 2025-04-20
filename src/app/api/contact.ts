'use server'

// Type definitions
type MessageInput = {
  name: string
  email: string
  message: string
}

type MessageResponse = {
  success: boolean
  data?: {
    id: number
    name: string
    email: string
    message: string
    date_updated: string
  }
  error?: string
}

// In-memory storage for rate limiting
// Using a Map with timestamp as key for rolling window approach
const submissionTracker: {
  submissions: Array<number> // Timestamps of submissions
} = {
  submissions: [],
}

// Rate limit constants
const MAX_SUBMISSIONS = 10
const WINDOW_MS = 24 * 60 * 60 * 1000 // 24 hours in milliseconds

export default async function addMessage(
  message: MessageInput
): Promise<MessageResponse> {
  // Clean up old submissions (older than 24 hours)
  const now = Date.now()
  submissionTracker.submissions = submissionTracker.submissions.filter(
    (timestamp) => now - timestamp < WINDOW_MS
  )

  // Check if rate limit exceeded
  if (submissionTracker.submissions.length >= MAX_SUBMISSIONS) {
    return {
      success: false,
      error:
        'Rate limit exceeded: Maximum 10 submissions allowed in a 24-hour period.',
    }
  }

  // Add current timestamp to submissions
  submissionTracker.submissions.push(now)

  // Make API request
  const baseUrl = process.env.DIRECTUS_URL || 'http://gyan.fragnel.edu.in:8055'
  const url = `${baseUrl}/items/messages`

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(message),
    })

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    const result = await response.json()

    return {
      success: true,
      data: result.data,
    }
  } catch (error) {
    // Remove the submission count since it failed
    submissionTracker.submissions.pop()

    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    }
  }
}
