import { useMediaQuery } from 'react-responsive';

import Avatar from '../../../components/common/Avatar';
import Card from '../../../components/common/Card';
import { ICurrentUser } from '../../../contexts/authContext';
import { useUpload } from '../../../hooks/useUpload';
import UserInfo from './UserInfo';

import CameraAltIcon from '@mui/icons-material/CameraAlt';

interface IProps {
  userProfile: ICurrentUser;
}

function UserCard(props: IProps) {
  const { userProfile } = props;

  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  let imgHeight = 'w-[100px] h-[100px]';

  if (isBigScreen) {
    imgHeight = 'w-[152px] h-[152px]';
  }

  const { inputFileRef, chooseImage, submitUpload, handleFileInputChange, previewImage } = useUpload();
  const {
    inputFileRef: inputFileRefBg,
    chooseImage: ChooseBgImage,
    submitUpload: submitBgUpload,
    handleFileInputChange: handleFileInputChangeBg,
    previewImage: previewBgImage,
  } = useUpload();

  return (
    <section>
      <input className="hidden" type="file" name="profilePic" accept=".jpg, .jpeg, .png" ref={inputFileRefBg} onChange={handleFileInputChangeBg} />
      <section className="relative">
        <img
          className="max-h-[200px] md:max-h-[320px] w-full object-cover object-center"
          src={previewBgImage ? previewBgImage : userProfile?.profile?.backgroundImg}
          alt="background"
        />
        <CameraAltIcon
          className="absolute right-3 -bottom-3 cursor-pointer rounded-[50%] bg-neutral-600 p-[6px] text-white"
          style={{ fontSize: '2.3rem' }}
          onClick={ChooseBgImage}
        >
          Change
        </CameraAltIcon>
      </section>
      <section className='-translate-y-8" m-auto max-w-7xl px-3 pb-4 lg:px-3 xl:px-0'>
        <Card>
          <section className="flex flex-col place-items-center gap-5 p-4 pb-0 lg:flex-row lg:p-10 lg:pb-0">
            <section className="shrink-0 -translate-y-[50%] place-items-start rounded-lg border-2 border-white shadow-lg dark:border-secondary-dark dark:shadow-sm dark:shadow-gray-500">
              <input
                className="hidden"
                type="file"
                name="profilePic"
                accept=".jpg, .jpeg, .png"
                ref={inputFileRef}
                onChange={handleFileInputChange}
              />
              <section className="relative">
                <Avatar height={imgHeight} imgSrc={previewImage ? previewImage : userProfile?.profilePic} />
                <CameraAltIcon
                  className="absolute -right-3 -bottom-3 cursor-pointer rounded-[50%] bg-neutral-600 p-[6px] text-white"
                  style={{ fontSize: '2.3rem' }}
                  onClick={chooseImage}
                >
                  Change
                </CameraAltIcon>
              </section>
            </section>
            <UserInfo userProfile={userProfile} />
          </section>
        </Card>
      </section>
    </section>
  );
}

export default UserCard;
