// ================= MASTER DE PRODUCTOS =================
const productos = {
    paracetamol: { nombre: "Paracetamol 120mg/5ml Jarabe", precio: "S/. 2.00", descripcion: "Alivia fiebre y dolor leve.", imagen: "img/paracetamol.png" },
    naproxeno: { nombre: "Naproxeno Sodico 550 Mg", precio: "S/. 4.00", descripcion: "Antiinflamatorio para dolores musculares.", imagen: "img/naproxeno.webp" },
    clorfenamina: { nombre: "Clorfenamina 4mg", precio: "S/. 5.00", descripcion: "Antialérgico para resfriados.", imagen: "img/clorfenamina.jpg" },
    prednisona: { nombre: "Prednisona 50mg", precio: "S/. 10.00", descripcion: "Reducir inflamaciones", imagen: "img/prednisona.jpg" },
    dexametasona: { nombre: "Dexametasona 4mg", precio: "S/. 10.00", descripcion: "Suprimir el sistema inmunológico y tratar reacciones alérgicas graves.", imagen: "img/dexametasona.webp" },
    ibuprofeno: { nombre: "Ibuprofeno 800mg", precio: "S/. 15.00", descripcion: "Antiinflamatorio no esteroideo (AINE) utilizado para tratar el dolor intenso, la inflamación aguda y la fiebre.", imagen: "img/ibuprofeno.jpg" },
    alcoholGel: { nombre: "Alcohol en gel 70% 250ml", precio: "S/. 8.50", descripcion: "Desinfectante para manos con alcohol.", imagen: "img/Alcohol en Gel.webp" },
    termometroDigital: { nombre: "Termómetro digital", precio: "S/. 25.00", descripcion: "Medición precisa de temperatura corporal.", imagen: "img/termometro digital.webp" },
    vitaminaC: { nombre: "Vitaminas C 500 mg", precio: "S/. 12.00", descripcion: "Refuerza el sistema inmunológico.", imagen: "img/vitamina c.avif" },
    vendas: { nombre: "Vendas elásticas 5m", precio: "S/. 6.00", descripcion: "Soporte para lesiones musculares.", imagen: "img/vendas elasticas.jpg" },
    cremaHeridas: { nombre: "Crema para heridas y quemaduras", precio: "S/. 9.00", descripcion: "Ayuda a cicatrizar y regenerar la piel.", imagen: "img/creama quemaduras.avif" },
    aspirina: { nombre: "Aspirina 500 mg", precio: "S/. 7.00", descripcion: "Alivia dolor y fiebre.", imagen: "img/aspirina.avif" },
    omeprazol: { nombre: "Omeprazol 20 mg", precio: "S/. 18.00", descripcion: "Protector gástrico.", imagen: "img/omeprazol.png" },
    loratadina: { nombre: "Loratadina 10 mg", precio: "S/. 14.00", descripcion: "Antialérgico.", imagen: "img/loratadina.jpg" },
    suero: { nombre: "Suero oral 500 ml", precio: "S/. 11.00", descripcion: "Hidratación rápida.", imagen: "img/suero oral.jpg" },
    gelAntiinflamatorio: { nombre: "Gel antiinflamatorio 100 g", precio: "S/. 13.00", descripcion: "Alivia dolor muscular.", imagen: "img/gel antiflamatorio.jpg" },
    termometroInfrarrojo: { nombre: "Termómetro infrarrojo", precio: "S/. 55.00", descripcion: "Medición sin contacto.", imagen: "img/termometro infrarojo.webp" },
    algodon: { nombre: "Algodón 100 g", precio: "S/. 4.50", descripcion: "Uso médico y limpieza.", imagen: "img/algodon.jpg" },
    curitas: { nombre: "Curitas adhesivas surtidas", precio: "S/. 5.00", descripcion: "Protección para heridas pequeñas.", imagen: "img/curitas.png" },
    mascarillas: { nombre: "Mascarillas quirúrgicas 10 uds", precio: "S/. 20.00", descripcion: "Protección respiratoria.", imagen: "img/mascarilla.jpg" },
    guantes: { nombre: "Guantes desechables 50 uds", precio: "S/. 18.00", descripcion: "Higiene y protección.", imagen: "img/guantes.jpg" },
    antiseptico: { nombre: "Antiséptico para piel 120 ml", precio: "S/. 10.50", descripcion: "Limpieza y desinfección.", imagen: "img/antiseptico.jpg" },
    jeringas: { nombre: "Jeringas desechables 5 ml", precio: "S/. 9.50", descripcion: "Uso médico.", imagen: "img/jeringas.jpg" },
    colirio: { nombre: "Colirio lubricante 10 ml", precio: "S/. 16.00", descripcion: "Hidratación ocular.", imagen: "img/colirio.jpg" },
    protectorSolar: { nombre: "Protector solar SPF 50", precio: "S/. 22.00", descripcion: "Protección contra rayos UV.", imagen: "img/protector solar.webp" },
    probioticos: { nombre: "Probióticos 30 cápsulas", precio: "S/. 28.00", descripcion: "Salud digestiva.", imagen: "img/probioticos.jpg" },
    bandas: { nombre: "Banditas de resistencia", precio: "S/. 19.00", descripcion: "Ejercicio y rehabilitación.", imagen: "img/bandas de resistencia.png" },
    cremaDental: { nombre: "Crema dental protectora", precio: "S/. 8.00", descripcion: "Higiene bucal.", imagen: "img/crema dental.webp" },
    shampoo: { nombre: "Shampoo antibacterial 250 ml", precio: "S/. 17.00", descripcion: "Limpieza profunda del cabello.", imagen: "img/shampoo.avif" },
    // PRODUCTOS QUE FALTABAN:
    oldSpice: { nombre: "Pack 2 Desodorantes Old Spice", precio: "S/. 31.00", descripcion: "Fragancia legendaria y protección duradera contra el sudor.", imagen: "img/old_pieces.png" },
    toallitas: { nombre: "Toallitas Húmedas Ninet Plus", precio: "S/. 8.90", descripcion: "Limpieza suave y efectiva para el cuidado diario de la piel.", imagen: "img/toallitas.png" }
};

// ================= LÓGICA DE DETALLE =================
function cargarDetalle() {
    const params = new URLSearchParams(window.location.search);
    const productoKey = params.get("producto");
    const data = productos[productoKey];

    const nombreElem = document.getElementById("nombre");
    if (!nombreElem) return; // Si no estamos en detalle.html, salimos para no dar error

    if (data) {
        nombreElem.textContent = data.nombre;
        document.getElementById("precio").textContent = data.precio;
        document.getElementById("descripcion").textContent = data.descripcion;
        document.getElementById("imagen").src = data.imagen;
    } else {
        const infoDiv = document.querySelector(".detalle-info");
        const imgDiv = document.querySelector(".detalle-img");
        if (imgDiv) imgDiv.style.display = "none";
        if (infoDiv) {
            infoDiv.innerHTML = `
                <h2 style="color: #c0392b;">Producto no encontrado</h2>
                <p>Parece que el producto no existe o llegaste aquí por error.</p>
                <a href="productos.html" class="btn-carrito" style="text-decoration:none; display:inline-block; margin-top:20px; text-align:center;">Volver al Catálogo</a>
            `;
        }
    }
}

// INVOCACIÓN AUTOMÁTICA
// Cuando la página (detalle.html) termine de cargar, esta función se ejecutará sola.
document.addEventListener("DOMContentLoaded", cargarDetalle);