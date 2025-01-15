import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Welcome to EduApp</h1>
        <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">Empowering learners with cutting-edge educational resources and events. Start your journey to knowledge and success today.</p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/events">Explore Events</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/resources">Browse Resources</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="https://discord.gg/CxJXmJjHp5" target="_blank" rel="noopener noreferrer">
              <img 
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aebpHbgr3DYKbFw19tJu870ggogWFv.png" 
                alt="Discord" 
                className="w-5 h-5 mr-2 inline-block"
              />
              Join Our Discord
            </a>
          </Button>
        </div>
      </section>
      
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Start Your Learning Journey Today</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">Join thousands of learners and advance your skills with EduApp. Our platform offers a wide range of courses, expert instructors, and a supportive community.</p>
        <Button asChild size="lg" variant="secondary">
          <Link href="/signup">Sign Up Now</Link>
        </Button>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Upcoming Events</CardTitle>
              <CardDescription>Join our latest educational events</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <Link href="/events/1" className="text-blue-600 hover:underline font-semibold">Introduction to Machine Learning</Link>
                  <p className="text-sm text-gray-600">July 15, 2023</p>
                </li>
                <li>
                  <Link href="/events/2" className="text-blue-600 hover:underline font-semibold">Web Development Workshop</Link>
                  <p className="text-sm text-gray-600">July 22, 2023</p>
                </li>
                <li>
                  <Link href="/events/3" className="text-blue-600 hover:underline font-semibold">Data Science Seminar</Link>
                  <p className="text-sm text-gray-600">August 5, 2023</p>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost">
                <Link href="/events">View All Events</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Popular Resources</CardTitle>
              <CardDescription>Access our top educational materials</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li>
                  <Link href="/resources/1" className="text-blue-600 hover:underline font-semibold">Python Programming Guide</Link>
                  <p className="text-sm text-gray-600">Programming</p>
                </li>
                <li>
                  <Link href="/resources/2" className="text-blue-600 hover:underline font-semibold">Data Science Toolkit</Link>
                  <p className="text-sm text-gray-600">Data Science</p>
                </li>
                <li>
                  <Link href="/resources/3" className="text-blue-600 hover:underline font-semibold">Web Development Roadmap</Link>
                  <p className="text-sm text-gray-600">Web Development</p>
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button asChild variant="ghost">
                <Link href="/resources">View All Resources</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  )
}

