var atomic_symbols = [ 'H', 'He', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Ne', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl',
'Ar', 'K', 'Ca', 'Sc', 'Ti', 'V', 'Cr', 'Mn', 'Fe', 'Co', 'Ni', 'Cu', 'Zn', 'Ga', 'Ge', 'As', 'Se', 'Br', 'Kr',
'Rb', 'Sr', 'Y', 'Zr', 'Nb', 'Mo', 'Tc', 'Ru', 'Rh', 'Pd', 'Ag', 'Cd', 'In', 'Sn', 'Sb', 'Te', 'I', 'Xe', 'Cs',
'Ba', 'La', 'Ce', 'Pr', 'Nd', 'Pm', 'Sm', 'Eu', 'Gd', 'Tb', 'Dy', 'Ho', 'Er', 'Tm', 'Yb', 'Lu', 'Hf', 'Ta', 'W',
'Re', 'Os', 'Ir', 'Pt', 'Au', 'Hg', 'Tl', 'Pb', 'Bi', 'Po', 'At', 'Rn', 'Fr', 'Ra', 'Ac', 'Th', 'Pa', 'U', 'Np',
'Pu', 'Am', 'Cm', 'Bk', 'Cf', 'Es', 'Fm', 'Md', 'No', 'Lr', 'Rf', 'Db', 'Sg', 'Bh', 'Hs', 'Mt', 'Ds', 'Rg', 'Cn',
'Nh', 'Fl', 'Mc', 'Lv', 'Ts', 'Og' ];

//add the event listener
document.getElementById("atomize").addEventListener("click", validateForm);

function validateForm() {
    var input, output;

    input = document.getElementById("userName").value;

    var len = input.length;

    //limit length of input and check for special characters
    if (!isNaN(input) || specialChars(input) == true || len >= 35) {
        output = "No numbers, special characters, and the name should be under 35 characters";
    } else {
       output = elementalName(input);
    }

     //final check for no symbols found
    if(output.length == 0){
        document.getElementById("elementize").innerHTML = "no symbols found";
    }else{
        document.getElementById("elementize").innerHTML = output;
    }   

}

function specialChars(input){
    var special = "!@#$%^&*()+=-[]\\\';,./{}|\":<>?";

    for (var i = 0; i < input.length; i++) {
        if (special.indexOf(input.charAt(i)) != -1) {
            return true;
        }else{
            return false;
        }
    }
}

//approximate spelling using names from periodic table
function elementalName(input){
    var count = 0;
    var results = "";

    var length = input.length;

    if(input.length <= 2){//special case to detect two character names
            input = input.charAt(0).toUpperCase() + input.slice(1);     
    };

    //check if string of two or less characters is already a symbol
    if(atomic_symbols.indexOf(input) > -1){
            results += input + " ";
    }else{//else begin parsing the string for symbols
            while(count < length){ //iterate through atomic symbols, bias goes to single character symbols first
                var tmp1 = input[count]; //use tmp variable to transform parts of string to potentially valid symbols
                tmp1 = tmp1.toUpperCase();
                if(atomic_symbols.indexOf(tmp1) > -1){
                    results += tmp1 + " ";
                }else{
                    var tmp2 = input[count].toUpperCase() + input[count+1];
                    if(atomic_symbols.indexOf(tmp2) > -1){
                        results += tmp2 + " ";
                        count++;//extra increment to prevent duplicate symbols
                    }       
                }
                count++;
            }
        };
    return results;
};