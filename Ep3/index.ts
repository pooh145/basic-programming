function st(fname: string, sname: string){
    if(fname === 'nan' && sname === 'pleum'){
        console.log('เริ่มสอน')
    }else{
        console.log('ยังไม่สอน')
  }

}
st('nan','pleum')


//
function gg(fname: string, sname: string, tname: string) {
      if(!(fname === 'nan'|| sname === 'plem') && tname === 'yo'){
           console.log('เริ่มสอน')
      } else {
        console.log('ยังไม่ได้สอน')
 }
 
}
  gg ('nan','plem','yo')






//
  function fgt(gender: string , height:number, weight:number){
       if (gender === 'ชาย' && height > 170 ||  (weight> 50 && weight <= 110)) {
        console.log('จับใบดำใบแดง')
    } else {
        console.log('ไม่เข้าเกณฑ์')
    }
  }

  fgt("ชาย", 175,56)