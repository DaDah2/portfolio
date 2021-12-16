
        const Ican = document.querySelector(".Ican");
        console.log(Ican);
    
        Ican.animate([
            {opacity:"0.5", marginTop:"100vh"},
            {opacity:"0.2"},
            {opacity:"0.7"}],
            {duration: 3000, fill:"forwards"}
            );
    
        const About = document.querySelector("#about");
        console.log(About);
    
        About.animate([
            {opacity:"0.2"},
            {opacity:"1"},
        ],
            {duration: 2000, fill:"forwards",
            iterations:Infinity}
            );
             
            
        
            const ulTag = document.querySelector('ul');
            const listItem = document.querySelectorAll('.listItem');
            
            console.dir(listItem);
            console.dir(ulTag.style);
            ulTag.style.listStyleType = 'none';
            ulTag.style.fontSize = '2rem';
            console.log(listItem);
           
            let liTagArr = [];
            for (let i = 0; i < listItem.length; i++) {
                liTagArr.push(listItem[i]);
                liTagArr[i].style.display = 'none';
            }
            console.log(liTagArr);
    
            let idx = 0;
            const textTpying = setInterval(function(){
                setTimeout(function(){
               
                if (idx < liTagArr.length) {
                    liTagArr[idx].style.display = 'list-item';
                    idx +=1;
                } else {
                    clearInterval(textTpying);
                }
            },5000); //5초후에 실행
        },2000,Infinity); //2초마다 텍스트생성