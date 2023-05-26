import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from 'common/auth.styled';
import { ACLogoIcon } from 'assets/images';
import { AuthInput } from 'components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const LoginPage = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();

  const handleClick = async () => {
    if (username.length === 0 || password.length === 0) {
      return;
    }
    const success = await login({ username, password });
    if (success) {
      //登入成功訊息
      Swal.fire({
        position: 'top',
        icon: 'success',
        title: '登入成功',
        showConfirmButton: false,
        timer: 1000,
      });
      return;
    }
    //登入失敗訊息
    Swal.fire({
      position: 'top',
      icon: 'error',
      title: '登入失敗',
      showConfirmButton: false,
      timer: 1000,
    });
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/todos');
    }
  }, [navigate, isAuthenticated]);

  return (
    <AuthContainer>
      <div>
        <ACLogoIcon />
      </div>
      <h1>登入 Todo</h1>

      <AuthInputContainer>
        <AuthInput
          label={'帳號'}
          placeholder={'請輸入帳號'}
          value={username}
          onChange={(nameInputValue) => setUserName(nameInputValue)}
        />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput
          type={'password'}
          label={'密碼'}
          placeholder={'請輸入密碼'}
          value={password}
          onChange={(passwordInputValue) => setPassword(passwordInputValue)}
        />
      </AuthInputContainer>
      <AuthButton onClick={handleClick}>登入</AuthButton>
      <Link to="/signup">
        <AuthLinkText>註冊</AuthLinkText>
      </Link>
    </AuthContainer>
  );
};

export default LoginPage;
