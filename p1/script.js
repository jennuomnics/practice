let laptopSpecs = [{
        id: randomString(),
        specName: "Processor",
        lenovoBrand: "12th Gen Intel i5-1235U",
        lenova: 5,
        hpBrand: "12th Gen Intel i5-1235U",
        hp: 5,
        dellBrand: "13th Gen Intel i3-1315U",
        dell: 3
    },
    {
        id: randomString(),
        specName: "RAM",
        lenovoBrand: "8GB DDR4",
        lenova: 3,
        hpBrand: "16GB DDR4",
        hp: 5,
        dellBrand: "8GB DDR5",
        dell: 4
    },
    {
        id: randomString(),
        specName: "ROM",
        lenovoBrand: "512GB SSD",
        lenova: 4,
        hpBrand: "1TB SSD",
        hp: 5,
        dellBrand: "512GB SSD",
        dell: 4
    },
    {
        id: randomString(),
        specName: "Display",
        lenovoBrand: "15.6\" FHD",
        lenova: 4,
        hpBrand: "14\" FHD",
        hp: 3,
        dellBrand: "15.6\" QHD",
        dell: 5
    },
    {
        id: randomString(),
        specName: "Graphics",
        lenovoBrand: "Intel Iris Xe",
        lenova: 5,
        hpBrand: "Intel UHD",
        hp: 3,
        dellBrand: "Intel Iris Xe",
        dell: 5
    },
    {
        id: randomString(),
        specName: "Battery",
        lenovoBrand: "3-cell, 41Wh",
        lenova: 3,
        hpBrand: "4-cell, 56Wh",
        hp: 5,
        dellBrand: "3-cell, 50Wh",
        dell: 4
    },
    {
        id: randomString(),
        specName: "Operating System",
        lenovoBrand: "Windows 11 Home",
        lenova: 3,
        hpBrand: "Windows 11 Pro",
        hp: 5,
        dellBrand: "Windows 10 Pro",
        dell: 4
    },
    {
        id: randomString(),
        specName: "Weight",
        lenovoBrand: "1.65 kg",
        lenova: 3,
        hpBrand: "1.45 kg",
        hp: 5,
        dellBrand: "1.7 kg",
        dell: 2
    },
    {

        id: randomString(),
        specName: "Camera",
        lenovoBrand: "720p HD",
        lenova: 3,
        hpBrand: "1080p FHD",
        hp: 5,
        dellBrand: "720p HD",
        dell: 3
    },
    {
        id: randomString(),
        specName: "Keyboard",
        lenovoBrand: "Backlit",
        lenova: 5,
        hpBrand: "Non-Backlit",
        hp: 2,
        dellBrand: "Backlit",
        dell: 5
    },
    {
        id: randomString(),
        specName: "Ports",
        lenovoBrand: "2x USB, HDMI, Type-C",
        lenova: 4,
        hpBrand: "3x USB, HDMI",
        hp: 5,
        dellBrand: "2x USB, Type-C",
        dell: 3
    },
    {
        id: randomString(),
        specName: "WiFi",
        lenovoBrand: "WiFi 5",
        lenova: 3,
        hpBrand: "WiFi 6",
        hp: 4,
        dellBrand: "WiFi 6E",
        dell: 5
    },
    {
        id: randomString(),
        specName: "Bluetooth",
        lenovoBrand: "5.0",
        lenova: 3,
        hpBrand: "5.2",
        hp: 4,
        dellBrand: "5.3",
        dell: 5
    },
    {
        id: randomString(),
        specName: "Touchscreen",
        lenovoBrand: "No",
        lenova: 1,
        hpBrand: "Yes",
        hp: 5,
        dellBrand: "No",
        dell: 1
    },
    {
        id: randomString(),
        specName: "Build Material",
        lenovoBrand: "Plastic",
        lenova: 3,
        hpBrand: "Aluminum",
        hp: 5,
        dellBrand: "Plastic",
        dell: 3
    },
    {
        id: randomString(),
        specName: "Color",
        lenovoBrand: "Silver",
        lenova: 3,
        hpBrand: "Black",
        hp: 5,
        dellBrand: "Gray",
        dell: 4
    },
    {
        id: randomString(),
        specName: "Fingerprint Sensor",
        lenovoBrand: "Yes",
        lenova: 5,
        hpBrand: "Yes",
        hp: 5,
        dellBrand: "No",
        dell: 1
    },
    {
        id: randomString(),
        specName: "Audio",
        lenovoBrand: "Stereo Speakers",
        lenova: 4,
        hpBrand: "Dual Speakers",
        hp: 3,
        dellBrand: "Dolby Audio",
        dell: 5
    },
    {
        id: randomString(),
        specName: "Warranty",
        lenovoBrand: "1 Year",
        lenova: 3,
        hpBrand: "2 Years",
        hp: 5,
        dellBrand: "1 Year",
        dell: 3
    },
    {
        id: randomString(),
        specName: "Price",
        lenovoBrand: "$700",
        lenova: 4,
        hpBrand: "$850",
        hp: 3,
        dellBrand: "$650",
        dell: 5
    }
]



let laptopBrands = {
    lenovo: {
      description: "Lenovo laptops offer solid performance and affordability for both personal and professional use.",
      price: "42,999",
      url: "https://www.amazon.in/s?k=amazon+lenovo+laptops&tag=googinhydr1-21"
    },
    hp: {
      description: "HP laptops are known for reliability, strong build quality, and a wide range of configurations.",
      price: "48,999",
      url: "https://www.amazon.in/s?k=amazon+hp+laptops&tag=googinhydr1-21"
    },
    dell: {
      description: "Dell laptops offer top-tier design and performance, ideal for work, gaming, and studies.",
      price: "51,499",
      url: "https://www.amazon.in/s?k=amazon+dell+laptops&tag=googinhydr1-21"
    }
  };
  

function randomString() {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');


    length = Math.floor(Math.random() * chars.length);
    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}

const showInTable = (specificData) => {
    const tbody = document.querySelector('tbody')
    specificData.sort((a, b) => a.specName.localeCompare(b.specName));

    tbody.innerHTML = ``
    specificData.forEach((item) => {

        const icon = '<i class="fa-solid fa-check" style="color: #14db22;"></i>'

        const maxScore = Math.max(item.lenova, item.dell, item.hp)

        const lenovoBrand = `${item.lenovoBrand}${item.lenova === maxScore ? icon : ''}`
        const hpBrand = `${item.hpBrand}${item.hp === maxScore ? icon : ''}`
        const dellBrand = `${item.dellBrand}${item.dell === maxScore ? icon : ''}`

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
   `
        tbody.innerHTML += eachItem;

    })
}


showInTable(laptopSpecs)



const tbody = document.querySelector('tbody')



// Adding Specification

const addSpecificationForm = document.querySelector('.addForm');
const modelsContainer = document.getElementById('modelsContainer');
const addedModels = {};


document.getElementById('addModel').addEventListener('click', () => {
    const brandSelect = document.getElementById('modelBrand');
    const brand = brandSelect.value;
    const name = document.getElementById('modelName').value.trim();
    const rating = Number(document.getElementById('modelRating').value);

    if (!brand || !name || rating < 1 || rating > 5) {
        alert("Please enter valid model name, select brand and rating (1–5)");
        return;
    }

    if (addedModels[brand]) {
        alert("This brand has already been added.");
        return;
    }

    addedModels[brand] = { name, rating };

    const item = document.createElement('div');
    item.textContent = `${brand.toUpperCase()}: ${name} (Rating: ${rating})`;
    modelsContainer.appendChild(item);

    
    const optionToRemove = brandSelect.querySelector(`option[value="${brand}"]`);
    if (optionToRemove) optionToRemove.remove();


    brandSelect.value = '';
    document.getElementById('modelName').value = '';
    document.getElementById('modelRating').value = '';

    if (brandSelect.options.length <= 1) {
        brandSelect.disabled = true;
    }
});

addSpecificationForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const specName = document.getElementById('specificationName').value.trim();

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
        lenovoBrand: addedModels.lenova ? addedModels.lenova.name : "",
        lenova: addedModels.lenova ? addedModels.lenova.rating : 0,
        hpBrand: addedModels.hp ? addedModels.hp.name : "",
        hp: addedModels.hp ? addedModels.hp.rating : 0,
        dellBrand: addedModels.dell ? addedModels.dell.name : "",
        dell: addedModels.dell ? addedModels.dell.rating : 0
    };

    laptopSpecs.push(newSpec);
    console.log("Saved:", laptopSpecs);


    Object.keys(addedModels).forEach(k => delete addedModels[k]);
    modelsContainer.innerHTML = '';
    addSpecificationForm.reset();

    const brandSelect = document.getElementById('modelBrand');
    brandSelect.innerHTML = `
        <option value="">-- Select Brand --</option>
        <option value="lenova">Lenovo</option>
        <option value="hp">HP</option>
        <option value="dell">Dell</option>
    `;
    brandSelect.disabled = false;
    document.querySelector('.add-from').classList.add('active')
    document.querySelector('.addSpecification').innerHTML = `
    Add Specification <i class="fa-solid fa-plus fa-lg"></i>

`
 showInTable(laptopSpecs)

});


document.querySelector('.addSpecification').addEventListener(('click'), (e) => {
    const addFormContainer = document.querySelector('.add-from')
    addFormContainer.classList.toggle('active')
    if(addFormContainer.classList.contains('active')) {
        document.querySelector('.addSpecification').innerHTML = `
            Add Specification <i class="fa-solid fa-plus fa-lg"></i>
        `
    }
    else {
        document.querySelector('.addSpecification').innerHTML = `
        Cancel Adding
    `
    }
    
})



// Delete Specification 

const deleteSpecification = (e) => {
    const row = e.target.closest('.row')
    const id = row.dataset.id
    laptopSpecs = laptopSpecs.filter((each) => {
        return each.id !== id;
    })
    console.log(laptopSpecs)
    showInTable(laptopSpecs)
}


// Save Update of Specification

const SaveUpdate = (id) => {
    const row = document.querySelector(`tr[data-id='${id}']`)
    const lenovoBrand = row.querySelector('#lenovaSpecification').value.trim()
    const hpBrand = row.querySelector('#hpSpecification').value.trim()
    const dellBrand = row.querySelector('#dellSpecification').value
    if (lenovoBrand === '' || hpBrand === '' || dellBrand === '') {
        alert("Enter proper Specification Values")
        return;
    }
    laptopSpecs = laptopSpecs.map((each) => {
        if (each.id === id) {
            return {
                ...each,
                lenovoBrand,
                hpBrand,
                dellBrand,
            }
        }
        return each;
    })

    showInTable(laptopSpecs)
}

// Cancel Update of Specification

const CancelUpdate = () => {
    showInTable(laptopSpecs)
}



// Update Specification 

const updateSpecification = (e) => {
    const row = e.target.closest('.row')
    const id = row.dataset.id
    const updateItemData = laptopSpecs.find((each) => {
        return each.id === id;
    })

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
    `
}





tbody.addEventListener('click', (e) => {
    if (e.target.tagName === "I") {
        if (e.target.classList.contains('delete')) {
            if (confirm('Do you want to Delete the Specification?')) {
                deleteSpecification(e)
            }
        }

        if (e.target.classList.contains('update')) {
            updateSpecification(e)
        }
    }
})





//  laptop comparison


const laptop1 = document.querySelector('.laptop1')
const laptop2 = document.querySelector('.laptop2')
const compare_button = document.querySelector('.compare-button')
const best_one = document.querySelector('#best-one')
const laptop1_options = document.querySelectorAll('.laptop1 option')





const DisplayBestLaptop = (bestLapTop, name,best) => {
    let left_side = null;
    let right_side = null;

    if (best) {
        best_one.classList.remove('active');
        left_side = document.querySelector('#best-one .left-side img');
        right_side = document.querySelector('#best-one .right-side');
    } else {
        left_side = document.querySelector(`#${name} .left-side img`);
        right_side = document.querySelector(`#${name} .right-side`);
    }

    left_side.setAttribute('src', `./Images/${name}.jpg`);
    right_side.innerHTML = `
        ${best ? `<p class="recomended">Recommended After Comparison</p>` : ''}
        <h2>${name.toUpperCase()} Laptop Details</h2>
        <div class="underline"></div>
        <p class="description">
            ${laptopBrands[name].description}
        </p>

        <div class="offer">
            <h1><i class="fa-solid fa-indian-rupee-sign"></i>${laptopBrands[name].price}</h1>
            <button type="button" class="offer-button">Limited Offer</button>
        </div>
    `;


    laptopSpecs.forEach((item, index) => {
        right_side.innerHTML += `
            <div class="align  ${index >= 4 ? 'hidden-spec moreItems' : ''}">
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

const viewMoreBtn = right_side.querySelector('.view-more-btn');
let expanded = false;

viewMoreBtn.addEventListener('click', () => {
    const hiddenItems = right_side.querySelectorAll('.moreItems');
    
    hiddenItems.forEach(item => {
        item.classList.toggle('hidden-spec');
    });

    expanded = !expanded;
    viewMoreBtn.textContent = expanded ? 'View Less' : 'View More';
});

};




laptop1.addEventListener('change', (e) => {
    const filter_options = Array.from(laptop1_options).filter((each) => {
        return each.value !== e.target.value;
    })

    laptop2.innerHTML = ''
    laptop2.innerHTML += '<option>Choose 2st Laptop</option>'
    console.log(filter_options)

    filter_options.forEach((item) => {
        if (item.value !== 'Choose 1st Laptop') {
            laptop2.innerHTML += `<option value=${item.value}>${item.textContent}</option>`
        }
    })


})

compare_button.addEventListener('click', (e) => {
    let v1 = laptop1.value 
    let v2 = laptop2.value 
    
    let score1 = 0 
    let score2 = 0 
    laptopSpecs.map((item)=>{
        score1 += item[v1]
        score2 += item[v2]
    })
    
    let bestLapTop = ''
    const gettingBrands = {lenovo:'lenovoBrand',hp:'hpBrand',dell:'dellBrand'}
    if(score1 > score2) {
        bestLapTop = gettingBrands[v1]
        DisplayBestLaptop(bestLapTop,v1,true)
    }
    else {
        bestLapTop = gettingBrands[v2]
        DisplayBestLaptop(bestLapTop,v2,true)
    }
    
    
})




// Adding Laptop Details in Ui 

DisplayBestLaptop('hpBrand',"hp",false)
DisplayBestLaptop('dellBrand',"dell",false)
DisplayBestLaptop('lenovoBrand',"lenovo",false)



