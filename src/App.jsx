import { Routes, Route } from "react-router-dom";
import { Counter } from "./hooks/useState/counter/counter.jsx";
import Navigation from "./components/Navigation.jsx";
import Home from "./components/Home.jsx";
import {PassingInitializerFunction} from "./hooks/useState/PassingInitializerOrState/PassingInitializerFunction.jsx";
import {PassingInitialState} from "./hooks/useState/PassingInitializerOrState/PassingInitialState.jsx";
import {ResettingStateWithAkey} from "./hooks/useState/ResettingStateWithAkey/ResettingStateWithAkey.jsx";
import {
    StoringInformationFromPreviousRenders
} from "./hooks/useState/StoringInformationFromPreviousRenders/StoringInformationFromPreviousRenders.jsx";
import {RequestAPI} from "./hooks/useEffect/RequestAPI.jsx";
import {WindowWidth} from "./hooks/useEffect/windowWidth.jsx";
import {ChatWrapper} from "./hooks/useEffect/ConnectingToAchatServer/ConnectingToAchatServer.jsx";
import {ListeningGlobalBrowserEvent} from "./hooks/useEffect/ListeningGlobalBrowserEvent.jsx";

function App() {
    return (
        <div className="app-container">
            <div className="content-wrapper">
                <Navigation />
                <Routes>
                    {/* Home route */}
                    <Route path="/" element={<Home />} />

                    {/* useState routes */}
                    <Route path="/use-state/counter" element={<Counter />} />
                    <Route path="/use-state/passing-initializer-function" element={<PassingInitializerFunction />} />
                    <Route path="/use-state/passing-initial-state-directly" element={<PassingInitialState />} />
                    <Route path="/use-state/resetting-state-with-akey" element={<ResettingStateWithAkey/>} />
                    <Route path="/use-state/storing-information-from-previous-renders" element={<StoringInformationFromPreviousRenders/>} />

                    {/* useEffect routes */}
                    <Route path={'/use-effect/api-request'} element={<RequestAPI/>}/>
                    <Route path={'/use-effect/window-width'} element={<WindowWidth/>}/>
                    <Route path={'/use-effect/connecting-to-chat-server'} element={<ChatWrapper/>}/>
                    <Route path={'/use-effect/listening-global-browser-event'} element={<ListeningGlobalBrowserEvent/>}/>


                    {/* useContext routes */}
                    <Route path="/use-context" element={
                        <div className="coming-soon-container">
                            <h2 className="coming-soon-title">useContext Examples</h2>
                            <p className="coming-soon-text">Coming soon!</p>
                        </div>
                    } />
                    {/* Add more useContext example routes here as they are developed */}
                    {/* RequestAPI: <Route path="/use-context/example1" element={<UseContextExample1 />} /> */}
                </Routes>
            </div>
        </div>
    )
}

export default App
