import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage, LoginPage, SignUpPage, TodoPage } from 'pages';
import { AuthProvider } from 'contexts/AuthContext';

function App() {
  const basename = process.env_PUBLIC_URL;
  return (
    <div className="app">
      <BrowserRouter basename={basename}>
        <AuthProvider>
          <Routes>
            <Route path="todos" element={<TodoPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
