# ModalBox.js - Easy Modal Creation

<p align="center">
  <img width=200 src="https://i.ibb.co/nP1HrmZ/modalbox.png">
</p>

The reason this library was created is to make the creation of modal boxes easier. ModalBox.js allows user to simply create a modal and customize it.

**If you have / find any issues or bugs, please leave them behind** [here](https://github.com/DaanKorver/ModalBox.js/issues)

## Setup

ModalBox.js is easy to install.

You can download the file from github, or use the CDN URL(Not available, yet!)

**CDN Install**

```javascript
<script src="https://www.cdn.daankorver.com/libs/modalbox.min.js"></script>
```

**Download**

```javascript
<script src="modalbox.min.js"></script>
```

## Function

This library consist of 1 user friendly function. You can dig into the library if you want to see more...

### ModalBox.create();

```javascript
ModalBox.create(element, properties)
```

### - Element
the ``` element ``` is a required parameter expects a string.
The element is used for finding the div with contents.

### - Properties
the ``` properties ``` is a additional parameter expects a object.
The properties can customized.

Width: Requires an Int that is set to px  
Height: Requires an Int that is set to px  
Close: Requires a Boolean for an additonal close button
Animation: Requires one of the following animations:
* Fade
* Slide Up
* Slide Down
* Slide Left
* Slide Right   
default: none


### Usage

```javascript
    ModalBox.create(".modalContentDiv1", {
        width: 800,
        height: 700,
        close: false,
        animation: "slide-up"
    });
```

## Credits
* Daan Korver


Ta-daaa!