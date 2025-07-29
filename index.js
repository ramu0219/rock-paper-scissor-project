let score =  JSON.parse(localStorage.getItem('score'))
       if (score == null){
        score={wins:0,
             losses:0,
             ties:0,}       
       }
       let isAutoPlay=false;
       let intervelID;
       function autoPlay(){
       if(!isAutoPlay){  
        intervelID= setInterval(function(){
            const option=game1();
            console.log(option)
            playerMove(option);
        },1000)
        isAutoPlay=true
       }
       else{
        clearInterval(intervelID);
        isAutoPlay=false
       }
    }
       
       updateScore();
       
                 
 
        let result='';
         function playerMove(option){
              const variable=game();
            if (option == 'rock') {
                if(variable=='rock'){
                    result='tie';
                }
                else if(variable=='paper'){
                    result='you lose';
                }
                else if(variable=='scissor'){
                    result='you win';
                }
            }
            else if(option =='paper'){
                if(variable=='rock'){
                    result='you win';
                }
                else if(variable=='paper'){
                    result='tie';
                }
                else if(variable=='scissor'){
                    result='you lose';
                }  
                }
            else if(option =='scissor'){
                if(variable=='rock'){
                    result='you lose';
                }
                else if(variable=='paper'){
                    result='you win';
                }
                else if(variable=='scissor'){
                    result='tie';
                }
            }
             if(result == "you win"){
                score.wins=score.wins+1;
             }
             else if(result == "you lose"){
                score.losses=score.losses+1;
             }
             else if(result == "tie"){
                score.ties=score.ties+1;
             }
             
             
            
           
            updateScore();
            document.querySelector('.js-result').innerHTML=`you
            <img src="${option}-emoji.png" class="js-p">
            <img src="${variable}-emoji.png" class="js-p">
            computer 
            `;
            document.querySelector('.js-r').innerHTML=`${result}`
            localStorage.setItem('score',JSON.stringify(score));
          }
          function updateScore(){
            document.querySelector('.js-score').innerHTML=`wins:${score.wins} losses:${score.losses} ties:${score.ties}` 
          }
          function clearResult(){
            document.querySelector('.js-result').innerHTML=''
            document.querySelector('.js-r').innerHTML=''

          }
         
        
        function game(){
            const Number=Math.random();
            let variable='';
            
                if (Number>=0 && Number<1/3){
                    variable='rock';
                }
                else if (Number>=1/3 && Number<2/3){
                variable='paper';
                }
                    else if (Number>=2/3 && Number<1){
                  variable='scissor';
         
                }
                return variable;
        
        }
        
        
        
       
        function game1(){
            const Number=Math.random();
            let variable1='';
           
            
            
                if (Number>=0 && Number<1/3){
                    variable1='rock';
                }
                else if (Number>=1/3 && Number<2/3){
                variable1='paper';
                }
                    else if (Number>=2/3 && Number<1){
                  variable1='scissor';
         
                }
                return variable1;
        
        }