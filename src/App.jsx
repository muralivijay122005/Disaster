import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <>
      <div
        className="min-h-screen gradient-animated"
        style={{
          width: '100%',
          margin: 0,
          padding: 0,

        }}
      >
        <Dashboard />
      </div>
    </>
  );
};

export default App;
