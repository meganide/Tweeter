import { useContext, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Avatar from '../../../components/common/Avatar';
import Card from '../../../components/common/Card';
import { AuthContext, IAuthContext, ICurrentUser } from '../../../contexts/authContext';
import { useUpload } from '../../../hooks/useUpload';
import UserInfo from './UserInfo';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Alert from '../../../components/common/Alert';
import { useToggle } from '../../../hooks/useToggle';
import ErrorAlert from '../../../components/common/ErrorAlert';
import { useMutation, useQueryClient } from 'react-query';
import { makeRequest } from '../../../utils/axios';
import SuccessAlert from '../../../components/common/SuccessAlert';

interface IProps {
  userProfile: ICurrentUser;
  name: string | undefined;
}

function UserCard(props: IProps) {
  const { userProfile, name } = props;

  const { currentUser, getUser } = useContext(AuthContext) as IAuthContext;
  const [bio, setBio] = useState(userProfile.profile.bio);
  const { toggle: changeBio, toggleShow: toggleChangeBio, setToggle: setChangeBio } = useToggle();
  const { toggle: error, setToggle: setError } = useToggle();
  const { toggle: loading, setToggle: setLoading } = useToggle();
  const { toggle: success, setToggle: setSuccess } = useToggle();

  const isBigScreen = useMediaQuery({ query: '(min-width: 1024px)' });

  let imgHeight = 'w-[100px] h-[100px]';

  if (isBigScreen) {
    imgHeight = 'w-[152px] h-[152px]';
  }

  const { inputFileRef, chooseImage, submitUpload, handleFileInputChange, previewImage, resetUploadStates } = useUpload();
  const {
    inputFileRef: inputFileRefBg,
    chooseImage: ChooseBgImage,
    submitUpload: submitBgUpload,
    handleFileInputChange: handleFileInputChangeBg,
    previewImage: previewBgImage,
    resetUploadStates: resetBgUploadStates,
  } = useUpload();

  function cancelOnClick() {
    resetUploadStates();
    resetBgUploadStates();
    setBio(userProfile.profile.bio);
    setChangeBio(false);
    setLoading(false);
  }

  const queryClient = useQueryClient();

  const mutation = useMutation(
    async (payload: any) => {
      return await makeRequest.put('/api/users', payload);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('profile' + name);
      },
    }
  );

  async function saveOnClick() {
    try {
      setLoading(true);
      let profileImgUrl: string = '';
      let profileBgUrl: string = '';

      if (previewImage) {
        profileImgUrl = await submitUpload();
      }
      if (previewBgImage) {
        profileBgUrl = await submitBgUpload();
      }

      await mutation.mutate({ bio, backgroundImg: profileBgUrl, profilePic: profileImgUrl });
      cancelOnClick();
      setSuccess(true);
      setTimeout(async () => {
        await getUser();
      }, 2000);
    } catch (error) {
      console.log(error);
      cancelOnClick();
      setError(true);
    }
  }

  return (
    <section>
      {success && <SuccessAlert closeOnClick={() => setSuccess(false)} />}
      {error && <ErrorAlert closeOnClick={() => setError(false)} />}
      {(previewBgImage || previewImage || changeBio) && <Alert cancelOnClick={cancelOnClick} saveOnClick={saveOnClick} loading={loading} />}
      <input className="hidden" type="file" name="profilePic" accept=".jpg, .jpeg, .png" ref={inputFileRefBg} onChange={handleFileInputChangeBg} />
      <img
        className="max-h-[200px] w-full object-cover object-center md:max-h-[320px]"
        src={previewBgImage ? previewBgImage : userProfile?.profile?.backgroundImg}
        alt="background"
      />
      <section className='-translate-y-8" relative m-auto max-w-7xl px-3 pb-4 lg:px-3 xl:px-0'>
        {currentUser?.name === userProfile.name && (
          <CameraAltIcon
            className="absolute right-3 -top-5 cursor-pointer rounded-[50%] bg-neutral-600 p-[6px] text-white"
            style={{ fontSize: '2.3rem' }}
            onClick={ChooseBgImage}
          ></CameraAltIcon>
        )}
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
            <UserInfo userProfile={userProfile} bioProps={{ bio, setBio, changeBio, toggleChangeBio }} />
          </section>
        </Card>
      </section>
    </section>
  );
}

export default UserCard;
