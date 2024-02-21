import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Avatar, Button } from '@mui/material';
import { useUploadUserMutation } from '../../../redux/auth/usersOperations';
import { useSelector } from 'react-redux';
import { selectAuthUser } from '../../../redux/auth/authSelectors';


const UserProfileForm = () => {
  const user = useSelector(selectAuthUser);
  
  const [uploadUser] = useUploadUserMutation();
 
  const hiddenInputRef = useRef();
  const [preview, setPreview] = useState();
  const [userName, setUserName] = useState({ name: user.name });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserName({ ...userName, [name]: value });
  };

  const handleUploadedFile = (event) => {
    const file = event.target.files[0];
    console.log(file);

    const urlImage = URL.createObjectURL(file);

    setPreview(urlImage);
  };
  const onUpload = () => {
    hiddenInputRef.current.click();
  };
  //  const uploadButtonLabel = preview ? 'Change image' : 'Upload image';

  const onSubmit = (data) => {
    console.log(data);
    console.log(data.avatar);
    console.log(data.name);
    console.log(preview);

    const formData = new FormData();
    formData.append('avatar', data.avatar[0]);
    formData.append('name', data.name);

  console.log(formData.entries('avatar'));
     for (const pair of formData.entries()) {
       console.log(pair[0] + ', ' + pair[1]);
     }

    return uploadUser(formData);
  };

  const { register, handleSubmit } = useForm();

  const { ref: registerRef, ...rest } = register('avatar');
  // console.log('register', register);

  return (
    <>
      <form
        className="w-[335px] md:w-[500px] items-center flex flex-col  pl-[25px] pr-[25px] pt-[50px] pb-[50px] md:pl-[50px] md:pr-[50px] md:pt-[50px] md:pb-[75px] "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" pb-[25px] md:pb-[40px]">
          <input
            className="hidden"
            type="file"
            // {...register('avatar', { required: true })}
            // name="avatar"
            {...rest}
            onChange={handleUploadedFile}
            ref={(e) => {
              registerRef(e);
              hiddenInputRef.current = e;
            }}
          />

          <Button className="" variant="text" onClick={onUpload}>
            <Avatar
              className=""
              src={preview}
              sx={{ width: 100, height: 100 }}
            />
            {/* {uploadButtonLabel} */}
          </Button>
        </div>
        <input
          className="pl-[24px] md:py-[18px] w-full rounded-[200px] bg-transparent border-border-color border-[1px] text-primary-text-color text-[16px] "
          {...register('name', { required: true })}
          type="text"
          placeholder="name"
          autoComplete="off"
          onChange={handleChange}
          value={userName.name}
        />
        <button
          className="w-[285px] md:w-[400px] mt-[18px] md:mt-[25px] w-full text-center py-[18px] rounded-[200px] bg-transparent border-[1px]  border-border-color text-primary-text-color text-[16px] leading-[1.12] font-semibold hover:bg-primary-text-color hover:text-primary-text-button-color transition-colors md:text-[17px] md:py-[18px] md:leading-[1.56]"
          type="submit"
        >
          Save changes
        </button>
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
