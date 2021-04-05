import React from 'react';
import styled from 'styled-components';

import PageTitle from '../atoms/PageTitle';

interface ITitle {
    title?: string;
}

const Container = styled.div`
    padding-bottom: 15px;

    @media (max-width: 1160px) {
        position: relative;
        top: 20px;
        padding-bottom: 20px;
    }
`

const Title = ({title}: ITitle) => {
    return (
        <Container>
            {
                <PageTitle size="small">{title ? title : `\u00a0\u00a0`}</PageTitle>
            }
        </Container>
    );
};

export default Title;