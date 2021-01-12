export function getDisplayMode(){
    /*Description: returns whether or not components should use lightmode or darkmode
                   based on window.MichaelNaguibSiteData.displayMode = "auto","light","dark"
                   when set to auto this function will automatically determine the mode based on the timezone of the
                   user
    return: "light" if lightmode "dark if darkmode"
    */
    if (true  || window.MichaelNaguibSiteData.displayMode==="auto"){
        var hour = (new Date()).getHours()
        var useDarkmode =   hour >= 18 || hour<= 7;//6pm  sunset ish ... 7am may vary depending on time during year
        return useDarkmode?"dark":"light"
    }
    else{
        return window.MichaelNaguibSiteData.displayMode
    }
}