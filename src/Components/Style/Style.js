
const size = {
    mobileS:'320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    laptopL: '1440px',
    laptop: '1024px',
    desktop: '2560px'
  }
  
  export const device ={
    mobileS: `(max-width: ${size.mobileS})`,
    mobileM: `(max-width: ${size.mobileM})`,
    mobileL: `(max-width: ${size.mobileL})`,
    tablet: `(max-width: ${size.tablet})`,
    laptopL:`(max-width: ${size.laptopL})`, 
    laptop: `(max-width: ${size.laptop})`,
    desktop: `(max-width: ${size.desktop})`
  }