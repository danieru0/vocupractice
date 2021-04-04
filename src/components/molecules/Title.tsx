import React from 'react';
import styled from 'styled-components';

import PageTitle from '../atoms/PageTitle';

interface ITitle {
    title?: string;
}

const Container = styled.div`
    padding-bottom: 15px;
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