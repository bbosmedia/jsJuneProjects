const reviews = [
    {
      id: 1,
      name: "susan smith",
      job: "web developer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
      text:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: "anna johnson",
      job: "web designer",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
      text:
        "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
    {
      id: 3,
      name: "peter jones",
      job: "intern",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
      text:
        "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
      id: 4,
      name: "bill anderson",
      job: "the boss",
      img:
        "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
      text:
        "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
    },
  ];


  const img = document.querySelector("#person-img")
  const name = document.querySelector("#author")
  const job = document.querySelector("#job")
  const info = document.querySelector("#info")
  const prevBtn = document.querySelector(".prev-btn")
  const nextBtn = document.querySelector(".next-btn")
  const randomBtn = document.querySelector(".random-btn")

  let currentIndex = 0;

  window.addEventListener("DOMContentLoaded", (e) =>{
      showPerson(currentIndex)
  })

  const showPerson = (number) =>{
    const person = reviews[number]
    img.src = person.img
    name.innerText = person.name
    job.innerText = person.job
    info.innerText = person.text
  }


  prevBtn.addEventListener("click", () => {
      if(currentIndex < 1){
          currentIndex = reviews.length - 1;
      }else{
        currentIndex--;
      }
      showPerson(currentIndex)
  })

  nextBtn.addEventListener("click", () => {
    currentIndex++;
    if(currentIndex > reviews.length - 1){
        currentIndex = 0;
    }
    showPerson(currentIndex)
  })

  randomBtn.addEventListener("click", () =>{
      currentIndex = Math.floor(Math.random() * reviews.length)
      showPerson(currentIndex)
  })
  