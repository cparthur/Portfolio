import styled from 'styled-components';

// import media from 'styles/media';

const Header = () => (
    <Container>
        <LogoContainer>
            <Logo>Arthur Molinos</Logo>
            <JobTitle>French designer & developer</JobTitle>
        </LogoContainer>
        <ChangeLang>En | Fr</ChangeLang>
    </Container>
);

export default Header;

/*
 * Styled declarations
 */
const Container = styled.div`
    display: flex;
    align-items: baseline;
`;

const LogoContainer = styled.div``;

const Logo = styled.h2`
    font-family: sans-serif;
    font-size: ${({ theme }) => theme.fontSizes[5]};
    font-weight: 700;
    line-height: 1.375;
    color: ${({ theme }) => theme.colors.text.prim};
`;

const JobTitle = styled.h3`
    font-size: ${({ theme }) => theme.fontSizes[1]};
    color: ${({ theme }) => theme.colors.text.sec};
`;

const ChangeLang = styled.div`
    margin-left: auto;
    font-size: ${({ theme }) => theme.fontSizes[1]};
`;
