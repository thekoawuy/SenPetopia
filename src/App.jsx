// ✏️ Dữ liệu mẫu. Sau này thay bằng dữ liệu lấy từ API ASP.NET.
const CATEGORIES = [
  { icon: '', name: 'Thức ăn' },
  { icon: '', name: 'Đồ chơi' },
  { icon: '', name: 'Quần áo' },
  { icon: '', name: 'Phụ kiện' },
  { icon: '', name: 'Vệ sinh & chăm sóc' },
]

const PRODUCTS = [
  { id: 1, name: 'Hạt dinh dưỡng cho mèo con', cat: 'Thức ăn', price: 245000, inStock: true },
  { id: 2, name: 'Hạt cho chó trưởng thành 1,5 kg', cat: 'Thức ăn', price: 189000, inStock: true },
  { id: 3, name: 'Áo hoodie cho chó size L', cat: 'Quần áo', price: 129000, inStock: true },
  { id: 4, name: 'Bóng cao su đồ chơi gặm', cat: 'Đồ chơi', price: 59000, inStock: true },
  { id: 5, name: 'Cát vệ sinh đậu nành 6 L', cat: 'Vệ sinh & chăm sóc', price: 98000, inStock: false },
  { id: 6, name: 'Dây dắt phản quang cho chó', cat: 'Phụ kiện', price: 75000, inStock: true },
]

const money = (n) => n.toLocaleString('vi-VN') + '₫'

export default function App() {
  return (
    <>
      <header className="bar">
        <a href="#" className="brand"> SenPetopia</a>
        <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
          <input type="search" placeholder="Tìm thức ăn, đồ chơi, phụ kiện…" aria-label="Tìm sản phẩm" />
        </form>
        <div className="bar-actions">
          <a href="#dang-nhap" className="link">Đăng nhập</a>
          <a href="#gio-hang" className="btn">Giỏ hàng</a>
        </div>
      </header>

      <main>
        <section className="hero">  
          <div className="hero-text">
            <p className="eyebrow">Sản phẩm & phụ kiện thú cưng</p>
            <h1>Đúng đồ, đúng size, đúng với bé nhà bạn</h1>
            <p className="lead">Thức ăn, đồ chơi, quần áo và phụ kiện cho chó mèo, giao tận nhà.</p>
            {/* <a className="btn btn-primary" href="#san-pham">Mua sắm ngay</a> */}
          </div>
         {/* <div className="hero-art" aria-hidden="true"><span>🐕</span><span>🐈</span><span>🛍️</span></div>*/}
        </section>

        <section className="block" aria-labelledby="h-dm">
          <h2 id="h-dm">Danh mục sản phẩm</h2>
          <ul className="cats">
            {CATEGORIES.map((c) => (
              <li key={c.name}><a href="#san-pham" className="card cat"><span className="icon">{c.icon}</span><strong>{c.name}</strong></a></li>
            ))}
          </ul>
        </section>

        
      </main>

      <footer>
        <span> SenPetopia</span>
        <span>© {new Date().getFullYear()} SenPetopia. Mọi quyền được bảo lưu.</span>
      </footer>
    </>
  )
}