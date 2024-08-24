import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.jsx";

const root = ReactDOM.createRoot(document.querySelector("#root"));

// In order to fix the mobile gestures issues when dragging the model, you need to apply the touch-action none to the div that is implicitly injected by R3F as a wrapper of the Canvas element, and you can do so by giving a className to the Canvas component that's why you gave an R3F className

root.render(
    <Canvas
        className="r3f"
        camera={{
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [-3, 1.5, 4],
        }}
    >
        <Experience />
    </Canvas>
);
