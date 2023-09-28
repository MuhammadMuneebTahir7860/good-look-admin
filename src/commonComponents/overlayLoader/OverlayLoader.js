import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { OLS } from './OverlayLoaderStyle';
import { CircleSpinner } from 'react-spinners-kit';

export default function OverlayLoader({ open }) {
    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <OLS.Box >
                        <OLS.LoaderContainer>
                            <CircleSpinner color="#0D4cb5" height={100} width={100} />
                        </OLS.LoaderContainer>
                    </OLS.Box>
                </Fade>
            </Modal>
        </div>
    );
}
