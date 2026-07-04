import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ fontSize: '100px', color: '#ff4d4f', margin: '0' }}>404</h1>
      <h2 style={{ fontSize: '24px', color: '#333' }}>Oops! Không tìm thấy trang</h2>
      <p style={{ color: '#666', marginBottom: '30px' }}>Đường dẫn bạn truy cập không tồn tại hoặc đã bị thay đổi.</p>
      
      <Link to="/" style={{
        display: 'inline-block',
        backgroundColor: '#007bff',
        color: '#fff',
        padding: '12px 24px',
        textDecoration: 'none',
        borderRadius: '5px',
        fontWeight: 'bold',
        boxShadow: '0 4px 6px rgba(0,123,255,0.2)'
      }}>
        Quay lại Trang Chủ
      </Link>
    </div>
  );
}

export default NotFound;