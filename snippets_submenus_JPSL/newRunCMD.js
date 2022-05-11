define([
    "require",
    "base/js/namespace",
], function (requirejs, Jupyter) {

    function newRunCMD(){
        var newrunstr = 'fig$ = go.FigureWidget() # Create figure to show data.\n';
        newrunstr += 'newRun(fig$) # Initiate run setup.\n';
        newrunstr += 'fig$ # Display the live figure.';
        if (!Jupyter.PiDAQruncount){
            Jupyter.PiDAQruncount = 0;
        }
        Jupyter.PiDAQruncount+=1;
        var cmdstr = newrunstr.replaceAll('$',Jupyter.PiDAQruncount);
        return(alert(cmdstr));
    }

    return {
        'newRunCMD' : newRunCMD(),
        }
});
