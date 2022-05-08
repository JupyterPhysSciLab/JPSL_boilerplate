define([
    "require",
], function (require) {
    function insertnewRun(){
        var execstr="len(runs)"
        JPSLUtils.executePython(execstr).then(result => newRunCMD(result));
    }
    function newRunCMD(listlen){
        var newrunstr = 'fig$ = go.FigureWidget() # Create figure to show data.\n';
        newrunstr += 'newRun(fig$) # Initiate run setup.\n';
        newrunstr += 'fig$ # Display the live figure.';
        var cmdstr = newrunstr.replaceAll('$',listlen);
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
                    insertnewRun(),
                ],
            },

        ]
    }
});
