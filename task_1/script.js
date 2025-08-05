let laptopSpecs = [{
        id: randomString(),
        specName: "Processor",
        model1: "12th Gen Intel i5-1235U",
        lenova: 5,
        model2: "12th Gen Intel i5-1235U",
        hp: 5,
        model3: "13th Gen Intel i3-1315U",
        dell: 3
    },
    {
        id: randomString(),
        specName: "RAM",
        model1: "8GB DDR4",
        lenova: 3,
        model2: "16GB DDR4",
        hp: 5,
        model3: "8GB DDR5",
        dell: 4
    },
    {
        id: randomString(),
        specName: "ROM",
        model1: "512GB SSD",
        lenova: 4,
        model2: "1TB SSD",
        hp: 5,
        model3: "512GB SSD",
        dell: 4
    },
    {
        id: randomString(),
        specName: "Display",
        model1: "15.6\" FHD",
        lenova: 4,
        model2: "14\" FHD",
        hp: 3,
        model3: "15.6\" QHD",
        dell: 5
    },
    {
        id: randomString(),
        specName: "Graphics",
        model1: "Intel Iris Xe",
        lenova: 5,
        model2: "Intel UHD",
        hp: 3,
        model3: "Intel Iris Xe",
        dell: 5
    },
    {
        id: randomString(),
        specName: "Battery",
        model1: "3-cell, 41Wh",
        lenova: 3,
        model2: "4-cell, 56Wh",
        hp: 5,
        model3: "3-cell, 50Wh",
        dell: 4
    },
    {
        id: randomString(),
        specName: "Operating System",
        model1: "Windows 11 Home",
        lenova: 3,
        model2: "Windows 11 Pro",
        hp: 5,
        model3: "Windows 10 Pro",
        dell: 4
    },
    {
        id: randomString(),
        specName: "Weight",
        model1: "1.65 kg",
        lenova: 3,
        model2: "1.45 kg",
        hp: 5,
        model3: "1.7 kg",
        dell: 2
    },
    {

        id: randomString(),
        specName: "Camera",
        model1: "720p HD",
        lenova: 3,
        model2: "1080p FHD",
        hp: 5,
        model3: "720p HD",
        dell: 3
    },
    {
        id: randomString(),
        specName: "Keyboard",
        model1: "Backlit",
        lenova: 5,
        model2: "Non-Backlit",
        hp: 2,
        model3: "Backlit",
        dell: 5
    },
    {
        id: randomString(),
        specName: "Ports",
        model1: "2x USB, HDMI, Type-C",
        lenova: 4,
        model2: "3x USB, HDMI",
        hp: 5,
        model3: "2x USB, Type-C",
        dell: 3
    },
    {
        id: randomString(),
        specName: "WiFi",
        model1: "WiFi 5",
        lenova: 3,
        model2: "WiFi 6",
        hp: 4,
        model3: "WiFi 6E",
        dell: 5
    },
    {
        id: randomString(),
        specName: "Bluetooth",
        model1: "5.0",
        lenova: 3,
        model2: "5.2",
        hp: 4,
        model3: "5.3",
        dell: 5
    },
    {
        id: randomString(),
        specName: "Touchscreen",
        model1: "No",
        lenova: 1,
        model2: "Yes",
        hp: 5,
        model3: "No",
        dell: 1
    },
    {
        id: randomString(),
        specName: "Build Material",
        model1: "Plastic",
        lenova: 3,
        model2: "Aluminum",
        hp: 5,
        model3: "Plastic",
        dell: 3
    },
    {
        id: randomString(),
        specName: "Color",
        model1: "Silver",
        lenova: 3,
        model2: "Black",
        hp: 5,
        model3: "Gray",
        dell: 4
    },
    {
        id: randomString(),
        specName: "Fingerprint Sensor",
        model1: "Yes",
        lenova: 5,
        model2: "Yes",
        hp: 5,
        model3: "No",
        dell: 1
    },
    {
        id: randomString(),
        specName: "Audio",
        model1: "Stereo Speakers",
        lenova: 4,
        model2: "Dual Speakers",
        hp: 3,
        model3: "Dolby Audio",
        dell: 5
    },
    {
        id: randomString(),
        specName: "Warranty",
        model1: "1 Year",
        lenova: 3,
        model2: "2 Years",
        hp: 5,
        model3: "1 Year",
        dell: 3
    },
    {
        id: randomString(),
        specName: "Price",
        model1: "$700",
        lenova: 4,
        model2: "$850",
        hp: 3,
        model3: "$650",
        dell: 5
    }
]

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

        const model1 = `${item.model1}${item.lenova === maxScore ? icon : ''}`
        const model2 = `${item.model2}${item.hp === maxScore ? icon : ''}`
        const model3 = `${item.model3}${item.dell === maxScore ? icon : ''}`

        const eachItem = `
    <tr data-id="${item.id}" class="row">
        <th>${item.specName}</th>
        <td>${model1}</td>
        <td>${model2}</td>
        <td>${model3}</td>
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

const addFormButton = document.querySelector('.addSpecification')

const addSpecificationForm = document.querySelector('.addForm')


addSpecificationForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const specificationName = addSpecificationForm.specificationName.value
    const lenovomodel = addSpecificationForm.lenovomodel.value
    const lenovomodelRating = addSpecificationForm.lenovomodelRating.value
    const hpmodel = addSpecificationForm.hpmodel.value
    const hpmodelRating = addSpecificationForm.hpmodelRating.value
    const dellmodel = addSpecificationForm.dellmodel.value
    const dellmodelRating = addSpecificationForm.dellmodelRating.value

    if (specificationName === '') {
        alert("Enter the Proper Specification Name")
        return
    }
    if (lenovomodel === '' || hpmodel === '' || dellmodel === '') {
        alert("Enter All Model Details Properly")
        return
    }
    if (Number(lenovomodelRating) < 1 || Number(lenovomodelRating) > 5 || Number(hpmodelRating) < 1 || Number(hpmodelRating) > 5 || Number(dellmodelRating) < 1 || Number(dellmodelRating) > 5) {
        alert("Enter All Model Ratings between 1 to 5 Properly")
        return
    }
    const newSpecification = {
        id: randomString(),
        specName: specificationName,
        model1: lenovomodel,
        lenova: Number(lenovomodelRating),
        model2: hpmodel,
        hp: Number(hpmodelRating),
        model3: dellmodel,
        dell: Number(dellmodelRating)
    }

    laptopSpecs.push(newSpecification)
    addSpecificationForm.reset()
    document.querySelector('.add-from').classList.add('active')
    showInTable(laptopSpecs)

})



addFormButton.addEventListener(('click'), (e) => {
    document.querySelector('.add-from').classList.toggle('active')
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
    const model1 = row.querySelector('#lenovaSpecification').value.trim()
    const model2 = row.querySelector('#hpSpecification').value.trim()
    const model3 = row.querySelector('#dellSpecification').value
    if (model1 === '' || model2 === '' || model3 === '') {
        alert("Enter proper Specification Values")
        return;
    }
    laptopSpecs = laptopSpecs.map((each) => {
        if (each.id === id) {
            return {
                ...each,
                model1,
                model2,
                model3,
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
            <input type="text" value="${updateItemData.model1}" class='inputSpec' id="lenovaSpecification" />
        </td>
        <td>
            <input type="text" value="${updateItemData.model2}" class='inputSpec' id="hpSpecification" />
        </td>
        <td>
            <input type="text" value="${updateItemData.model3}" class='inputSpec' id="dellSpecification" />
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