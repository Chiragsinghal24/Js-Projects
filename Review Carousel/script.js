//selecting the element that are going to change

const personImage = document.getElementById('person-img')
const authorName = document.getElementById('author')
const authorJob = document.getElementById('job')
const authorInfo = document.getElementById('info')
const previousButton = document.getElementById('preview')
const nextButton = document.getElementById('next')
const supriseButton = document.getElementById('button_suprise')


const reviewArray = [
    {
        personImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80",
        authorName: "shivani goyal",
        authorJob: "web designer",
        authorInfo: "She is a web developer",
    },
    {
        personImage: "https://t3.ftcdn.net/jpg/02/99/04/20/360_F_299042079_vGBD7wIlSeNl7vOevWHiL93G4koMM967.jpg",
        authorName: "ram kumar",
        authorJob: "blockchain developer",
        authorInfo: "He is the blockchain developer",
    },
    {
        personImage: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
        authorName: "saras jones",
        authorJob: "us designer",
        authorInfo: "she is ui/ux designer",
    },
    {
        personImage: "https://image.shutterstock.com/image-photo/young-handsome-man-beard-wearing-260nw-1768126784.jpg",
        authorName: "shyam kumar",
        authorJob: "backend developer",
        authorInfo: "He is the backend developer",
    },

];

let frontreview = 0;
let backreview = reviewArray.length-1;

const articleCard = document.querySelector('.review')

nextButton.addEventListener('click',function(){
    if(frontreview>=0){
        personImage.src = reviewArray[frontreview].personImage
        authorName.innerHTML = reviewArray[frontreview].authorName
        authorJob.innerHTML = reviewArray[frontreview].authorJob
        authorInfo.innerHTML = reviewArray[frontreview].authorInfo
        frontreview++;
    }
    if(frontreview>3){
        frontreview = 0;
    }
})

previousButton.addEventListener('click',function(){
    if(backreview >=0){
        personImage.src = reviewArray[backreview].personImage
        authorName.innerHTML = reviewArray[backreview].authorName
        authorJob.innerHTML = reviewArray[backreview].authorJob
        authorInfo.innerHTML = reviewArray[backreview].authorInfo
        backreview--;
    }
    if(backreview<0){
        backreview = reviewArray.length-1
    }
})

supriseButton.addEventListener('click', function() {
    const randomNumber = Math.floor(Math.random() * reviewArray.length);
    personImage.src = reviewArray[randomNumber].personImage;
    authorName.innerHTML = reviewArray[randomNumber].authorName;
    authorJob.innerHTML = reviewArray[randomNumber].authorJob;
    authorInfo.innerHTML = reviewArray[randomNumber].authorInfo;
});
