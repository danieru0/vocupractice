import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

import { Words } from '../../features/vocabulary/vocabularySlice';

interface IDropDownMenuProps {
    left: number;
    top: number;
    word: Words | undefined;
    onImportantClick: (wordId: string) => void;
    onMoveClick: (word: Words | undefined) => void;
}

interface ContainerProps {
    left: number;
    top: number;
}

const Container = styled.div<ContainerProps>`
    width: 250px;
    background: ${({theme}) => theme.secondary};
    position: absolute;
    left: ${({left}) => left}px;
    top: ${({top}) => top}px;
    box-shadow: 2px 2px 10px 0px #000;
`

const List = styled.ul`
    list-style: none;
    width: 100%;
`

const ListItem = styled.li`
    width: 100%;
    height: 50px;
`

const Button = styled.button`
    width: 100%;
    height: 100%;
    background: none;
    border: none;
    font-family: ${({theme}) => theme.primaryFont};
    text-transform: uppercase;
    color: ${({theme}) => theme.fontColor};
    font-size: 1.3em;
    cursor: pointer;
    outline: none;

    &:hover {
        background: ${({theme}) => darken(0.02, theme.primary)};
    }
`

const DropDownMenu = ({left, top, word, onImportantClick, onMoveClick}: IDropDownMenuProps) => {
    return (
        <Container left={left} top={top}>
            <List>
                <ListItem>
                    <Button onClick={() => onImportantClick(word!.id)}>{word!.important ? "Not important" : "Important" }</Button>
                </ListItem>
                <ListItem>
                    <Button onClick={() => onMoveClick(word)}>Move</Button>
                </ListItem>
            </List>
        </Container>
    );
};

export default DropDownMenu;