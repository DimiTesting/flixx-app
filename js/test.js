function trim(string) {
    let result = []
    let finalResult = ""
    for (let i=string.length-1; i>=0; i--) {
        if (string[i]==="/") {
            break
        }
        result.push(string[i])
    }
    finalResult += "/" + result.reverse().join("")
    console.log(finalResult)
    return finalResult
}

trim("file:///C:/Users/amankeldi.kurban/Desktop/Coding/JavaScript/Concepts/10-fetch-and-async-await/flixx-app-project/01-theme-overview-prep/flixx-app/movie-details.html")