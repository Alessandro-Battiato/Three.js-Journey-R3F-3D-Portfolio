import { Float, Environment, OrbitControls, useGLTF } from "@react-three/drei";

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

            <OrbitControls makeDefault />

            <Float rotationIntensity={0.4}>
                <primitive position-y={-1.2} object={computer.scene} />
            </Float>
        </>
    );
}
