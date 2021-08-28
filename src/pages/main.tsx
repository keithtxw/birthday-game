import React, { useState } from "react";
import { MainOptions } from "src/components/main-options";
import { SideOptions } from "src/components/side-options";
import { Colors } from "src/styles/colors";
import styled from "styled-components";

const Main = () => {
	const [chosen, setChosen] = useState<number | undefined>(undefined);
	const [pickedOptions, setPickOptions] = useState<number[]>([]);

	const handleOptionClick = (value: number) => {
		if (!chosen) {
			setChosen(value);
		} else {
			const newOptions = [...pickedOptions, value];
			setPickOptions(newOptions);
		}

	}

	return (
		<Container>
			<MainSection>
				<LogoSection>
					<Image src="/img/deal-no-deal-bg.jpg" />
				</LogoSection>
				<MainOptions
					pickedOptions={pickedOptions}
					chosenNumber={chosen}
					onClickOption={handleOptionClick}
				/>
			</MainSection>
			<SideSection>
				<SideTitle>Prizes</SideTitle>
				<SideOptions pickedOptions={pickedOptions} />
			</SideSection>
		</Container>
	);
}

export default Main;

const Container = styled.div`
	position: relative;
	background: black;
	height: 100%;
	width: 100%;
	display: flex;
`;

const LogoSection = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-bottom: 4rem;
`;

const Image = styled.img`
	height: 12rem;
	width: auto;
`;

const MainSection = styled.div`
	display: flex;
	flex: 1;
	width: 100%;
	flex-direction: column;
	align-items: center;
	padding-top: 4rem;
`;

const SideTitle = styled.h1`
	font-family: "Staatliches";
	font-size: 3rem;
	color: ${Colors.Main};
	margin-bottom: 3rem;
`;

const SideSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	padding: 4rem 2rem;
	background: #252525;
`;

const Overlay = styled.div`
	position: absolute;
	background: rgba(0, 0, 0, .5);
	top: 0;
	left: 0;
	height: 100%;
	width: 100%;
	backdrop-filter: blur(10px);
`;