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
            <PresentationControls global>
                <Float rotationIntensity={0.4}>
                    <primitive position-y={-1.2} object={computer.scene} />
                </Float>
            </PresentationControls>
        </>
    );
}
