const laptops = [{
        id: randomString(),
        brand: "ASUS",
        model: "Vivobook S15 Copilot+",
        image: './Images/asus.jpg',
        description: "AI-focused laptop with Snapdragon X chip, lightweight design, and all-day battery.",
        specs: [
            { name: 'cpu', value: "Snapdragon X Plus" },
            { name: 'ram', value: "16GB" },
            { name: 'storage', value: "512GB SSD" },
            { name: 'display', value: "15.6-inch OLED" },
            { name: 'batteryLife', value: "20 hours" },
            { name: 'os', value: "Windows 11" },
            { name: 'weight', value: "1.5 kg" }
        ],
        ratings: [
            { name: 'overall', value: 5 },
            { name: 'cpu', value: 5 },
            { name: 'ram', value: 4 },
            { name: 'storage', value: 4 },
            { name: 'display', value: 5 },
            { name: 'batteryLife', value: 5 },
            { name: 'os', value: 5 },
            { name: 'weight', value: 4 }
        ],
        score: 37,
        price: 75999,
        offerPrice: 75999,
        url: "https://www.amazon.in/dp/B0D6F8YP5B"
    },
    {
        id: randomString(),
        brand: "Apple",
        model: "MacBook Air (M4)",
        image: './Images/macbook.jpg',
        description: "13-inch ultralight MacBook with M4 chip, fantastic battery, and premium finish.",
        specs: [
            { name: 'cpu', value: "Apple M4" },
            { name: 'ram', value: "16GB Unified" },
            { name: 'storage', value: "256GB SSD" },
            { name: 'display', value: "13.6-inch Retina" },
            { name: 'batteryLife', value: "18 hours" },
            { name: 'os', value: "macOS" },
            { name: 'weight', value: "1.24 kg" }
        ],
        ratings: [
            { name: 'overall', value: 5 },
            { name: 'cpu', value: 5 },
            { name: 'ram', value: 5 },
            { name: 'storage', value: 4 },
            { name: 'display', value: 5 },
            { name: 'batteryLife', value: 5 },
            { name: 'os', value: 5 },
            { name: 'weight', value: 5 }
        ],
        score: 39,
        price: 124900,
        offerPrice: 99900,
        url: "https://www.amazon.in/dp/B0D6MR6N7T"
    },
    {
        id: randomString(),
        brand: "Lenovo",
        model: "LOQ Gaming Laptop",
        image: './Images/lenovo.jpg',
        description: "Budget-friendly gaming laptop with RTX 4050 and high refresh display.",
        specs: [
            { name: 'cpu', value: "Intel Core i5-13450HX" },
            { name: 'ram', value: "16GB DDR5" },
            { name: 'storage', value: "512GB SSD" },
            { name: 'display', value: "15.6-inch FHD 144Hz" },
            { name: 'batteryLife', value: "6 hours" },
            { name: 'os', value: "Windows 11" },
            { name: 'weight', value: "2.4 kg" }
        ],
        ratings: [
            { name: 'overall', value: 4 },
            { name: 'cpu', value: 4 },
            { name: 'ram', value: 4 },
            { name: 'storage', value: 4 },
            { name: 'display', value: 4 },
            { name: 'batteryLife', value: 3 },
            { name: 'os', value: 4 },
            { name: 'weight', value: 3 }
        ],
        score: 30,
        price: 84990,
        offerPrice: 61991,
        url: "https://www.amazon.in/dp/B0C9JLM6FH"
    },
    {
        id: randomString(),
        brand: "HP",
        model: "Spectre x360 14",
        image: './Images/hp.jpg',
        description: "Convertible ultrabook with OLED touch display and excellent battery life.",
        specs: [
            { name: 'cpu', value: "Intel Core i7-1355U" },
            { name: 'ram', value: "16GB" },
            { name: 'storage', value: "1TB SSD" },
            { name: 'display', value: "13.5-inch OLED Touch" },
            { name: 'batteryLife', value: "14 hours" },
            { name: 'os', value: "Windows 11" },
            { name: 'weight', value: "1.36 kg" }
        ],
        ratings: [
            { name: 'overall', value: 5 },
            { name: 'cpu', value: 5 },
            { name: 'ram', value: 4 },
            { name: 'storage', value: 5 },
            { name: 'display', value: 5 },
            { name: 'batteryLife', value: 4 },
            { name: 'os', value: 5 },
            { name: 'weight', value: 4 }
        ],
        score: 37,
        price: 135000,
        offerPrice: 124999,
        url: "https://www.amazon.in/dp/B0CJ47YFKS"
    },
    {
        id: randomString(),
        brand: "Dell",
        model: "XPS 13 Plus",
        image: './Images/dell.jpg',
        description: "High-end ultrabook with a near-borderless OLED display and sleek design.",
        specs: [
            { name: 'cpu', value: "Intel Core i7-1360P" },
            { name: 'ram', value: "16GB" },
            { name: 'storage', value: "1TB SSD" },
            { name: 'display', value: "13.4-inch 3.5K OLED" },
            { name: 'batteryLife', value: "12 hours" },
            { name: 'os', value: "Windows 11" },
            { name: 'weight', value: "1.26 kg" }
        ],
        ratings: [
            { name: 'overall', value: 4 },
            { name: 'cpu', value: 5 },
            { name: 'ram', value: 4 },
            { name: 'storage', value: 5 },
            { name: 'display', value: 5 },
            { name: 'batteryLife', value: 4 },
            { name: 'os', value: 4 },
            { name: 'weight', value: 5 }
        ],
        score: 36,
        price: 144999,
        offerPrice: 129999,
        url: "https://www.amazon.in/dp/B0BS7FMBYF"
    },
    {
        id: randomString(),
        brand: "MSI",
        model: "Stealth 14 Studio",
        image: './Images/msi.jpg',
        description: "Portable gaming and creative laptop with RTX 4060 and high refresh display.",
        specs: [
            { name: 'cpu', value: "Intel Core i7-13700H" },
            { name: 'ram', value: "32GB" },
            { name: 'storage', value: "1TB SSD" },
            { name: 'display', value: "14-inch QHD+ 240Hz" },
            { name: 'batteryLife', value: "9 hours" },
            { name: 'os', value: "Windows 11" },
            { name: 'weight', value: "1.7 kg" }
        ],
        ratings: [
            { name: 'overall', value: 4 },
            { name: 'cpu', value: 5 },
            { name: 'ram', value: 5 },
            { name: 'storage', value: 5 },
            { name: 'display', value: 5 },
            { name: 'batteryLife', value: 4 },
            { name: 'os', value: 4 },
            { name: 'weight', value: 4 }
        ],
        score: 36,
        price: 155000,
        offerPrice: 139999,
        url: "https://www.amazon.in/dp/B0CPCWSXZ6"
    },
    {
        id: randomString(),
        brand: "Acer",
        model: "Aspire 5",
        image: './Images/acer.jpg',
        description: "Everyday budget laptop with Intel i5 and slim design.",
        specs: [
            { name: 'cpu', value: "Intel Core i5-12450H" },
            { name: 'ram', value: "8GB" },
            { name: 'storage', value: "512GB SSD" },
            { name: 'display', value: "15.6-inch FHD" },
            { name: 'batteryLife', value: "8 hours" },
            { name: 'os', value: "Windows 11" },
            { name: 'weight', value: "1.7 kg" }
        ],
        ratings: [
            { name: 'overall', value: 3 },
            { name: 'cpu', value: 3 },
            { name: 'ram', value: 3 },
            { name: 'storage', value: 4 },
            { name: 'display', value: 3 },
            { name: 'batteryLife', value: 3 },
            { name: 'os', value: 4 },
            { name: 'weight', value: 4 }
        ],
        score: 27,
        price: 54999,
        offerPrice: 45999,
        url: "https://www.amazon.in/dp/B0C1JK3WCL"
    },
    {
        id: randomString(),
        brand: "Samsung",
        model: "Galaxy Book3 Pro",
        image: './Images/samsung.jpg',
        description: "Super thin and light laptop with AMOLED display and long battery.",
        specs: [
            { name: 'cpu', value: "Intel Core i7-1360P" },
            { name: 'ram', value: "16GB" },
            { name: 'storage', value: "512GB SSD" },
            { name: 'display', value: "16-inch AMOLED" },
            { name: 'batteryLife', value: "16 hours" },
            { name: 'os', value: "Windows 11" },
            { name: 'weight', value: "1.56 kg" }
        ],
        ratings: [
            { name: 'overall', value: 4 },
            { name: 'cpu', value: 5 },
            { name: 'ram', value: 4 },
            { name: 'storage', value: 4 },
            { name: 'display', value: 5 },
            { name: 'batteryLife', value: 4 },
            { name: 'os', value: 5 },
            { name: 'weight', value: 4 }
        ],
        score: 35,
        price: 149999,
        offerPrice: 124999,
        url: "https://www.amazon.in/dp/B0BYDPKZSR"
    },
    {
        id: randomString(),
        brand: "LG",
        model: "Gram 16",
        image: './Images/lg.jpg',
        description: "Ultra-light 16-inch laptop with high battery backup and large display.",
        specs: [
            { name: 'cpu', value: "Intel Core i7-1360P" },
            { name: 'ram', value: "16GB" },
            { name: 'storage', value: "1TB SSD" },
            { name: 'display', value: "16-inch WQXGA" },
            { name: 'batteryLife', value: "19 hours" },
            { name: 'os', value: "Windows 11" },
            { name: 'weight', value: "1.19 kg" }
        ],
        ratings: [
            { name: 'overall', value: 4 },
            { name: 'cpu', value: 5 },
            { name: 'ram', value: 5 },
            { name: 'storage', value: 5 },
            { name: 'display', value: 4 },
            { name: 'batteryLife', value: 5 },
            { name: 'os', value: 4 },
            { name: 'weight', value: 5 }
        ],
        score: 37,
        price: 159999,
        offerPrice: 134999,
        url: "https://www.amazon.in/dp/B0BYB53FBR"
    }
];



const laptopsContainer = document.getElementById('laptopsContainer')


const DisplayLaptopsInUi = (laptop) => {
    console.log(laptop)
    const mainDiv = document.createElement('div')
    mainDiv.setAttribute('id', laptop.id)
    mainDiv.classList.add('details')

    const left_side = document.createElement('div')
    const right_side = document.createElement('div')

    left_side.classList.add('left-side')
    right_side.classList.add('right-side')

    left_side.setAttribute("src", `${laptop.image}`);
    right_side.innerHTML = `
        <div class='wrapping'>
        <h2>${laptop.brand.toUpperCase()} ${laptop.model}</h2>

        
            <i class="fa-solid fa-trash fa-lg delete" ></i>
       


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
    laptops.map((singleLaptop) => {
        DisplayLaptopsInUi(singleLaptop)
    })
}

DisplayLaptopsUi(laptops)




let laptopSpecs = []

function randomString() {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');


    length = Math.floor(Math.random() * chars.length);
    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}



let laptopBrands = {};


if (localStorage.getItem('laptopDetails')) {
    laptopSpecs = JSON.parse(localStorage.getItem('laptopDetails'))
}

if (localStorage.getItem('laptopBrands')) {
    laptopBrands = JSON.parse(localStorage.getItem('laptopBrands'))
}



const AddlaptopDetailsTolocalStorage = () => {
    localStorage.setItem('laptopDetails', JSON.stringify(laptopSpecs))
}


const AddBrandDetailsToLocalStorage = () => {
    localStorage.setItem('laptopBrands', JSON.stringify(laptopBrands))
}

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


const showInTable = (specificData) => {
    const tbody = document.querySelector("tbody");
    specificData.sort((a, b) => a.specName.localeCompare(b.specName));

    tbody.innerHTML = ``;
    specificData.forEach((item) => {
        const icon = '<i class="fa-solid fa-check" style="color: #14db22;"></i>';

        const maxScore = Math.max(item.lenova, item.dell, item.hp);

        const lenovoBrand = `${item.lenovoBrand}${
      item.lenova === maxScore ? icon : ""
    }`;
        const hpBrand = `${item.hpBrand}${item.hp === maxScore ? icon : ""}`;
        const dellBrand = `${item.dellBrand}${item.dell === maxScore ? icon : ""}`;

        const eachItem = `
    <tr data-id="${item.id}" class="row">
        <th>${item.specName}</th>
        <td>${lenovoBrand}</td>
        <td>${hpBrand}</td>
        <td>${dellBrand}</td>
        <td><i class="fa-solid fa-trash fa-lg delete" ></i>
        <i class="fa-solid fa-pen-to-square fa-lg update" ></i>
        </td>
        
    </tr>
   `;
        tbody.innerHTML += eachItem;
    });
};

showInTable(laptopSpecs);



// Adding Specification

const addSpecificationForm = document.querySelector(".addForm");
const modelsContainer = document.getElementById("modelsContainer");
const addedModels = {};

document.getElementById("addModel").addEventListener("click", () => {
    const brandSelect = document.getElementById("modelBrand");
    const brand = brandSelect.value;
    const name = document.getElementById("modelName").value.trim();
    const rating = Number(document.getElementById("modelRating").value);

    if (!brand || !name || rating < 1 || rating > 5) {
        alert("Please enter valid model name, select brand and rating (1–5)");
        return;
    }

    if (addedModels[brand]) {
        alert("This brand has already been added.");
        return;
    }

    addedModels[brand] = { name, rating };

    const item = document.createElement("div");
    item.textContent = `${brand.toUpperCase()}: ${name} (Rating: ${rating})`;
    modelsContainer.appendChild(item);

    const optionToRemove = brandSelect.querySelector(`option[value="${brand}"]`);
    if (optionToRemove) optionToRemove.remove();

    brandSelect.value = "";
    document.getElementById("modelName").value = "";
    document.getElementById("modelRating").value = "";

    if (brandSelect.options.length <= 1) {
        brandSelect.disabled = true;
    }
});



addSpecificationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const specName = document.getElementById("specificationName").value.trim();

    if (!specName) {
        alert("Enter the Specification Name");
        return;
    }
    if (Object.keys(addedModels).length === 0) {
        alert("Please add at least one brand model before submitting.");
        return;
    }

    const newSpec = {
        id: randomString(),
        specName: specName,
        lenovoBrand: addedModels.lenova ? addedModels.lenova.name : "---",
        lenova: addedModels.lenova ? addedModels.lenova.rating : 0,
        hpBrand: addedModels.hp ? addedModels.hp.name : "--",
        hp: addedModels.hp ? addedModels.hp.rating : 0,
        dellBrand: addedModels.dell ? addedModels.dell.name : "--",
        dell: addedModels.dell ? addedModels.dell.rating : 0,
    };

    laptopSpecs.push(newSpec);
    console.log("Saved:", laptopSpecs);

    Object.keys(addedModels).forEach((k) => delete addedModels[k]);
    modelsContainer.innerHTML = "";
    addSpecificationForm.reset();

    const brandSelect = document.getElementById("modelBrand");
    brandSelect.innerHTML = `
        <option value="">-- Select Brand --</option>
        <option value="lenova">Lenovo</option>
        <option value="hp">HP</option>
        <option value="dell">Dell</option>
    `;
    brandSelect.disabled = false;
    document.querySelector(".add-from").classList.add("active");
    document.querySelector(".addSpecification").innerHTML = `
    Add Specification <i class="fa-solid fa-plus fa-lg"></i>

`;
    AddlaptopDetailsTolocalStorage()
    showInTable(laptopSpecs);
    DisplayBestLaptop("hpBrand", "hp", false);
    DisplayBestLaptop("dellBrand", "dell", false);
    DisplayBestLaptop("lenovoBrand", "lenovo", false);
});




document.querySelector(".addSpecification").addEventListener("click", (e) => {
    const addFormContainer = document.querySelector(".add-from");
    addFormContainer.classList.toggle("active");
    if (addFormContainer.classList.contains("active")) {
        document.querySelector(".addSpecification").innerHTML = `
            Add Specification <i class="fa-solid fa-plus fa-lg"></i>
        `;
    } else {
        document.querySelector(".addSpecification").innerHTML = `
        Cancel Adding
    `;
    }
});

// Delete Specification

const deleteSpecification = (e) => {
    const row = e.target.closest(".row");
    const id = row.dataset.id;
    laptopSpecs = laptopSpecs.filter((each) => {
        return each.id !== id;
    });
    console.log(laptopSpecs);
    AddlaptopDetailsTolocalStorage()
    showInTable(laptopSpecs);
};

// Save Update of Specification

const SaveUpdate = (id) => {
    const row = document.querySelector(`tr[data-id='${id}']`);
    const lenovoBrand = row.querySelector("#lenovaSpecification").value.trim();
    const hpBrand = row.querySelector("#hpSpecification").value.trim();
    const dellBrand = row.querySelector("#dellSpecification").value;
    if (lenovoBrand === "" || hpBrand === "" || dellBrand === "") {
        alert("Enter proper Specification Values");
        return;
    }
    laptopSpecs = laptopSpecs.map((each) => {
        if (each.id === id) {
            return {
                ...each,
                lenovoBrand,
                hpBrand,
                dellBrand,
            };
        }
        return each;
    });

    AddlaptopDetailsTolocalStorage()
    showInTable(laptopSpecs);
};

// Cancel Update of Specification

const CancelUpdate = () => {
    showInTable(laptopSpecs);
};

// Update Specification

const updateSpecification = (e) => {
    const row = e.target.closest(".row");
    const id = row.dataset.id;
    const updateItemData = laptopSpecs.find((each) => {
        return each.id === id;
    });

    row.innerHTML = ` 
       <tr class="updateRow"  data-id="${id}">
        <th>${updateItemData.specName}</th>
        <td>
            <input type="text" value="${updateItemData.lenovoBrand}" class='inputSpec' id="lenovaSpecification" />
        </td>
        <td>
            <input type="text" value="${updateItemData.hpBrand}" class='inputSpec' id="hpSpecification" />
        </td>
        <td>
            <input type="text" value="${updateItemData.dellBrand}" class='inputSpec' id="dellSpecification" />
        </td>
        <td class="savecancelContainer">
      <button id="save" onclick="SaveUpdate('${id}')">Save</button>
      <button id="cancel" onclick="CancelUpdate()">Cancel</button>


        </td>

    </tr>
    `;
};

tbody.addEventListener("click", (e) => {
    if (e.target.tagName === "I") {
        if (e.target.classList.contains("delete")) {
            if (confirm("Do you want to Delete the Specification?")) {
                deleteSpecification(e);
            }
        }

        if (e.target.classList.contains("update")) {
            updateSpecification(e);
        }
    }
});






// Search Functionality 

const search = document.getElementById('search')

search.addEventListener('input', (e) => {
    if (e.target.value === '') {
        showInTable(laptopSpecs)
    } else {
        const filter_Search = laptopSpecs.filter((item) => {
            return item.specName.toLowerCase().includes(e.target.value.toLowerCase())
        })

        if (filter_Search.length === 0) {
            tbody.innerHTML = `<p class="notFound"> Search Results Not Found </p>`
        } else {
            showInTable(filter_Search)
        }

    }
})





//  laptop comparison

const laptop1 = document.querySelector(".laptop1");
const laptop2 = document.querySelector(".laptop2");
const compare_button = document.querySelector(".compare-button");
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





laptop1.addEventListener("change", (e) => {
  const filter_options = Array.from(laptop1_options).filter((each) => {
    return each.value !== e.target.value;
  });

  laptop2.innerHTML = "";
  laptop2.innerHTML += "<option>Choose 2st Laptop</option>";
  console.log(filter_options);

  filter_options.forEach((item) => {
    if (item.value !== "Choose 1st Laptop") {
      laptop2.innerHTML += `<option value=${item.value}>${item.textContent}</option>`;
    }
  });
});





compare_button.addEventListener("click", (e) => {
  let v1 = laptop1.value;
  let v2 = laptop2.value;



  if(v1 === 'Choose 1st Laptop' || v2 === 'Choose 2st Laptop') {
    alert('select Laptops before you compare')
    return
  }

  let score1 = 0;
  let score2 = 0;
  laptopSpecs.map((item) => {
    score1 += item[v1];
    score2 += item[v2];
  });

  let bestLapTop = "";
  const gettingBrands = {
    lenovo: "lenovoBrand",
    hp: "hpBrand",
    dell: "dellBrand",
  };
  if (score1 > score2) {
    bestLapTop = gettingBrands[v1];
    DisplayBestLaptop(bestLapTop, v1, true);
  } else {
    bestLapTop = gettingBrands[v2];
    DisplayBestLaptop(bestLapTop, v2, true);
  }
});

// Adding Laptop Details in Ui

DisplayBestLaptop("hpBrand", "hp", false);
DisplayBestLaptop("dellBrand", "dell", false);
DisplayBestLaptop("lenovoBrand", "lenovo", false);






// Update Brand Details 

const updateBrandButton = document.querySelector('.updateBrandDetails')

updateBrandButton.addEventListener('click',(e) => {
    const updateBrandContainer = document.getElementById('updateBrand')
    updateBrandContainer.classList.remove('active')
    const closeModal = document.getElementById('closeBrandModal')
    closeModal.addEventListener('click',() => {
         updateBrandContainer.classList.add('active')
    })

   
})


const selectBrand = document.getElementById('updatemodelBrand')
 const oldprice = document.getElementById('oldprice')
const offerprice = document.getElementById('offerprice')
const amazonurl =document.getElementById('amazonurl')
const brandDescription= document.getElementById('brandDescription')
const submitupdateBrandDetails = document.getElementById('submitupdateBrandDetails')


 selectBrand.addEventListener('change',(e)=> {
    const BrandDetails = laptopBrands[selectBrand.value]
    oldprice.value = BrandDetails.oldprice
    offerprice.value = BrandDetails.price
    amazonurl.value = BrandDetails.url 
    brandDescription.value = BrandDetails.description

 })

submitupdateBrandDetails.addEventListener('click',(e) => {
    laptopBrands[selectBrand.value] = {
        price :  offerprice.value,
        oldprice : oldprice.value,
        url : amazonurl.value,
        description : brandDescription.value
    }
   AddBrandDetailsToLocalStorage()
   oldprice.value = ''
    offerprice.value = ''
    amazonurl.value = ''
    brandDescription.value = ''
    selectBrand.value = ''
    DisplayBestLaptop("hpBrand", "hp", false);
    DisplayBestLaptop("dellBrand", "dell", false);
    DisplayBestLaptop("lenovoBrand", "lenovo", false);


})


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