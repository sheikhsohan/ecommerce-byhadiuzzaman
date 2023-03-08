import React from 'react';
import { AiFillInstagram , AiFillFacebook, AiOutlineTwitter, AiFillGithub } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2023 - Created By <b style={{color:'red'}}>Hadiuzzaman</b> @ All rights reserved</p>
      <p className='icons'>
        <a href='https://www.facebook.com/s.s0han' target='_blank'>
        <AiFillFacebook  />
        </a>
        <a href="https://github.com/sheikhsohan" target='_blank'>
          <AiFillGithub />
        </a>
      </p>
    </div>
  )
}

export default Footer