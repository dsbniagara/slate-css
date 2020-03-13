window.onload = () => {

    console.log('onload')
    makeResizableDiv()
}

function makeResizableDiv() {
    const h = document.querySelectorAll('.demo-frame-handle');
    for (let i = 0; i < h.length; i++) {
        const handle = h[i];
        const frame = handle.parentElement.querySelector('iframe');
        handle.addEventListener('mousedown', function (e) {
            e.preventDefault();

            const event = resize(frame,handle);
            window.addEventListener('mousemove', event);
            window.addEventListener('mouseup', ()=>{
                frame.style.pointerEvents = 'auto';
                window.removeEventListener('mousemove', event)
            })
        })
    }
}

function resize(frame,handle) {
    console.log(frame,handle);
    return (e) => {
        e.preventDefault();
        console.log('move',e.pageX);
        frame.style.pointerEvents = 'none';
        frame.style.width = e.pageX - frame.getBoundingClientRect().left + 'px';
    }
}

function resizeStop(event) {
}