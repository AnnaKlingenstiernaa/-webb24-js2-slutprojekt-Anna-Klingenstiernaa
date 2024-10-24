
import {createRoot} from "react-dom/client"
import { App } from "./components/App"// hämtar vår funktion

const root= createRoot(document.querySelector('#root'));
root.render(<App/>)