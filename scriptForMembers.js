let body=document.querySelector("body");
let toggle=document.querySelector(".toggle-btn");
let nav=document.querySelector("#navlist");
let hide=document.querySelector("#hide");


// header
toggle.onclick=()=>{
    nav.classList.toggle("open");
}
hide.onclick=()=>{
    nav.classList.toggle("open");
} 




//members.html
// pc variables---------------------------------------------------------------------------------------
let subtitles=[...document.querySelectorAll(".subtitle")];
let viewareas=[...document.querySelectorAll(".viewarea")];
let imageItems=[...document.querySelectorAll(".img-wrap")];
let articles=[...document.querySelectorAll(".articleP")];
let video=document.querySelector(".videoawaza");

let options={
    rootMargin:"0px",
    threshold:0.2,
};

let setItemActive=(entries)=>{
    console.log(entries);
    entries.map((entry)=>{
        entry.isIntersecting?entry.target.classList.add("active"):null;
    });
};

// declaration using IntersectionObserver
let observer = new IntersectionObserver(setItemActive, options);


    // to set observer for .subtitle
    subtitles.map((subtitle)=>{
        observer.observe(subtitle);
    });

    // to set observer for .viewarea to adjust direction for flexbox for each block
    viewareas.map((viewarea,index)=>{
        index%2==0?(viewarea.style.flexDirection="row"):(viewarea.style.flexDirection="row-reverse");
    });


    // to set observer for .img-wrap to set image size for each element
    imageItems.map((item, index)=>{
        item.children[0].style.backgroundImage=`url(./image/activity${index + 1}.jpg)`;
        item.style.width="55%";
        item.style.height="60%";

        // ff side 2
        if(index==3){
            item.children[0].style.backgroundImage=`url(./image/activity${index+1}.png)`;
        }

        observer.observe(item);
    });

    // to set observer for .articleP
    articles.map((article,index)=>{
        // parent element
        article.style.width="45%";
        article.style.height="60%";
        // child element
        article.children[0].style.margin="0 auto";
        article.children[0].style.width="80%";
        
        // awaza side 1
        if(index==0){
            // parent element
            article.style.fontSize="2rem";
        }
        // awaza side 2
        else if(index==1){
            // parent element
            article.style.fontSize="1.8rem";
        }
        // awaza side 3
        else if(index==2){
            // parent element
            article.style.fontSize="1.5rem";
            // child element
            article.children[1].style.margin="0 auto";
            article.children[1].style.width="80%";
        }

        // ff side 1
        else if(index==3){
            // parent element
            article.style.fontSize="1.5rem";
        }
        // ff side 2
        else if(index==4){
            // parent element
            article.style.fontSize="1.5rem";
            // child element
            article.children[1].style.margin="0 auto";
            article.children[1].style.width="80%"; 
        }
        // ff side 3
        else if(index==5){
            // parent element
            article.style.fontSize="1.5rem";
        }

        // tsudou side 1
        else if(index==6){
            // parent element
            article.style.fontSize="1.5rem";
        }
        // tsudou side 2
        else if(index==7){
            // parent element
            article.style.fontSize="1.4rem"; 
        }
        // tsudou side 3
        else if(index==8){
            // parent element
            article.style.fontSize="2rem";
        }

        observer.observe(article);
    });


    // to set observer for .videoawaza
    observer.observe(video);



    //sm area-------------------------------------------------------------------------------

    // sm variables
    let subtitlesS=[...document.querySelectorAll(".subtitleS")];
    let imageItemsS=[...document.querySelectorAll(".img-wrapS")];
    let articlesS=[...document.querySelectorAll(".articleS")];
    let videoS=document.querySelector(".videoawazaS");


    // to set observer for .subtitleS
    subtitlesS.map((Ssubtitle, index)=>{
        if(index==1){
            Ssubtitle.style.marginBottom="50px";
        }
        observer.observe(Ssubtitle);
    });

    // to set observer for .img-wrapS to set image size for each element
    imageItemsS.map((Sitem, index)=>{
        Sitem.children[0].style.backgroundImage=`url(./image/activity${index + 1}.jpg)`;
        // ff side 2
        if(index==3){
            Sitem.children[0].style.backgroundImage=`url(./image/activity${index+1}.png)`;
        }
        observer.observe(Sitem);
    });

    // to set observer for .articleS
    articlesS.map((Sarticle,index)=>{
        
        observer.observe(Sarticle);
    });

    // to set observer for .videoawazaS
    observer.observe(videoS);
