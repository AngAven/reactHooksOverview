import { Routes, Route } from "react-router-dom";
import { Counter } from "./hooks/useState/counter/counter.jsx";
import { FormObject } from "./hooks/useState/Form/FormObject.jsx";
import Navigation from "./components/Navigation.jsx";
import Home from "./components/Home.jsx";
import {PassingInitializerFunction} from "./hooks/useState/PassingInitializerOrState/PassingInitializerFunction.jsx";
import {PassingInitialState} from "./hooks/useState/PassingInitializerOrState/PassingInitialState.jsx";
import {ResettingStateWithAkey} from "./hooks/useState/ResettingStateWithAkey/ResettingStateWithAkey.jsx";

function PassingIn() {
    return null;
}

function App() {
    return (
        <div className="min-h-screen bg-gray-100 py-8 px-4">
            <div className="max-w-4xl mx-auto">
                <Navigation />
                <Routes>
                    {/* Home route */}
                    <Route path="/" element={<Home />} />

                    {/* useState routes */}
                    <Route path="/use-state/counter" element={<Counter />} />
                    <Route path="/use-state/form" element={<FormObject />} />
                    <Route path="/use-state/passing-initializer-function" element={<PassingInitializerFunction />} />
                    <Route path="/use-state/passing-initial-state-directly" element={<PassingInitialState />} />
                    <Route path="/use-state/resetting-state-with-akey" element={<ResettingStateWithAkey/>} />

                    {/* useEffect routes */}
                    <Route path="/use-effect" element={
                        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
                            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">useEffect Examples</h2>
                            <p className="text-center text-gray-600">Coming soon!</p>
                        </div>
                    } />
                    {/* Add more useEffect example routes here as they are developed */}
                    {/* Example: <Route path="/use-effect/example1" element={<UseEffectExample1 />} /> */}

                    {/* useContext routes */}
                    <Route path="/use-context" element={
                        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-md">
                            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">useContext Examples</h2>
                            <p className="text-center text-gray-600">Coming soon!</p>
                        </div>
                    } />
                    {/* Add more useContext example routes here as they are developed */}
                    {/* Example: <Route path="/use-context/example1" element={<UseContextExample1 />} /> */}
                </Routes>
            </div>
        </div>
    )
}

export default App
