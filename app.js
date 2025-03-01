var getUl = document.getElementById('ul')

        function addtodo(){
            var getInp = document.getElementById('inp')

            if(getInp.value == ''){
                alert('Please Enter Input')
            }

            else{
                var createLi = document.createElement('li')
            var liText = document.createTextNode(getInp.value)
            createLi.appendChild(liText)
            getUl.appendChild(createLi)
            getInp.value = ''
        
            var delBtn = document.createElement('button')
            var delText = document.createTextNode('Delete')
            delBtn.appendChild(delText)
            createLi.appendChild(delBtn)
            delBtn.setAttribute('onclick','del(this)')
        
        
            var editBtn = document.createElement('button')
            var editText = document.createTextNode('Edit')
            editBtn.appendChild(editText)
            createLi.appendChild(editBtn)
            editBtn.setAttribute('onclick','edit(this)')
            }
        }
        
        function delAll(){
            getUl.innerHTML = ''
        }
        
        function del(e){
            e.parentNode.remove()
        }
        
        function edit(e){
            var editPrompt = prompt("Enter Updated Text",e.parentNode.firstChild.textContent)
            e.parentNode.firstChild.textContent = editPrompt
        }