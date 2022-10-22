const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

const accordianBody = document.querySelector(".accordian_body");
const faqs = [];

// run by default to show all the contents
function showFaq() {
  faqData.forEach((dataitem)=>{
    const element = document.createElement("div");
    element.classList.add("faq");
    const header = document.createElement("h3");
    header.classList.add("faq_header");
    header.textContent = dataitem.question;
    const faq_content = document.createElement("p");
    // faq_content.classList.add("");
    faq_content.textContent = dataitem.answer;
    element.appendChild(header);
    element.appendChild(faq_content);
    faq_content.classList.add("hidden");
    //creating the button
    const button = document.createElement("button");
    button.classList.add("show_btn");
    header.appendChild(button); // adding the button with the element.
    button.addEventListener("click", ()=>{
      if(faq_content.classList.contains("hidden")){
        faq_content.classList.remove("hidden");
      }
      else{
        faq_content.classList.add("hidden");
      }
    })
    accordianBody.appendChild(element);
  });
}

function createFaq() {
  
}

function btnStatusUpdate() {
  
}


showFaq();