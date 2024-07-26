import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useTexture } from "@react-three/drei";

const carouselStyle = {
	width: "100%",
	height: "500px",
	position: "relative",
};

const CarouselItem = ({ textureUrl, position, rotation }) => {
	const texture = useTexture(textureUrl);
	const mesh = useRef();
	useFrame(() => {
		mesh.current.rotation.y += 0.01; // Rotate each item
	});
	return (
		<mesh ref={mesh} position={position} rotation={rotation}>
			<planeGeometry args={[5, 3]} />
			<meshBasicMaterial map={texture} />
		</mesh>
	);
};

const Carousel = ({ items }) => {
	const radius = 10;
	const angleStep = (2 * Math.PI) / items.length;
	const positions = items.map((_, index) => [
		Math.cos(index * angleStep) * radius,
		0,
		Math.sin(index * angleStep) * radius,
	]);
	return (
		<div style={carouselStyle}>
			<Canvas>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<OrbitControls />
				{items.map((item, index) => (
					<CarouselItem
						key={item.id}
						textureUrl={item.image}
						position={positions[index]}
						rotation={[0, angleStep * index, 0]}
					/>
				))}
			</Canvas>
		</div>
	);
};

export default Carousel;
