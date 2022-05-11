define([
    "require",
    "base/js/namespace",
    "./newRunCMD",
], function (requirejs, Jupyter, newRunCMD) {

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
                'live-snippet' : [
                    'newRunCMD.newRunCMD()',
                ],
            },

        ],
    }
});
