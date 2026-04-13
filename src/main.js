import './style.css'
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <div class="title">Hybrid Demo App</div>
    <div class="desc">
      App viết bằng HTML/CSS/JS, đóng gói chạy trên Android.
    </div>

    <div class="actions">
      <button id="btnLoad">Tạo danh sách 300 item</button>
      <button id="btnCamera">Mở Camera</button>
    </div>

    <img id="photo" class="photo" alt="Ảnh chụp" />
    <div id="list" class="list"></div>
  </div>
`

const listEl = document.getElementById('list')
const photoEl = document.getElementById('photo')
const btnLoad = document.getElementById('btnLoad')
const btnCamera = document.getElementById('btnCamera')

function renderList(count = 300) {
  const items = []
  for (let i = 1; i <= count; i++) {
    items.push(`
      <div class="card">
        <div class="card-title">Mục dữ liệu số ${i}</div>
        <div class="card-sub">Đây là item để demo scroll trong ứng dụng Hybrid.</div>
      </div>
    `)
  }
  listEl.innerHTML = items.join('')
}

btnLoad.addEventListener('click', () => {
  renderList(300)
})

btnCamera.addEventListener('click', async () => {
  try {
    const image = await Camera.getPhoto({
      quality: 80,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    })

    photoEl.src = image.webPath
    photoEl.style.display = 'block'
  } catch (error) {
    alert('Không mở được camera hoặc bạn chưa cấp quyền.')
    console.error(error)
  }
})

renderList()