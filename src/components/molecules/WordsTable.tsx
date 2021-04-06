import React from 'react';
import styled from 'styled-components';

import { Words } from '../../features/vocubulary/vocubularySlice';

import TableRow from '../atoms/TableRow';

interface IWordsTable {
    words: Words[];
    onWordDeleteClick: (wordId: string) => void;
}

const Container = styled.table`
    width: 100%;
    color: ${({theme}) => theme.fontColor};
    font-family: ${({theme}) => theme.primaryFont};
    font-size: 1.2em;
    border-collapse: collapse;
`

const Body = styled.tbody``

const WordsTable = ({words, onWordDeleteClick}: IWordsTable) => {
    const handleCheckClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        
    }

    return (
        <Container>
            <Body>
                {
                    words.map((item) => {
                        return (
                            <TableRow key={item.id} id={item.id} word={item.word} translation={item.translation} reading={item.reading} onCheckClick={handleCheckClick} onDeleteClick={() => onWordDeleteClick(item.id)} />
                        )
                    })
                }
            </Body>
        </Container>
    );
};

export default WordsTable;