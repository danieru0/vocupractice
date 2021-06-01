import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';

import { selectVocabulary } from '../../features/vocabulary/vocabularySlice';
import { setSelectedCategoriesId, setCategoryId } from '../../features/vocupractice/vocupracticeSlice';

import Button from '../atoms/Button';
import CategoryBlock from '../atoms/CategoryBlock';
import Checkbox from '../atoms/Checkbox';
import ContextMenu from '../molecules/ContextMenu';
import showNotification from '../../helpers/showNotification';

const Container = styled.div`
    width: 600px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: auto;
    margin-top: auto;

    @media (max-width: 825px) {
        justify-content: center;
        align-items: center;
    }

    @media (max-width: 600px) {
        width: 90%;
    }
`

const WrapperButtons = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    @media (max-width: 600px) {
        flex-direction: column;
        align-items: center
        justify-content: center;
    }
`

const WrapperCategories = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-top: 20px;
    grid-gap: 20px;
    margin-left: auto;
    margin-right: auto;

    @media (max-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 400px) {
        grid-template-columns: repeat(1, 1fr);
    }
`

const StyledButton = styled(Button)`
    margin: 0px 10px;

    &:first-of-type {
        margin-left: 0;
    }

    @media (max-width: 600px) {
        margin: 10px 0px;
    }

    @media (max-width: 360px) {
        padding: 0;
        width: 200px;
    }
`

const FullCategories = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const vocabularySelector = useSelector(selectVocabulary);
    const [importantValue, setImportantValue] = useState(false);
    const [contextMenuTop, setContextMenuTop] = useState(0);
    const [contextMenuLeft, setContextMenuLeft] = useState(0);
    const [contextMenuCategory, setContextMenuCategory] = useState('');

    const handlePracticeAllClick = () => {
        if (importantValue) {
            if (vocabularySelector.categories['importantWords'].words.length === 0) {
                alert("You don't have any important words!");
                return false;
            }

            dispatch(setCategoryId('importantWords'));

            history.push('/practice');
        } else {
            let isAnyCategoryEmpty: string[] = [];
            Object.keys(vocabularySelector.categories).forEach((item) => {
                const category = vocabularySelector.categories[item];
    
                if (category.words.length === 0) {
                    isAnyCategoryEmpty.push(category.id);
                    return false;
                } 
            })
    
            if (isAnyCategoryEmpty.length === Object.keys(vocabularySelector.categories).length) {
                alert('All your categories are empty!');
                return false;
            }
    
            dispatch(setSelectedCategoriesId(Object.keys(vocabularySelector.categories)));
        
            history.push('/practice');
        }
    }

    const handleContextMenuClick = (e: React.MouseEvent<HTMLAnchorElement>, category: string) => {
        e.preventDefault();
        setContextMenuCategory(category);
        setContextMenuLeft(e.pageX);
        setContextMenuTop(e.pageY);
    }

    const handleExportClick = (category: string) => {
        const selectedCategory = {
            [category]: vocabularySelector.categories[category]
        }
        
        const file = new Blob([JSON.stringify(selectedCategory)], {type: 'text/plain'});
        const element = document.createElement('a');
        element.href = URL.createObjectURL(file);
        element.download = 'vocupractice.txt';
        element.click();
        showNotification('Success', 'Your data has been exported', 'success');
    }

    useEffect(() => {
        const handleOutsideClick = () => {
            if (contextMenuCategory) {
                setContextMenuCategory('');
            }
        }

        document.addEventListener('click', handleOutsideClick)

        return () => document.removeEventListener('click', handleOutsideClick);
    }, [contextMenuCategory]);

    return (
        <Container>
            <ReactTooltip effect="solid" />
            <WrapperButtons>
                <StyledButton href="/addcategory" backgroundColor="normal" width="small">Add category</StyledButton>
                <StyledButton onClick={handlePracticeAllClick} backgroundColor="normal" width="small">Practice all</StyledButton>
                <Checkbox data-tip="Practice all will only show important words" checked={importantValue} onChange={(e) => setImportantValue(e.target.checked)} label="important" />
            </WrapperButtons>
            <WrapperCategories>
                {
                    Object.keys(vocabularySelector.categories).map((item) => {
                        const category = vocabularySelector.categories[item];

                        if (category.name === 'important') {
                            return null;
                        }

                        return (
                            <CategoryBlock onContextMenu={(e) => handleContextMenuClick(e, category.id)} key={category.id} href={`/category/${category.id}`} name={category.name} />
                        )
                    })
                }
                {contextMenuCategory && <ContextMenu category={contextMenuCategory} left={contextMenuLeft} top={contextMenuTop} onExportClick={handleExportClick} />}
            </WrapperCategories>
        </Container>
    );
};

export default FullCategories;