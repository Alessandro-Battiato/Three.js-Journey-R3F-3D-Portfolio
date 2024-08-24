import { OrbitControls, useGLTF } from "@react-three/drei";

export default function Experience() {
    // CC0 licensed free model by pmndrs market
    const computer = useGLTF(
        "https://threejs-journey.com/resources/models/macbook_model.gltf"
    );

    return (
        <>
            <color attach="background" args={["#241a1a"]} />

            <OrbitControls makeDefault />

            <mesh>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>

            <primitive object={computer.scene} />
        </>
    );
}
