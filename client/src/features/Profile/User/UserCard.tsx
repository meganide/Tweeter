import { AuthContext, IAuthContext } from "../../../contexts/authContext";

import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Card from "../../../components/common/Card";
import { IFileUploadProps as IProfileUploadProps } from "./UserProfilePic";
import { IProps as IUserInfoProps } from "./UserInfo";
import UserInfo from "./UserInfo";
import UserProfilePic from "./UserProfilePic";
import {useContext} from "react";

interface IProps extends IUserInfoProps {
  fileUploadProps: IFileUploadProps;
} 

interface IFileUploadProps extends IProfileUploadProps {
  chooseBgImage: () => void;
}

function UserCard(props: IProps) {
  const {bioProps: {setBio, bio, changeBio, toggleChangeBio}, userProfile, fileUploadProps: {chooseBgImage, previewImage, chooseImage, inputFileRef, handleFileInputChange}} = props;


  const { currentUser } = useContext(AuthContext) as IAuthContext;

  return (
    <section className='-translate-y-8" relative m-auto max-w-7xl px-3 pb-4 lg:px-3 xl:px-0'>
      {currentUser?.name === userProfile.name && (
        <CameraAltIcon
          className="absolute right-3 -top-5 cursor-pointer rounded-[50%] bg-neutral-600 p-[6px] text-white"
          style={{ fontSize: '2.3rem' }}
          onClick={chooseBgImage}
        ></CameraAltIcon>
      )}
      <Card>
        <section className="flex flex-col place-items-center gap-5 p-4 pb-0 lg:flex-row lg:p-10 lg:pb-0">
          <UserProfilePic userProfile={userProfile} fileUploadProps={{ previewImage, chooseImage, inputFileRef, handleFileInputChange }} />
          <UserInfo userProfile={userProfile} bioProps={{ bio, setBio, changeBio, toggleChangeBio }} />
        </section>
      </Card>
    </section>
  );
}

export default UserCard;
