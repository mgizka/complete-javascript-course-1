'use strict'


async function whereAmI(lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then((r) => {

            if (!r.ok)
                throw new Error(`Cannot find data at this location ${r.status}`)

            return r.json()
        })
        .then(({ city, country }) => {

            if (!city)
                throw new Error(`Cannot find data at this location`)

            console.log(city, country)
        })
        .catch((e) => {
            console.error(e);
        })
}
const res = whereAmI(52.508, 32.381);


function createImage(url) {
    return new Promise(function (resolve, reject) {
        console.log('fetching image ' + url)
        let img = new Image()

        img.addEventListener('load', resolve(img))
        img.addEventListener('error', reject(img))

        img.src = url;
    })
}


let images = document.querySelector('.images')

createImage('https://elingwista.com/wp-content/uploads/2021/08/iStock-1070519460-1024x569.jpg')
    .then(
        (result) => {
            images.replaceChildren(result)
            return wait(2000)
        }
    )
    .then(() => createImage('https://image.shutterstock.com/z/stock-photo-liquid-characters-d-render-1061737175.jpg')
    ).then(
        (result) => {
            images.replaceChildren(result)
            return wait(2000)
        }
    )
    .catch(
        e => console.log(e.message, e.stack)
    )
    .finally(
        () => { images.style.display = 'none' }
    )

function wait(timeout) {
    return new Promise((resolve) => setTimeout(
        resolve,
        timeout)
    )
}

