const data = [{ que: "CSS stands for ?", a: "Control Style Sheet.", b: "Control Simple Style.", c: "Cascading Style Sheet.", d: "Cascading Sheet Style.", correct: "c" },
{ que: "Which of the given Option is MarkUp Language ?", a: "Java.", b: "HTML.", c: "PHP.", d: "Python", correct: "b" },
{ que: "Which is not Programming language in below option ?", a: "Java.", b: "JavaScript.", c: "Python.", d: "CSS.", correct: "d" },
{ que: "Which of the following keywords is used to define a variable in Javascript? .", a: "var", b: "let", c: "Both A and B.", d: "None of the above", correct: "c" },
{ que: "How can a datatype be declared to be a constant type?", a: " const", b: "var.", c: "let", d: "constant", correct: "a" },
{ que: "Which type of JavaScript language is ___.", a: "Object-Oriented.", b: "Object-Based.", c: "Assembly-language.", d: "High-level", correct: "a" }
]

let index=0;
let total=data.length;
let correct=0;
let wrong=0;
let Skip=0;

const btn=document.getElementById('btn');
const right=document.getElementById("right");
const quetion=document.getElementById('ques');
const option=document.querySelectorAll(".option");
const all_options=document.querySelectorAll(".options");
    right.addEventListener("click",()=>{
        Skip=Skip+1;
        next();
        reset();
    });
    btn.onclick=()=>{
        
        let select=getchecked();
        if(select!=undefined){
            console.log("After returning :",select);       
            console.log("Ans",data[index].correct);
            if(select==data[index].correct){
                correct=correct+1;
                console.log("correct: "+correct);
            }
            else{
                wrong=wrong+1;
                console.log("wrong: "+wrong);
            }
            
            if(index==total-1){
                end();
            }
            else{
                next();
            }
            reset();
        }
    }
    const next=()=>{
        if(index<total-1){
            index=index+1;
            loadquetion(index);
            loadoption(index);
        }
        else if(index==total-1){
            end();
        }
    }
    const getchecked=()=>{
        let checked_value;
        all_options.forEach((input)=>{
            if(input.checked){
                checked_value= input.value;
        }
      });
      return checked_value;
    }
    
    const loadquetion=(index)=>{
        let load=data[index];
        console.log(load.que);
        quetion.innerText=`${index+1}) ${load.que}`; 
    } 
    const loadoption=(index)=>{
    let option_data=data[index];
    option[0].innerText=option_data.a;
    option[1].innerText=option_data.b;
    option[2].innerText=option_data.c;
    option[3].innerText=option_data.d;
}

const reset=()=>{
    all_options.forEach((input)=>{
        input.checked=false;
    })
}

const container=document.getElementById("main");
const container_2=document.getElementById("main_2");
const r_start=document.getElementById("r_start");
const end=()=>{
    container.style.display="none";
    container_2.style.display="block"
    container_2.innerHTML=`
    <h3 id="head">Thank You For Playing Quiz!</h3>
    <h5 id="true_ans">Correct:${correct}</h5>
    <h5 id="false_ans">Wrong:${wrong}</h5>
    <h5 id="skip_ans">Skip:${Skip}</h5>
    <h4>Total Quetion:${total}</h4>
    `;
    container_2.style.padding="10px";
    r_start.style.display="block";
    r_start.style.margin="5px"
}


r_start.onclick=()=>{
    container.style.display="block";
    container_2.style.display="none";
    r_start.style.display="none";
    index=0;
    correct=0;
    wrong=0;
    Skip=0;
    console.log(index,correct,wrong,Skip)
    loadquetion(index);
    loadoption(index);
}
loadquetion(index);
loadoption(index);
