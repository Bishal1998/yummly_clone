import Search from '../search/Search';
import './Design.css';
import Personalize from '../personalize/Personalize';
import Food from '../food/Food';
import Product from '../product/Product';
import Overlay from '../overlay/Overlay';
import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeInDown } from 'react-animations';

const Design = () => {

  const [searchOverlay, setSearchOverlay] = useState(false);

  const fadeAnimation = keyframes`${fadeInDown}`;

  const FadeDiv = styled.div`animation: 1s ${fadeAnimation};
`;

  return (
    <>
      <div className="main__design-design">
        { !searchOverlay ? 
          <div>
            <div className="main__design-design__corner">
              <img src="https://x.yummlystatic.com/web/strawberry-grain.png" alt="" />
              <div><Search searchOverlay = {searchOverlay} setSearchOverlay = {setSearchOverlay} /></div>
              <img src="https://x.yummlystatic.com/web/img-fruit-bowl.png" alt="" />
          </div>
          <div className="main__personalize-text-area">
              <Personalize />
          </div>
          <Food />
          </div>
          :
          <div className="main__design-design__overlay">
            <div className='main__design-design__overlay__overlay'>
              <FadeDiv>
                <Overlay />
              </FadeDiv>
            </div>
          </div>
        }
        <Product />
      </div>
    </>
  )
}

export default Design;