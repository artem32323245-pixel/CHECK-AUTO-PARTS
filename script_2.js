const CONFIG = {
    NP_API_KEY: '4b403aab17395c44c8833fae5f8acfa6',
    TELEGRAM_TOKEN: '8792242055:AAHvBzu3ox-9pFXohMumqV_b8A2l8h-B4Oc',
    TELEGRAM_CHAT_ID: '1027075156'
};

const REQUISITES = {
    CARD: "4246 0010 0793 4205 (ПриватБанк)",
    FOP: "ФОП Соломуд Андрій Васильович\nЄДРПОУ: 3579700091\nIBAN: UA1530529900000260050155100646\nБанк: АТ КБ 'ПРИВАТБАНК'"
};

const products = [
    { id: 1, brand: "LOCTITE", title: "Очисник гальм LOC TEROSON VR 190 500ML", price: 232.00, image: "img/maslo1.jpg" },
    { id: 2, brand: "MOTUL", title: "Олива автоматичної КП 1л ATF", price: 686.40, image: "img/maslo2.jpg" },
    { id: 3, brand: "MOTUL", title: "Моторна олива 5W30 5л 8100", price: 3168.00, image: "img/maslo3.jpg" },
    { id: 4, brand: "PRISTA OIL", title: "Олива автоматичної КП PRIS ATF DEXRON IID 1L", price: 255.30, image: "img/maslo4.jpg" },
    { id: 5, brand: "MOTUL", title: "Олива автоматичної КП 1л MULTI", price: 681.60, image: "img/maslo5.jpg" },
    { id: 6, brand: "CARTECHNIC", title: "Концентрат антифризу G12+ 5л", price: 814.28, image: "img/maslo6.jpg" },
    { id: 7, brand: "MOTUL", title: "Моторна олива 5W40 1л 8100", price: 583.20, image: "img/maslo7.jpg" },
    { id: 8, brand: "OE BMW", title: "Моторна олива 83 21 5 B5B FA4 1л", price: 714.02, image: "img/maslo8.jpg" },
    { id: 9, brand: "AKVILON", title: "Охолоджуюча рідина G12+ RED 1KG", price: 115.76, image: "img/maslo9.jpg" },
    { id: 10, brand: "MOTUL", title: "Олива автоматичної КП 1л MULTI CVT", price: 774.00, image: "img/maslo10.jpg" },
    { id: 11, brand: "MOTUL", title: "Моторна олива 5W40 5л 8100", price: 2624.40, image: "img/maslo11.jpg" },
    { id: 12, brand: "MOTUL", title: "Олива автоматичної КП 1л MULTI DCTF", price: 732.00, image: "img/maslo12.jpg" },
    { id: 13, brand: "CARTECHNIC", title: "Концентрат антифризу G12+ 1.5л", price: 271.43, image: "img/maslo13.jpg" },
    { id: 14, brand: "PRESTO", title: "Очисник Гальм 0.5л KW BRAKE CLEANER", price: 167.75, image: "img/maslo14.jpg" },
    { id: 15, brand: "MOTUL", title: "Моторна олива 5W30 1л 8100", price: 686.40, image: "img/maslo15.jpg" },
    { id: 16, brand: "PRISTA OIL", title: "Олива автоматичної КП PRIS ATF DEXRON III 1L", price: 315.44, image: "img/maslo16.jpg" },
    { id: 17, brand: "OE VW", title: "Моторна олива G S55 545 M4 5л", price: 2446.28, image: "img/maslo17.jpg" },
    { id: 18, brand: "OE TOYOTA", title: "Моторна олива 08880-80845 5л", price: 2120.08, image: "img/maslo18.jpg" },
    { id: 19, brand: "ARAL", title: "Моторна олива SUPERTRONIC K 5W30 5L", price: 2396.40, image: "img/maslo19.jpg" },
    { id: 20, brand: "ZF", title: "Олива автоматичної КП LifeguardFluid 8 1л", price: 1204.56, image: "img/maslo20.jpg" },
    { id: 21, brand: "MOTUL", title: "Олива для КПП 75W 1л GEAR POWER FE", price: 861.60, image: "img/maslo21.jpg" },
    { id: 22, brand: "MOTUL", title: "Моторна олива 5W30 5л 8100 ECO-NERGY", price: 2720.40, image: "img/maslo22.jpg" },
    { id: 23, brand: "MOTUL", title: "Олива для КПП 75W90 1л MOTYLGEAR", price: 754.91, image: "img/maslo23.jpg" },
    { id: 24, brand: "MOTUL", title: "Олива для КПП 75W80 1л MOTYLGEAR", price: 564.48, image: "img/maslo24.jpg" },
    { id: 25, brand: "MOTUL", title: "Моторна олива 5W30 5л 8100 ECO-LITE", price: 2709.60, image: "img/maslo25.jpg" },
    { id: 26, brand: "OE HYUNDAI", title: "Олива автоматичної КП 0450000115 1л", price: 606.92, image: "img/maslo26.jpg" },
    { id: 27, brand: "AKVILON", title: "Охолоджуюча рідина G12+ RED 10KG", price: 877.85, image: "img/maslo27.jpg" },
    { id: 28, brand: "MOTUL", title: "Олива для мототехніки 10W40 5100 1л", price: 614.40, image: "img/maslo28.jpg" },
    { id: 29, brand: "TOTALENERGIES", title: "Олива для КПП 75W80 1л TRAXIUM", price: 484.60, image: "img/maslo29.jpg" },
    { id: 30, brand: "TOTALENERGIES", title: "Моторна олива 5W40 5л Quartz 9000", price: 2446.28, image: "img/maslo30.jpg" }
];

let cart = JSON.parse(localStorage.getItem('autoMagCart')) || [];

function saveCart() { localStorage.setItem('autoMagCart', JSON.stringify(cart)); }

function renderProducts(items) {
    const container = document.getElementById('products-container');
    if (!container) return;
    container.innerHTML = items.map(p => `
        <div class="product-card">
            <div class="product-img"><img src="${p.image}" alt="${p.title}"></div>
            <div class="product-price">${p.price.toFixed(2)} ₴</div>
            <div style="font-size:14px; margin-bottom:10px; height:35px; overflow:hidden;"><strong>${p.brand}</strong> ${p.title}</div>
            <button class="add-to-cart" data-id="${p.id}">В кошик</button>
        </div>`).join('');
}

function renderCart() {
    const container = document.getElementById('cart-container');
    const totalEl = document.getElementById('total-price');
    if (!container) return;
    if (cart.length === 0) {
        container.innerHTML = '<p style="text-align:center; padding:20px; width:100%;">Кошик порожній</p>';
        if (totalEl) totalEl.innerText = '0.00';
        return;
    }
    container.innerHTML = cart.map((item, index) => `
        <div class="cart-item-new" style="display:flex; align-items:center; margin-bottom:10px; border-bottom:1px solid #ddd; padding-bottom:10px;">
            <img src="${item.image}" width="60">
            <div style="flex:1; margin-left:15px; font-size:14px; color:#fff;"><strong>${item.brand}</strong><br>${item.title}</div>
            <div style="font-weight:bold; margin-right:20px; color:#fff;">${item.price.toFixed(2)} ₴</div>
            <button onclick="removeFromCart(${index})" style="color:white; background:#ff4444; border:none; padding:5px 10px; border-radius:5px; cursor:pointer;">×</button>
        </div>`).join('');
    const sum = cart.reduce((total, item) => total + item.price, 0);
    if (totalEl) totalEl.innerText = sum.toFixed(2);
}

window.removeFromCart = (index) => {
    cart.splice(index, 1);
    saveCart();
    renderCart();
};

// Функції модального вікна
function showSuccessModal() { document.getElementById('custom-modal').style.display = 'flex'; }
function closeModal() { 
    document.getElementById('custom-modal').style.display = 'none'; 
    window.location.href = 'index.html';
}

document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    renderCart();

    // Додавання в кошик
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const id = parseInt(e.target.dataset.id);
            const p = products.find(prod => prod.id === id);
            if (p) {
                cart.push(p);
                saveCart();
                window.location.href = 'cart.html';
            }
        }
    });

    // Показ реквізитів (ЧОРНИЙ ТЕКСТ)[cite: 4]
    const paymentRadios = document.querySelectorAll('input[name="payment"]');
    paymentRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            const oldBox = document.getElementById('dynamic-req-box');
            if (oldBox) oldBox.remove();

            let info = "";
            if (radio.value === "На карту") info = `💳 <b>Реквізити карти:</b>\n${REQUISITES.CARD}`;
            if (radio.value === "Рахунок ФОП") info = `🏢 <b>Реквізити ФОП:</b>\n${REQUISITES.FOP}`;

            if (info) {
                const box = document.createElement('div');
                box.id = 'dynamic-req-box';
                box.innerHTML = info + "\n\n<small style='color:#666'>Ви можете сплатити зараз або після дзвінка менеджера.</small>";
                document.getElementById('order-form').insertBefore(box, document.querySelector('.btn-main'));
            }
        });
    });

    // Нова пошта... (Логіка вибору міста та відділення залишається робочою)
    const cityInp = document.getElementById('city-input');
    const cityDrop = document.getElementById('city-dropdown');
    const postInp = document.getElementById('post-input');
    const postDrop = document.getElementById('post-dropdown');

    if (cityInp) {
        cityInp.addEventListener('input', async () => {
            if (cityInp.value.length < 3) return;
            const res = await fetch('https://api.novaposhta.ua/v2.0/json/', {
                method: 'POST',
                body: JSON.stringify({
                    apiKey: CONFIG.NP_API_KEY,
                    modelName: "Address",
                    calledMethod: "getCities",
                    methodProperties: { FindByString: cityInp.value, Limit: "10" }
                })
            });
            const json = await res.json();
            if (json.success) {
                cityDrop.innerHTML = json.data.map(c => `<div class="api-item" data-ref="${c.Ref}">${c.Description}</div>`).join('');
                cityDrop.style.display = 'block';
            }
        });

        cityDrop.addEventListener('click', async (e) => {
            if (e.target.classList.contains('api-item')) {
                cityInp.value = e.target.innerText;
                const cityRef = e.target.dataset.ref;
                cityDrop.style.display = 'none';
                postInp.disabled = false;
                
                const res = await fetch('https://api.novaposhta.ua/v2.0/json/', {
                    method: 'POST',
                    body: JSON.stringify({
                        apiKey: CONFIG.NP_API_KEY,
                        modelName: "AddressGeneral",
                        calledMethod: "getWarehouses",
                        methodProperties: { CityRef: cityRef }
                    })
                });
                const json = await res.json();
                postDrop.innerHTML = json.data.map(w => `<div class="api-item">${w.Description}</div>`).join('');
            }
        });

        postInp?.addEventListener('focus', () => { if(postDrop.innerHTML) postDrop.style.display = 'block'; });
        postDrop?.addEventListener('click', (e) => {
            if (e.target.classList.contains('api-item')) {
                postInp.value = e.target.innerText;
                postDrop.style.display = 'none';
            }
        });
    }

    // Відправка замовлення
    document.getElementById('order-form')?.addEventListener('submit', async (e) => {
        e.preventDefault();
        const total = document.getElementById('total-price').innerText;
        const itemsStr = cart.map(p => `- ${p.brand} ${p.title} (${p.price} ₴)`).join('\n');
        
        const text = `🔥 ЗАМОВЛЕННЯ 🔥\n👤 Клієнт: ${document.getElementById('customer-name').value}\n📞 Тел: ${document.getElementById('customer-phone').value}\n📍 Доставка: ${document.getElementById('city-input').value}, ${document.getElementById('post-input').value}\n💳 Оплата: ${document.querySelector('input[name="payment"]:checked').value}\n💰 Сума: ${total} ₴\n\n🛒 Товари:\n${itemsStr}`;

        try {
            const res = await fetch(`https://api.telegram.org/bot${CONFIG.TELEGRAM_TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({ chat_id: CONFIG.TELEGRAM_CHAT_ID, text: text })
            });
            if (res.ok) {
                localStorage.removeItem('autoMagCart');
                showSuccessModal(); // Виклик КРАСИВОГО вікна[cite: 4]
            }
        } catch (err) { alert("Помилка відправки"); }
    });
});