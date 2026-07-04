import { useEffect, useState } from 'react';
import { supabase } from './supabaseClient';

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      setLoading(true);
      // Gọi dữ liệu từ bảng 'products' đã tạo ở Phần 1
      const { data, error } = await supabase
        .from('products')
        .select('*'); // Lấy tất cả các cột

      if (error) {
        console.error('Lỗi lấy dữ liệu:', error);
      } else {
        setProducts(data);
      }
      setLoading(false);
    }

    fetchProducts();
  }, []);

  if (loading) return <p style={{ textAlign: 'center' }}>Đang tải dữ liệu...</p>;

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Danh sách sản phẩm từ Supabase</h1>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px', width: '250px' }}>
            <h3>{product.name}</h3>
            <p style={{ color: 'green', fontWeight: 'bold' }}>
              Giá: {product.price.toLocaleString('vi-VN')} đ
            </p>
            <p>{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;