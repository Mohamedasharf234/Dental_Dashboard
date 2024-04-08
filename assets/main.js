
let list=document.querySelectorAll(".navigation li")

function activeLink() {
    list.forEach((item)=>{
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}
list.forEach((item) => item.addEventListener("mouseover", activeLink));

//menu

let toggle=document.querySelector(".toggle")
let navigation=document.querySelector(".navigation")
let main=document.querySelector(".main")

toggle.onclick=function(){
    navigation.classList.toggle("active")
    main.classList.toggle("active")
}

//upload imge
const selectimage=document.querySelector('.select-image')
const inputFile=document.querySelector('#file')
const imgArea=document.querySelector('.img-area')

selectimage.addEventListener('click',function(){
    inputFile.click();
})
inputFile.addEventListener('change',function(){
    const image=this.files[0]
        const reader=new FileReader();
        reader.onload=()=>{
        const allImg=imgArea.querySelectorAll('img')
        allImg.forEach((item)=>item.remove())
        const imgUrl=reader.result;
        const img=document.createElement('img')
        img.src=imgUrl
        imgArea.appendChild(img);
        imgArea.classList.add('active')
        imgArea
    }
    reader.readAsDataURL(image)
    
})



