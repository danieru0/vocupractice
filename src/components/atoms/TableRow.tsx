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
    id: number;
}

interface TableDataProps {
    weight?: number;
}

const Tr = styled.tr`
    height: 60px;

    &:hover {
        background: ${({theme}) => lighten(0.05, theme.primary)};
    }
`;

const Td = styled.td<TableDataProps>`
    font-weight: ${({weight}) => weight ? weight : '300'};

    &:first-child {
        padding-left: 20px;
    }
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const TableRow = ({word, translation, reading, onCheckClick, onDeleteClick, id}: ITableRow) => {
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
                    <ButtonIcon href={`/edit/${id}`} iconType="edit" fontColor="edit" />
                    <Checkbox onChange={onCheckClick} />
                    <ButtonIcon onClick={onDeleteClick} iconType="trash" fontColor="delete" />
                </Wrapper>
            </Td>
        </Tr>
    );
};

export default TableRow;