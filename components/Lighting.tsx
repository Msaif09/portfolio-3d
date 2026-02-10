"use client";

export default function Lighting() {
    return (
        <>
            {/* Ambient light for base illumination */}
            <ambientLight intensity={0.2} />

            {/* Green spotlights for dramatic effect */}
            <spotLight
                position={[5, 5, 5]}
                angle={0.3}
                penumbra={1}
                intensity={2}
                color="#3DDC84"
                castShadow
            />

            <spotLight
                position={[-5, 5, -5]}
                angle={0.3}
                penumbra={1}
                intensity={1.5}
                color="#39FF14"
                castShadow
            />

            {/* Point lights for neon glow */}
            <pointLight position={[0, 3, 0]} intensity={1} color="#3DDC84" />
            <pointLight position={[0, -3, 0]} intensity={0.5} color="#39FF14" />

            {/* Directional light for depth */}
            <directionalLight position={[10, 10, 5]} intensity={0.5} color="#ffffff" />
        </>
    );
}
