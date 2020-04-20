function solveExpression(exp) {
    if (splitAndIndex(exp) == undefined) {
        return -1;
    } else {
        return splitAndIndex(exp);
    }
}

function splitAndIndex(exp) {
    var subStr = exp.split("=", 2);
    var lhs = subStr[0].split("");
    var rhs = subStr[1].split("");
    var indexOfValueInLhs = [];
    var indexOfOparatorInLhs = [];
    var indexOfWhatInLhs = [];
    lhs.map(function (value, i) {
        if (value == "?") {
            return indexOfWhatInLhs.push(i);
        }
        if (value == "+" || value == "-" || value == "*") {
            return indexOfOparatorInLhs.push(i);
        }
        return indexOfValueInLhs.push(value);
    });
    var indexOfWhatInRhs = [];
    rhs.map(function (value, i) {
        if (value == "?") {
            return indexOfWhatInRhs.push(i);
        }
    });

    return LhsSum(lhs, indexOfWhatInLhs, indexOfOparatorInLhs, rhs, indexOfWhatInRhs, exp);


}

function LhsSum(larray, indexArray, indexOfOparatorInLhs, rhs, indexOfWhatInRhs, exp) {
    var c = [];
    var i = 0;
    if (larray[0] == "?" && larray.length == 1) {
        i = 0;
    }
    if (larray[0] == "?" && larray.length > 1) {
        i = 1;
    }
    if (larray[0] == "?" && rhs[0] == "?" && rhs.length<2) {
        i = 0;
    }
    if(larray[0] == "?" && rhs[0] == "?" & rhs.length>1) {
        i = 1;
    }else{
        i=0;
    }
    for (i = i; i < 10; i++) {
        for (var j = 0; j < indexArray.length; j++) {
            larray[indexArray[j]] = i;
        }
        if (indexOfOparatorInLhs.length == 1) {
            var arrstr_0 = larray.join("").substring(0, indexOfOparatorInLhs[0]);
            var arrstr_1 = larray.join("").substring(indexOfOparatorInLhs[0] + 1);
            var rhsarrstr = Number(RightArray(rhs, indexOfWhatInRhs, i));
            if (larray[indexOfOparatorInLhs[0]] == "+") {
                var sum = Number(arrstr_0) + Number(arrstr_1);
            }
            if (larray[indexOfOparatorInLhs[0]] == "-") {
                var sum = Number(arrstr_0) - Number(arrstr_1);
            }
            if (larray[indexOfOparatorInLhs[0]] == "*") {
                var sum = Number(arrstr_0) * Number(arrstr_1);

            }
            if (sum == rhsarrstr) {
                c.push(i);
            }

        } else if (indexOfOparatorInLhs.length >= 2) {
            if (larray[0] == "+" || larray[0] == "-") {
                var arrstr_0 = larray.join("").substring(0, indexOfOparatorInLhs[1]);
                var arrstr_1 = larray.join("").substring(indexOfOparatorInLhs[1] + 1);
                var rhsarrstr = Number(RightArray(rhs, indexOfWhatInRhs, i));
                if (larray[indexOfOparatorInLhs[1]] == "+") {
                    var sum = Number(arrstr_0) + Number(arrstr_1);
                }
                if (larray[indexOfOparatorInLhs[1]] == "-") {
                    var sum = Number(arrstr_0) - Number(arrstr_1);
                }
                if (larray[indexOfOparatorInLhs[1]] == "*") {
                    var sum = Number(arrstr_0) * Number(arrstr_1);
                }
                if (sum == rhsarrstr) {
                    c.push(i);
                }

            } else {
                var arrstr_0 = larray.join("").substring(0, indexOfOparatorInLhs[0]);
                var arrstr_1 = larray.join("").substring(indexOfOparatorInLhs[0] + 1);
                var rhsarrstr = Number(RightArray(rhs, indexOfWhatInRhs, i));
                if (larray[indexOfOparatorInLhs[0]] == "+") {
                    var sum = Number(arrstr_0) + Number(arrstr_1);
                }
                if (larray[indexOfOparatorInLhs[0]] == "-") {
                    var sum = Number(arrstr_0) - Number(arrstr_1);
                }
                if (larray[indexOfOparatorInLhs[0]] == "*") {
                    var sum = Number(arrstr_0) * Number(arrstr_1);
                }
                if (sum == rhsarrstr) {
                    c.push(i);
                }
            }

        }

    }
    for (var k = 0; k < c.length; k++) {
        if (exp.includes(c[k].toString()) == false) {
            return c[k];
        }
    }
}

function RightArray(rarray, rindexArray, retindex) {
    for (var i = 0; i < 10; i++) {
        for (var j = 0; j < rindexArray.length; j++) {
            rarray[rindexArray[j]] = i;
        }
        if (i == retindex) {
            return rarray.join("");
        }
    }
}