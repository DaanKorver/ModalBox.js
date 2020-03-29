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
            this.width = '40%'
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
            this.height = 'auto'
        } else if(typeof this.options.height === 'number'){
            this.height = this.options.height + 'px'
        } else if (typeof this.options.height === 'string') {
            if(this.options.height.slice(-2) === 'px' || this.options.height.slice(-1) === '%' || this.options.height.slice(-2) === 'vw' || this.options.height.slice(-2) === 'vh') {
                this.height = this.options.height
            } else {
                throw new Error('Height is not the correct unit. Choose between px, % or vw')
                return
            }
        } else {
            throw new Error('Height must be a Number or String')
            return
        }

        //Checking for options.maxWidth
        if(this.options.maxWidth === undefined) {
            this.maxWidth = '500px'
        } else if(typeof this.options.maxWidth === 'number'){
            this.maxWidth = this.options.maxWidth + 'px'
        } else if (typeof this.options.maxWidth === 'string') {
            if(this.options.maxWidth.slice(-2) === 'px' || this.options.maxWidth.slice(-1) === '%' || this.options.maxWidth.slice(-2) === 'vw') {
                this.maxWidth = this.options.maxWidth
            } else {
                throw new Error('maxWidth is not the correct unit. Choose between px, % or vw')
                return
            }
        } else {
            throw new Error('maxWidth must be a Number or String')
            return
        }

        //Checking for options.maxHeight
        if(this.options.maxHeight === undefined) {
            this.maxHeight = '100vh'
        } else if(typeof this.options.maxHeight === 'number'){
            this.maxHeight = this.options.maxHeight + 'px'
        } else if (typeof this.options.maxHeight === 'string') {
            if(this.options.maxHeight.slice(-2) === 'px' || this.options.maxHeight.slice(-1) === '%' || this.options.maxHeight.slice(-2) === 'vw') {
                this.maxHeight = this.options.maxHeight
            } else {
                throw new Error('maxHeight is not the correct unit. Choose between px, % or vw')
                return
            }
        } else {
            throw new Error('maxHeight must be a Number or String')
            return
        }

        //Checking for options.minWidth
        if(this.options.minWidth === undefined) {
            this.minWidth = '350px'
        } else if(typeof this.options.minWidth === 'number'){
            this.minWidth = this.options.minWidth + 'px'
        } else if (typeof this.options.minWidth === 'string') {
            if(this.options.minWidth.slice(-2) === 'px' || this.options.minWidth.slice(-1) === '%' || this.options.minWidth.slice(-2) === 'vw') {
                this.minWidth = this.options.minWidth
            } else {
                throw new Error('minWidth is not the correct unit. Choose between px, % or vw')
                return
            }
        } else {
            throw new Error('minWidth must be a Number or String')
            return
        }

        //Checking for options.minHeight
        if(this.options.minHeight === undefined) {
            this.minHeight = 'auto'
        } else if(typeof this.options.minHeight === 'number'){
            this.minHeight = this.options.minHeight + 'px'
        } else if (typeof this.options.minHeight === 'string') {
            if(this.options.minHeight.slice(-2) === 'px' || this.options.minHeight.slice(-1) === '%' || this.options.minHeight.slice(-2) === 'vw') {
                this.minHeight = this.options.minHeight
            } else {
                throw new Error('minHeight is not the correct unit. Choose between px, % or vw')
                return
            }
        } else {
            throw new Error('minHeight must be a Number or String')
            return
        }

        //Checking for options.padding
        if(this.options.padding === undefined) {
            this.padding = '30px'
        } else if(typeof this.options.padding === 'number'){
            this.padding = this.options.padding + 'px'
        } else if (typeof this.options.padding === 'string') {
            if(this.options.padding.slice(-2) === 'px' || this.options.padding.slice(-1) === '%' || this.options.padding.slice(-2) === 'vw') {
                this.padding = this.options.padding
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
        this.close.style.color = 'rgba(0,0,0,0.7)'
        this.close.style.fontSize = '33px'
        this.close.style.position = 'absolute'
        this.close.style.top = '5px'
        this.close.style.right = '12px'
        this.close.style.cursor = 'pointer'
        this.close.addEventListener('click', ()=>{
            this.closeModal()
        })


        this.modal.style.position = 'absolute'
        this.modal.style.display = 'none'
        this.modal.style.width = this.width
        this.modal.style.height = this.height
        this.modal.style.maxWidth = this.maxWidth
        this.modal.style.maxHeight = this.maxHeight
        this.modal.style.minWidth = this.minWidth
        this.modal.style.minHeight = this.minHeight
        this.modal.style.padding = this.padding
        this.modal.style.top = '50%'
        this.modal.style.left = '50%'
        this.modal.style.backgroundColor = '#fff'
        this.modal.style.borderRadius = '4px'
        
        this.modalBg.appendChild(this.modal)
        this.modal.appendChild(this.close)
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