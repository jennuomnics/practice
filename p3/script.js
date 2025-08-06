let laptops = [
    {
  id: randomString(),
  brand: "HP",
  model: "SPECTRE X360",
  image: "",
  description: "Premium convertible laptop with high-end performance.",
  specs: [
    { name: "CPU", value: "INTEL CORE I7-1355U" },
    { name: "RAM", value: "16GB LPDDR5" },
    { name: "STORAGE", value: "1TB SSD" },
    { name: "DISPLAY", value: "13.5-INCH 3K OLED" },
    { name: "BATTERY LIFE", value: "16 HOURS" },
    { name: "OS", value: "WINDOWS 11 HOME" },
    { name: "WEIGHT", value: "1.34 KG" },
    { name: "GPU", value: "INTEL IRIS XE" },
    { name: "TOUCHSCREEN", value: "YES" },
    { name: "FINGERPRINT", value: "YES" },
    { name: "PORTS", value: "2X USB-C, 1X USB-A" },
    { name: "BUILD MATERIAL", value: "ALUMINUM" },
    { name: "CHARGING", value: "FAST CHARGING SUPPORTED" },
    { name: "SPEAKERS", value: "BANG & OLUFSEN" },
    { name: "CAMERA", value: "5MP IR CAMERA" },
    { name: "BACKLIT KEYBOARD", value: "YES" },
    { name: "THERMALS", value: "DUAL FAN" },
    { name: "AI FEATURES", value: "HP PRESENCE" },
    { name: "WIFI", value: "WIFI 6E" },
    { name: "BLUETOOTH", value: "5.3" }
  ],
  ratings: [
    { name: "CPU", value: 5 },
    { name: "RAM", value: 5 },
    { name: "STORAGE", value: 5 },
    { name: "DISPLAY", value: 5 },
    { name: "BATTERY LIFE", value: 5 },
    { name: "OS", value: 4 },
    { name: "WEIGHT", value: 4 },
    { name: "GPU", value: 4 },
    { name: "TOUCHSCREEN", value: 5 },
    { name: "FINGERPRINT", value: 5 },
    { name: "PORTS", value: 4 },
    { name: "BUILD MATERIAL", value: 5 },
    { name: "CHARGING", value: 5 },
    { name: "SPEAKERS", value: 5 },
    { name: "CAMERA", value: 5 },
    { name: "BACKLIT KEYBOARD", value: 5 },
    { name: "THERMALS", value: 4 },
    { name: "AI FEATURES", value: 5 },
    { name: "WIFI", value: 5 },
    { name: "BLUETOOTH", value: 5 }
  ],
  score: 96,
  price: 124999,
  offerPrice: 114999,
  url: "https://www.amazon.in/dp/B0CXYZ1234"
},
{
  id: "G1FJCN2V",
  brand: "HP",
  model: "SPECTRE X360",
  image: "",
  description: "HP SPECTRE X360 high-performance laptop with premium features.",
  specs: [
    { name: "CPU", value: "SNAPDRAGON X ELITE" },
    { name: "RAM", value: "32GB" },
    { name: "STORAGE", value: "1TB SSD" },
    { name: "DISPLAY", value: "15.6-INCH OLED" },
    { name: "BATTERY LIFE", value: "10 HOURS" },
    { name: "OS", value: "WINDOWS 11" },
    { name: "WEIGHT", value: "1.2 KG" },
    { name: "GPU", value: "NVIDIA RTX 3050" },
    { name: "BUILD", value: "MAGNESIUM" },
    { name: "KEYBOARD", value: "STANDARD" },
    { name: "PORTS", value: "USB-A, USB-C" },
    { name: "TOUCHPAD", value: "STANDARD" },
    { name: "CAMERA", value: "720P" },
    { name: "SPEAKERS", value: "DOLBY AUDIO" },
    { name: "CHARGING", value: "100W TYPE-C" },
    { name: "THERMALS", value: "DUAL FAN" },
    { name: "WIFI", value: "WIFI 7" },
    { name: "BLUETOOTH", value: "5.3" },
    { name: "SECURITY", value: "TPM 2.0" },
    { name: "AI FEATURES", value: "AI OPTIMIZATION" }
  ],
  ratings: [
    { name: "CPU", value: 4 },
    { name: "RAM", value: 4 },
    { name: "STORAGE", value: 3 },
    { name: "DISPLAY", value: 5 },
    { name: "BATTERY LIFE", value: 4 },
    { name: "OS", value: 4 },
    { name: "WEIGHT", value: 4 },
    { name: "GPU", value: 3 },
    { name: "BUILD", value: 3 },
    { name: "KEYBOARD", value: 3 },
    { name: "PORTS", value: 3 },
    { name: "TOUCHPAD", value: 5 },
    { name: "CAMERA", value: 4 },
    { name: "SPEAKERS", value: 4 },
    { name: "CHARGING", value: 3 },
    { name: "THERMALS", value: 4 },
    { name: "WIFI", value: 4 },
    { name: "BLUETOOTH", value: 3 },
    { name: "SECURITY", value: 4 },
    { name: "AI FEATURES", value: 4 }
  ],
  score: 78,
  price: 101984,
  offerPrice: 94257,
  url: "https://www.example.com"
},

{
  id: "DL02",
  brand: "DELL",
  model: "XPS 15 PLUS",
  image: "",
  description: "Powerful creator-focused laptop with immersive display.",
  specs: [
    { name: "CPU", value: "INTEL CORE I9-13900H" },
    { name: "RAM", value: "32GB DDR5" },
    { name: "STORAGE", value: "1TB NVME SSD" },
    { name: "DISPLAY", value: "15.6-INCH 4K UHD+ TOUCH" },
    { name: "BATTERY LIFE", value: "12 HOURS" },
    { name: "OS", value: "WINDOWS 11 PRO" },
    { name: "WEIGHT", value: "1.8 KG" },
    { name: "GPU", value: "NVIDIA RTX 4060" },
    { name: "BUILD MATERIAL", value: "ALUMINUM + GLASS" },
    { name: "PORTS", value: "4X USB-C, SD CARD" },
    { name: "CHARGING", value: "130W USB-C" },
    { name: "FINGERPRINT", value: "YES" },
    { name: "TOUCHPAD", value: "FORCEPAD" },
    { name: "THERMALS", value: "VAPOR CHAMBER" },
    { name: "WIFI", value: "WIFI 6E" },
    { name: "BLUETOOTH", value: "5.3" },
    { name: "KEYBOARD", value: "ZERO LATTICE" },
    { name: "CAMERA", value: "FHD IR CAMERA" },
    { name: "AI FEATURES", value: "DELL OPTIMIZER" },
    { name: "AUDIO", value: "QUAD SPEAKERS" }
  ],
  ratings: [
    { name: "CPU", value: 5 },
    { name: "RAM", value: 5 },
    { name: "STORAGE", value: 5 },
    { name: "DISPLAY", value: 5 },
    { name: "BATTERY LIFE", value: 4 },
    { name: "OS", value: 4 },
    { name: "WEIGHT", value: 3 },
    { name: "GPU", value: 5 },
    { name: "BUILD MATERIAL", value: 5 },
    { name: "PORTS", value: 4 },
    { name: "CHARGING", value: 4 },
    { name: "FINGERPRINT", value: 4 },
    { name: "TOUCHPAD", value: 5 },
    { name: "THERMALS", value: 4 },
    { name: "WIFI", value: 5 },
    { name: "BLUETOOTH", value: 5 },
    { name: "KEYBOARD", value: 4 },
    { name: "CAMERA", value: 4 },
    { name: "AI FEATURES", value: 4 },
    { name: "AUDIO", value: 5 }
  ],
  score: 91,
  price: 229999,
  offerPrice: 214999,
  url: "https://www.amazon.in/dp/B0CDELXPS15"
},
{
  id: "LN03",
  brand: "LENOVO",
  model: "LEGION 5 PRO",
  image: "",
  description: "High-performance gaming and productivity laptop.",
  specs: [
    { name: "CPU", value: "AMD RYZEN 7 6800H" },
    { name: "RAM", value: "16GB DDR5" },
    { name: "STORAGE", value: "1TB SSD" },
    { name: "DISPLAY", value: "16-INCH WQXGA 165HZ" },
    { name: "GPU", value: "NVIDIA RTX 3070" },
    { name: "BATTERY LIFE", value: "7 HOURS" },
    { name: "WEIGHT", value: "2.4 KG" },
    { name: "OS", value: "WINDOWS 11 HOME" },
    { name: "PORTS", value: "4X USB, HDMI, TYPE-C" },
    { name: "KEYBOARD", value: "4-ZONE RGB" },
    { name: "THERMALS", value: "LEGION COLD FRONT 4.0" },
    { name: "CAMERA", value: "720P HD" },
    { name: "CHARGING", value: "230W RAPID CHARGE" },
    { name: "WIFI", value: "WIFI 6" },
    { name: "BLUETOOTH", value: "5.2" },
    { name: "AUDIO", value: "NAHIMIC AUDIO" },
    { name: "BUILD MATERIAL", value: "ALUMINUM + PLASTIC" },
    { name: "TOUCHPAD", value: "PRECISION" },
    { name: "FINGERPRINT", value: "NO" },
    { name: "VR READY", value: "YES" }
  ],
  ratings: [
    { name: "CPU", value: 5 },
    { name: "RAM", value: 5 },
    { name: "STORAGE", value: 5 },
    { name: "DISPLAY", value: 5 },
    { name: "GPU", value: 5 },
    { name: "BATTERY LIFE", value: 3 },
    { name: "WEIGHT", value: 3 },
    { name: "OS", value: 4 },
    { name: "PORTS", value: 5 },
    { name: "KEYBOARD", value: 5 },
    { name: "THERMALS", value: 5 },
    { name: "CAMERA", value: 3 },
    { name: "CHARGING", value: 5 },
    { name: "WIFI", value: 4 },
    { name: "BLUETOOTH", value: 4 },
    { name: "AUDIO", value: 4 },
    { name: "BUILD MATERIAL", value: 4 },
    { name: "TOUCHPAD", value: 4 },
    { name: "FINGERPRINT", value: 1 },
    { name: "VR READY", value: 5 }
  ],
  score: 87,
  price: 152000,
  offerPrice: 139999,
  url: "https://www.amazon.in/dp/B0CLENLEGION5"
},
{
  id: "AP04",
  brand: "APPLE",
  model: "MACBOOK AIR M2",
  image: "",
  description: "Lightweight, silent and ultra-efficient Apple silicon laptop.",
  specs: [
    { name: "CPU", value: "APPLE M2 CHIP" },
    { name: "RAM", value: "8GB UNIFIED" },
    { name: "STORAGE", value: "512GB SSD" },
    { name: "DISPLAY", value: "13.6-INCH RETINA" },
    { name: "GPU", value: "10-CORE GPU" },
    { name: "BATTERY LIFE", value: "18 HOURS" },
    { name: "OS", value: "MACOS SONOMA" },
    { name: "WEIGHT", value: "1.24 KG" },
    { name: "PORTS", value: "2X THUNDERBOLT, MAGSAFE" },
    { name: "BUILD MATERIAL", value: "RECYCLED ALUMINUM" },
    { name: "TOUCH ID", value: "YES" },
    { name: "CAMERA", value: "1080P FACETIME HD" },
    { name: "AUDIO", value: "4-SPEAKER SYSTEM" },
    { name: "CHARGING", value: "MAGSAFE 30W" },
    { name: "WIFI", value: "WIFI 6" },
    { name: "BLUETOOTH", value: "5.3" },
    { name: "THERMALS", value: "FANLESS" },
    { name: "KEYBOARD", value: "MAGIC KEYBOARD" },
    { name: "TOUCHPAD", value: "FORCE TOUCH" },
    { name: "SUSTAINABILITY", value: "EPEAT GOLD" }
  ],
  ratings: [
    { name: "CPU", value: 5 },
    { name: "RAM", value: 4 },
    { name: "STORAGE", value: 4 },
    { name: "DISPLAY", value: 5 },
    { name: "GPU", value: 4 },
    { name: "BATTERY LIFE", value: 5 },
    { name: "OS", value: 5 },
    { name: "WEIGHT", value: 5 },
    { name: "PORTS", value: 3 },
    { name: "BUILD MATERIAL", value: 5 },
    { name: "TOUCH ID", value: 5 },
    { name: "CAMERA", value: 4 },
    { name: "AUDIO", value: 5 },
    { name: "CHARGING", value: 4 },
    { name: "WIFI", value: 4 },
    { name: "BLUETOOTH", value: 5 },
    { name: "THERMALS", value: 5 },
    { name: "KEYBOARD", value: 5 },
    { name: "TOUCHPAD", value: 5 },
    { name: "SUSTAINABILITY", value: 5 }
  ],
  score: 93,
  price: 134900,
  offerPrice: 119900,
  url: "https://www.apple.com/in/macbook-air-m2"
},
{
  id: "HP05",
  brand: "HP",
  model: "VICTUS 16",
  image: "",
  description: "Powerful mid-range gaming laptop with large screen.",
  specs: [
    { name: "CPU", value: "INTEL CORE I7 12700H" },
    { name: "RAM", value: "16GB DDR4" },
    { name: "STORAGE", value: "512GB SSD" },
    { name: "DISPLAY", value: "16.1-INCH FHD 144HZ" },
    { name: "GPU", value: "NVIDIA RTX 4060" },
    { name: "BATTERY LIFE", value: "6 HOURS" },
    { name: "WEIGHT", value: "2.4 KG" },
    { name: "OS", value: "WINDOWS 11 HOME" },
    { name: "PORTS", value: "USB-C, HDMI, RJ-45" },
    { name: "KEYBOARD", value: "BACKLIT" },
    { name: "THERMALS", value: "OMEN TEMPEST COOLING" },
    { name: "AUDIO", value: "BANG & OLUFSEN" },
    { name: "BUILD MATERIAL", value: "PLASTIC" },
    { name: "CAMERA", value: "720P HD" },
    { name: "TOUCHPAD", value: "MULTI-GESTURE" },
    { name: "CHARGING", value: "200W FAST CHARGE" },
    { name: "WIFI", value: "WIFI 6E" },
    { name: "BLUETOOTH", value: "5.2" },
    { name: "VR READY", value: "YES" },
    { name: "EXPANSION SLOT", value: "MICRO SD" }
  ],
  ratings: [
    { name: "CPU", value: 5 },
    { name: "RAM", value: 4 },
    { name: "STORAGE", value: 4 },
    { name: "DISPLAY", value: 5 },
    { name: "GPU", value: 5 },
    { name: "BATTERY LIFE", value: 3 },
    { name: "WEIGHT", value: 3 },
    { name: "OS", value: 4 },
    { name: "PORTS", value: 4 },
    { name: "KEYBOARD", value: 4 },
    { name: "THERMALS", value: 4 },
    { name: "AUDIO", value: 4 },
    { name: "BUILD MATERIAL", value: 3 },
    { name: "CAMERA", value: 3 },
    { name: "TOUCHPAD", value: 4 },
    { name: "CHARGING", value: 4 },
    { name: "WIFI", value: 5 },
    { name: "BLUETOOTH", value: 5 },
    { name: "VR READY", value: 5 },
    { name: "EXPANSION SLOT", value: 4 }
  ],
  score: 85,
  price: 114999,
  offerPrice: 104999,
  url: "https://www.hp.com/in-victus16"
},

{
  id: "AS06",
  brand: "ASUS",
  model: "VIVOBOOK S15 OLED",
  image: "",
  description: "Slim OLED laptop for everyday use and vibrant visuals.",
  specs: [
    { name: "CPU", value: "INTEL CORE I5 12500H" },
    { name: "RAM", value: "16GB LPDDR5" },
    { name: "STORAGE", value: "512GB SSD" },
    { name: "DISPLAY", value: "15.6-INCH OLED 2.8K" },
    { name: "GPU", value: "INTEL IRIS XE" },
    { name: "BATTERY LIFE", value: "8 HOURS" },
    { name: "OS", value: "WINDOWS 11 HOME" },
    { name: "WEIGHT", value: "1.7 KG" },
    { name: "PORTS", value: "HDMI, USB-C, USB-A" },
    { name: "BUILD MATERIAL", value: "ALUMINUM ALLOY" },
    { name: "CAMERA", value: "1080P" },
    { name: "TOUCHPAD", value: "LARGE PRECISION" },
    { name: "WIFI", value: "WIFI 6E" },
    { name: "BLUETOOTH", value: "5.3" },
    { name: "AUDIO", value: "HARMAN KARDON" },
    { name: "CHARGING", value: "65W USB-C" },
    { name: "FINGERPRINT", value: "YES" },
    { name: "THERMALS", value: "ICECOOL PLUS" },
    { name: "COLOR", value: "MIDNIGHT BLACK" },
    { name: "SUSTAINABILITY", value: "ENERGY STAR" }
  ],
  ratings: [
    { name: "CPU", value: 4 },
    { name: "RAM", value: 4 },
    { name: "STORAGE", value: 4 },
    { name: "DISPLAY", value: 5 },
    { name: "GPU", value: 3 },
    { name: "BATTERY LIFE", value: 4 },
    { name: "OS", value: 4 },
    { name: "WEIGHT", value: 4 },
    { name: "PORTS", value: 4 },
    { name: "BUILD MATERIAL", value: 5 },
    { name: "CAMERA", value: 4 },
    { name: "TOUCHPAD", value: 4 },
    { name: "WIFI", value: 5 },
    { name: "BLUETOOTH", value: 5 },
    { name: "AUDIO", value: 4 },
    { name: "CHARGING", value: 4 },
    { name: "FINGERPRINT", value: 5 },
    { name: "THERMALS", value: 4 },
    { name: "COLOR", value: 5 },
    { name: "SUSTAINABILITY", value: 5 }
  ],
  score: 89,
  price: 84990,
  offerPrice: 78990,
  url: "https://asus.com/in/vivobook-s15-oled"
},

{
  id: "MS07",
  brand: "MSI",
  model: "MODERN 14",
  image: "",
  description: "Lightweight and sleek for students and professionals.",
  specs: [
    { name: "CPU", value: "INTEL CORE I5 1240P" },
    { name: "RAM", value: "8GB DDR4" },
    { name: "STORAGE", value: "512GB SSD" },
    { name: "DISPLAY", value: "14-INCH FHD IPS" },
    { name: "GPU", value: "INTEL IRIS XE" },
    { name: "BATTERY LIFE", value: "10 HOURS" },
    { name: "WEIGHT", value: "1.3 KG" },
    { name: "OS", value: "WINDOWS 11 HOME" },
    { name: "PORTS", value: "USB-C, HDMI, USB-A" },
    { name: "BUILD MATERIAL", value: "METAL" },
    { name: "CAMERA", value: "720P HD" },
    { name: "TOUCHPAD", value: "MULTI-GESTURE" },
    { name: "WIFI", value: "WIFI 6" },
    { name: "BLUETOOTH", value: "5.2" },
    { name: "AUDIO", value: "HI-RES AUDIO" },
    { name: "CHARGING", value: "65W ADAPTER" },
    { name: "FINGERPRINT", value: "YES" },
    { name: "KEYBOARD", value: "WHITE BACKLIT" },
    { name: "SPEAKERS", value: "STEREO" },
    { name: "THERMALS", value: "COOLER BOOST" }
  ],
  ratings: [
    { name: "CPU", value: 4 },
    { name: "RAM", value: 3 },
    { name: "STORAGE", value: 4 },
    { name: "DISPLAY", value: 4 },
    { name: "GPU", value: 3 },
    { name: "BATTERY LIFE", value: 4 },
    { name: "WEIGHT", value: 5 },
    { name: "OS", value: 4 },
    { name: "PORTS", value: 4 },
    { name: "BUILD MATERIAL", value: 5 },
    { name: "CAMERA", value: 3 },
    { name: "TOUCHPAD", value: 4 },
    { name: "WIFI", value: 4 },
    { name: "BLUETOOTH", value: 4 },
    { name: "AUDIO", value: 4 },
    { name: "CHARGING", value: 4 },
    { name: "FINGERPRINT", value: 5 },
    { name: "KEYBOARD", value: 4 },
    { name: "SPEAKERS", value: 3 },
    { name: "THERMALS", value: 4 }
  ],
  score: 82,
  price: 62990,
  offerPrice: 59990,
  url: "https://msi.com/in/modern-14"
},



]

const laptopsContainer = document.getElementById('laptopsContainer')


const DisplayLaptopsInUi = (laptop) => {

    const mainDiv = document.createElement('div')
    mainDiv.setAttribute('id', laptop.id)
    mainDiv.classList.add('details')

    const left_side = document.createElement('div')
    const right_side = document.createElement('div')

    left_side.classList.add('left-side')
    right_side.classList.add('right-side')
    left_side.innerHTML = `
        <img src="${laptop.image}" alt="${laptop.brand} ${laptop.model}">
    `;
    
    right_side.innerHTML = `
        <div class='wrapping'>
        <h2>${laptop.brand.toUpperCase()} ${laptop.model}</h2>
            <i class="fa-solid fa-trash fa-lg delete" data-id="${laptop.id}" ></i>
            <i class="fa-solid fa-pen-to-square fa-lg update" ></i>
        </div>
        
        <p class="description">
            ${laptop.description}
        </p>

        <div class="offer">
           
            <h2 class="offerPrice">
             <span class='oldPrice'><i class="fa-solid fa-indian-rupee-sign"></i>${
                laptop.price
                }</span>
            <i class="fa-solid fa-indian-rupee-sign"></i>${
              laptop.offerPrice
            }</h2>
            <button type="button" class="offer-button">Limited Offer</button>
        </div>
    `;

    laptop.specs.forEach((item, index) => {
        right_side.innerHTML += `
                <div class="align  ${index >= 4 ? "hidden-spec moreItems" : ""}">
                    <h3>${item.name}</h3>
                    <p>${item.value}</p>
                </div>
            `;
    });



    right_side.innerHTML += `
            <button class="view-more-btn">View More</button>
            <a href="${laptop.url}" target="_blank" class="shop-now-button">
                Shop Now <i class="fa-solid fa-arrow-right-to-bracket"></i>
            </a>
        `;



    const viewMoreBtn = right_side.querySelector(".view-more-btn");
    let expanded = false;

    viewMoreBtn.addEventListener("click", () => {
        const hiddenItems = right_side.querySelectorAll(".moreItems");

        hiddenItems.forEach((item) => {
            item.classList.toggle("hidden-spec");
        });

        expanded = !expanded;
        viewMoreBtn.textContent = expanded ? "View Less" : "View More";
    });

    mainDiv.appendChild(left_side)
    mainDiv.appendChild(right_side)
    laptopsContainer.appendChild(mainDiv)


}

const DisplayLaptopsUi = (laptops) => {
    laptopsContainer.innerHTML = ''; 
    laptops.map((singleLaptop) => {
        DisplayLaptopsInUi(singleLaptop)
    })
}

DisplayLaptopsUi(laptops)



// Add Laptop 
const form = document.getElementById("addLaptopForm"); 
const addSpecBtn = document.getElementById("addSpecBtn");
const specNameInput = document.getElementById("specName");
const specValueInput = document.getElementById("specValue");
const specRatingInput = document.getElementById("specRating");
const specDisplayContainer = document.getElementById("specDisplayContainer");


const addLaptopButton = document.querySelector('.addLaptop')
const addLaptopContainer = document.querySelector('#addLaptop')
const closeModal = document.getElementById("closeModal");


addLaptopButton.addEventListener('click',(e) => {
    addLaptopContainer.classList.remove('active')
    document.querySelector(".modal-title").textContent = "Add New Laptop";
    document.querySelector(".add-laptop-btn").textContent = "Add Laptop";
    form.reset();
})

closeModal.addEventListener("click", () => {
  addLaptopContainer.classList.add("active");
});



let addedSpecs = [];
let addedRatings = [];

addSpecBtn.addEventListener("click", () => {
  const name = specNameInput.value.trim();
  const value = specValueInput.value.trim();
  const rating = parseInt(specRatingInput.value);

  if (!name || !value || isNaN(rating) || rating < 1 || rating > 5) {
    alert("Please enter valid spec name, value, and rating (1–5)");
    return;
  }

  addedSpecs.push({ name, value });
  addedRatings.push({ name, value: rating });

  const specItem = document.createElement("div");
  specItem.classList.add("spec-item");
  specItem.innerHTML = `<strong>${name}:</strong> ${value} | ⭐ ${rating}`;
  specDisplayContainer.appendChild(specItem);


  specNameInput.value = "";
  specValueInput.value = "";
  specRatingInput.value = "";
});




let editingLaptopId = null; 

laptopsContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete")) {
        if (!confirm("Are you sure you want to delete this laptop?")) return;
        const laptopId = e.target.dataset.id;
        laptops = laptops.filter((lap) => lap.id !== laptopId);
        DisplayLaptopsUi(laptops);
    }
  if (e.target.classList.contains("update")) {
    document.querySelector(".modal-title").textContent = "Edit Laptop";
    document.querySelector(".add-laptop-btn").textContent = "Update Laptop";
    const laptopId = e.target.closest(".details").id;
    const laptop = laptops.find((lap) => lap.id === laptopId);

    if (laptop) {
      editingLaptopId = laptop.id;

    
      form.brand.value = laptop.brand;
      form.model.value = laptop.model;
      form.image.value = laptop.image;
      form.description.value = laptop.description;
      form.price.value = laptop.price;
      form.offerPrice.value = laptop.offerPrice;
      form.url.value = laptop.url;
      form.overallRating.value =
        laptop.ratings.find((r) => r.name === "overall")?.value;

      
      addedSpecs = [...laptop.specs];
      addedRatings = laptop.ratings.filter((r) => r.name !== "overall");

      specDisplayContainer.innerHTML = "";
      addedSpecs.forEach((spec) => {
        const rating =
          addedRatings.find((r) => r.name === spec.name)?.value;
        const specItem = document.createElement("div");
        specItem.classList.add("spec-item");
        specItem.innerHTML = `<strong>${spec.name}:</strong> ${spec.value} | ⭐ ${rating}`;
        specDisplayContainer.appendChild(specItem);
      });


      addLaptopContainer.classList.remove("active");
    }
  }
});




form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const overallRating = parseInt(data.get("overallRating"));
  const ratings = [...addedRatings, { name: "overall", value: overallRating }];

  const laptopData = {
    id: editingLaptopId || randomString(),
    brand: data.get("brand").trim(),
    model: data.get("model").trim(),
    image: data.get("image").trim() || "",
    description: data.get("description").trim(),
    price: parseFloat(data.get("price")),
    offerPrice: parseFloat(data.get("offerPrice")),
    url: data.get("url").trim(),
    specs: [...addedSpecs],
    ratings,
    score: overallRating,
  };

  if (editingLaptopId) {
    const index = laptops.findIndex((l) => l.id === editingLaptopId);
    if (index !== -1) {
      laptops[index] = laptopData;

      console.log("Updated Laptop:", laptops);

     
      const existingDiv = document.getElementById(editingLaptopId);
      console.log(existingDiv,"line 498")
      if (existingDiv) {
        laptopsContainer.removeChild(existingDiv);
      }

      DisplayLaptopsUi(laptops)
      populateSelectOptions();
    }
    editingLaptopId = null;
  } else {
    laptops.push(laptopData);
    DisplayLaptopsInUi(laptopData);
    populateSelectOptions();
  }

  form.reset();
  addedSpecs = [];
  addedRatings = [];
  specDisplayContainer.innerHTML = "";
  addLaptopContainer.classList.add("active");
});






const searchInput = document.getElementById("searchLaptop");


searchInput.addEventListener("input", function () {
  const query = this.value.trim().toLowerCase();
    if (query === "") {
    DisplayLaptopsUi(laptops);
    }
    else {
      const filteredLaptops = laptops.filter((laptop) => {
        return (
          laptop.brand.toLowerCase().includes(query) ||
          laptop.model.toLowerCase().includes(query)
        );
      });
      if( filteredLaptops.length === 0) {
        laptopsContainer.innerHTML = `<p style="margin-top: 20px; color: red; text-align: center;">No laptops found.</p>`;
      }
        else {
      DisplayLaptopsUi(filteredLaptops);
        }
    }
});



function randomString() {
    var chars =
        "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");

    length = Math.floor(Math.random() * chars.length);
    var str = "";
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}






const tbody = document.querySelector("tbody");



// Adding Specification

const addSpecificationForm = document.querySelector(".addForm");
const modelsContainer = document.getElementById("modelsContainer");
const pendingSpecifications = {}; 

function populateLaptopDropdown() {
    const selector = document.getElementById("modelSelector");
    selector.innerHTML = `<option value="">-- Select Laptop --</option>`;
    laptops.forEach(laptop => {
        const option = document.createElement("option");
        option.value = laptop.id;
        option.textContent = `${laptop.brand} - ${laptop.model}`;
        selector.appendChild(option);
    });
}




document.getElementById("addModel").addEventListener("click", () => {
    const laptopId = document.getElementById("modelSelector").value;
    const value = document.getElementById("modelSpecValue").value.trim();
    const rating = parseInt(document.getElementById("modelRating").value);
    const specName = document.getElementById("specificationName").value.trim();

    if (!laptopId || !specName || !value || isNaN(rating) || rating < 1 || rating > 5) {
        alert("Please enter all valid values.");
        return;
    }

    if (!pendingSpecifications[laptopId]) pendingSpecifications[laptopId] = [];

    const alreadyAdded = pendingSpecifications[laptopId].some(s => s.name === specName);
    if (alreadyAdded) {
        alert("Specification already added for this laptop.");
        return;
    }

    pendingSpecifications[laptopId].push({ name: specName, value, rating });

    const modelsContainer = document.getElementById("modelsContainer");
    const laptop = laptops.find(l => l.id === laptopId);
    const div = document.createElement("div");
    div.textContent = `${laptop.brand} - ${laptop.model}: ${specName} = ${value} (Rating: ${rating})`;
    modelsContainer.appendChild(div);

    document.getElementById("modelSpecValue").value = "";
    document.getElementById("modelRating").value = "";
});

document.querySelector(".addForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const specName = document.getElementById("specificationName").value.trim();

    if (!specName || Object.keys(pendingSpecifications).length === 0) {
        alert("Fill the form completely and add at least one laptop spec.");
        return;
    }

    Object.entries(pendingSpecifications).forEach(([laptopId, specsArray]) => {
        const laptop = laptops.find(l => l.id === laptopId);
        specsArray.forEach(spec => {
            laptop.specs.push({ name: spec.name, value: spec.value });
            laptop.ratings.push({ name: spec.name, value: spec.rating });
        });
    });

    console.log("Updated laptops:", laptops);

    Object.keys(pendingSpecifications).forEach(k => delete pendingSpecifications[k]);
    document.getElementById("modelsContainer").innerHTML = "";
    document.querySelector(".addForm").reset();
    populateLaptopDropdown();
    alert("Specifications added successfully.");
});


document.querySelector(".addSpecification").addEventListener("click", () => {
    const formBox = document.querySelector(".add-from");
    formBox.classList.toggle("active");
    document.querySelector(".addSpecification").innerHTML = formBox.classList.contains("active")
        ? `Add Specification <i class="fa-solid fa-plus fa-lg"></i>`
        : `Cancel Adding`;
    if (formBox.classList.contains("active")) populateLaptopDropdown();
});


//  laptop comparison


const best_one = document.querySelector("#best-one");
const laptop1_options = document.querySelectorAll(".laptop1 option");




const DisplayBestLaptop = (bestLapTop, name, best) => {
        let left_side = null;
        let right_side = null;

        if (best) {
            best_one.classList.remove("active");

            left_side = document.querySelector("#best-one .left-side img");
            right_side = document.querySelector("#best-one .right-side");

        } else {
            left_side = document.querySelector(`#${name} .left-side img`);
            right_side = document.querySelector(`#${name} .right-side`);
        }

        left_side.setAttribute("src", `./Images/${name}.jpg`);
        right_side.innerHTML = `
        ${best ? `<p class="recomended">Recommended After Comparison</p>` : ""}
        <h2>${name.toUpperCase()} Laptop Details</h2>
        <div class="underline"></div>
        <p class="description">
            ${laptopBrands[name].description}
        </p>

        <div class="offer">
           
            <h1>
             <span class='oldPrice'><i class="fa-solid fa-indian-rupee-sign"></i>${
                laptopBrands[name].oldprice
                }</span>
            <i class="fa-solid fa-indian-rupee-sign"></i>${
              laptopBrands[name].price
            }</h1>
            <button type="button" class="offer-button">Limited Offer</button>
        </div>
    `;

    laptopSpecs.forEach((item, index) => {
        right_side.innerHTML += `
                <div class="align  ${index >= 4 ? "hidden-spec moreItems" : ""}">
                    <h3>${item.specName}</h3>
                    <p>${item[bestLapTop]}</p>
                </div>
            `;
    });

    right_side.innerHTML += `
            <button class="view-more-btn">View More</button>
            <a href="${laptopBrands[name].url}" target="_blank" class="shop-now-button">
                Shop Now <i class="fa-solid fa-arrow-right-to-bracket"></i>
            </a>
        `;

    const viewMoreBtn = right_side.querySelector(".view-more-btn");
    let expanded = false;

    viewMoreBtn.addEventListener("click", () => {
        const hiddenItems = right_side.querySelectorAll(".moreItems");

        hiddenItems.forEach((item) => {
        item.classList.toggle("hidden-spec");
        });

        expanded = !expanded;
        viewMoreBtn.textContent = expanded ? "View Less" : "View More";
    });
};


document.querySelector('#closeModal').addEventListener('click',(e) => {
     best_one.classList.add("active");
})


const laptop1 = document.querySelector(".laptop1");
const laptop2 = document.querySelector(".laptop2");
const laptop3 = document.querySelector(".laptop3");
const compareButton = document.querySelector(".compare-button");


function populateSelectOptions() {
  const selected1 = laptop1.value;
  const selected2 = laptop2.value;
  const selected3 = laptop3.value;

  updateSelect(laptop1, [selected2, selected3], selected1);
  updateSelect(laptop2, [selected1, selected3], selected2);
  updateSelect(laptop3, [selected1, selected2], selected3);
}


function updateSelect(dropdown, excludedIds, currentSelected) {
  dropdown.innerHTML = `<option value="">Choose Laptop</option>`;
  laptops.forEach(laptop => {
    const isExcluded = excludedIds.includes(laptop.id);
    const isSelected = laptop.id === currentSelected;
    if (!isExcluded || isSelected) {
      dropdown.innerHTML += `<option value="${laptop.id}" ${isSelected ? 'selected' : ''}>${laptop.brand} ${laptop.model}</option>`;
    }
  });
}


populateSelectOptions();


[laptop1, laptop2, laptop3].forEach(dropdown => {
  dropdown.addEventListener('change', populateSelectOptions);
});


compareButton.addEventListener("click", () => {
  const id1 = laptop1.value;
  const id2 = laptop2.value;
  const id3 = laptop3.value;

  if (!id1 || !id2 || !id3) {
    alert("Please select all three laptops.");
    return;
  }

  if (new Set([id1, id2, id3]).size < 3) {
    alert("Please select three different laptops.");
    return;
  }

  const getScore = (id) => {
    const laptop = laptops.find(l => l.id === id);
    return laptop.ratings.reduce((sum, r) => sum + r.value, 0);
  };

  const scores = [
    { id: id1, score: getScore(id1) },
    { id: id2, score: getScore(id2) },
    { id: id3, score: getScore(id3) },
  ];

  scores.sort((a, b) => b.score - a.score);
  const bestLaptop = laptops.find(l => l.id === scores[0].id);

  alert(`Best Laptop: ${bestLaptop.brand} ${bestLaptop.model} (Score: ${scores[0].score})`);

  const selectedLaptops = [
    laptops.find(l => l.id === id1),
    laptops.find(l => l.id === id2),
    laptops.find(l => l.id === id3)
  ];

  showComparisonTable(selectedLaptops);
});



function showComparisonTable(selectedLaptops) {
  tbody.innerHTML = "";

  const specNameSet = new Set();
  selectedLaptops.forEach(laptop => {
    laptop.specs.forEach(spec => {
      specNameSet.add(spec.name);
    });
  });

  const sortedSpecNames = Array.from(specNameSet).sort();

  sortedSpecNames.forEach(specName => {
    const row = document.createElement("tr");
    row.setAttribute("data-spec", specName);

    const th = document.createElement("th");
    th.textContent = specName.charAt(0).toUpperCase() + specName.slice(1);
    row.appendChild(th);

    
    const ratingValues = selectedLaptops.map(laptop => {
      const rating = laptop.ratings.find(r => r.name === specName);
      return rating ? rating.value : -1;
    });

    const maxRating = Math.max(...ratingValues);


    selectedLaptops.forEach((laptop, index) => {
      const spec = laptop.specs.find(s => s.name === specName);
      const value = spec ? spec.value : "---";
      const isMax = ratingValues[index] === maxRating;

      const td = document.createElement("td");
      td.innerHTML = isMax
        ? `${value} <i class="fa-solid fa-check" style="color: #14db22;"></i>`
        : value;
      row.appendChild(td);
    });

    
    const tdAction = document.createElement("td");
    tdAction.innerHTML = `
      <i class="fa-solid fa-trash fa-lg delete"></i>
      <i class="fa-solid fa-pen-to-square fa-lg update"></i>
    `;
    row.appendChild(tdAction);

    tbody.appendChild(row);
  });

  
  document.getElementById("header1").innerHTML = `${selectedLaptops[0].brand} ${selectedLaptops[0].model} <a href="#${selectedLaptops[0].id}"><i class="fa-solid fa-eye" style="color: #1c95f2;"></i></a>`;
  document.getElementById("header2").innerHTML = `${selectedLaptops[1].brand} ${selectedLaptops[1].model} <a href="#${selectedLaptops[1].id}"><i class="fa-solid fa-eye" style="color: #1c95f2;"></i></a>`;
  document.getElementById("header3").innerHTML = `${selectedLaptops[2].brand} ${selectedLaptops[2].model} <a href="#${selectedLaptops[2].id}"><i class="fa-solid fa-eye" style="color: #1c95f2;"></i></a>`;
}





//  update and delete

tbody.addEventListener("click", (e) => {
  if (e.target.tagName === "I") {
    const row = e.target.closest("tr");
    if (!row) return;

    const specName = row.dataset?.spec;
    if (!specName) return; 
    const header1 = document.getElementById("header1").textContent.split(" ")[0];
    const header2 = document.getElementById("header2").textContent.split(" ")[0];
    const header3 = document.getElementById("header3").textContent.split(" ")[0];

    const selectedLaptops = [
      laptops.find(l => l.brand === header1),
      laptops.find(l => l.brand === header2),
      laptops.find(l => l.brand === header3)
    ];

    if (e.target.classList.contains("delete")) {
      if (confirm("Do you want to Delete the Specification?")) {
        row.remove();
        selectedLaptops.forEach(laptop => {
          laptop.specs = laptop.specs.filter(spec => spec.name !== specName);
        });
        console.log("✅ Updated laptops after delete:", laptops);
      }
    }

    if (e.target.classList.contains("update")) {
      const inputs = row.querySelectorAll("td input");
      if (inputs.length) return;

      const specCells = row.querySelectorAll("td");
      const originalValues = Array.from(specCells).slice(0, 3).map(td => td.textContent);

      specCells.forEach((td, i) => {
        if (i < 3) {
          td.innerHTML = `<input type='text' value='${originalValues[i]}' class='inputSpec' />`;
        }
      });

      const actionTd = specCells[3];
      actionTd.innerHTML = `
        <button class='save'>Save</button>
        <button class='cancel'>Cancel</button>
      `;

      actionTd.querySelector(".save").addEventListener("click", () => {
        const updatedValues = Array.from(row.querySelectorAll("input")).map(input => input.value.trim());
        if (updatedValues.some(val => val === "")) {
          alert("Enter valid specifications for all laptops.");
          return;
        }

        updatedValues.forEach((val, idx) => {
          row.children[idx + 1].textContent = val;
        });

        selectedLaptops.forEach((laptop, idx) => {
          const existingSpec = laptop.specs.find(s => s.name === specName);
          if (existingSpec) {
            existingSpec.value = updatedValues[idx];
          } else {
            laptop.specs.push({ name: specName, value: updatedValues[idx] });
          }
        });

        actionTd.innerHTML = `
          <i class="fa-solid fa-trash fa-lg delete"></i>
          <i class="fa-solid fa-pen-to-square fa-lg update"></i>
        `;

        console.log("✅ Updated laptops after update:", laptops);
      });

      actionTd.querySelector(".cancel").addEventListener("click", () => {
        originalValues.forEach((val, idx) => {
          row.children[idx + 1].textContent = val;
        });
        actionTd.innerHTML = `
          <i class="fa-solid fa-trash fa-lg delete"></i>
          <i class="fa-solid fa-pen-to-square fa-lg update"></i>
        `;
      });
    }
  }
});








// Thanks Modal 

const thankYouSection = document.querySelector('#thankyou')
const contactForm = document.querySelector('.conFom')


contactForm.addEventListener('submit',(e) => {
    e.preventDefault()
   
    thankYouSection.classList.remove('active')
    setTimeout(() => {
        thankYouSection.classList.add('active')
        console.log( document.querySelector('.conFom'))
        document.querySelector('.conFom').reset()
        
    },2000)
})