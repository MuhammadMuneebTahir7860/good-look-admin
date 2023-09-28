import { useState } from "react";
import { useDispatch } from "react-redux";
import { doForgotPasswordSavePassword, doForgotPasswordSendOtp, doForgotPasswordVerifyOtp } from "../../redux/actions/AuthActions";
import { useNavigate } from "react-router-dom";
export default function UseForgotPassword() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [step, setStep] = useState(0);
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [otp, setOtp] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [role, setRole] = useState('');
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const sendOtpHandler = () => {
        if (!email.match(validRegex)) {
            setError('Please enter valid email!')
        }
        else {
            dispatch(doForgotPasswordSendOtp(email, setLoading, setError, setStep, role))
        }
    }
    const verifyOtpHandler = () => {
        if (otp?.length == 4) {
            dispatch(doForgotPasswordVerifyOtp(otp, email, setLoading, setError, setStep,role))
        }
        else {
            setError('Please enter correct code!')
        }
    }
    const passwordSaveHandler = () => {
        if (password) {
            dispatch(doForgotPasswordSavePassword(email, password, otp, setLoading, setError, setStep, navigate,role))
        }
        else {
            setError('Please enter password!')
        }

    }
    return [{
        loading, step, email, setEmail, error, sendOtpHandler, otp, setOtp, verifyOtpHandler, password, setPassword, passwordSaveHandler,
        setError,
        showPassword,
        handleClickShowPassword,
        setStep,
        setRole,
    }]
}
