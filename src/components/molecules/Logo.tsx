import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive'

import PageTitle from '../atoms/PageTitle';

const Container = styled.div`
    margin-right: auto;
`

const StyledLink = styled(Link)`
    text-decoration: none;
`

const Logo = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 645px)'
    });

    return (
        <Container>
            <StyledLink to="/">
                <PageTitle size={isMobile ? 'small' : 'big'}>Vocupractice</PageTitle>
            </StyledLink>
        </Container>
    );
};

export default Logo;