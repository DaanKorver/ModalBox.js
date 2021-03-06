# ModalBox.js - Easy Modal Creation

<p align="center">
  <img width=200 src="https://i.ibb.co/nP1HrmZ/modalbox.png">
</p>

The reason this library was created is to make the creation of modal boxes easier. ModalBox.js allows user to simply create a modal and customize it.

**If you have / find any issues or bugs, please leave them behind** [here](https://github.com/DaanKorver/ModalBox.js/issues)  
**You can also leave features you want to see there**

## Setup

ModalBox.js is easy to install.

You can download the file from github, or use the CDN URL  

**CDN Install**

```javascript
<script src="https://daankorver.com/modalbox/lib/modalbox.min.js"></script>
```

**Download**

```javascript
<script src="modalbox.min.js"></script>
```

## Usage

This library consist of a couple of functions. First of all you need to make a new instance of a ModalBox. Modalbox has 1 required argument which is the ```template``` argument. the template argument contains your HTML in your modal.   
for example:

```javascript
const modal = new ModalBox({
  template: 
  `
  <div>
    <h1>Hello World</h1>
  </div>
  `
})
```

### - Options
the ``` options ``` parameter is a required object that contains some options. one of the required options is ```template```.

The other options are

* Width - Requires a number or string (px, percantage, vw)
* Minwidth - Requires a number or string (px, percantage, vw)
* Maxwidth - Requires a number or string (px, percantage, vw)
* Height - Requires a number or string (px, percantage, vw)
* minHeight - Requires a number or string (px, percantage, vw)
* Padding - Requires a number or string (px, percantage, vw)
* maxHeight - Requires a number or string (px, percantage, vw)
* Animation - Requires a String

Currently there are ```2``` types of animations
 * fade
 * slide

 I hope to add more in the future.

 Here is an example of a fully option ModalBox
 ```javascript
const modal = new ModalBox({
  width: "60%",
  maxWidth: 700,
  minWidth: 350,
  height: "50vh"
  maxHeight: 500
  minHeight: 300
  template: 
  `
  <div>
    <h1>Hello World</h1>
  </div>
  `,
  animation: 'slide'
})
```


 Congrats, you just created your first ModalBox!!


 ### Open your modal

 Ofcourse you need to have the ability to open your modal. At this point nothing is showing up.

 To open your modal you can use the following function
```javascript
//Defined modal
const modal = new ModalBox({
  template: 
  `
  <div>
    <h1>Hello World</h1>
  </div>
  `
})

//Opening modal
modal.openModal();
```

You can bind this function to an EventListener or whatever.

 ### Closing your modal

 Ofcourse you also need to have the ability to close your modal. There is a default close button at the top right of the modal and you can also close it by clicking on the modal background (black transparent background). But maybe you want to create a more creative way to close your modal.

 To close your modal you can use the following function
```javascript
//Defined modal
const modal = new ModalBox({
  template: 
  `
  <div>
    <h1>Hello World</h1>
  </div>
  `
})

//Closing modal
modal.closeModal();
```

You can bind this function to an EventListener or whatever.

### Additional Styling

Maybe you want to have some more freedom of what the modal components look like. Thats why the library has included some classes that you can style.

* Modal background : ```.mb-modalBg```
* Modal : ```.mb-modal```
* Close button : ```.mb-close```

Style it as you want

## Credits
* Daan Korver


Ta-daaa!