export const fileUpload = async (file) => {

   const cloudURL = 'https://api.cloudinary.com/v1_1/db8fyitfu/upload';
   const timestamp = new Date().getTime();
   const formData = new FormData();
   formData.append('upload_preset', 'react-journal');
   formData.append('api_key', '361988855378122');
   formData.append('timestamp ', `${timestamp}`);
   formData.append('signature ', '6pyh_pUztkB3ySP_nu2hzgsDqVU');
   formData.append('file', file);
   try {
      const resp = await fetch(cloudURL, {
         method: 'POST',
         body: formData
      });
      if (resp.ok) {
         const cloudResp = await resp.json();
         return cloudResp.secure_url;
      } else {
         throw await resp.json();
      }
   } catch (error) {
      throw error;
   }
}