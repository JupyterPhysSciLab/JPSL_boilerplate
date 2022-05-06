define([
    "require",
], function (require) {

    var insertruncount = 0;
    var newrunstr = 'fig$ = go.FigureWidget() # Create figure to show data.\n';
    newrunstr += 'newRun(fig$) # Initiate run setup.\n';
    newrunstr += 'fig$ # Display the live figure.';

    function insertnewRun(){
        insertruncount += 1;
        var cmdstr = newrunstr.replaceAll('$',insertruncount);
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
