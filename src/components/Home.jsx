const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-title">React Hooks Examples</h1>

      <div className="home-content">
        <p className="home-paragraph">
          Welcome to the React Hooks Examples application! This project demonstrates various React hooks and their usage patterns.
        </p>

        <p className="home-paragraph">
          Use the navigation menu above to explore different hook examples:
        </p>

        <ul className="home-list">
          <li className="home-list-item">
            <strong className="hook-name">useState</strong> - Examples of state management in functional components
          </li>
          <li className="home-list-item">
            <strong className="hook-name">useEffect</strong> - Examples of side effects in functional components
          </li>
          <li className="home-list-item">
            <strong className="hook-name">useContext</strong> - Examples of context usage in functional components
          </li>
        </ul>

        <p className="home-paragraph">
          Each example includes explanations and interactive demonstrations to help you understand how these hooks work.
        </p>
      </div>
    </div>
  );
};

export default Home;
