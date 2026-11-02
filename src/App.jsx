// ✏️ Nội dung trang chủ nằm ở các mảng bên dưới, sửa thoải mái.
const NAV = [
  { label: 'Sản phẩm', href: '#san-pham' },
  { label: 'Dịch vụ', href: '#dich-vu' },
  { label: 'Nhận nuôi', href: '#nhan-nuoi' },
  { label: 'Liên hệ', href: '#lien-he' },
]

const CATEGORIES = [
  { icon: '🐶', name: 'Chó', note: 'Thức ăn, đồ chơi, vòng cổ' },
  { icon: '🐱', name: 'Mèo', note: 'Cát vệ sinh, pate, cây cào' },
  { icon: '🐹', name: 'Thú cưng nhỏ', note: 'Hamster, thỏ, sóc' },
  { icon: '🦴', name: 'Phụ kiện', note: 'Lồng, nệm, balo vận chuyển' },
]

const SERVICES = [
  { icon: '🛁', title: 'Spa & Grooming', text: 'Tắm, cắt tỉa lông và vệ sinh tai, móng nhẹ nhàng cho bé.' },
  { icon: '🩺', title: 'Khám & tiêm phòng', text: 'Bác sĩ thú y kiểm tra sức khỏe định kỳ và lên lịch tiêm.' },
  { icon: '🏠', title: 'Gửi thú cưng', text: 'Chỗ ở sạch sẽ, có người chăm khi bạn đi công tác hay du lịch.' },
]

const STEPS = [
  { n: '1', title: 'Chọn dịch vụ hoặc sản phẩm', text: 'Duyệt danh mục và chọn thứ bé nhà bạn cần.' },
  { n: '2', title: 'Đặt lịch hoặc đặt hàng', text: 'Điền thông tin trong vài phút, không cần gọi điện.' },
  { n: '3', title: 'Nhận xác nhận', text: 'Chúng tôi liên hệ lại để xác nhận và chăm sóc bé.' },
]

export default function App() {
  return (
    <>
      <header className="bar">
        <a href="#" className="brand">🐾 SenPetopia</a>
        <nav aria-label="Menu chính">
          {NAV.map((i) => <a key={i.href} href={i.href}>{i.label}</a>)}
        </nav>
        <a className="btn btn-ghost" href="#dang-nhap">Đăng nhập</a>
      </header>

      <main>
        <section className="hero">
          <div className="hero-text">
            <p className="eyebrow">Cửa hàng & dịch vụ thú cưng</p>
            <h1>Nơi mọi bé thú cưng được yêu thương đúng cách</h1>
            <p className="lead">
              Từ thức ăn, phụ kiện đến spa và khám thú y, SenPetopia giúp bạn chăm sóc người bạn bốn chân dễ dàng hơn mỗi ngày.
            </p>
            <div className="actions">
              <a className="btn btn-primary" href="#san-pham">Mua sắm ngay</a>
              <a className="btn btn-ghost" href="#dich-vu">Đặt lịch dịch vụ</a>
            </div>
          </div>
          <div className="hero-art" aria-hidden="true">
            <span>🐕</span><span>🐈</span><span>🐇</span>
          </div>
        </section>

        <section id="san-pham" className="block">
          <h2>Mua sắm theo bé nhà bạn</h2>
          <ul className="grid cats">
            {CATEGORIES.map((c) => (
              <li key={c.name}>
                <a href="#" className="card cat">
                  <span className="icon">{c.icon}</span>
                  <strong>{c.name}</strong>
                  <span className="muted">{c.note}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="dich-vu" className="block alt">
          <h2>Dịch vụ chăm sóc</h2>
          <ul className="grid">
            {SERVICES.map((s) => (
              <li key={s.title} className="card">
                <span className="icon">{s.icon}</span>
                <h3>{s.title}</h3>
                <p className="muted">{s.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="nhan-nuoi" className="block">
          <h2>Đặt lịch chỉ với 3 bước</h2>
          <ol className="grid steps">
            {STEPS.map((s) => (
              <li key={s.n}>
                <span className="num">{s.n}</span>
                <h3>{s.title}</h3>
                <p className="muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section id="lien-he" className="cta">
          <h2>Bạn cần tư vấn cho bé nhà mình?</h2>
          <p>Nhắn cho SenPetopia, chúng tôi phản hồi trong ngày.</p>
          <a className="btn btn-primary" href="mailto:hello@senpetopia.vn">hello@senpetopia.vn</a>
        </section>
      </main>

      <footer>
        <span>🐾 SenPetopia</span>
        <span>© {new Date().getFullYear()} SenPetopia. Mọi quyền được bảo lưu.</span>
      </footer>
    </>
  )
}
