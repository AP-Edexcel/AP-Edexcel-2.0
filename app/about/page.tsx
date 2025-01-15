import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-center">About EduApp</h1>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p>At EduApp, our mission is to empower learners worldwide by providing access to high-quality educational resources and events. We believe that education is the key to personal growth and societal progress, and we're committed to making learning accessible, engaging, and effective for everyone.</p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Our Story</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Founded in 2020, EduApp started as a small initiative to bridge the gap between traditional education and the rapidly evolving digital landscape. What began as a platform for sharing online courses has grown into a comprehensive ecosystem for learners, educators, and industry experts to connect, collaborate, and grow together.</p>
        </CardContent>
      </Card>
      <Card className="mb-8">
        <CardHeader>
          <CardTitle>What We Offer</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-6 space-y-2">
            <li>Curated online courses from top educators and institutions</li>
            <li>Live webinars and virtual workshops on cutting-edge topics</li>
            <li>A vast library of educational resources, from e-books to interactive tutorials</li>
            <li>Networking opportunities with industry professionals and fellow learners</li>
            <li>Personalized learning paths to help you achieve your educational goals</li>
          </ul>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Join Our Community</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Whether you're a student, a professional looking to upskill, or an lifelong learner, EduApp has something for you. Join our growing community of over 100,000 learners and start your journey towards knowledge and success today!</p>
        </CardContent>
      </Card>
    </div>
  )
}

