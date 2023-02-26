
const MicroOptions = ['pedra', 'papel', 'tesoura']
var scoreMicro = 0;
var scoreUser = 0;

function SearchConfirmPlay() {

    var confirmPlay = confirm('Voce gostaria de jogar?');

    if (confirmPlay === true) {

    } else {

        alert('Obrigado por visitar a página');
    }

}

function SearchConfirmPlay() {

    var confirmPlay = confirm('Voce gostaria de jogar?');

    if (confirmPlay === true) {

        while (scoreMicro < 2 && scoreUser < 2) {
            StartJokempo();
        }

        if (scoreMicro == 2) {
            alert(`Que pena, você perdeu a partida! - Placar Final - Você: ${scoreUser} - Oponente: ${scoreMicro}`)
            scoreMicro = 0;
            scoreUser = 0;


        } else if (scoreUser == 2) {
            alert(`Parabéns, você ganhou! - Placar Final - Você: ${scoreUser} - Oponente: ${scoreMicro}`)
            scoreMicro = 0;
            scoreUser = 0;
        }

    } else {

        alert('Obrigado por visitar a página');
    }

}

function StartJokempo() {

    let UserTurn = prompt('Qual é a sua jogada? PEDRA, PAPEL ou TESOURA?)').toLowerCase();
    let MicroTurn = MicroOptions[Math.floor(Math.random() * MicroOptions.length)];
    console.log(UserTurn);
    console.log(MicroTurn);
    console.log(scoreMicro);
    console.log(scoreUser);

    switch (UserTurn) {
        case "pedra":
            if (MicroTurn == "pedra") {
                alert(`Opa, ninguém ganhou! - Você escolheu ${UserTurn.toUpperCase()} e seu oponente ${MicroTurn.toUpperCase()}`);
                break;
            } else if (MicroTurn == "tesoura") {
                alert(`Parabéns, você ganhou! - Você escolheu ${UserTurn.toUpperCase()} e seu oponente ${MicroTurn.toUpperCase()}`);
                scoreUser++;
                break;
            } else if (MicroTurn == "papel") {
                alert(`Que pena, você perdeu! - Você escolheu ${UserTurn.toUpperCase()} e seu oponente ${MicroTurn.toUpperCase()}`);
                scoreMicro++;
                break;
            }
        case "papel":
            if (MicroTurn == "pedra") {
                alert(`Parabéns, você ganhou! - Você escolheu ${UserTurn.toUpperCase()} e seu oponente ${MicroTurn.toUpperCase()}`);
                scoreUser++;
                break;
            } else if (MicroTurn == "tesoura") {
                alert(`Que pena, você perdeu! - Você escolheu ${UserTurn.toUpperCase()} e seu oponente ${MicroTurn.toUpperCase()}`);
                scoreMicro++;
                break;
            } else if (MicroTurn == "papel") {
                alert(`Opa, ninguém ganhou! - Você escolheu ${UserTurn.toUpperCase()} e seu oponente ${MicroTurn.toUpperCase()}`);
                break;
            }
        case "tesoura":
            if (MicroTurn == "pedra") {
                alert(`Que pena, você perdeu! - Você escolheu ${UserTurn.toUpperCase()} e seu oponente ${MicroTurn.toUpperCase()}`);
                scoreMicro++;
                break;
            } else if (MicroTurn == "tesoura") {
                alert(`Opa, ninguém ganhou! - Você escolheu ${UserTurn.toUpperCase()} e seu oponente ${MicroTurn.toUpperCase()}`);
                break;
            } else if (MicroTurn == "papel") {
                alert(`Parabéns, você ganhou! - Você escolheu ${UserTurn.toUpperCase()} e seu oponente ${MicroTurn.toUpperCase()}`);
                scoreUser++;
                break;
            }
        default:
            break;
    }
}

