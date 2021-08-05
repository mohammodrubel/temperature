//celsius to Fahrenheit Temperature 


    function temperature(number){
        var celsius = number * 9/5+ 32
        return celsius
    }
    var result =temperature(50)
    console.log(result +'\xB0'+ ' F')

// Fahrenheit to Celsius Temperature


    function temperature1 (number){
        var fahrenheit= (number -32) * 5/9
        return fahrenheit
    }
    var result2 = temperature1(40)
    console.log(result2 + '\xB0' +'C')
