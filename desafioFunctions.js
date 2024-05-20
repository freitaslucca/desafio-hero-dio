let calculate = calculateGeral(50, 19);


function calculateGeral(vitorias, derrotas) {
    let calculate = vitorias - derrotas;
    return calculate;
}

let nivel = calcularNivel(calculate);

function calcularNivel(nivelHeroi) {
    if (nivelHeroi < 10) {
        return "Ferro";
    } else if (nivelHeroi >= 10 && nivelHeroi < 20) {
        return "Bronze";
    } else if (nivelHeroi >= 20 && nivelHeroi < 50) {
        return "Prata";
    } else if (nivelHeroi >= 50 && nivelHeroi < 80) {
        return "Ouro";
    } else if (nivelHeroi >= 80 && nivelHeroi < 90) {
        return "Diamante";
    } else if (nivelHeroi >= 90 && nivelHeroi < 100) {
        return "Lendário";
    } else if (nivelHeroi >= 100) {
        return "Imortal";
    }
}

console.log(`O herói tem de saldo ${calculate} vitórias e está no nível ${nivel}`);
