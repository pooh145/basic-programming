function grade(homework:number,midterm:number,final:number){
    
    let score:number=homework+midterm+final

if(score<50){
    return 'เกรดF'
} else if(score<60){
    return 'เกรดD'
} else if(score<70){
    return 'เกรดC'
} else if(score<80){
     return'เกรดB'
}
  else (score>=80)
     return'เกรดA'
}


console.log(grade(20,30,15))

