const form = document.getElementsByTagName("form")[0]

form.addEventListener("submit",e=>{
     e.preventDefault()
     // const formData = Object.fromEntries(new FormData(e.target))
     // console.log(formData)
     window.location = '/notpresent.html'
})