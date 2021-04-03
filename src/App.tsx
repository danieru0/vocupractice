import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Categories from './pages/Categories';
import CategoryForm from './pages/CategoryForm';
import WordForm from './pages/WordForm';
import Words from './pages/Words';
import Practice from './pages/Practice';
import NoFound from './pages/NoFound';

import Logo from './components/molecules/Logo';

const GlobalContainer = styled.div`
	width: 100%;
	height: 100vh;
	font-size: ${({theme}) => theme.fontSizeEm};
	background: ${({theme}) => theme.primary};
`

function App() {
	return (
		<GlobalContainer>
			<Logo />
			<Switch>
				<Route exact path="/">
					<Categories />
				</Route>
				<Route path="/addcategory">
					<CategoryForm />
				</Route>
				<Route path="/addword">
					<WordForm />
				</Route>
				<Route path="/category/:id">
					<Words />
				</Route>
				<Route path="/practice/:id">
					<Practice />
				</Route>
				<Route path="*">
					<NoFound />
				</Route>
			</Switch>
		</GlobalContainer>
  	);
}

export default App;
