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

//add event listener on the form,


form.addEventListener("submit", (e) => { 
    e.preventDefault();
    value = parseInt(number.value);
 


   // validation: if value is not a number or if value is less or equal to 0 the error
    if (isNaN(value) || value <= 0) {
        result.style.color = "red";
         result.innerHTML = `<p class = "result">Select a valid number</p>`;
    }

//after validation chech use a random number to select from the lorem rexr array
    let arr = "";
    for (let i = 0; i < value; i++) {
        const rand = Math.floor(Math.random() * 5);
        arr += `${lorem [rand]}<br><br>`;
        result.style.color = "black";
        result.innerHTML = `<p class = "result">${arr}</p>`;   
    }
});

