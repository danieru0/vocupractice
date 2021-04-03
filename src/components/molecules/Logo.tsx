import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import PageTitle from '../atoms/PageTitle';

const Container = styled.div`
    position: absolute;
    left: 20px;
    top: 20px;
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

const Logo = () => {
    return (
        <Container>
            <StyledLink to="/">
                <PageTitle size="big">Vocupractice</PageTitle>
            </StyledLink>
        </Container>
    );
};

export default Logo;