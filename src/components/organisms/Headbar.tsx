import React from 'react';
import styled from 'styled-components';
import ReactTooltip from 'react-tooltip';

import Logo from '../molecules/Logo';
import ImportExportBtsn from '../molecules/ImportExportBtns';

const Container = styled.div`
    width: 100%;
    display: flex;
    position: absolute;
    top: 0;
    left: 0;
    align-items: center;
    padding: 10px 20px;

    @media (max-width: 470px) {
        padding: 10px 10px;
    }
`

const Headbar = () => {
    return (
        <Container>
            <ReactTooltip effect="solid" />
            <Logo />
            <ImportExportBtsn />
        </Container>
    );
};

export default Headbar;