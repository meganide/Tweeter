import { AuthContext, IAuthContext, ICurrentUser } from '../../../contexts/authContext';

import Avatar from '../../../components/common/Avatar';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';

interface IProps {
  userProfile: ICurrentUser;
  fileUploadProps: IFileUploadProps;
}

export interface IFileUploadProps {
  chooseImage: () => void;
  previewImage: string;
  inputFileRef: React.RefObject<HTMLInputElement>;
  handleFileInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function UserProfilePic(props: IProps) {
  const {
    userProfile,
    fileUploadProps: { chooseImage, previewImage, inputFileRef, handleFileInputChange },
  } = props;

  const { currentUser } = useContext(AuthContext) as IAuthContext;

  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  let imgHeight = 'w-[100px] h-[100px]';

  if (isBigScreen) {
    imgHeight = 'w-[152px] h-[152px]';
  }

  return (
    <section className="shrink-0 -translate-y-[50%] place-items-start rounded-lg border-2 border-white shadow-lg dark:border-secondary-dark dark:shadow-sm dark:shadow-gray-500">
      <input className="hidden" type="file" name="profilePic" accept=".jpg, .jpeg, .png" ref={inputFileRef} onChange={handleFileInputChange} />
      <section className="relative">
        <Avatar height={imgHeight} imgSrc={previewImage ? previewImage : userProfile?.profilePic} />
        {currentUser?.name === userProfile.name && (
          <CameraAltIcon
            className="absolute -right-3 -bottom-3 cursor-pointer rounded-[50%] bg-neutral-600 p-[6px] text-white"
            style={{ fontSize: '2.3rem' }}
            onClick={chooseImage}
          >
            Change
          </CameraAltIcon>
        )}
      </section>
    </section>
  );
}

export default UserProfilePic;
