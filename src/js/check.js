//checkbox agree terms
let check =  document.querySelector('#agree'),
    btn   =  document.querySelector('#send_btn');


check.addEventListener('click', function () {
    if (check.checked){
        btn.classList.remove('is-disabled');
        btn.classList.add('is-success');
        btn.removeAttribute('disabled');
    } else if(!check.checked){
        btn.classList.remove('is-success');
        btn.classList.add('is-disabled');
        btn.setAttribute('disabled', 'disabled');
    }
});