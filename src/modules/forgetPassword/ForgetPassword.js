import { Box } from "@mui/material";
import React, { useState } from "react";
import LOGO from "../../assets/logo.svg";
import "./ForgetPassword.css";
import { CircleSpinner } from 'react-spinners-kit';
import UseForgotPassword from "./UseForgotPassword";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function ForgetPassword() {
  const [{ loading, step, setStep, email, setEmail, error, sendOtpHandler, otp, setOtp, verifyOtpHandler, password, setPassword, passwordSaveHandler,
    setError,
    showPassword,
    setRole,
    handleClickShowPassword,
  }] = UseForgotPassword();
  return (
    <div>
      <Box className="forget-pg-container">
        <img src={LOGO} className="forget-log" />
        <div className="forget-inner-container">
          <p className="forget-heading">Recover Account</p>
          <p className="forget-email-text">
            {
              step == 0 ?
                "Please select your role"
                :
                step == 1 ?
                  "Please enter your email address.You will receive a code to create a new password" :
                  step == 2 ?
                    "Please enter otp code, Which you recieved on your gmail" :
                    step == 3 ?
                      "Please enter new password" :
                      null
            }

          </p>
          {
            step == 0 ?
              <div>
                <button className="client-option-btn" onClick={() => [setStep(1), setRole('admin')]}>
                  Admin
                </button>
                <button className="supplier-btn" onClick={() => [setStep(1), setRole('supplier')]}>
                  Supplier
                </button>
              </div>
              :
              step == 1 ?
                <input
                  placeholder="Enter your Email"
                  className="forget-email-feild"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                /> :
                step == 2 ?
                  <input
                    placeholder="Enter Otp"
                    className="forget-otp-feild"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />
                  :
                  step == 3 ?

                    <div className="forgetpassword-input-container">
                      <input
                        placeholder="Enter new password"
                        className="forget-password-feild"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => [setPassword(e.target.value), setError("")]}
                      />
                      <div
                        className='visibility-icon-container'>
                        {showPassword ? <VisibilityOffIcon onClick={handleClickShowPassword} sx={{ marginRight: 2 }} /> : <VisibilityIcon onClick={handleClickShowPassword} sx={{ marginRight: 2 }} />}
                      </div>
                    </div>

                    : null
          }

          <p className="error-display">{error && error}</p>
          {
            loading ?
              <div className="forgot-password-loader-container"><CircleSpinner color="#0D4cb5" height={100} width={100} /></div>
              :
              step == 1 ?
                <button className="forget-blue-btn" onClick={() => sendOtpHandler()}>
                  Next
                </button>
                :
                step == 2 ?
                  <button className="forget-blue-btn" onClick={() => verifyOtpHandler()}>
                    Verify
                  </button>
                  :
                  step == 3 ?
                    <button className="forget-blue-btn" onClick={() => passwordSaveHandler()}>
                      Save
                    </button> : null
          }
        </div>
      </Box>
    </div>
  );
}
