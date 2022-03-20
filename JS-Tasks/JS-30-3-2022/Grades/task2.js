
var grade = 75;
switch (true) {
    case (grade >= 90 && grade <= 100):
        document.write("A")
        break;
    case (grade >= 80 && grade <= 89):
        document.write("B")
        break;
    case (grade >= 70 && grade <= 79):    
      document.write("C")
      break;
    case (grade >= 60 && grade <= 69):
        document.write("D")
        break;
    case (grade >= 50 && grade <= 59):
        document.write("E") 
        break;
    case (grade >= 0 && grade <= 49):
        document.write("Fall")
        break;         
    default:
        document.write("No Grade")
        break;
}


