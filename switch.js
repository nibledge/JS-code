var vegtype = prompt('Haa bahi Konsi Sabzi chahiye?')
switch (vegtype) {
    case 'Bindi':
        document.write('Bindi 100 rupy kilo')
        break;
    case 'Bangan':
        document.write('Bangan 30 rupy kilo')
        break;
    case 'Kado':
        document.write('Kado 40 rupy kilo')
    case 'Karela':
        document.write('Karela 200 rupy kilo')
        break;
    default:
        console.log(` ${vegtype} ajj khatam hogaya`);
} 
console.log('Or kuch')
