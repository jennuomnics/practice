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


export {randomString,laptopSpecs};