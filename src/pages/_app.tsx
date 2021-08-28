import type { AppProps } from "next/app";
import React from "react";
import { GlobalStyle } from "src/styles/global-styles";

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
	return (
		<>
			<GlobalStyle />
			<Component {...pageProps} />
		</>
	);
};

export default App;
