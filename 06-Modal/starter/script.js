'use strict';

const nls = document.querySelectorAll('.show-modal');
console.debug(nls);

Array.from(nls).map((a, i) => console.debug(a.textContent));
