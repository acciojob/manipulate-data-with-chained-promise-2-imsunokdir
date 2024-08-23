function updateArr(arr){
  document.getElementById("output").textContent = arr.join(" ");
}

function getArray(){
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve([1,2,3,4])
    },3000)
  })
}


getArray()
.then((nums)=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      const even = nums.filter(i=>i%2==0);
      updateArr(even);
      resolve(even);
    },1000)
  })
})
.then((evenNums)=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      const mulEven = evenNums.map(i=>i*2);
      updateArr(mulEven)
      resolve(mulEven)
    },2000)
  })
}) 