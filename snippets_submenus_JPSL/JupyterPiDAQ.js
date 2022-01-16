define([
    "require",
], function (require) {
    return {
        'name' : 'JupyterPiDAQ',
        'sub-menu' : [
            {
                'name' : 'Initialize JupyterPiDAQ',
                'snippet' : [
                    'from jupterpidaq.DAQInstance import *',
                ],
            },
            {
                'name' : 'Documentation',
                'external-link' : 'https://github.com/JupyterPhysSciLab/JupyterPiDAQ/blob/master/Documentation/User%20Guide.md',
            },
        ]
    }
}
);
