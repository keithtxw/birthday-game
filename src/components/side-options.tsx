import { OPTIONS } from "src/data/game-data";
import { Colors } from "src/styles/colors";
import styled from "styled-components";

interface Props {
	pickedOptions: number[];
}

export const SideOptions = (props: Props) => {

	const { pickedOptions } = props;

	const renderOptions = () => {
		return OPTIONS.map((option, index) => {
			const selected = pickedOptions.includes(option);
			return (
				<Option key={index} selected={selected}>
					<OptionLabel selected={selected}>$</OptionLabel>
					<OptionLabel selected={selected}>{option}</OptionLabel>
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
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

const Option = styled.div<OptionProps>`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: .5rem;
	width: 12rem;
	margin-bottom: 1rem;
	background: ${props => props.selected ? "transparent" : Colors.Main};
	border-radius: 4px;
	${props => {
		if (props.selected) {
			return `
				border: 3px solid #969696;
			`;
		} else {
			return `
				border: 3px solid transparent;
			`
		}
	}}
`;

const OptionLabel = styled.span<OptionProps>`
	font-family: "Staatliches";
	font-size: 1.8rem;
	color: ${props => props.selected ? "#969696" : "black"};
	text-align: center;
`;