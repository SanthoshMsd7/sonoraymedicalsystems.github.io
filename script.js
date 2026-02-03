function showTab(tabName) {
    let tabs = document.querySelectorAll('.tab-content');
    let buttons = document.querySelectorAll('.tab-button');

    tabs.forEach(tab => tab.classList.remove('active'));
    buttons.forEach(btn => btn.classList.remove('active'));

    document.getElementById(tabName).classList.add('active');

    event.currentTarget.classList.add('active');
}
function showDivision(name){

    // Hide all contents first
    document.getElementById("human").style.display = "none";
    document.getElementById("vet").style.display = "none";

    // Show the selected content
    document.getElementById(name).style.display = "block";
}
function filterGallery(category) {
    let items = document.querySelectorAll('.gal-item');
    let buttons = document.querySelectorAll('.filter-btn');

    // Update active button
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // Show / hide items
    items.forEach(item => {
        if(category === 'all'){
            item.style.display = "block";
        }
        else if(item.classList.contains(category)){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }
    });
}
/* ---------------------------
   IMAGE DATABASE
---------------------------- */

let galleryImages = [

    // HUMAN IMAGES
    { file:"human1.jpg", type:"human", label:"Human Ultrasound" },
    { file:"human2.jpg", type:"human", label:"Installation Setup" },

    // VET IMAGES
    { file:"vet1.jpg", type:"vet", label:"Veterinary Scanner" },
    { file:"vet2.jpg", type:"vet", label:"Livestock Pregnancy Scan" },

];


/* ---------------------------
   LOAD IMAGES INTO GALLERY
---------------------------- */

function loadGallery(){
    let area = document.getElementById("gallery-area");
    area.innerHTML = "";

    galleryImages.forEach(img => {

        // check if file exists -> skip if missing
        let fullPath = "images/" + img.file;

        let box = document.createElement("div");
        box.classList.add("gal-item", img.type);

        box.innerHTML = `
            <img src="${fullPath}" alt="">
            <div class="hover-label">${img.label}</div>
        `;

        area.appendChild(box);
    })
}

loadGallery(); // call once on load


/* ---------------------------
   FILTER SYSTEM
---------------------------- */

function filterGallery(category) {

    let items = document.querySelectorAll('.gal-item');
    let buttons = document.querySelectorAll('.filter-btn');

    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    items.forEach(item => {
        if(category === 'all'){
            item.style.display = "block";
        }
        else if(item.classList.contains(category)){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }
    });
}
document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let message = document.getElementById("message").value;

    let mailString = 
    "mailto:sonoraymedicals@gmail.com"
    + "?subject=New Customer Enquiry"
    + "&body="
    + "Name: " + name + "%0A"
    + "Email: " + email + "%0A"
    + "Phone: " + phone + "%0A"
    + "Message: " + message;

    location.href = mailString;

    document.getElementById("formMsg").innerText = 
    "✔ Your email app will open. Send message from there.";
});
function openSpec(filePath){
    document.getElementById("specFrame").src = filePath;
    document.getElementById("specModal").style.display = "block";
}

function closeSpec(){
    document.getElementById("specFrame").src = "";
    document.getElementById("specModal").style.display = "none";
}
