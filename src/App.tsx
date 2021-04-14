import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash, faFileImport, faFileExport, faSearch } from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from 'react-redux';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import { loadVocabulary } from './features/vocabulary/vocabularySlice';

import { loadFromLocalStorage } from './helpers/localStorageHandler';

import Categories from './pages/Categories';
import CategoryForm from './pages/CategoryForm';
import WordForm from './pages/WordForm';
import Words from './pages/Words';
import Practice from './pages/Practice';
import NoFound from './pages/NoFound';
import Headbar from './components/organisms/Headbar';

library.add(faEdit, faTrash, faFileExport, faFileImport, faSearch);

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
	const dispatch = useDispatch();

	useEffect(() => {
		const data = loadFromLocalStorage('vocupractice');

		if (data) {
			dispatch(loadVocabulary(data));
		}
	}, [dispatch])

	return (
		<>
			<ReactNotification />
			<GlobalContainer>
				<Headbar />
				<Switch>
					<Route exact path="/">
						<Categories />
					</Route>
					<Route path="/addcategory">
						<CategoryForm />
					</Route>
					<Route exact path="/category/:categoryId/add">
						<WordForm type="add" />
					</Route>
					<Route exact path="/category/:categoryId/edit/:wordId">
						<WordForm type="edit" />
					</Route>
					<Route exact path="/category/:id">
						<Words />
					</Route>
					<Route exact path="/practice">
						<Practice />
					</Route>
					<Route path="*">
						<NoFound />
					</Route>
				</Switch>
			</GlobalContainer>
		</>
  	);
}

export default App;
