import cloudinaryApi from "@/api/cloudinary";

const uploadImages = async( file: File ) => {

    if( !file ) return null

    try {
        const formData = new FormData();
        formData.append('upload_preset', 'vuejs-test')
        formData.append('file', file);

        const { data } = await cloudinaryApi.post('/image/upload', formData);
        return data.secure_url
    } catch (error) {
        console.log(error);
        return null;
    }
}

export default uploadImages;