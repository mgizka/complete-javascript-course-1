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

/*
createImage('./img/img-1.jpg')
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
        e => console.log(`Error during loading the file: ${e.message}  ${e.stack}`)
    )
    .finally(
        () => { images.style.display = 'none' }
    )
*/
function wait(timeout) {
    return new Promise((resolve) => setTimeout(
        resolve,
        timeout)
    )
}

async function loadImage(url,waittime){
    const res = await createImage(url)
    if (res) { 
        images.replaceChildren(res)
        await wait(waittime)
    }
} 

async function loadNPause() {
    await loadImage('./img/img-1.jpg', 2000)
    await loadImage('./img/img-2.jpg', 2000)
    await loadImage('./img/img-3.jpg', 2000)
}

//loadNPause()

async function loadArrayPause(arr,timeout){
    for(let i=0; i<arr.length ; i++){
        await loadImage(arr[i],timeout)
    }
}

loadArrayPause(['./img/img-1.jpg', './img/img-2.jpg', './img/img-3.jpg'],2000)


const promise = new Promise( function(resolve, reject) {
    return ('return from promise')
}).then((result) => console.log(result))

console.log(promise)


Promise.all(
[ 
    new Promise( (resolve) => resolve('Promise 1') ),
    new Promise( (resolve, reject) => resolve( 'Promise 2' ) ),
    new Promise( (resolve) => resolve('Promise 3') )
]
).then((arr)=>console.log(arr))
.catch(e=>console.error(e))

Promise.any(
    [
       new Promise( (resolve) => reject('Promise 1') ),
       new Promise( (resolve, reject) => reject( new Error('Promise 2') ) ),
       new Promise( (resolve) => resolve('Promise 3') )
    ]
    ).then((arr)=>console.log(arr))
    .catch(e=>console.error(e))