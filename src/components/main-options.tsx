import { FaStar } from "react-icons/fa";
import { OPTIONS_ARRANGEMENT } from "src/data/game-data";
import { Colors } from "src/styles/colors";
import styled, { css } from "styled-components";

interface Props {
	chosenNumber?: number;
	pickedOptions: number[];
	onClickOption?: (value: number) => void;
}

export const MainOptions = (props: Props) => {

	const { pickedOptions, chosenNumber, onClickOption } = props;

	const handleClickOption = (value: number) => {
		if (onClickOption) onClickOption(value);
	};

	const renderOptions = () => {
		return OPTIONS_ARRANGEMENT.map((option, index) => {
			const selected = pickedOptions.includes(option);
			return (
				<Option key={index} selected={selected} onClick={() => handleClickOption(option)}>
					<OptionLabel selected={selected}>$ {option}</OptionLabel>
					<OptionCover selected={selected} chosen={chosenNumber === option}>
						<OptionLabel>{index + 1}</OptionLabel>
						{chosenNumber === option && <ChosenIcon />}
					</OptionCover>
				</Option>
			);
		});
	}

	return (
		<Container>
			{renderOptions()}
		</Container>
	);

};

// =============================================================================
// STYLE INTERFACE
// =============================================================================
interface OptionProps {
	selected?: boolean;
	chosen?: boolean;
}

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 1.5rem;
`;

const Option = styled.div<OptionProps>`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1.5rem;
	width: 12rem;
	background: #252525;
	border-radius: 4px;
	cursor: pointer;
`;

const OptionCover = styled.div<OptionProps>`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: ${Colors.Main};
	border-radius: 4px;
	display: flex;
	justify-content: center;
	align-items: center;
	opacity: ${props => props.selected ? 0 : 1};
	transition: opacity 200ms ease-in-out;

	:hover {
		background: ${Colors.MainHover};
	}

	${props => {
		if (props.chosen) {
			return css`
				background: #04F0B6;
				:hover {
					background: #5CF3CE;
				}
			`;
		}
	}}
`;

const OptionLabel = styled.span<OptionProps>`
	font-family: "Staatliches";
	font-size: 3rem;
	color: ${props => props.selected ? Colors.Main : "black"};
	text-align: center;
`;

const ChosenIcon = styled(FaStar)`
	position: relative;
	color: black;
	font-size: 2rem;
	margin-left: 1rem;
`;