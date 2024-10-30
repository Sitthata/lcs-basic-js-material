const studentScore = [60.4, 25.7, 77.0, 90.2, 96.0, 85.5];

const totalScore = () => {
    let total = 0;
    for (let i = studentScore; i < studentScore.length; i++) {
        const currentScore = studentScore[i];
        total += currentScore
    }
    // for(let score of studentScore) {
    //     total += score;
    // }
    // studentScore.forEach(score => {
    //     total += score;
    // });
    return total;
}

console.log(totalScore)