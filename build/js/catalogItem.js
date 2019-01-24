let input = document.getElementById('item-quantity'),
    plus  = document.getElementById('btnplus'),
    minus = document.getElementById('btnmin');



plus.onclick = () => {
    if(input.value >= 1){
        minus.removeAttribute('disabled');

    }
    input.value++;
}
minus.onclick = () => {
    input.value--;
    if(input.value == 1){
        minus.setAttribute('disabled', 'disabled');

    };
}