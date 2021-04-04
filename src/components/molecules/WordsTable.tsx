import React from 'react';
import styled from 'styled-components';

import TableRow from '../atoms/TableRow';

const Container = styled.table`
    width: 100%;
    color: ${({theme}) => theme.fontColor};
    font-family: ${({theme}) => theme.primaryFont};
    font-size: 1.2em;
    border-collapse: collapse;
`

const Body = styled.tbody``

const WordsTable = () => {

    const handleCheckClick = (e: React.ChangeEvent<HTMLInputElement>) => {
        
    }

    return (
        <Container>
            <Body>
                <TableRow id="1" word="食べる" translation="to eat" reading="taberu" onCheckClick={handleCheckClick} onDeleteClick={() => alert('delete')} />
            </Body>
        </Container>
    );
};

export default WordsTable;