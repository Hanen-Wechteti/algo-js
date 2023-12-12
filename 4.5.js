function calcDistance (pointA, pointB){
    const x1 = pointA[0];
    const y1 = pointA[1];
    const x2 = pointB[0];
    const y2 = pointB[1];

    const pointA = [x1,y1];
    const pointB = [x2,y2];
    
    const distance = Math.sqrt(Math.pow(x2 -x1, 2) + Math.pow(y2-y1, 2));
    return distance. toFixed(2);
}

const pointA =[1,1];
const pointB=[2,2];
console.log(calcDistance(pointA, pointB));