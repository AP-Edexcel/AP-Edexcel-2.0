import { notFound } from 'next/navigation'

const events = [
  { id: 1, title: 'Introduction to Machine Learning', date: 'July 15, 2023', description: 'Learn the basics of machine learning algorithms and their applications.', location: 'Online', instructor: 'Dr. Jane Smith' },
  { id: 2, title: 'Web Development Workshop', date: 'July 22, 2023', description: 'Hands-on workshop covering HTML, CSS, and JavaScript fundamentals.', location: 'Tech Hub, 123 Main St', instructor: 'John Doe' },
  { id: 3, title: 'Data Science Seminar', date: 'August 5, 2023', description: 'Explore the latest trends and tools in data science and analytics.', location: 'Online', instructor: 'Dr. Michael Johnson' },
  { id: 4, title: 'Mobile App Development Bootcamp', date: 'August 12, 2023', description: 'Intensive bootcamp on building mobile apps for iOS and Android.', location: 'Code Academy, 456 Oak Ave', instructor: 'Sarah Williams' },
  { id: 5, title: 'Cybersecurity Fundamentals', date: 'August 19, 2023', description: 'Learn essential cybersecurity concepts and best practices.', location: 'Online', instructor: 'Robert Brown' },
]

export default function EventDetails({ params }: { params: { id: string } }) {
  const event = events.find(e => e.id === parseInt(params.id))

  if (!event) {
    notFound()
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{event.title}</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-600 mb-4">Date: {event.date}</p>
        <p className="text-gray-600 mb-4">Location: {event.location}</p>
        <p className="text-gray-600 mb-4">Instructor: {event.instructor}</p>
        <p className="mb-4">{event.description}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Register for Event</button>
      </div>
    </div>
  )
}

