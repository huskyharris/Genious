const nav_menus_list = [
  {
    link: '/',
    title: 'Home',
    hasDropdown: false,
    megamenu: false,
    dropdownItems: [
      { link: '/', title: 'Home Style 01' },
      { link: '/home-2', title: 'Home Style 02' },
      { link: '/home-3', title: 'Home Style 03' },
      { link: '/home-4', title: 'Home Style 04' },
      { link: '/home-5', title: 'Home Style 05' },
    ]
  },
  {
    link: '/about',
    title: 'About',
  },
  {
    link: '/service',
    title: 'Services',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: '/service', title: 'Sanierung' },
      { link: '/abdichtungstechnik', title: 'Abdichtungstechnik' },
    ]
  },
  
  
  
]

export default nav_menus_list;