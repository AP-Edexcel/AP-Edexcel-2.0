import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const events = [
  { id: 1, title: 'Introduction to AI', date: 'July 15, 2025', description: 'Learn the basics of machine learning algorithms and their applications.' },
  { id: 2, title: 'Web Development Workshop', date: 'July 22, 2025', description: 'Hands-on workshop covering HTML, CSS, and JavaScript fundamentals.' },
  { id: 3, title: 'Data Science Seminar', date: 'August 5, 2025', description: 'Explore the latest trends and tools in data science and analytics.' },
  { id: 4, title: 'Mobile App Development Bootcamp', date: 'August 12, 2025', description: 'Intensive bootcamp on building mobile apps for iOS and Android.' },
  { id: 5, title: 'Cybersecurity Fundamentals', date: 'August 19, 2025', description: 'Learn essential cybersecurity concepts and best practices.' },
]

export default function Events() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Upcoming Events</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>{event.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{event.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/events/${event.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

