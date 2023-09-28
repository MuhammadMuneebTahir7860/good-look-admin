import React from "react";
import { LoginStyle } from "./LoginStyle";
import loginPageLogo from '../../../assets/logo.png';
import UseLogin from './UseLogin';
import { StageSpinner } from 'react-spinners-kit'
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [{ loading, values, handleChange, handleClickShowPassword, email, setEmail, loginHandler, emailTyping, emaiTypingRemove, passwordTyping, passwordTypingRemove, showPassword }] = UseLogin();
    return (
        <div>
            <LoginStyle.MainPage>
                <LoginStyle.Image src={loginPageLogo} />
                <LoginStyle.LoginContainer>
                    {/* Below Code for toastify   */}
                    {/* <ToastContainer/> */}
                    {/* Below Code for Header. (Login Heading and Logo) */}
                    <LoginStyle.InlineHeaderContainer>
                        <LoginStyle.LoginHeading>
                            Sign In
                        </LoginStyle.LoginHeading>
                    </LoginStyle.InlineHeaderContainer>
                    {/* Below Code for Email Input Field   */}
                    <LoginStyle.ForgotContainer>
                        <LoginStyle.InputFieldHeading>
                            Email<LoginStyle.Estaric>{'*'}</LoginStyle.Estaric>
                        </LoginStyle.InputFieldHeading>
                    </LoginStyle.ForgotContainer>

                    <LoginStyle.IconAndInputField typing={values.emailTyping} onClick={() => emailTyping()}>
                        <LoginStyle.IconContainer>
                            <LoginStyle.PersonOutlineIcon typing={values.emailTyping} />
                        </LoginStyle.IconContainer>
                        <LoginStyle.Input type='text' placeholder='Enter an email address' value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => emaiTypingRemove()} />
                    </LoginStyle.IconAndInputField>
                    {/* Below Code for Password Input Field */}


                    <LoginStyle.ForgotContainer>

                        <LoginStyle.InputFieldHeading>
                            Password<LoginStyle.Estaric>{'*'}</LoginStyle.Estaric>
                        </LoginStyle.InputFieldHeading>
                        <LoginStyle.ForgotPassword onClick={() => navigate("/forget-password")}>
                            Forgot Password?
                        </LoginStyle.ForgotPassword>
                    </LoginStyle.ForgotContainer>

                    <LoginStyle.IconAndInputField typing={values.passwordTyping} onClick={() => passwordTyping()}>
                        <LoginStyle.IconContainer>
                            <LoginStyle.LockIcon typing={values.passwordTyping} />
                        </LoginStyle.IconContainer>
                        <LoginStyle.Input value={values.password} onChange={handleChange('password')} type={showPassword ? 'text' : 'password'} placeholder='Enter a password' onBlur={() => passwordTypingRemove()} />
                        {/* Below Code is part of Password input field used for changing Password visible Icon Color   */}
                        <LoginStyle.PasswordVisibleIconContainer>
                            <LoginStyle.VisibilityIcon showPassword={showPassword} onClick={() => handleClickShowPassword()} />
                        </LoginStyle.PasswordVisibleIconContainer>
                    </LoginStyle.IconAndInputField>
                    {/* Below Code for login Button   */}
                    {loading ?
                        <LoginStyle.LoaderContainer>
                            <StageSpinner color="#0D4cb5" height={50} width={50} />
                        </LoginStyle.LoaderContainer>
                        :
                        <LoginStyle.ButtonContainer>
                            <LoginStyle.LoginButton onClick={loginHandler}>Log In</LoginStyle.LoginButton>
                        </LoginStyle.ButtonContainer>
                    }
                </LoginStyle.LoginContainer>
            </LoginStyle.MainPage>
        </div>

    )
}