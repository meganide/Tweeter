import { AuthContext, IAuthContext, ICurrentUser } from '../../../contexts/authContext';
import { useContext, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import Alert from '../../../components/common/Alert';
import ErrorAlert from '../../../components/common/ErrorAlert';
import SuccessAlert from '../../../components/common/SuccessAlert';
import UserCard from './UserCard';
import { makeRequest } from '../../../utils/axios';
import { useToggle } from '../../../hooks/useToggle';
import { useUpload } from '../../../hooks/useUpload';

interface IProps {
  userProfile: ICurrentUser;
  name: string | undefined;
}

function User(props: IProps) {
  const { userProfile, name } = props;

  const { getUser } = useContext(AuthContext) as IAuthContext;

  const [bio, setBio] = useState(userProfile.profile.bio);
  const { toggle: changeBio, toggleShow: toggleChangeBio, setToggle: setChangeBio } = useToggle();
  const { toggle: error, setToggle: setError } = useToggle();
  const { toggle: loading, setToggle: setLoading } = useToggle();
  const { toggle: success, setToggle: setSuccess } = useToggle();

  const { inputFileRef, chooseImage, submitUpload, handleFileInputChange, previewImage, resetUploadStates } = useUpload();
  const {
    inputFileRef: inputFileRefBg,
    chooseImage: chooseBgImage,
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
      <UserCard
        userProfile={userProfile}
        fileUploadProps={{ chooseBgImage, previewImage, chooseImage, inputFileRef, handleFileInputChange }}
        bioProps={{ bio, setBio, changeBio, toggleChangeBio }}
      />
    </section>
  );
}

export default User;
