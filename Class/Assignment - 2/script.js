document.addEventListener('DOMContentLoaded', ()=>{

    let toggle = true
    const header = document.getElementsByClassName("header")
    const form = document.querySelector('form')
    const toggleButton = document.getElementsByClassName('hide')[0]

    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        const name = form.firstLastName.value
        const organisation = form.organisation.value
        const email  = form.email.value
        const city = form.city.value
        const workphone = form.workPhone.value
        const fax = form.fax.value
        const zipcode = form.zipcode.value
        const addressline1 = form.addressline1.value
        const addressline2 = form.addressline2.value
        const country = form.country.value
        const homephone = form.homePhone.value
        if(name === "" || 
            organisation === "" ||
            email === "" ||
            city === "" ||
            workphone === "" ||
            fax === "" ||
            zipcode === "" ||
            addressline1 === "" ||
            addressline2 === "" ||
            country === "" ||
            homephone === ""){
                alert("Field is empty")
            }else{
                window.location.href="///C:/Users/Sanam/Desktop/Study/sanamWebPro/video.html"
            }

    })

    toggleButton.addEventListener('click',()=>{
        if(toggle){
            header[0].style.visibility='visible'
            console.log(toggle)
            toggleButton.textContent="Hide header"
            toggle = false
        }
        else{
            header[0].style.visibility='hidden'
            toggleButton.textContent="Show header"
            toggle = true
        }
    })
    
})

