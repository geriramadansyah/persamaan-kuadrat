document.addEventListener('DOMContentLoaded', () => {
    const image = document.querySelector('.image');
    const bannerText = document.getElementById('bannerText');
    let isBannerVisible = false;

    image.addEventListener('click', () => {
        isBannerVisible = !isBannerVisible;
        bannerText.style.display = isBannerVisible ? 'block' : 'none';
    });

    image.addEventListener('mousedown', () => {
        bannerText.style.display = 'block';
    });

    image.addEventListener('mouseup', () => {
        if (!isBannerVisible) {
            bannerText.style.display = 'none';
        }
    });

    image.addEventListener('mouseleave', () => {
        if (!isBannerVisible) {
            bannerText.style.display = 'none';
        }
    });
});

function hitung() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);
    const n = parseFloat(document.getElementById('n').value);
    const persamaan = document.getElementById('persamaan').value;
    let hasil = '';

    switch (persamaan) {
        case 'ax2bx':
            hasil = hitungPersamaan(a, b, c, n);
            break;
        case 'ax2bx_c':
            hasil = hitungPersamaan(a, b, -c, n);
            break;
        case 'ax2_bx':
            hasil = hitungPersamaan(a, -b, c, n);
            break;
        case 'le':
            hasil = `Solusi dari ${a}x² + ${b}x + ${c} ≤ ${n}`;
            break;
        case 'ge':
            hasil = `Solusi dari ${a}x² + ${b}x + ${c} ≥ ${n}`;
            break;
        case 'x2_n':
            hasil = `Solusi dari x² - ${n}x > ${n}`;
            break;
        case 'x2_n2':
            hasil = `Solusi dari x² - ${n} > ${n}`;
            break;
        default:
            hasil = 'Persamaan tidak valid';
    }

    document.getElementById('hasil').innerText = hasil;
}

function hitungPersamaan(a, b, c, n) {
    const diskriminan = b * b - 4 * a * (c - n);
    
    if (diskriminan < 0) {
        return 'Tidak ada solusi real.';
    } else {
        const x1 = (-b + Math.sqrt(diskriminan)) / (2 * a);
        const x2 = (-b - Math.sqrt(diskriminan)) / (2 * a);

        const hasilX1 = formatRational(x1);
        const hasilX2 = formatRational(x2);

        return `Nilai x = ${hasilX1} atau x = ${hasilX2}`;
    }
}

function formatRational(value) {
    if (Number.isInteger(value)) {
        return value.toString(); 
    }

    const denominator = 1000000; 
    const numerator = Math.round(value * denominator);
    const gcd = getGCD(numerator, denominator);

    return `${numerator / gcd}/${denominator / gcd}`;
}

function getGCD(a, b) {
    return b === 0 ? Math.abs(a) : getGCD(b, a % b);
}
