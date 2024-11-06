import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="header">
        <button className="guide-button">Hướng dẫn</button>
        <button className="manage-button">Quản lý hàng hóa</button>
      </div>
      <div className="search">
        <input type="text" placeholder="Tìm kiếm hàng hóa" />
        <p>Không tìm thấy hàng hóa nào!</p>
      </div>
      <div className="product-list">
        <h3>Danh Sách Hàng Hóa</h3>
        <div className="pagination">
          <button className="prev-page">Trang trước</button>
          <span>Trang 1/0</span>
          <button className="next-page">Trang sau</button>
        </div>
      </div>
      <div className="add-product">
        <button>Thêm Hàng Hóa</button>
      </div>
    </div>
  );
}

export default App;
