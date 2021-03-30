import { Box, BoxProps, Flex, Link } from '@theme-ui/components';
import React, { useEffect, useState } from 'react';
import { SystemStyleObject } from 'theme-ui';
import { Logo } from '../logo';

const styles: SystemStyleObject = {
  display: ['none', 'none', 'block'],
  width: '100%',
  zIndex: 100,
  '.navbar': {
    bg: 'transparent',
  },
  '.container': {
    alignItems: 'center',
    maxWidth: '1920px',
    margin: '0 auto',
    py: '25px',
    px: [4, 4, 6],
  },
  '.navbar.active': {
    bg: 'background',
  },
  '.navbarWhite': {
    bg: 'white',
  },
  '.linksContainer': {
    flexGrow: 1,
    fontSize: 23,
    fontWeight: 600,
    color: 'iron',
    justifyContent: 'flex-end',
    '>a': {
      p: 2,
      '&:last-child': {
        pr: 0,
      },
      '&:hover': {
        transition: 'color 0.2s',
      },
    },
  },
  '.logo-link': {
    marginTop: '0.4em',
  },
  '.link': {
    color: 'background',
    textDecoration: 'underline',
  },
};

const Navbar: React.FC<BoxProps> = () => {
  const [navbar, setNavbar] = useState(false);
  const [pathname, setPathname] = useState('');

  const changeBackground = () => {
    if (typeof window !== 'undefined' && window.scrollY >= 70) {
      setNavbar(true);
    } else if (pathname === '') {
      setNavbar(false);
    }
  };

  useEffect(() => {
    setPathname(
      window.location.pathname[window.location.pathname.length - 1] === '/'
        ? window.location.pathname.slice(0, -1)
        : window.location.pathname,
    );
    if (pathname !== '') setNavbar(true);
    else window.addEventListener('scroll', changeBackground);
  }, []);

  return (
    <Box sx={styles}>
      <Box
        className={
          pathname !== '' ? 'navbarWhite' : navbar ? 'navbar active' : 'navbar'
        }
      >
        <Flex className="container">
          <Link href="/" className="logo-link">
            {!navbar && pathname === '' ? (
              <Logo color="white" sx={{ width: '6em', color: 'white' }} />
            ) : (
              <Logo
                dotColor="#0FCFA2"
                color="black"
                sx={{ width: '6em', color: 'black' }}
              />
            )}
          </Link>
          <Flex className="linksContainer">
            <Link
              color={
                pathname === '/services'
                  ? 'lightGreen'
                  : pathname === '' && !navbar
                  ? 'background'
                  : 'black'
              }
              href="/services"
            >
              Tjenester
            </Link>
            <Link
              sx={{ ml: 5 }}
              color={
                pathname === '/about'
                  ? 'lightGreen'
                  : pathname === '' && !navbar
                  ? 'background'
                  : 'black'
              }
              href="/about"
            >
              Om oss
            </Link>
            <Link
              sx={{ ml: 5 }}
              color={
                pathname === '/contact'
                  ? 'lightGreen'
                  : pathname === '' && !navbar
                  ? 'background'
                  : 'black'
              }
              href="/contact"
            >
              Kontakt
            </Link>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Navbar;
