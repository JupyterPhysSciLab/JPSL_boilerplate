define([
    "require",
    "base/js/namespace",
], function (require, Jupyter) {

    function newRunCMD(){
        var newrunstr = 'fig$ = go.FigureWidget() # Create figure to show data.\n';
        newrunstr += 'newRun(fig$) # Initiate run setup.\n';
        newrunstr += 'fig$ # Display the live figure.';
        if (!Jupyter.PiDAQruncount){
            Jupyter.PiDAQruncount = 0;
        }
        Jupyter.PiDAQruncount+=1;
        var cmdstr = newrunstr.replaceAll('$',Jupyter.PiDAQruncount);
        return(cmdstr);
    }

    return {
        'name' : 'JupyterPiDAQ',
        'sub-menu' : [
            {
                'name' : 'Initialize JupyterPiDAQ',
                'snippet' : [
                    'from jupyterpidaq.DAQinstance import *',
                ],
            },
            {
                'name' : 'Documentation',
                'external-link' : 'https://jupyterphysscilab.github.io/JupyterPiDAQ/',
            },
            {
                'name' : 'New Run',
                'snippet' : [
                    newRunCMD(),
                ],
            },

        ],
    }
});
