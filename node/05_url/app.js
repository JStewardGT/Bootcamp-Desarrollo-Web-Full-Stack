const miurl = new URL('https://ejemplo.org/cursos/programacion?ordernar=visitas&listas=1')

console.log(miurl);

console.log(miurl.hostname);
console.log(miurl.pathname);
console.log(miurl.protocol);

console.log(miurl.search);
console.log(typeof miurl.searchParams);

console.log(miurl.searchParams.get('ordernar'));
console.log(miurl.searchParams.get('listas'));

