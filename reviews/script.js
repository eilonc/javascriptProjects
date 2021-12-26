// local reviews data
const reviews = [
  {
    id: 0,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 3,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

// Get elements from index and store them JS file
const personImg = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const randomBtn = document.getElementById("suprise");
const resetBtn = document.getElementById("reset");
let index = 0;

// Function that will change the output to user
function changeState(i) {
  const changeEl = reviews[i];
  personImg.src = changeEl.img;
  author.textContent = changeEl.name;
  job.textContent = changeEl.job;
  info.textContent = changeEl.text;
}

// Function for reset button, initializing the parameters to the user
function initState() {
  index = 0;
  changeState(index);
}

// Function that will change the output when pressing the RIGHT arrow btn
function nextBtnFunc() {
  if (index === reviews.length - 1) {
    index = 0;
  } else {
    index++;
  }
  changeState(index);
}

// Function that will change the output when pressing the LEFT arrow btn
function prevBtnFunc() {
  if (index === 0) {
    index = reviews.length - 1;
  } else {
    index--;
  }
  changeState(index);
}

// Function that will pick a random data as output
function randomBtnFunc() {
  changeState(Math.floor(Math.random() * reviews.length));
}

// Buttons clicking events
nextBtn.addEventListener("click", nextBtnFunc);
prevBtn.addEventListener("click", prevBtnFunc);
randomBtn.addEventListener("click", randomBtnFunc);
resetBtn.addEventListener("click", initState);
