import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { supabase } from './supabaseClient';
import NotFound from './pages/NotFound'; // 👈 Import trang 404 từ file riêng biệt vừa tạo

// Component hiển thị danh sách sản phẩm (Trang chủ)
function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      const { data, error } = await supabase
        .from('products')
        .select('*');

      if (error) {
        console.error('Lỗi lấy dữ liệu:', error);
      } else {
        setProducts(data);
      }
      setLoading(false);
    }

    fetchProducts();
  }, []);

  if (loading) return <p style={{ textAlign: 'center', marginTop: '50px' }}>Đang tải dữ liệu...</p>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Danh sách sản phẩm từ Supabase</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '250px' }}>
            <h3>{product.name}</h3>
            <p style={{ color: 'green', fontWeight: 'bold' }}>
              Giá: {product.price ? product.price.toLocaleString('vi-VN') : 0} đ
            </p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      
      <div style={{ marginTop: '25px' }}>
        <Link to="/duong-dan-khong-ton-tai" style={{ color: '#007bff' }}>
          👉 Bấm thử vào đây để test chuyển sang trang lỗi 404 độc lập
        </Link>
      </div>
    </div>
  );
}

// Cấu hình định tuyến chính của ứng dụng
function App() {
  return (
    <Router>
      <Routes>
        {/* Đường dẫn trang chủ khớp với danh sách sản phẩm */}
        <Route path="/" element={<ProductList />} />

        {/* Bất kỳ đường dẫn sai nào khác sẽ gọi tới Component NotFound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;