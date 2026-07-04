import React, { useState } from 'react';

function Menu() {
  // 1. Định nghĩa mảng danh sách các mục menu
  const menuItems = [
    { id: 1, text: "🏠 Trang Chủ", path: "/" },
    { id: 2, text: "📋 Quản lý Công Việc (Todos)", path: "/todos" },
    { id: 3, text: "👤 Hồ Sơ Cá Nhân", path: "/profile" },
    { id: 4, text: "⚙️ Cài Đặt Hệ Thống", path: "/settings" }
  ];

  // 2. Tạo state để lưu xem người dùng đang bấm vào mục nào (để làm nổi bật - Active)
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div style={styles.menuContainer}>
      <h3 style={styles.menuTitle}>📂 MENU DỰ ÁN</h3>
      <ul style={styles.menuList}>
        {/* 3. Dùng vòng lặp .map() để render danh sách menu */}
        {menuItems.map((item) => (
          <li 
            key={item.id} 
            style={{
              ...styles.menuItem,
              ...(activeTab === item.id ? styles.activeItem : {})
            }}
            onClick={() => {
              setActiveTab(item.id);
              console.log(`Bạn vừa bấm vào: ${item.text}`);
              // Sau này bạn có thể chuyển trang (routing) ở đây
            }}
          >
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

// 4. Định nghĩa CSS bằng Inline Style cho nhanh và gọn
const styles = {
  menuContainer: {
    width: '280px',
    backgroundColor: '#1e1e24',
    color: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif'
  },
  menuTitle: {
    borderBottom: '1px solid #3a3a43',
    paddingBottom: '10px',
    marginBottom: '15px',
    color: '#4dadf7'
  },
  menuList: {
    listStyleType: 'none',
    padding: 0,
    margin: 0
  },
  menuItem: {
    padding: '12px 15px',
    marginBottom: '8px',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    backgroundColor: '#2a2a35'
  },
  // Style áp dụng riêng cho mục đang được chọn
  activeItem: {
    backgroundColor: '#4dadf7',
    color: '#000',
    fontWeight: 'bold',
    transform: 'translateX(5px)'
  }
};

export default Menu;