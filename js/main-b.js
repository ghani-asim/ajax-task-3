'use strict';
// Create function 'showImages' which
// loads images.json which has links to images as an array.

const ul = document.querySelector('ul');

const showImages = async (code) => {
  let html = '';
  const array = await code;
  array.forEach((image) => {
    html +=
        `<li>
        <figure>
          <a href="img/original/${image.mediaUrl}"><img src="img/thumbs/${image.mediaThumb}"></a>
          <figcaption>
              <h3>${image.mediaTitle}</h3>
          </figcaption>
        </figure>
      </li>`;
  });

  ul.innerHTML = html;
};

const getFetchData = async (url) => {
    const response = await fetch(url);
    const result = await response.json();
    return result;
 };

 try {
    const code = getFetchData('images.json');
    showImages(code);
 } catch(e) {
    console.error(e);
 }