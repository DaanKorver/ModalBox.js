class ModalBox {
    constructor(options) {
        //Checking for options object
        this.options = options;
        if (typeof this.options !== 'object') {
            throw new Error('options is not defined as an Object')
            return
        }

        //Checking for options.width
        if(this.options.width === undefined) {
            this.width = '400px'
        } else if(typeof this.options.width === 'number'){
            this.width = this.options.width + 'px'
        } else if (typeof this.options.width === 'string') {
            if(this.options.width.slice(-2) === 'px' || this.options.width.slice(-1) === '%' || this.options.width.slice(-2) === 'vw') {
                this.width = this.options.width
            } else {
                throw new Error('Width is not the correct unit. Choose between px, % or vw')
                return
            }
        } else {
            throw new Error('Width must be a Number or String')
            return
        }

        //Checking for options.height
        if(this.options.height === undefined) {
            this.height = '250px'
        } else if(typeof this.options.height === 'number'){
            this.height = this.options.height + 'px'
        } else if (typeof this.options.height === 'string') {
            if(this.options.height.slice(-2) === 'px' || this.options.height.slice(-1) === '%' || this.options.height.slice(-2) === 'vw') {
                this.height = this.options.height
            } else {
                throw new Error('Height is not the correct unit. Choose between px, % or vw')
                return
            }
        } else {
            throw new Error('Height must be a Number or String')
            return
        }

        //Checking for template
        if(this.options.template === undefined) {
            throw new Error('Template is undefined')
            return
        }
        if (typeof this.options.template === 'string') {
            this.modal = document.createElement('div');
            this.modal.classList.add('mb-modal')
            this.modalBg = document.createElement('div');
            this.modalBg.classList.add('mb-modalBg')
            this.close = document.createElement('div');
            this.close.classList.add('mb-close')
            this.modal.innerHTML = this.options.template
        } else {
            throw new Error('Template is required a String')
            return
        }

        //Checking for animation
        if(this.options.animation) {
            switch(this.options.animation) {
                case 'fade': 
                    this.modal.style.opacity = '0'
                    this.modalBg.style.opacity = '0'
                    this.modal.style.transform = 'translate(-50%, -50%)'
                    this.modal.style.transition = 'opacity .3s ease-out'
                    this.modalBg.style.transition = 'opacity .3s ease-out'
                    break;
                case 'slide': 
                    this.modal.style.opacity = '0'
                    this.modalBg.style.opacity = '0'
                    this.modal.style.transform = 'translate(-50%, -25%)'
                    this.modal.style.transition = 'opacity .3s ease-out, transform .3s ease-out'
                    this.modalBg.style.transition = 'opacity .3s ease-out'
                    break;
                default:
                    throw new Error('Animation does not exist, choose between fade or slide')
                    return
            }
        } else {
            this.modal.style.transform = 'translate(-50%, -50%)'
        }

        //Styling the elements

        this.modalBg.style.position = 'fixed'
        this.modalBg.style.display = 'none'
        this.modalBg.style.top = '0'
        this.modalBg.style.width = '100vw'
        this.modalBg.style.height = '100vh'
        this.modalBg.style.maxWidth = '100%'
        this.modalBg.style.zIndex = '9999'
        this.modalBg.style.backgroundColor = 'rgba(0,0,0,0.6)'

        this.close.innerHTML = '&times;'
        this.close.style.color = 'rgba(255,255,255,0.7)'
        this.close.style.fontSize = '55px'
        this.close.style.position = 'absolute'
        this.close.style.top = '5px'
        this.close.style.right = '20px'
        this.close.style.cursor = 'pointer'
        this.close.addEventListener('click', ()=>{
            this.closeModal()
        })


        this.modal.style.position = 'absolute'
        this.modal.style.display = 'none'
        this.modal.style.top = '50%'
        this.modal.style.left = '50%'
        this.modal.style.width = this.width
        this.modal.style.height = this.height
        this.modal.style.backgroundColor = '#fff'
        
        this.modalBg.appendChild(this.close)
        this.modalBg.appendChild(this.modal)
        document.body.appendChild(this.modalBg)
    }
    
    openModal() {
        this.modalBg.style.display = 'block'
        this.modal.style.display = 'block'
        if(this.options.animation) {
            setTimeout(()=>{
                this.modal.style.transform = 'translate(-50%, -50%)'
                this.modal.style.opacity = '1'
                this.modalBg.style.opacity = '1'
            },50)
        } else {
            this.modal.style.opacity = '1'
            this.modalBg.style.opacity = '1'
        }
    }
    closeModal () {
        this.modal.style.opacity = '0'
        this.modalBg.style.opacity = '0'
        setTimeout(()=>{
            this.modalBg.style.display = 'none'
            this.modal.style.display = 'none'
        },350)
        if(this.options.animation === 'slide') {
            this.modal.style.transform = 'translate(-50%, -75%)'
            setTimeout(()=>{
                this.modal.style.transform = 'translate(-50%, -25%)'
            },350)
        }
    }
}