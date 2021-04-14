import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

import Checkbox from './Checkbox';
import ButtonIcon from './ButtonIcon';

interface ITableRow {
    word: string;
    translation: string;
    reading?: string;
    onCheckClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onDeleteClick: () => void;
    wordId: string;
    categoryId: string;
}

interface TableDataProps {
    weight?: number;
}

const Tr = styled.tr`
    height: 60px;

    &:hover {
        background: ${({theme}) => lighten(0.05, theme.primary)};
    }

    @media (max-width: 717px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        aling-items: center;
        margin: 10px 0px;
        height: auto;
        background: ${({theme}) => lighten(0.05, theme.primary)};
        padding: 10px;
    }
`;

const Td = styled.td<TableDataProps>`
    font-weight: ${({weight}) => weight ? weight : '300'};

    &:first-child {
        padding-left: 20px;
    }

    @media (max-width: 717px) {
        text-align: center;
        
        &:first-child {
            padding-left: 0;
        }
    }
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const TableRow = ({word, translation, reading, onCheckClick, onDeleteClick, wordId, categoryId}: ITableRow) => {
    return (
        <Tr>
            <Td weight={600}>
                {word}
            </Td>
            <Td>
                {translation}
            </Td>
            <Td>
                {
                    reading ? reading : '\u00a0\u00a0'
                }
            </Td>
            <Td>
                <Wrapper>
                    <ButtonIcon data-tip="edit word" href={`/category/${categoryId}/edit/${wordId}`} iconType="edit" fontColor="edit" />
                    <Checkbox onChange={onCheckClick} />
                    <ButtonIcon data-tip="remove word" onClick={onDeleteClick} iconType="trash" fontColor="delete" />
                </Wrapper>
            </Td>
        </Tr>
    );
};

export default TableRow;