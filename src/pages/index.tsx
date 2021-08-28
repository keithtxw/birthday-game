import { useRouter } from "next/router";
import { Colors } from "src/styles/colors";
import styled from "styled-components";

const Home = () => {

	const router = useRouter();

	const handleClick = () => {
		router.push("/main");
	};

	return (
		<Container>
			<Image src="/img/deal-no-deal-bg.jpg" />
			<Title>Yi Yi Birthday Special</Title>
			<Button onClick={handleClick}>Begin</Button>
		</Container>
	);
};

export default Home;

const Container = styled.div`
	background: black;
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const Image = styled.img`
	height: 15rem;
	width: auto;
`;

const Title = styled.h1`
	font-family: "Staatliches";
	color: ${Colors.Main};
	font-size: 3rem;
	letter-spacing: .3rem;
`;

const Button = styled.button`
	font-family: "Staatliches";
	font-size: 2rem;
	padding: 1rem 2rem;
	background: transparent;
	color: ${Colors.Main};
	border: 5px solid ${Colors.Main};
	border-radius: 4px;
	cursor: pointer;
	margin-top: 2rem;

	:hover,
	:active {
		background: ${Colors.Main};
		color: black;
	}
`;

