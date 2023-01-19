import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const imagePaths = {
  logo: 'images/icons/icon.png',
  darkMode: 'images/icons/dark.png',
  lightMode: 'images/icons/light.png',
  avatar: 'images/icons/avatar.png',
  googleIcon: 'images/icons/Google.svg',
}

const links = [
  {
    pathname: '/',
    name: 'Home',
    icon: <HomeIcon style={{ fontSize: '2rem' }} />,
  },
  {
    pathname: '/explore',
    name: 'Explore',
    icon: <ExploreIcon style={{ fontSize: '2rem' }} />,
  },
  {
    pathname: '/boomarks',
    name: 'Bookmarks',
    icon: <BookmarkIcon style={{ fontSize: '2rem' }} />,
  },
];

export {imagePaths, links}