import React, { useMemo } from 'react';
import styled from 'styled-components';

import { Words } from '../../features/vocabulary/vocabularySlice';

import TableRow from '../atoms/TableRow';

interface IWordsTable {
    words: Words[];
    categoryId: string;
    onWordDeleteClick: (wordId: string) => void;
    onWordCheckClick: (wordId: string, checked: boolean) => void;
}

const Container = styled.table`
    width: 100%;
    color: ${({theme}) => theme.fontColor};
    font-family: ${({theme}) => theme.primaryFont};
    font-size: 1.2em;
    border-collapse: collapse;
`

const Body = styled.tbody``

const WordsTable = ({words, categoryId, onWordDeleteClick, onWordCheckClick}: IWordsTable) => {
    return useMemo(() => {
        return (
            <Container>
                <Body>
                    {
                        words.map((item) => {
                            return (
                                <TableRow key={item.id} categoryId={categoryId} wordId={item.id} word={item.word} translation={item.translation} reading={item.reading} onCheckClick={(e) => onWordCheckClick(item.id, e.target.checked)} onDeleteClick={() => onWordDeleteClick(item.id)} />
                            )
                        })
                    }
                </Body>
            </Container>
        );
    }, [words, categoryId, onWordCheckClick, onWordDeleteClick]);

};

export default WordsTable;