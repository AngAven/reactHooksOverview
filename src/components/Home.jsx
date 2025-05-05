const Home = () => {
  return (
    <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">React Hooks Examples</h1>
      
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-4">
          Welcome to the React Hooks Examples application! This project demonstrates various React hooks and their usage patterns.
        </p>
        
        <p className="text-lg text-gray-700 mb-4">
          Use the navigation menu above to explore different hook examples:
        </p>
        
        <ul className="list-disc pl-6 mb-6 space-y-2">
          <li className="text-gray-700">
            <strong className="text-indigo-600">useState</strong> - Examples of state management in functional components
          </li>
          <li className="text-gray-700">
            <strong className="text-indigo-600">useEffect</strong> - Examples of side effects in functional components
          </li>
          <li className="text-gray-700">
            <strong className="text-indigo-600">useContext</strong> - Examples of context usage in functional components
          </li>
        </ul>
        
        <p className="text-lg text-gray-700">
          Each example includes explanations and interactive demonstrations to help you understand how these hooks work.
        </p>
      </div>
    </div>
  );
};

export default Home;