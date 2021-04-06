import React, { useRef } from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive'
import { useSelector, useDispatch } from 'react-redux';

import { selectVocabulary, loadVocabulary } from '../../features/vocabulary/vocabularySlice';
import { saveToLocalStorage } from '../../helpers/localStorageHandler';

import Button from '../atoms/Button';
import ButtonIcon from '../atoms/ButtonIcon';

const Container = styled.div`
    display: flex;
`

const InputFile = styled.input`
    display: none;
`

const StyledButton = styled(Button)`
    margin: 0px 5px;
`

const StyledButtonIcon = styled(ButtonIcon)`
    margin: 0px 10px;
`

const ImportExportBtns = () => {
    const dispatch = useDispatch();
    const vocabularySelector = useSelector(selectVocabulary);
    const isMobile = useMediaQuery({
        query: '(max-width: 825px)'
    });
    const inputFileRef = useRef<HTMLInputElement>(null);

    const handleImportClick = () => {
        if (inputFileRef.current) {
            inputFileRef.current.click();
        }
    }

    const handleExportClick = () => {
        const file = new Blob([JSON.stringify(vocabularySelector.categories)], {type: 'text/plain'});
        const element = document.createElement('a');
        element.href = URL.createObjectURL(file);
        element.download = 'vocupractice.txt';
        element.click();
    }

    const handleFileImport = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const file = e.target.files[0];

            const reader = new FileReader();
            reader.onload = function(e) {
                if (e.target) {
                    try {
                        const json = JSON.parse(e.target.result as string);

                        const categoriesKeysToCompare = ['id', 'name', 'words'];
                        const wordKeysToCompare = ['id', 'word', 'translation', 'reading'];

                        Object.keys(json).forEach((item) => {
                            const category = json[item];
                            const categoryKeys = Object.keys(category);

                            if (JSON.stringify(categoryKeys) !== JSON.stringify(categoriesKeysToCompare)) {
                                throw Error('Not vocupractice file');
                            }

                            Object.keys(category.words).forEach((item) => {
                                const word = category.words[item];
                                const wordKeys = Object.keys(word);

                                if (JSON.stringify(wordKeys) !== JSON.stringify(wordKeysToCompare)) {
                                    throw Error('Not vocupractice file');
                                }
                            })
                        })

                        dispatch(loadVocabulary(json));
                        saveToLocalStorage(json);

                    } catch (error) {
                        alert('The uploaded file is invalid!');
                        inputFileRef.current!.value = '';
                    }
                }
            }
            reader.readAsText(file);
        }

    }

    return (
        <Container>
            <InputFile onChange={handleFileImport} ref={inputFileRef} type="file" accept=".txt" />
            {
                isMobile ? (
                    <>
                        <StyledButtonIcon fontSize="1.5em" fontColor="import" iconType="file-import" onClick={handleImportClick}/>
                        <StyledButtonIcon fontSize="1.5em" fontColor="export" iconType="file-export" onClick={handleExportClick}/>
                    </>
                ) : (
                    <>
                        <StyledButton backgroundColor="import" width="big" onClick={handleImportClick}>Import</StyledButton>
                        <StyledButton backgroundColor="export" width="big" onClick={handleExportClick}>Export</StyledButton>
                    </>
                )
            }
        </Container>
    );
};

export default ImportExportBtns;