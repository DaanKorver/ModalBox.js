let ModalBox = {};

let defaultWidth = 600;
let defaultHeight = 400;
let defaultClose = false;
let defaultAnimation = "none";
let contents = [];
let index = 0;


ModalBox.removeFromBody = function () {
    let DOMDivs = document.querySelectorAll(".modalC");

    for (let i = 0; i < DOMDivs.length; i++) {
        DOMDivs[i].parentElement.removeChild(DOMDivs[i]);
        contents.push(DOMDivs[i]);
    }
}

ModalBox.removeFromBody();

ModalBox.removeModal = function (e) {
    if (e.currentTarget.classList.contains("modalbox-bg")) {
        e.currentTarget.parentElement.removeChild(e.currentTarget);
        index--;
    }
}

ModalBox.appendContents = function (modalContent) {
    contents[index].style.width = "100%";
    contents[index].style.height = "100%";
    modalContent.appendChild(contents[index]);
    index++;
}

ModalBox.makeModal = function (styleObject) {
    let modalDiv = document.createElement("DIV");
    modalDiv.style.width = "100vw";
    modalDiv.style.height = "100vh";
    modalDiv.style.backgroundColor = "rgba(0,0,0,0.6)";
    modalDiv.style.position = "fixed";
    modalDiv.style.top = "0";
    modalDiv.style.left = "0";
    modalDiv.style.right = "0";
    modalDiv.style.bottom = "0";
    modalDiv.style.zIndex = "999";
    modalDiv.style.display = "flex";
    modalDiv.style.justifyContent = "center";
    modalDiv.style.alignItems = "center";
    modalDiv.classList.add("modalbox-bg");
    modalDiv.addEventListener('click', function (e) {
        ModalBox.removeModal(e);
    });

    let modalContent = document.createElement("DIV");

    modalContent.style.width = styleObject.width + "px";
    modalContent.style.height = styleObject.height + "px";
    modalContent.style.backgroundColor = "#fff";
    modalContent.style.position = "relative";

    switch (styleObject.animation) {
        case "scale":
            modalContent.style.transform = "scale(0)";
            modalContent.style.transition = "transform .6s";
            setTimeout(function () {
                modalContent.style.transform = "scale(1)";
            }, 50)
            break;

        case "slide-left":
            modalContent.style.transform = "translateX(-100px)";
            modalContent.style.opacity = "0";
            modalContent.style.transition = "transform .6s, opacity .6s";
            setTimeout(function () {
                modalContent.style.transform = "translateX(0)";
                modalContent.style.opacity = "1";
            }, 50)
            break;

        case "slide-right":
            modalContent.style.transform = "translateX(100px)";
            modalContent.style.opacity = "0";
            modalContent.style.transition = "transform .6s, opacity .6s";
            setTimeout(function () {
                modalContent.style.transform = "translateX(0)";
                modalContent.style.opacity = "1";
            }, 50)
            break;

        case "slide-up":
            modalContent.style.transform = "translateY(100px)";
            modalContent.style.opacity = "0";
            modalContent.style.transition = "transform .6s, opacity .6s";
            setTimeout(function () {
                modalContent.style.transform = "translateY(0)";
                modalContent.style.opacity = "1";
            }, 50)
            break;

        case "slide-down":
            modalContent.style.transform = "translateY(-100px)";
            modalContent.style.opacity = "0";
            modalContent.style.transition = "transform .6s, opacity .6s";
            setTimeout(function () {
                modalContent.style.transform = "translateY(0)";
                modalContent.style.opacity = "1";
            }, 50)
            break;

        case "fade":
            modalContent.style.opacity = "0";
            modalContent.style.transition = "opacity .6s";
            setTimeout(function () {
                modalContent.style.opacity = "1";
            }, 50)
            break;

        case "none":
            break;
        default:
            console.error("please give a valid animation");
    }

    if (styleObject.close) {
        let closeBtn = document.createElement("SPAN");
        closeBtn.innerHTML = "&times;";
        closeBtn.style.color = "#999";
        closeBtn.style.position = "absolute";
        closeBtn.style.top = "-1%";
        closeBtn.style.right = "1%";
        closeBtn.style.fontSize = "3vw";
        closeBtn.classList.add("modalbox-close");
        modalContent.appendChild(closeBtn);
    }

    this.appendContents(modalContent);

    modalDiv.appendChild(modalContent);
    document.body.appendChild(modalDiv);
}

//Create Function
ModalBox.create = function (contentDiv, styleObject) {
    //Checking Parameters
    if (typeof contentDiv === 'string' && document.querySelectorAll(contentDiv) !== null && contentDiv.includes(".modalC")) {
        let contentDivEl = document.querySelectorAll(contentDiv);


        if (typeof styleObject === 'object') {
            //CHECKING OBJECT 

            //Width
            if (styleObject.hasOwnProperty('width')) {
                if (typeof styleObject.width == 'number') {
                    styleObject.width = styleObject.width;
                } else {
                    console.error(styleObject.width + ' ' + 'is not a interger');
                }
            } else {
                styleObject.width = defaultWidth;
            }

            //Height
            if (styleObject.hasOwnProperty('height')) {
                if (typeof styleObject.height == 'number') {
                    styleObject.height = styleObject.height;
                } else {
                    console.error(styleObject.height + ' ' + 'is not a interger');
                }
            } else {
                styleObject.height = defaultHeight;
            }

            //Close
            if (styleObject.hasOwnProperty('close')) {
                if (typeof styleObject.close == 'boolean') {
                    styleObject.close = styleObject.close;
                } else {
                    console.error(styleObject.close + ' ' + 'is not a boolean');
                }
            } else {
                styleObject.close = defaultClose;
            }

            //Animation
            if (styleObject.hasOwnProperty('animation')) {
                if (typeof styleObject.animation == 'string') {
                    styleObject.animation = styleObject.animation;
                } else {
                    console.error(styleObject.animation + ' ' + 'is not a valid string');
                }
            } else {
                styleObject.animation = defaultAnimation;
            }
            this.makeModal(styleObject);


            //END OF CHECKING OBJECT
        } else {
            styleObject.width = defaultWidth;
            styleObject.heigth = defaultHeight;
            styleObject.close = defaultClose;
            styleObject.animation = defaultAnimation;
            this.makeModal(styleObject);
        }
    } else {
        console.error("The contentDiv is not defined, not valid, or couldn't be found in the DOM");
    }

}