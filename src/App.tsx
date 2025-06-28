import "./App.css";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <div className="text-4xl text-center mt-10">
        React and Redux RTK Query project with Typescript
      </div>
      <div className="text-center mt-5 flex flex-col items-center">
        <span className="text-2xl">Welcome to the React Redux App!</span>
        <Button className="mt-5">Click Me</Button>
      </div>
    </>
  );
}

export default App;
