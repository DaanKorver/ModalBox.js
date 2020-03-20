const modal = new ModalBox({
    width: '50vw',
    template: 
    `
    <div>
        Hello!
        <h1>Reee</h1>
    </div>
    `,
    animation: 'slide'
});

const modal2 = new ModalBox({
    width: 1000,
    template: 
    `
    <div>
        Hello2!
        <h1>Reee2</h1>
    </div>
    `,
    animation: 'fade'
});

document.getElementById('btn1').addEventListener('click', function() {
    modal.openModal()
})

document.getElementById('btn2').addEventListener('click', function() {
    modal2.openModal()
})