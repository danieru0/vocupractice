import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

interface IContextMenuProps {
    left: number;
    top: number;
    category: string;
    onExportClick: (category: string) => void;
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

const ContextMenu = ({left, top, category, onExportClick}: IContextMenuProps) => {
    return (
        <Container left={left} top={top}>
            <List>
                <ListItem>
                    <Button onClick={() => onExportClick(category)}>Export</Button>
                </ListItem>
            </List>
        </Container>
    );
};

export default ContextMenu;