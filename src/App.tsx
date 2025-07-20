import React from 'react'

// Example reusable button component (optional)
const Button = ({ text }: { text: string }) => {
  return (
    <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
      {text}
    </button>
  )
}

const App: React.FC = () => {
  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-xl max-w-md w-full p-8 text-center">
        {/* Logo or Hero Icon */}
        <div className="text-4xl font-bold text-blue-600 mb-4">🌟 Hello World</div>

        {/* Subtext */}
        <p className="text-gray-700 text-base mb-6">
          Welcome to your first deployed React + Tailwind app! 🚀
        </p>

        {/* Reusable Button */}
        <Button text="Learn More" />
      </div>
    </main>
  )
}

export default App