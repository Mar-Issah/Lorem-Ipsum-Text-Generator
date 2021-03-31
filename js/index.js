//lorem array text
const lorem = [ "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis autem possimus inventore. Maxime molestias dolorum at nihil doloribus quas nostrum qui nemo esse excepturi ullam deserunt asperiores iusto, similique blanditiis sit assumenda cum fugiat totam saepe officiis dolores, odio id dolor. Laborum inventore enim nemo voluptatem dolor temporibus quas distinctio vero iure culpa deserunt, voluptatum praesentium incidunt quaerat ratione illum, omnis earum provident ullam?",

"voluptate ab nostrum impedit iure temporibus. Ad, fuga voluptatem? Totam et debitis tempore repellat exercitationem, dolores similique deserunt eligendi autem saepe. Obcaecati quas animi perspiciatis sit nam delectus quae temporibus assumenda sunt tempora numquam accusantium id accusamus totam quasi eveniet eos natus, veritatis at libero blanditiis beatae voluptates illo? Deserunt beatae praesentium.",

    "dignissimos porro id libero, eius error officia suscipit excepturi soluta voluptate vel adipisci odit necessitatibus maxime voluptatem enim quidem! Rem ratione sunt perspiciatis aperiam? Ea, eveniet facilis quod ipsum adipisci quasi repellendus vitae, dolore consequatur in nemo aperiam asperiores officiis laborum velit delectus dolorem ducimus.",

    " sunt error? Earum officia qui laborum nobis ratione fugit quibusdam totam itaque ut quo, accusamus, nisi quae perspiciatis! Necessitatibus dolorem nostrum at eaque sunt dolorum unde corrupti ipsum recusandae autem odit, molestiae, itaque animi fuga similique debitis. Neque reiciendis tempora voluptatibus eius suscipit libero reprehenderit culpa et.",

    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis autem possimus inventore. Maxime molestias dolorum at nihil doloribus quas nostrum qui nemo esse excepturi ullam deserunt asperiores iusto, similique quasi repellendus vitae, dolore consequatur in nemo aperiam asperiores officiis laborum velit delectus dolorem ducimus.",

"Necessitatibus dolorem nostrum at eaque sunt dolorum unde corrupti ipsum recusandae autem odit, molestiae, itaque animi fuga similique debitis. Neque reiciendis tempora voluptatibus eius suscipit libero reprehenderit culpa et. Omnis accusantium numquam ipsa eius veniam placeat hic dolore. Sequi repellendus iusto itaque!"];

const form = document.querySelector(".lorem-form");
const number = document.getElementById("number");
const result = document.querySelector(".lorem-text");
const copyMe = document.querySelector(".copy");

//we are going to add event listener on the form, this time it will listen to the button submit not click.

//notice it goes away after clicking on button. use the prevent default method on the button element to keep the text on the console

//all input in to input form receives a string evidence is the black text numbers appear blue. we need to parseint it 

form.addEventListener("submit", (e) => { 
    e.preventDefault();
    value = parseInt(number.value);
    //console.log(value);


   // validation: empty? -1? >9?
    if (isNaN(value) || value <= 0) {
        result.style.color = "red";
         result.innerHTML = `<p class = "result">Select a valid number</p>`;
    }
//from fcc's projectarray, use the slice method which ask for start(0) to end of value the user specify(paragraph). returns  is then map which returnd an array and then join() ignoring the ""
    //else{
    //let tempText = text.slice(0,value);
    //tempText = tempText.map((item) =>{
    //return `<p class="result">${item}</p>`;
  //  }).join("");
    
    //}

    let arr = "";
    for (let i = 0; i < value; i++) {
        const rand = Math.floor(Math.random() * 5);
        arr += `${lorem [rand]}<br><br>`;
        result.style.color = "black";
        result.innerHTML = `<p class = "result">${arr}</p>`;   
    }
});


// function copyText() {
//   result.select();
//   document.execCommand("copy");
// }

// copyMe.addEventListener("click", copyText);