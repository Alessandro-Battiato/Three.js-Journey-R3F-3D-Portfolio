import { OrbitControls } from "@react-three/drei";

export default function Experience() {
    return (
        <>
            <color attach="background" args={["#241a1a"]} />

            <OrbitControls makeDefault />

            <mesh>
                <boxGeometry />
                <meshNormalMaterial />
            </mesh>
        </>
    );
}
