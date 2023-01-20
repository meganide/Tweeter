import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';

const imagePaths = {
  logo: 'images/icons/icon.png',
  darkMode: 'images/icons/dark.png',
  lightMode: 'images/icons/light.png',
  avatar: 'images/icons/avatar.png',
  googleIcon: 'images/icons/Google.svg',
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
    pathname: '/boomarks',
    name: 'Bookmarks',
    icon: <BookmarkIcon style={{ fontSize: '2rem' }} />,
  },
];

const postOptionsData = [
  {
    icon: <ModeCommentOutlinedIcon className="text-[#4F4F4F]" />,
    text: 'Comment',
    color: '#4F4F4F',
  },
  {
    icon: <AutorenewOutlinedIcon className="text-[#27AE60]" />,
    text: 'Retweeted',
    color: '#27AE60',
  },
  {
    icon: <FavoriteBorderOutlinedIcon className="text-[#EB5757]" />,
    text: 'Liked',
    color: '#EB5757',
  },
  {
    icon: <BookmarkBorderOutlinedIcon className="text-[#2D9CDB]" />,
    text: 'Saved',
    color: '#2D9CDB',
  },
];

const postsData = [
  {
    username: 'John Doe',
    date: '24 August at 20:43',
    text: 'Traveling – it leaves you speechless, then turns you into a storyteller.',
    image: 'https://media.nomadicmatt.com/preparedtraveler.jpg',
  },
  {
    username: 'Jane Moe',
    date: '30 August at 15:20',
    text: '“We travel, some of us forever, to seek other places, other lives, other souls.” – Anais Nin',
    image: 'https://images.pexels.com/photos/1007901/pexels-photo-1007901.jpeg?cs=srgb&dl=pexels-oleksandr-pidvalnyi-1007901.jpg&fm=jpg',
  },
  {
    username: 'Mr Troll',
    date: '2 September at 16:20',
    text: 'top notch lol',
    image: 'https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be8cf4ba7565123c8bc_YPD3ulQQAGQpOcnqIm3QzSTRgzmr1SexpW9ZjMpJ1mAnUxx4iF05XOTu44sk0qQG-8XgBcYmGZGAD-5SAZvJl3TjtmhgWnn-w0C2XKwhBscV78RVvhwZfyp0v_Pa6sNj5zxpOvRW.png',
  },
];

export { imagePaths, links, postOptionsData, postsData };
