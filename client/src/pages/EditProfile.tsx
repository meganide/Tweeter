import { useContext } from 'react';
import { Link } from 'react-router-dom';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { AuthContext, IAuthContext } from '../contexts/authContext';
import { useUpload } from '../hooks/useUpload';
import Button from '../components/common/Button';
import Avatar from '../components/common/Avatar';

function EditProfile() {
  const { currentUser } = useContext(AuthContext) as IAuthContext;

  const { inputFileRef, chooseImage, submitUpload, handleFileInputChange, previewImage } = useUpload();
  const {
    inputFileRef: inputFileRefBg,
    chooseImage: ChooseBgImage,
    submitUpload: submitBgUpload,
    handleFileInputChange: handleFileInputChangeBg,
    previewImage: previewBgImage,
  } = useUpload();

  function SubmitEditProfile() {}

  return (
    <section className="mx-auto flex h-full max-w-7xl flex-col justify-center gap-3 py-4 px-3 pb-16 lg:px-3 lg:pb-0 xl:px-0">
      <section className="flex flex-col place-items-center justify-center">
        <section className="my-3 w-full lg:w-[75%]">
          <Link className="flex place-items-center gap-2 text-accent" to={`/profile/${currentUser?.name}`}>
            <ChevronLeftIcon />
            Back
          </Link>
        </section>
        <section className="flex w-full flex-col gap-6 rounded-md border border-neutral-300 p-4 dark:border-neutral-700 lg:w-[75%]">
          <h2 className="text-neutral-600 dark:text-neutral-300">Change Info</h2>
          <section className="flex place-items-center gap-5">
            <input className="hidden" type="file" name="profilePic" accept=".jpg, .jpeg, .png" ref={inputFileRef} onChange={handleFileInputChange} />
            <Avatar height="w-[152px] h-[152px]" imgSrc={previewImage ? previewImage : currentUser?.profilePic} />
            <p className="cursor-pointer text-accent hover:text-sky-700" onClick={chooseImage}>
              CHANGE PROFILE PHOTO
            </p>
          </section>
          <section className="flex place-items-center gap-5">
            <input className="hidden" type="file" name="bgPic" accept=".jpg, .jpeg, .png" ref={inputFileRefBg} onChange={handleFileInputChangeBg} />
            <img className="w-[80%] max-[300px] object-cover object-center" src={previewBgImage ? previewBgImage : currentUser?.profile.backgroundImg} />
            <p className="cursor-pointer text-accent hover:text-sky-700" onClick={ChooseBgImage}>
              CHANGE BACKGROUND
            </p>
          </section>

          <section>
            <Button type="button" text="Save" onClick={SubmitEditProfile} />
          </section>
        </section>
      </section>
    </section>
  );
}

export default EditProfile;
