import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from 'components/common/auth.styled';
import { ACLogoIcon } from 'assets/images';
import { AuthInput } from 'components';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from 'api/auth.js';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const handleClick = async () => {
    if (username.length === 0 || password.length === 0 || email.length === 0) {
      return;
    }
    const { success, authToken } = await register({
      username,
      password,
      email,
    });

    if (success) {
      localStorage.setItem('authToken', authToken);
      //註冊成功訊息
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: '註冊成功',
        showConfirmButton: false,
        timer: 1000,
      });
      navigate('/todos');
      return;
    }
    //註冊失敗訊息
    Swal.fire({
      position: 'top',
      icon: 'error',
      title: '註冊失敗',
      showConfirmButton: false,
      timer: 1000,
    });
  };
  return (
    <AuthContainer>
      <div>
        <ACLogoIcon />
      </div>
      <h1>建立您的帳號</h1>

      <AuthInputContainer>
        <AuthInput
          label={'帳號'}
          placeholder={'請輸入號'}
          value={username}
          onChange={(nameInputValue) => setUserName(nameInputValue)}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          label={'email'}
          placeholder={'請輸入 email'}
          value={email}
          onChange={(emailInputValue) => setEmail(emailInputValue)}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          label={'密碼'}
          placeholder={'請輸入密碼'}
          value={password}
          onChange={(passwordInputValue) => setPassword(passwordInputValue)}
        />
      </AuthInputContainer>
      <AuthButton onClick={handleClick}>註冊</AuthButton>
      <Link to="/login">
        <AuthLinkText>取消</AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default SignUpPage;
