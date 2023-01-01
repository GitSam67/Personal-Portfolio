import React, {useEffect, useState} from "react"; 

export default function ScrollBtn(){

    const [scrollbtn, setScrollbtn] = useState(false);

    useEffect(()=>{
        window.addEventListener("scroll", scrollfunc);
        return () => window.removeEventListener("scroll", scrollfunc); 
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const scrollfunc = () =>{  
        if(window.scrollY > 700){
                setScrollbtn(true);
            }else{
                setScrollbtn(false);
            }
        }

    return (
        <section id="scroll">
         {scrollbtn && (
            <div className="fixed right-4 bottom-10 h-10 w-10 font-md cursor-pointer flex items-center justify-center rounded-full bg-indigo-500" onClick={scrollUp}>
                <i class="fas fa-md fa-angle-up text-black"></i>
            </div>
        )}
        </section>
    )
}