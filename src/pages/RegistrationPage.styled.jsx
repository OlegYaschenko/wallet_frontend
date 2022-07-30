import styled from 'styled-components';
import '../stylesheet/fonts.css';
import eclipseGray from '../images/EllipseGray.png';
import eclipsePink from '../images/EllipsePink.png';

export const Container = styled.div`
  display: block;
  height: 100%;
  padding: 0;
`;

export const ContainerRegister = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  top: 0px;
  justify-content: center;
  left: 0px;

  @media (max-width: 767px) {
    position: fixed;
  }

  @media (min-width: 768px) {
    background-color: var(--background-gray);
    background-image: url(${eclipseGray}), url(${eclipsePink});
    background-repeat: no-repeat, no-repeat;
    background-position: 0px 100%, right 0px top 0px;
    padding: 60px 114px 48px;
    width: 100vw;
    min-height: 1024px;
    text-align: center;
    flex-grow: 1;
  }
`;

export const LogoReg = styled.img`
  @media screen and (max-width: 768px) {
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
`;

export const LogoText = styled.p`
  font-family: var(--secondaryFont);
  font-style: normal;
  font-weight: var(--bold);
  font-size: 30px;
  line-height: 45px;
  display: flex;
  align-items: center;
  color: var(--black);
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 60px;
  justify-content: center;
`;

export const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 36px 20px;
  background: #fff;
  flex-grow: 1;
  height: 100vh;

  @media screen and (min-width: 767px) {
    max-width: 540px;
    height: 616px;
    padding: 40px 65px 60px;
    border-radius: 20px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const ImageContainer = styled.div`

@media (min-width: 768px) {
background-image: url(${RegImage});
background-repeat: no-repeat;
background-size: contain;
margin-bottom: 50px;
display: inline-block;
margin-right: auto;
height: 273px;
width: 250px;
display: inline-block;
}

@media (min-width: 1280px) {
  height: 412px;
  width: 452px;
}

}
`;
export const Text = styled.p`
  display: none;

  @media (min-width: 768px) {
    color: #000000;
    display: flex;
    margin-right: auto;
    font-family: var(--secondaryFont);
    font-weight: var(--regular);
    font-size: 30px;
    line-height: 45px;
    margin-left: 40px;
    align-items: center;
  }
`;

export const ImageSection = styled.div`
  display: flex;
  margin-bottom: 50px;
  width: 540px;
  margin-right: auto;
`;
