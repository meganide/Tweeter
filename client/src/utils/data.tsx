import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import AutorenewOutlinedIcon from '@mui/icons-material/AutorenewOutlined';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';

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
    image:
      'https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be8cf4ba7565123c8bc_YPD3ulQQAGQpOcnqIm3QzSTRgzmr1SexpW9ZjMpJ1mAnUxx4iF05XOTu44sk0qQG-8XgBcYmGZGAD-5SAZvJl3TjtmhgWnn-w0C2XKwhBscV78RVvhwZfyp0v_Pa6sNj5zxpOvRW.png',
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

const followData = [
  {
    username: 'Rick Sanchez',
    followers: 5120,
    bio: 'Genius, scientist and fulltime alcoholist.',
    backgroundImg: 'https://images8.alphacoders.com/103/1033651.jpg',
  },
  {
    username: 'Morty Smith',
    followers: 5,
    bio: "Rick's sidekick.",
    backgroundImg: 'https://i5.walmartimages.com/asr/c56fb9dc-6748-427f-89d4-5a9bf8c7b2aa_1.de05d46b2d3b93a7f2ebdb2e8b092e27.jpeg',
  },
  {
    username: 'Homer Simpson',
    followers: 324,
    bio: 'I love beer.',
    backgroundImg:
      'https://cdn.vox-cdn.com/thumbor/sgPVmq-SzYpLHwjpcYrzYKp1Kjk=/0x0:939x704/1400x788/filters:focal(0x0:939x704):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/49610677/homersimpson.0.0.jpg',
  },
];

const postCommentsData = [
  {
    username: 'Naruto',
    date: '24 August at 20:45',
    text: 'Cool bro.',
    image: '',
    likes: 10,
  },
  {
    username: 'Sasuke',
    date: '30 August at 15:25',
    text: 'Lit',
    image: '',
    likes: 5,
  },
  {
    username: 'Mr Troll',
    date: '2 September at 16:20',
    text: 'Goodiez',
    image: 'https://i.imgflip.com/4k39g9.jpg',
    likes: 7,
  },
];

export { imagePaths, links, postOptionsData, postsData, trendsData, followData, postCommentsData };
