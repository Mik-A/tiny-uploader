# tiny-uploader

Customizable React component/button for uploading text files. 

Works with most common text documents such as .txt and .md

## Installation

`npm i @mik-a/tiny-uploader --save`

## Usage

```jsx
import UploadeTextFile from '@mik-a/tiny-uploader'

<UploadTextFile fileContentHandler={fileContentHandler} fileInfo={fileInfoHandler} label='Upload' className='my-custom-class' />

// Example of functions

  const fileContentHandler = e => {
    console.log('text content: ', e)
  }

  const fileInfoHandler = e => {
    console.log('file info', e)
    // name, lastModified, webkitRelativePath , size , type 
  }

```
## Props

`fileContentHandler` // function()

`FileInfo` // function()

### Optional props

`label` // 'string' - default 'Upload text'

`className` // 'string' - your custom CSS class

## Default CSS
```css
.tiny-uploader {
	border: 1px solid;
	padding: 0.8rem 1.8rem;
	border-radius: 1.8rem;
}

```

## Author
- **Mika Välimäki** - [GitHub profile](https://github.com/Mik-A)
- **Phone** - [+358 50 4088 201](+358504088201)
- **Mika Välimäki** - [LinkedIn](https://www.linkedin.com/in/mika-v%C3%A4lim%C3%A4ki/)

- **GitHub repo** - [tiny-uploader](https://github.com/Mik-A/tiny-uploader)

