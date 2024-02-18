import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useUploadAvatarMutation } from '../../../redux/auth/usersOperations';
import { Avatar, Button } from '@mui/material';
import { HiddenInput, ProfilePictureContainer } from './styles';

const UserProfileForm = () => {
  // const [selectedFile, setselectedFile] = useState(null);
  // const [ upLoaded, setUpLoaded] = useState()
  const [uploadAvatar] = useUploadAvatarMutation();

  const loadAvatar = uploadAvatar;

  const { register, handleSubmit } = useForm();
  const hiddenInputRef = useRef();
  const { ref: registerRef, ...rest } = register('profilePicture');
  const [preview, setPreview] = useState();
  const handleUploadedFile = (event) => {
    const file = event.target.files[0];

    const urlImage = URL.createObjectURL(file);

    setPreview(urlImage);
  };
  const onUpload = () => {
    hiddenInputRef.current.click();
  };
  //  const uploadButtonLabel = preview ? 'Change image' : 'Upload image';

  // const onSubmit = (data) => console.log(data);
  const onSubmit = ({ avatar }) => {
    
    const formData = new FormData();
    formData.append('file', avatar);

    loadAvatar(formData);

    return;

    //     const formData = new FormData()
    //     formData.append('file', avatar)

    //     const res = await (uploadAvatar,{
    //       method: 'POST',
    //       body: formData
    //     })
    // const data = await res.json()
    // handleUploadedFile(data);
  };

  return (
    <>
      <ProfilePictureContainer>
        <HiddenInput
          type="file"
          name="avatar"
          {...rest}
          onChange={handleUploadedFile}
          ref={(e) => {
            registerRef(e);
            hiddenInputRef.current = e;
          }}
        />

        <Button variant="text" onClick={onUpload}>
          <Avatar src={preview} sx={{ width: 80, height: 80 }} />
          {/* {uploadButtonLabel} */}
        </Button>
      </ProfilePictureContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('exampleRequired', { required: true })} />

        <input type="submit" />
      </form>
    </>
  );
};

//   const onSubmitFnc = ({  image }) => {
//     // const user = {
//     //   email: userEmail,
//     //   password,
//     //   name,
//     // };

//     if (image && image.name !== userAvatar) {
//       const formData = new FormData();
//       formData.append('image', image);

//       dispatch(upLoadAvatar(formData));

//         formik.resetForm({ values: { image, password: '' } });

//       return;
//     }

// if (name !== userName) {
//   if (!password) {
//     Notify.warning('Please enter a password and try again', {
//       fontSize: '16px',
//       width: '350px',
//       padding: '10px',
//     });
//     return;
//   }
//   dispatch(updateUserById(user));

//   formik.resetForm({ values: { name, password: '' } });
// }
// };

// const formik = useFormik({
//   initialValues: {
//     name: userName,
//     password: '',
//     image: '',
//   },
//   onSubmit: onSubmitFnc,
//   validationSchema: Yup.object({
//     image: Yup.mixed(),
//     password: Yup.string(),
//   }),
// });

//  const handleSubmit = (event) => {
//    event.preventDefault();

//  };

//  const handleChange = () => {

//  };

//   return (
//     <SC.Form onSubmit={handleSubmit}>
//       <SC.Label>
//         Name
//         <SC.Input
//           onChange={handleChange}
//           type="text"
//           name="name"
//           value={name}
//           pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           required
//         />
//       </SC.Label>

//       <SC.Button type="submit">Save changes</SC.Button>
//     </SC.Form>
//   );

export default UserProfileForm;
