import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Toast from '../../commonComponents/toast/Toast';
import { doGetSupplierById, doUpdateSupplier } from '../../redux/actions/SupplierActions';

export default function UseProfile() {
    const dispatch = useDispatch();
    const data = useSelector(state => state.AuthReducer.user);
    const supplierData = useSelector(state => state.SupplierReducer.supplier);
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [contact, setContact] = useState('');
    const [loading, setLoading] = useState(false);
    const [profileImg, setProfileImg] = useState('');
    const [coverImg, setCoverImg] = useState('');
    const [imgId, setImgId] = useState('');
    const [submitLoading, setSubmitLoading] = useState(false);
    const [getLoading, setGetLoading] = useState(false);
    useEffect(() => {
        if (data) {
            dispatch(doGetSupplierById(data?._id, setGetLoading))
        }

    }, [data])
    useEffect(() => {
        if (supplierData) {
            setEmail(supplierData?.email);
            setName(supplierData?.name);
            setAddress(supplierData?.address);
            setContact(supplierData?.contact);
            setProfileImg(supplierData?.img);
            setCoverImg(supplierData?.coverImg);
        }
    }, [supplierData])
    const uploadImage = async (image, setImage, id) => {
        setImgId(id)
        const formData = new FormData();
        const imgFile = image.target.files[0];
        formData.append('file', imgFile)
        formData.append('upload_preset', 'u8wzu4dt');
        try {
            setLoading(true)
            const res = await fetch('https://api.cloudinary.com/v1_1/dlicwum0v/image/upload', {
                method: 'post',
                body: formData,
            })
            const json = await res.json();
            const data = json;
            setImage(data?.secure_url)
        }
        catch (err) {
            console.log(err.message);
        }
        finally {
            setLoading(false)
        }
    }
    const imgDeleteHandler = (setImage) => {
        setImage('');
    }
    const submitHandler = () => {
        if (!loading) {
            const userData = {
                email: email,
                name,
                address,
                contact,
                img: profileImg,
                _id: data?._id,
                coverImg,
            }
            dispatch(doUpdateSupplier(userData, Toast, setSubmitLoading,data,'Profile Updating',name))
        }
    }
    return [{
        loading,
        profileImg,
        setProfileImg,
        imgDeleteHandler,
        uploadImage,
        email, setEmail,
        name, setName,
        address, setAddress,
        contact, setContact,
        submitHandler,
        submitLoading,
        getLoading,
        coverImg, setCoverImg,
        imgId, setImgId,
    }]
}
