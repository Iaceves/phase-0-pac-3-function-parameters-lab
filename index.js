function introduction(name){
    return (`Hi, my name is ${name}.`)
}

function introductionWithLanguage(name, language){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}

function introductionWithLanguageOptional(name = "", language = "Javasc ript"){
    return (`Hi, my name is ${name} and I am learning to program in ${language}.`)
}
