import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const imagePaths = {
  logo: '/images/icons/icon.png',
  darkMode: '/images/icons/dark.png',
  lightMode: '/images/icons/light.png',
  avatar: '/images/icons/avatar.png',
  googleIcon: '/images/icons/Google.svg',
};

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
    pathname: '/bookmarks',
    name: 'Bookmarks',
    icon: <BookmarkIcon style={{ fontSize: '2rem' }} />,
  },
];

const postOptionsData = [
  {
    icon: <FavoriteBorderOutlinedIcon className="text-[gray]" />,
    clickedIcon: <FavoriteIcon className="text-[#EB5757]" />,
    text: 'Like',
    clickedText: 'Liked',
    color: '#EB5757',
    endpoint: 'likes',
  },
  {
    icon: <AutorenewOutlinedIcon className="text-[gray]" />,
    clickedIcon: <AutorenewIcon className="text-[#27AE60]" />,
    text: 'Retweet',
    clickedText: 'Retweeted',
    color: '#27AE60',
    endpoint: 'retweets',
  },
  {
    icon: <BookmarkBorderOutlinedIcon className="text-[gray]" />,
    clickedIcon: <BookmarkIcon className="text-[#2D9CDB]" />,
    text: 'Save',
    clickedText: 'Saved',
    color: '#2D9CDB',
    endpoint: 'saves',
  },
];


const trendsData = [
  {
    name: '#programming',
    tweets: 5120,
  },
  {
    name: '#frontend',
    tweets: 3000,
  },
  {
    name: '#learntocode',
    tweets: 1000,
  },
  {
    name: '#stoicism',
    tweets: 1201,
  },
];


export { imagePaths, links, postOptionsData, trendsData, };
