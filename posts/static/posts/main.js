console.log('hello world')

const helloworldBox = document.getElementById('hello-world')

$.ajax({
    type: 'GET',
    url:'/hello-world/',
    success: function(response){
        console.log('success', response.text)
        helloworldBox.innerHTML = response.text
    },
    error: function(error){
        console.log('error', error)
    }
})