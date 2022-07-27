import React from 'react';
import { Link} from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrap = styled.div`height: 100px; margin: 50px 0px;`
const Container = styled.div`width: 1050px; margin 0 auto;`
const Row = styled.div``


const Logo = styled.div`font-weight: bold;font-size: 1.5em;line-height: 100px; display: inline-block;`
const CreateLink = styled(Link)`margin-left : 20px;`

const Header = () => {
    return (
        <HeaderWrap>
            <Container>
                <Row>
                    <Logo><Link to='/'>BLOG</Link></Logo>
                    <CreateLink to='/create'>글쓰기</CreateLink>
                </Row>
            </Container>
        </HeaderWrap>
    )
}

export default Header;