
// 1
function litres(time) {
    return Math.floor(time * 0.5); //math floor imitom rom is mocemuli ricxvis damrgvalebul versias gvadzlevs, time(კონკრეტული რიცხვი) გამრავლდება 0.5 ზე და მიღებული შედეგი იქნება დალეული წყლის რაოდენობა
  }
  
  // შედეგები
  console.log(litres(3));    // შედეგი: 1
  console.log(litres(6.7));  // შედეგი: 3
  console.log(litres(11.8)); // შედეგი: 5

// 2
function paperwork(n, m) {
    if(n < 0 || m < 0) { //tu n > 0 ze an m > 0 - ze gamova 0, sxva shemtxvevashi ki else.
      return 0
    }
    else {
      return n * m
    }
  }

//3
function grow(x) {
  let result = 1; //ამ ცვლადს ვქმნი იმისათვის რომ მასივებზე გავამრავლო
  for (let i = 0; i < x.length; i++) {
      result *= x[i];
  }
  return result;
}

