import { Container } from '@mui/material'
import React from 'react'
import { PS } from './ProfileStyle';
import UseProfile from './UseProfile';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { CircleSpinner } from 'react-spinners-kit';
import Button from '@mui/material/Button';
import OverlayLoader from '../../commonComponents/overlayLoader/OverlayLoader';
import CommonTableLoader from '../../commonComponents/commonTableLoader/CommonTableLoader'

export default function Profile() {
    const [{ loading,
        profileImg,
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
        setProfileImg,
    }] = UseProfile();
    if (getLoading) {
        return <CommonTableLoader />
    }
    return (
        <Container maxWidth="sm">
            <OverlayLoader open={submitLoading} />
            <PS.TextInput
                InputLabelProps={{ shrink: true }}
                InputProps={{ disableUnderline: true }}
                margin="dense"
                label={"Email"}
                name={"Email"}
                type={"text"}
                required
                fullWidth
                variant="standard"
                disabled
                value={email}
            />
            <PS.TextInput
                InputLabelProps={{ shrink: true }}
                InputProps={{ disableUnderline: true }}
                margin="dense"
                label={"Name"}
                name={"Name"}
                type={"text"}
                required
                fullWidth
                variant="standard"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <PS.TextInput
                InputLabelProps={{ shrink: true }}
                InputProps={{ disableUnderline: true }}
                margin="dense"
                label={"Address"}
                name={"Address"}
                type={"text"}
                required
                fullWidth
                variant="standard"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
            />
            <PS.TextInput
                InputLabelProps={{ shrink: true }}
                InputProps={{ disableUnderline: true }}
                margin="dense"
                label={"Contact number"}
                name={"Contact number"}
                type={"number"}
                required
                fullWidth
                variant="standard"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
            />
            <PS.LabelText>Profile*</PS.LabelText>
            {
                loading && imgId == 1 ?
                    <PS.ImageUploaderBtn  >
                        <CircleSpinner color="#0D4cb5" height={50} width={50} />
                    </PS.ImageUploaderBtn>
                    :
                    !profileImg ?
                        <PS.ImageUploaderBtn variant="secondary" img={profileImg} component="label">
                            <IconButton color="default" aria-label="upload picture" component="label">
                                <input onChange={(e) => uploadImage(e, setProfileImg, 1)} hidden accept="image/*" type="file" />
                                <PhotoCamera sx={{ fontSize: 40 }} />
                            </IconButton>
                        </PS.ImageUploaderBtn>
                        :
                        <PS.ImageUploaderBtn img={profileImg} >
                            <IconButton sx={{ marginTop: -18, marginRight: -17 }} color="default"  >
                                <RemoveCircleIcon onClick={() => imgDeleteHandler(setProfileImg)} />
                            </IconButton>
                        </PS.ImageUploaderBtn>
            }
            <PS.LabelText>Cover*</PS.LabelText>
            {
                loading && imgId == 2 ?
                    <PS.ImageUploaderBtn  >
                        <CircleSpinner color="#0D4cb5" height={50} width={50} />
                    </PS.ImageUploaderBtn>
                    :
                    !coverImg ?
                        <PS.ImageUploaderBtn style={{ marginRight: 10, marginBottom: 10 }} variant="secondary" img={coverImg} component="label">
                            <IconButton color="default" aria-label="upload picture" component="label">
                                <input onChange={(e) => uploadImage(e, setCoverImg, 2)} hidden accept="image/*" type="file" />
                                <PhotoCamera sx={{ fontSize: 40 }} />
                            </IconButton>
                        </PS.ImageUploaderBtn>
                        :
                        <PS.ImageUploaderBtn img={coverImg} >
                            <IconButton sx={{ marginTop: -18, marginRight: -17 }} color="default"  >
                                <RemoveCircleIcon onClick={() => imgDeleteHandler(setCoverImg)} />
                            </IconButton>
                        </PS.ImageUploaderBtn>
            }
            <br />
            <br />
            <br />
            <Button
                variant='contained'
                onClick={submitHandler}
                sx={{ cursor: loading && 'not-allowed' }}
            >Save</Button>
        </Container>
    )
}
