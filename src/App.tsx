import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

import Categories from './pages/Categories';
import CategoryForm from './pages/CategoryForm';
import WordForm from './pages/WordForm';
import Words from './pages/Words';
import Practice from './pages/Practice';
import NoFound from './pages/NoFound';

import Logo from './components/molecules/Logo';
import ImportExportBtsn from './components/molecules/ImportExportBtns';

library.add(faEdit, faTrash);

const GlobalContainer = styled.div`
	width: 100%;
	min-height: 100vh;
	font-size: ${({theme}) => theme.fontSizeEm};
	background: ${({theme}) => theme.primary};
	padding: 50px;
	display: flex;
	flex-direction: column;
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
				<Route exact path="/category/:id/add">
					<WordForm type="add" />
				</Route>
				<Route exact path="/edit/:id">
					<WordForm type="edit" />
				</Route>
				<Route exact path="/category/:id">
					<Words />
				</Route>
				<Route exact path="/practice/:id">
					<Practice />
				</Route>
				<Route path="*">
					<NoFound />
				</Route>
			</Switch>
			<ImportExportBtsn />
		</GlobalContainer>
  	);
}

export default App;
