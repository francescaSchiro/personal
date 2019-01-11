export const cards = [
  {
    id: 0,
    title: 'Lomellina',
    coverUrl:
      'https://mir-s3-cdn-cf.behance.net/projects/202/fa95df74029113.Y3JvcCwxMjc0LDk5Niw4NSwxMg.jpg',
    description: "A web interface to help exploring Vigevano's Territory",
    more:
      'https://www.behance.net/gallery/74029113/Exploring-Vigevanos-Territory'
  },
  {
    id: 1,
    title: 'Happening',
    coverUrl:
      'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9d058d46904857.586a27a7b7a94.png',
    description:
      'Event identity and communication for Happening - Art, Music & Drinks',
    more: 'https://www.behance.net/gallery/46904857/Happening-Art-Music-Drinks'
  },
  {
    id: 2,
    title: 'Website redesign',
    coverUrl:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400/ea772750465831.58d15bdeb5e35.png',
    description: 'Website redesign for CityHub srls.',
    more:
      'https://www.behance.net/gallery/50465831/CityHub-srls-Website-redesign'
  },
  {
    id: 3,
    title: 'CityHub',
    coverUrl:
      'https://mir-s3-cdn-cf.behance.net/projects/202/7408ff46914439.Y3JvcCw4NDQsNjYxLDQsMA.gif',
    description: 'Graphics & communication for CityHub srls.',
    more:
      'https://www.behance.net/gallery/46914439/CityHub-srls-graphics-communication'
  },
  {
    id: 4,
    title: 'PIPARC',
    coverUrl:
      'https://mir-s3-cdn-cf.behance.net/projects/202/968e0046869435.Y3JvcCwxMjAyLDk0MSwwLDg5.png',
    description: 'Logo design for an Environmental Architect.',
    more: 'https://www.behance.net/gallery/46869435/PIPARC-Logo-Design'
  },
  {
    id: 5,
    title: 'xPOSTI',
    coverUrl:
      'https://mir-s3-cdn-cf.behance.net/projects/202/18f4bd46885423.Y3JvcCw3OTEsNjE5LDE5Myw5.jpg',
    description: 'Logo design for an anonymous working group.',
    more:
      'https://www.behance.net/gallery/46885423/xPOSTI-Logo-design-for-an-anonymous-working-group'
  },
  {
    id: 6,
    title: 'BNS',
    coverUrl:
      'https://mir-s3-cdn-cf.behance.net/projects/202/26ef5146869273.Y3JvcCw2NzQzLDUyNzgsMCw4MTU.png',
    description: 'Logo design for a group of skating in Bergamo.',
    more:
      'https://www.behance.net/gallery/46869273/BNS-Bergamo-Night-Skatelogo-design'
  },
  {
    id: 7,
    title: 'Cat',
    coverUrl: 'https://404store.com/2017/08/15/4949794-random-image.jpg',
    description: 'This is a random drownig cat',
    more: 'https://404store.com/2017/08/15/4949794-random-image.jpg'
  }
];

/**
 * @name - scrollToView
 * @description - function to call on nav Item Click to scroll to section
 * @param {string} classname - name of the class of the section you want to scroll to
 */
export const scrollToSection = classname => {
  document.querySelector(`${classname}`).scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};
/**
 * @name - getBreakpoint
 * @description - function to get max-width of device screen for mediaqueries
 * @param {string} device - name of device: 'mobile' | 'tablet' | 'desktop'
 * @returns - width px
 */
export const getBreakpoint = device => {
  switch (device) {
    case 'mobile': {
      return '375px';
    }
    case 'tablet': {
      return '768px';
    } //min-width?
    case 'desktop': {
      return '1800px';
    }
    default: {
      return console.log('not given breakpoint device');
    }
  }
};

export const getBgGradient = (a, b) => {
  return ` 
 background: #f3d250;
 background: -moz-linear-gradient(top, ${a} 39%, ${b} 100%);
 background: -webkit-linear-gradient(top, ${a} 39%,${b} 100%);
 background: linear-gradient(to bottom, ${a} 39%,${b} 100%);
 filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${a}', endColorstr='${b}',GradientType=0 );
 `;
};
