export async function loginAPI(email, password) {
  // Mô phỏng API call
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email === 'user@example.com' && password === '123456') {
        resolve({
          success: true,
          token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
          user: {
            id: '1',
            email: email,
            name: 'Nguyễn Văn A',
            avatar: '👤'
          }
        });
      } else {
        reject(new Error('Email hoặc mật khẩu không chính xác'));
      }
    }, 1500);
  });
}

export async function refreshTokenAPI(currentToken) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...new'
      });
    }, 1000);
  });
}