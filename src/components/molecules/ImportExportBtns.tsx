import React from 'react';
import styled from 'styled-components';

import Button from '../atoms/Button';

const Container = styled.div`
    position: fixed;
    bottom: 20px;
    left: 15px;
`

const StyledButton = styled(Button)`
    margin: 0px 5px;
`

const ImportExportBtns = () => {

    const handleImportClick = () => {

    }

    const handleExportClick = () => {

    }

    return (
        <Container>
            <StyledButton backgroundColor="import" width="big" onClick={handleImportClick}>Import</StyledButton>
            <StyledButton backgroundColor="export" width="big" onClick={handleExportClick}>Export</StyledButton>
        </Container>
    );
};

export default ImportExportBtns;