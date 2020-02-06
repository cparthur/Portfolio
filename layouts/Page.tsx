import styled from 'styled-components';
import media from 'styles/media';

import Header from 'layouts/Header';

type Props = {
    children?: React.ReactElement;
    isFullScreen?: boolean;
};

const Page = ({ children, isFullScreen }: Props) => (
    <PageContainer isFullScreen={isFullScreen}>
        <InnerContainer isFullScreen={isFullScreen}>
            <Header />
            {children}
        </InnerContainer>
    </PageContainer>
);

export default Page;

/*
 * Styled declarations
 */
interface StyledProps {
    // This prop allows us to put a fixed height on desktop
    isFullScreen?: boolean;
}

const PageContainer = styled.div<StyledProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 1rem;
    background: ${({ theme }) => theme.colors.bg.pageGradient};

    ${media.laptop} {
        ${({ isFullScreen }) => isFullScreen && 'height: 100vh'};
        padding: 2rem;
    }
`;

const InnerContainer = styled.div<StyledProps>`
    position: relative;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    background-color: ${({ theme }) => theme.colors.bg.prim};
    ${({ isFullScreen }) => isFullScreen && 'overflow: hidden'};
    z-index: 1;

    ${media.laptop} {
        padding: 4rem;
    }
`;
