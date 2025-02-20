const questionAnsSectionBox = document.querySelector(".question_ans_section_box");
const Plus = document.querySelectorAll(".plus");
const ansSection = document.querySelectorAll(".ans-section");

// console.log(ansSection);


ansSection.forEach((ans, index) =>
{
    Plus.forEach((a, re)=>
        {
            a.addEventListener("click", ()=>
            {
                if(re == index)
                    {
                        ans.classList.toggle("hide");
                    }
            })
            
        })
    
})
