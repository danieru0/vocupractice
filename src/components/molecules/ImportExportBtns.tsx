import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive'

import Button from '../atoms/Button';
import ButtonIcon from '../atoms/ButtonIcon';

const Container = styled.div`
    display: flex;
`

const StyledButton = styled(Button)`
    margin: 0px 5px;
`

const StyledButtonIcon = styled(ButtonIcon)`
    margin: 0px 10px;
`

const ImportExportBtns = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 825px)'
    });

    const handleImportClick = () => {

    }

    const handleExportClick = () => {

    }

    return (
        <Container>
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