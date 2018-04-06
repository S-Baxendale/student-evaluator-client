
// First sort evaluations by Date
// Filter students by last evaluation and assign to each color array.

const greenEvaluations = []
const yellowEvaluations = []
const redEvaluations = []

const arrays = [greenEvaluations, yellowEvaluations, redEvaluations]

const weight = [0.19, 0.28, 0.53]


 // If <= 19 select arrays[0]
 // if > 19 <= 28 select arrays[1]
 // if >= 52 slect arrays[2]
