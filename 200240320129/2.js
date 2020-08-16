function submit1{
    let input1 = document.querySelector('#IN1');
    let input2 = document.querySelector('#IN2');

    let comm = document.querySelector('#COMMENT');

    document.append(intput1, comm);
    document.append(intput2, comm);

    document.querySelector('#IN1').nodeValue('');
    document.querySelector('#IN2').nodeValue('');
}

function clear1{
    document.querySelector('#COMMENT').remove();
}