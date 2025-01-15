import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const resources = [
  { id: 1, title: 'Python Programming Guide', description: 'A comprehensive guide to Python programming for beginners.', category: 'Programming' },
  { id: 2, title: 'Data Science Toolkit', description: 'Essential tools and libraries for data science projects.', category: 'Data Science' },
  { id: 3, title: 'Web Development Roadmap', description: 'A step-by-step guide to becoming a full-stack web developer.', category: 'Web Development' },
  { id: 4, title: 'Machine Learning Algorithms', description: 'In-depth explanations of popular machine learning algorithms.', category: 'Machine Learning' },
  { id: 5, title: 'UI/UX Design Principles', description: 'Learn the fundamentals of creating user-friendly interfaces.', category: 'Design' },
]

export default function Resources() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-8 text-center">Educational Resources</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {resources.map((resource) => (
          <Card key={resource.id}>
            <CardHeader>
              <CardTitle>{resource.title}</CardTitle>
              <CardDescription>{resource.category}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{resource.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/resources/${resource.id}`}>Access Resource</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

