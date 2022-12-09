

const container = document.body;
      const tabOne = document.querySelector(".link1");
      const tabTwo = document.querySelector(".link2");
      const tabThree = document.querySelector(".link3");
      const tabs = document.querySelectorAll(".link");
      tabOne.classList.add("tabone");
      tabOne.addEventListener("click",function(){
        container.style.backgroundImage = "url(https://images.unsplash.com/photo-1546593064-053d21199be1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1375&q=80)";
        tabOne.classList.add("tabone");
        tabThree.classList.remove("tabone");
        tabTwo.classList.remove("tabone");
      });
      tabTwo.addEventListener("click",function(){
        container.style.backgroundImage = "url(https://images.unsplash.com/photo-1591825495543-981fa4410313?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1408&q=80)";
        tabTwo.classList.add("tabone");
        tabThree.classList.remove("tabone");
        tabOne.classList.remove("tabone");
      });
      tabThree.addEventListener("click",function(){
        container.style.backgroundImage = "url(https://images.unsplash.com/photo-1512356181113-853a150f1aa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80)";
        tabThree.classList.add("tabone");
        tabOne.classList.remove("tabone");
        tabTwo.classList.remove("tabone");
      });