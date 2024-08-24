import {
    PresentationControls,
    Float,
    Environment,
    useGLTF,
} from "@react-three/drei";

export default function Experience() {
    // CC0 licensed free model by pmndrs market
    const computer = useGLTF(
        "https://threejs-journey.com/resources/models/macbook_model.gltf"
    );

    return (
        <>
            {/*The preset already gives the necessary light to the computer model, and also gives the buildings reflections on the screen when turned off*/}
            <Environment preset="city" />

            <color attach="background" args={["#241a1a"]} />

            {/*
                The presentation controls is a component that internally uses the library Spring for pleasant animations,
                and we currently have removed the OrbitControls as to reduce the freedom of the user to drag and drop the model
                in fact, now the user can still do this but then the model returns to it's original position
                
                The global attribute makes the user able to drag and drop the model from anywhere, even from outside the model "scope"
                it makes sense to be able to do this since the model will be the main component of our page
            */}
            <PresentationControls
                global
                rotation={[0.13, 0.1, 0]}
                polar={[-0.4, 0.2]} // vertical drag and drop
                azimuth={[-1, 0.75]} // horizontal drag and drop
                config={{ mass: 2, tension: 400 }} // this changes what happens while you HOLD the drag and drop action, the parameters you gave makes the animation feel "elastic" while you move the model around
                snap={{ mass: 4, tension: 400 }} // this makes the model go back to it's original position
            >
                <Float rotationIntensity={0.4}>
                    <primitive position-y={-1.2} object={computer.scene} />
                </Float>
            </PresentationControls>
        </>
    );
}
