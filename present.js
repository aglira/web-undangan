const form = document.getElementsByTagName("form")[0]

form.addEventListener("submit",e=>{
     e.preventDefault()
     const formData = Object.fromEntries(new FormData(e.target))
     if (formData.kehadiran  == 'tidak_hadir') {
     handleRedirect('/notpresent.html')
     //    console.log('a');
     }
     else{
     handleRedirect('/present.html')
     }
     console.log(formData.kehadiran)
})
function handleRedirect(link) {
     window.location = link
}