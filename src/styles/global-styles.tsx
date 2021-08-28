import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
	@font-face {
		font-family: "Open Sans";
		src: url("/fonts/OpenSans-Regular.ttf");
	}

	@font-face {
		font-family: "Open Sans Semibold";
		src: url("/fonts/OpenSans-Semibold.ttf");
	}

	@font-face {
		font-family: "Open Sans Bold";
		src: url("/fonts/OpenSans-Bold.ttf");
	}

	@font-face {
		font-family: "Open Sans Extra Bold";
		src: url("/fonts/OpenSans-ExtraBold.ttf");
	}

	@font-face {
		font-family: "Open Sans Light";
		src: url("/fonts/OpenSans-Light.ttf");
	}

	@font-face {
		font-family: "Staatliches";
		src: url("/fonts/Staatliches-Regular.ttf");
	}

	html, body {
		height: 100%;
		margin: auto;
	}

	body {
		font-family: "Open Sans", -apple-system, BlinkMacSystemFont, sans-serif;
		/* Better Font Rendering =========== */
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	#__next {
		height: 100%;
	}

	.grecaptcha-badge {
    	z-index: 2;
	}
`;