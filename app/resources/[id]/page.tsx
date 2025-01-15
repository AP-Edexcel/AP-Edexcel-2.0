import { notFound } from 'next/navigation'

const resources = [
  { id: 1, title: 'Python Programming Guide', description: 'A comprehensive guide to Python programming for beginners.', category: 'Programming', content: 'This guide covers Python basics, data structures, functions, and object-oriented programming.' },
  { id: 2, title: 'Data Science Toolkit', description: 'Essential tools and libraries for data science projects.', category: 'Data Science', content: 'Learn about pandas, NumPy, scikit-learn, and other essential libraries for data analysis and machine learning.' },
  { id: 3, title: 'Web Development Roadmap', description: 'A step-by-step guide to becoming a full-stack web developer.', category: 'Web Development', content: 'This roadmap covers HTML, CSS, JavaScript, backend technologies, and popular frameworks like React and Node.js.' },
  { id: 4, title: 'Machine Learning Algorithms', description: 'In-depth explanations of popular machine learning algorithms.', category: 'Machine Learning', content: 'Dive deep into algorithms such as linear regression, decision trees, neural networks, and more.' },
  { id: 5, title: 'UI/UX Design Principles', description: 'Learn the fundamentals of creating user-friendly interfaces.', category: 'Design', content: 'Explore key principles of user interface and user experience design, including layout, color theory, and usability.' },
]

export default async function ResourceDetails({ params }: { params: { id: string } }) {
  const resource = resources.find(r => r.id === parseInt(params.id))

  if (!resource) {
    notFound()
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{resource.title}</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <p className="text-gray-600 mb-4">Category: {resource.category}</p>
        <p className="mb-4">{resource.description}</p>
        <h2 className="text-xl font-semibold mb-2">Content:</h2>
        <p>{resource.content}</p>
        <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Download Resource</button>
      </div>
    </div>
  )
}

