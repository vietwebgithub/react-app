import React from 'react';
import Menu from './Menu'; // Import menu bạn vừa tạo

function App() {
  return (
    <div style={{ display: 'flex', padding: '20px', gap: '20px', background: '#242424', minHeight: '100vh' }}>
      {/* Hiển thị Menu ở góc bên trái */}
      <Menu />

      {/* Vùng hiển thị nội dung bên phải */}
      <div style={{ color: '#fff', flex: 1 }}>
        <h1>Welcome to ReactJS App!</h1>
        <p>Menu ready. Try click on items.</p>
      </div>
    </div>
  );
}

export default App;